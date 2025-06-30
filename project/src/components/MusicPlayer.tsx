import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => {
      setIsLoading(false);
      setHasError(false);
    };
    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      setIsPlaying(false);
    };
    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    // Add all event listeners
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    // Set initial volume
    audio.volume = volume;

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Audio play error:', error);
      setHasError(true);
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audio.muted = newMuted;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
        audio.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        audio.muted = false;
      }
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration && isFinite(duration) ? (currentTime / duration) * 100 : 0;

  if (hasError) {
    return (
      <div className="fixed bottom-4 left-4 z-50 glass-morphism rounded-xl p-3 max-w-[280px] sm:max-w-xs">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-full bg-red-500/20">
            <VolumeX className="w-4 h-4 text-red-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-red-400 truncate">
              Audio Unavailable
            </div>
            <div className="text-xs text-gray-400 truncate">
              Music file not found
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 glass-morphism rounded-xl p-3 w-[280px] sm:w-80 max-w-[calc(100vw-2rem)]">
      <audio
        ref={audioRef}
        src="/Until-I-Found-You.mp3"
        preload="metadata"
        loop
      />
      
      <div className="flex items-center space-x-3">
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="music-button p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-2 border-purple-300 pulse-ring"></div>
          )}
          {isLoading ? (
            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
        
        <div className="flex-1 min-w-0">
          <div className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
            Until I Found You
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
            Background Music
          </div>
          
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-xs text-gray-500 flex-shrink-0 w-8">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-100"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs text-gray-500 flex-shrink-0 w-8">
              {formatTime(duration)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 flex-shrink-0">
          <button
            onClick={toggleMute}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-12 sm:w-16 h-1 bg-gray-300 dark:bg-gray-600 rounded-full appearance-none cursor-pointer volume-slider"
          />
        </div>
      </div>
    </div>
  );
};