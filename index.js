document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");


    const validatePassword = () => {
        const password = passwordField.value.trim();
        const confirmPassword = confirmPasswordField.value.trim();

        if (password.length < 8 || (confirmPassword && password !== confirmPassword)) {
            passwordField.classList.add("invalid");
            confirmPasswordField.classList.add("invalid");
        } else {
            passwordField.classList.remove("invalid");
            confirmPasswordField.classList.remove("invalid");
        }
    };
    
    passwordField.addEventListener("input", validatePassword);
    confirmPasswordField.addEventListener("input", validatePassword);
});

