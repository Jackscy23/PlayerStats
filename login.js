document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const pin = document.getElementById('pin').value;

    // Validate the username and PIN
    if (username === 'player' && pin === '1234') {
        // Redirect to the stats page after successful login
        window.location.href = 'stats.html';
    } else {
        // Show error message
        document.getElementById('message').innerText = 'Invalid username or PIN. Please try again.';
    }
});
