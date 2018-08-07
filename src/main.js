const btnRegistro = document.getElementById('btn-ingresar')
btnRegistro.addEventListener('click', () => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const dni = document.getElementById('dni').value;
  const email = document.getElementById('phone').value;
  console.log(name);
  console.log(dni);
  console.log(email);

  // var database = firebase.database();
  const dataVisitante = firebase.database().ref().child('visitante');
  dataVisitante.push({
    name: name,
    dni: dni,
    email: email,
  })

})
