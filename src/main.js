const name = document.getElementById('nombre').value;
const dni = document.getElementById('dni').value;
const email = document.getElementById('email').value;
const selecRegistrar = document.getElementById('persona')

// Funciones Firebase
// Get a reference to the database service
var database = firebase.database();
// function writeUserData(userId, name, email, dni) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     dni: dni,
//     email: email
//   });
// }
btnRegistrar=()=>{
  event.preventDefault();
  console.log(name);
  console.log(dni);
  console.log(email);
  console.log(selecRegistrar.value);
      firebase.database().ref('users/').child('visitante').push({
      name: name,
      dni: dni,
      email: email,
      personaAVisitar: persona
    })
}