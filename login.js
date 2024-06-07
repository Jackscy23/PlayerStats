document.getElementById('loginForm').addEventListener('submit', login);

function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const pincode = document.getElementById('pincode').value;

    // Perform authentication
    if (username === "admin" && pincode === "admin123") {
        // Redirect to admin home page
        window.location.href = "admin_home.html";
    } else if (username === "player" && pincode === "player123") {
        // Redirect to player home page
        window.location.href = "player_home.html";
        // Hide the home page link
        document.getElementById('homeLink').style.display = "none";
    } else {
        document.getElementById('message').innerText = 'Invalid username or pincode';
    }
}
