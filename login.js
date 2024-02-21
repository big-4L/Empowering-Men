document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation: Check if username and password are not empty
        if (username === '' || password === '') {
            alert('Please fill in both username and password.');
        } else {
            // Redirect to the home page (replace 'home.html' with your actual home page)
            window.location.href = 'web/home.html';
            alert('Welcome to Empowering Men')
        }
    });
});
