// BOTONES
const btnAdminHeader = document.getElementById("btn-admin-header");
const btnIngresar = document.getElementById("btn-ingresar");


btnIngresar.addEventListener('click', () => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const dni = document.getElementById('dni').value;
  const celular = document.getElementById('phone').value;
  const selectPersonaVisita = document.getElementById('select-persona-visita').value;
  var fec = new Date().toLocaleString();

  // CREANDO DATA DE VISITANTE PARA GUARDAR EN FIREBASE
  const dataVisitante = firebase.database().ref().child('visitante');
  dataVisitante.push({
    name: name,
    dni: dni,
    celular: celular,
    persona_a_visitar: selectPersonaVisita,
    fecha_de_visita: fec,
  })

})

btnAdminHeader.addEventListener('click', e => {
  window.location = "admin.html"
})

$('#carouselExampleControls').carousel({
  interval: 2000
});




