// BOTONES
const btnVisitanteHeader = document.getElementById("btn-visitante-header");
const btnIniciarSesion = document.getElementById("iniciar-sesion");
const btnIniciarSignUp = document.getElementById("btn-iniciar-sesion");
const btnCerrar = document.getElementById("btn-cerrar-admin-header");
const btnCrearCuentaAdmin = document.getElementById("btn-crear-cuenta");

const logInAdmin = document.getElementById("log-in-admin");
const sigUpAdmin = document.getElementById("sig-up-admin");
const tableDataVisitor = document.getElementById("table-data-visitor");
const tableMostrarData = document.getElementById("table-mostrar-tabla");

btnVisitanteHeader.addEventListener('click', e => {
  window.location = "index.html"
})

btnIniciarSesion.addEventListener('click', e => {
  btnCerrar.style.display = "block";
  btnVisitanteHeader.style.display = "none";
  logInAdmin.style.display = "none";
  tableDataVisitor.style.display = "block";
})

btnCerrar.addEventListener('click', e => {
  window.location = "index.html"
})

btnCrearCuentaAdmin.addEventListener('click', e => {
  sigUpAdmin.style.display = "block";
  logInAdmin.style.display = "none";
})

btnIniciarSignUp.addEventListener('click', e => {
  btnCerrar.style.display = "block";
  btnVisitanteHeader.style.display = "none";
  logInAdmin.style.display = "none";
  tableDataVisitor.style.display = "block";
  sigUpAdmin.style.display = "none";
})

const mostrarDataVisitor = () => {
  let data = firebase.database();
  tableMostrarData.innerHTML += `
    <tr>
        <td><"${data.name}"></td>
    </tr>
    `;
}
  
