const btnRegistro = document.getElementById('btn-ingresar')
btnRegistro.addEventListener('click', () => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const dni = document.getElementById('dni').value;
  const phone = document.getElementById('phone').value;

  // var database = firebase.database();
  const dataVisitante = firebase.database().ref().child('visitante');
  dataVisitante.push({
    name: name,
    dni: dni,
    numberPhone: phone,
  })
})