document.addEventListener('DOMContentLoaded', () => {
    // Helper function to set error message
    const setError = (elementId, message) => {
        const errorElement = document.getElementById(elementId + 'Error');
        const inputElement = document.getElementById(elementId);
        
        if (errorElement && inputElement) {
            errorElement.innerText = message;
            errorElement.style.display = 'block';
            inputElement.classList.add('error');
        }
    };

    // Helper function to clear error message
    const clearError = (elementId) => {
        const errorElement = document.getElementById(elementId + 'Error');
        const inputElement = document.getElementById(elementId);
        
        if (errorElement && inputElement) {
            errorElement.innerText = '';
            errorElement.style.display = 'none';
            inputElement.classList.remove('error');
        }
    };

    // Email validation regex (simple)
    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            // Validate Email
            if (email === '') {
                setError('loginEmail', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email)) {
                setError('loginEmail', 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError('loginEmail');
            }

            // Validate Password
            if (password === '') {
                setError('loginPassword', 'Password is required');
                isValid = false;
            } else {
                clearError('loginPassword');
            }

            if (isValid) {
                // Submit form or simulate success
                alert('Login successful!');
                loginForm.reset();
            }
        });
    }

    // Registration Form Validation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const name = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value.trim();
            const confirmPassword = document.getElementById('regConfirmPassword').value.trim();

            // Validate Name
            if (name === '') {
                setError('regName', 'Name is required');
                isValid = false;
            } else {
                clearError('regName');
            }

            // Validate Email
            if (email === '') {
                setError('regEmail', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email)) {
                setError('regEmail', 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError('regEmail');
            }

            // Validate Password
            if (password === '') {
                setError('regPassword', 'Password is required');
                isValid = false;
            } else if (password.length < 6) {
                setError('regPassword', 'Password must be at least 6 characters');
                isValid = false;
            } else {
                clearError('regPassword');
            }

            // Validate Confirm Password
            if (confirmPassword === '') {
                setError('regConfirmPassword', 'Please confirm your password');
                isValid = false;
            } else if (password !== confirmPassword) {
                setError('regConfirmPassword', 'Passwords do not match');
                isValid = false;
            } else {
                clearError('regConfirmPassword');
            }

            if (isValid) {
                // Submit form or simulate success
                document.getElementById('regSuccessMessage').style.display = 'block';
                registerForm.reset();
                setTimeout(() => {
                    document.getElementById('regSuccessMessage').style.display = 'none';
                }, 3000);
            }
        });
    }
});
