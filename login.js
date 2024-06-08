document.getElementById('loginForm').addEventListener('submit', login);

function login(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('loginForm'));
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    // Simulate login process
    if (formDataObj.username === 'admin' && formDataObj.password === 'admin') {
        // Redirect to admin page
        window.location.href = 'admin_home.html';
    } else if (formDataObj.username === 'player' && formDataObj.password === 'player') {
        // Redirect to player page
        window.location.href = 'player_home.html';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password';
    }

    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
