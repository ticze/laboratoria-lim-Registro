const btnRegistro = document.getElementById('btn-ingresar')
btnRegistro.addEventListener('click', () => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const dni = document.getElementById('dni').value;
  const email = document.getElementById('phone').value;
  
  const dataVisitante = firebase.database().ref().child('visitante');
  dataVisitante.push({
    name: name,
    dni: dni,
    numberPhone: phone,
  })
})