const form = document.getElementById('registration-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

form.addEventListener('submit', function (e) {
    let isValid = true;
    
    // Validate username (alphanumeric, at least 5 characters)
    const usernamePattern = /^[a-zA-Z0-9]{5,}$/;
    if (!usernamePattern.test(username.value)) {
        usernameError.textContent = 'Username must be alphanumeric and at least 5 characters long.';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Invalid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate password (at least 8 characters)
    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Validate confirm password
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if there are validation errors
    }
});
