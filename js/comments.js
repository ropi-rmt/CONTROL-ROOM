//ARRAY FORMULARIO
const formulario = document.getElementById("formComentario");
const listaComentarios = document.getElementById("listaComentarios");

let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

comentariosGuardados.forEach(com => {
    mostrarComentario(com.nombre, com.comentario, com.fecha);
});

//EVENTO SUBMIT

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

//USO DE LIBRERIAS PARA VALIDACION DE USO DE TODOS LOS CAMPOS
    if (nombre === "" || comentario === "") {
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor completa todos los campos"
        });
        return;
    }

    
    const fecha = new Date().toLocaleDateString();

    comentariosGuardados.push({ nombre, comentario, fecha });

    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

    mostrarComentario(nombre, comentario, fecha);

    formulario.reset();

    Swal.fire({
        title: "Tu Comentario fue Enviado con Éxito!",
        text: "Gracias por visitar nuestra página!",
        icon: "success"
    });
});

function mostrarComentario(nombre, comentario, fecha) {
    const card = document.createElement("div");
    card.classList.add("comentario-card");

    card.innerHTML = `
        <div class="comentario-nombre">${nombre}</div>
        <div class="comentario-fecha">${fecha}</div>
        <div class="comentario-texto">${comentario}</div>
        <button class="btn-eliminar">Eliminar</button>
    `;

    //BOTON ELIMINAR - EVENTO ELIMINAR
    const botonEliminar = card.querySelector(".btn-eliminar");

    botonEliminar.addEventListener("click", function () {

        const indice = comentariosGuardados.findIndex(com =>
            com.nombre === nombre &&
            com.comentario === comentario &&
            com.fecha === fecha
        );



        if (indice !== -1) {
            comentariosGuardados.splice(indice, 1);

            localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));
        }
        card.remove();
    });

    listaComentarios.appendChild(card);
}


/*LIBRERIAS
 https://youtu.be/EDIg8rqbrBM?si=M3ynjY0b4aoyv3JA
 *sweetalert
 *https://sweetalert2.github.io/
  * toastify
  *  https://apvarun.github.io/toastify-js/
  * Luxon
  *  https://moment.github.io/luxon/#/
  * ANIMATE ON SCROLL -> chequear!
  */