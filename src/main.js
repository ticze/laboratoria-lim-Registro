
const btnRegistro = document.getElementById('registrar')
btnRegistro.addEventListener('click', () => {
  event.preventDefault();
  const name = document.getElementById('nombre').value;
  const dni = document.getElementById('dni').value;
  const email = document.getElementById('email').value;
  const selecRegistrar = document.getElementById('persona').value;
  console.log(name);
  console.log(dni);
  console.log(email);
  console.log(selecRegistrar);
  // var database = firebase.database();
  const dataVisitante = firebase.database().ref().child('visitante');
  dataVisitante.push({
    name: name,
    dni: dni,
    email: email,
    personaAVisitar: selecRegistrar,
  })

})
