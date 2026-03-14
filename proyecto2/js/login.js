const usuariosValidos = [
    { user: "ClienteUCV", pass: "Central_123", redirect: "cliente.html" },
    { user: "caja_01", pass: "Cajero#123", redirect: "cajero.html" },
    { user: "adminRoot", pass: "cafetinAdmin", redirect: "admin.html" }
];


document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const userTyped = document.getElementById('username').value;
    const passTyped = document.getElementById('password').value;
    const mensajeError = document.getElementById('error-message');

    const usuarioEncontrado = usuariosValidos.find(u => u.user === userTyped && u.pass === passTyped);

        if (usuarioEncontrado) {    
    alert("¡Bienvenido al Cafetín Central!");
    
    setTimeout(function() {
        window.location.href = usuarioEncontrado.redirect;
    }, 100); 
    }   else {
        mensajeError.style.display = 'block';
        mensajeError.textContent = "Usuario o contraseña incorrectos. Intente de nuevo.";
    }
});