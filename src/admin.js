// BOTONES
const btnVisitanteHeader = document.getElementById("btn-visitante-header");
const btnIniciarSesion = document.getElementById("iniciar-sesion");
const btnCerrar = document.getElementById("btn-cerrar-admin-header");

const sectionFormAdmin = document.getElementById("form-admin");
const tableMostrarData = document.getElementById("table-mostrar-tabla");


btnVisitanteHeader.addEventListener('click', e =>{
    window.location = "index.html"
})

btnIniciarSesion.addEventListener('click', e =>{
    sectionFormAdmin.style.display = "none";
    tableMostrarData.style.display = "block";
})

btnCerrar.addEventListener('click', e =>{
    window.location = "index.html"
})
