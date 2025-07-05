// Initialize Telegram WebApp
const tg = window.Telegram.WebApp;

// Main function
function init() {
    // Expand app to full view
    tg.expand();
    
    // Get user data
    const user = tg.initDataUnsafe.user;
    
    if (user) {
        // Update profile elements
        document.getElementById('name').textContent = 
            `${user.first_name} ${user.last_name || ''}`;
        
        document.getElementById('username').textContent = 
            user.username ? `@${user.username}` : '';
        
        document.getElementById('user-id').textContent = 
            `User ID: ${user.id}`;
        
        // Add avatar if exists
        if (user.photo_url) {
            const avatar = document.getElementById('avatar');
            avatar.innerHTML = `<img src="${user.photo_url}" alt="Profile Photo">`;
        }
    } else {
        document.getElementById('name').textContent = 'User data not available';
    }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', init);