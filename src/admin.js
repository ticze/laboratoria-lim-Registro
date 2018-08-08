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
  mostrarDataVisitor();
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
  mostrarDataVisitor();
})

const mostrarDataVisitor = () => {
  let ref = firebase.database().ref('/visitante');
  ref.once('value', (data) => {
    data.forEach(visitante => {
      let visitor = visitante.key,
      visitanteDatos = visitante.val();

      console.log(visitor);
      // tableMostrarData = "";
      tableMostrarData.innerHTML += `
      <tr data-key="${visitor}">
          <td>${visitanteDatos.name}</td>
          <td>${visitanteDatos.dni}</td>
          <td>${visitanteDatos.celular}</td>
          <td>${visitanteDatos.persona_a_visitar}</td>
          <td>${visitanteDatos.fecha_de_visita}</td>
      </tr>
      `;
      
    });
  })
}

