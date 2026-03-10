
const boton = document.querySelector(".menu-btn");

const submenu = document.querySelector(".submenu");


boton.addEventListener("click", () => {

    submenu.classList.toggle("activo");

});