const name = document.getElementById('nombre').value;
const dni = document.getElementById('dni').value;
const email = document.getElementById('email').value;
const btnRegistrar = document.getElementById('registrar')

// Funciones Firebase
// Get a reference to the database service
var database = firebase.database();
btnRegistrar.addEventListener('click' ,()=>{
  
  function writeUserData(userId, name, email, dni) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      dni: dni,
      email: email
    });
  }
})
