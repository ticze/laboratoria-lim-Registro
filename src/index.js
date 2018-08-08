
// BOTONES
const btnAdminHeader = document.getElementById("btn-admin-header");
const btnIngresar = document.getElementById("btn-ingresar");

//SECCION
const contenidoPrincipal = document.getElementById("contenido-principal");

btnIngresar.addEventListener('click', () => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const dni = document.getElementById('dni').value;
  const celular = document.getElementById('phone').value;
  const selectPersonaVisita = document.getElementById('select-persona-visita');
  const date = new Date();

  const dataVisitante = firebase.database().ref().child('visitante');
  dataVisitante.push({
    name: name,
    dni: dni,
    celular: celular,
    persona_a_visitar: selectPersonaVisita,
    fecha_de_visita: date,
  })
})

btnAdminHeader.addEventListener('click', e => {
  window.location = "admin.html"
})



