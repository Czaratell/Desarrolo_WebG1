document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Detener el envío nativo
    let is_valid = true;
    const email = document.getElementById("loginEmail");
    const pass = document.getElementById("loginPass");
    const email_err = document.getElementById("emailError");
    const pass_err = document.getElementById("passwordError");
    // Limpiar estados visuales previos
    [email, pass].forEach((el) => el.classList.remove("error"));
    email_err.textContent = "";
    pass_err.textContent = "";
    // Validación de Correo mediante Expresión Regular
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_regex.test(email.value.trim()))
    {
        email.classList.add("error");
        email_err.textContent = "Ingrese un correo electrónico válido.";
        is_valid = false;
    }
    // Validación de Contraseña
    if (pass.value.length < 6)
    {
        pass.classList.add("error");
        pass_err.textContent = "La contraseña debe tener al menos 7 caracteres.";
        is_valid = false;
    }
    // Si la validación es exitosa, transformar la vista
    if (is_valid)
    {
        this.style.display = "none"; // Ocultar el formulario
        const welcome_card = document.getElementById("loginWelcome");
        document.getElementById("userEmailDisplay").textContent = email.value;
        welcome_card.style.display = "block"; // Mostrar bienvenida
    }
});
