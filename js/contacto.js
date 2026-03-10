/**Formulario Submit**/

const contacto = document.getElementById("miFormulario")

contacto.addEventListener("submit", function (event) {
    event.preventDefault();


    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;


    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("emailUsuario", email);

    console.log("Datos guardados en localStorage");
    contacto.reset()

    Swal.fire({
        title: "Tu Consulta fue Enviada con Éxito!",
        text: "Nos estaremos comunicando a la brevedad",
        icon: "success",
        draggable: true
    });
});

/*const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    respuesta.textContent = "Gracias por tu mensaje 😊";
});*/

//Material sobre eventos
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
//https://www.youtube.com/watch?v=LI6RMcvfnt0