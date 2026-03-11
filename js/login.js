const usuarios = [
    { user: "admin", pass: "1234" },
    { user: "rocio", pass: "abcd" },
    { user: "pablo", pass: "1234" }
];

const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.toLowerCase();
    const password = document.getElementById("password").value;

    const usuarioValido = usuarios.find(u =>
        u.user === usuario && u.pass === password
    );

    if (usuarioValido) {

        localStorage.setItem("login", "true");

        Swal.fire({
            title: "Login correcto",
            text: "Bienvenido a la página",
            icon: "success"
        }).then(() => {
            window.location.href = "./pages/main.html";
        });

    } else {
        document.getElementById("error").textContent = "Usuario o contraseña incorrectos";
    }

});

const colorModeButton = document.querySelector("#color-mode");
const body = document.body;

colorModeButton.addEventListener("click", cambiarModoColor);
function cambiarModoColor() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "Cambiar a Light Mode";
    } else {
        colorModeButton.innerText = "Cambiar a Dark Mode";
    }
}