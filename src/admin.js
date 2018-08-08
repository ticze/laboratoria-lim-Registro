const btnInicioHeader = document.getElementById("btn-inicio-header");
btnInicioHeader.addEventListener('click', e =>{
    window.location= "index.html"
})
const btnIngresar = document.getElementById("btn-ingresar");

// inicio de sesion del administrador
const inicio =()=>{
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('contrasena').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      confirmacion();
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }); 
}

const acceso =()=>{
  const email2 = document.getElementById('email2').value;
  const contrasena2 = document.getElementById('contrasena2').value;

  firebase.auth().createUserWithEmailAndPassword(email2, contrasena2).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }); 
}

const observador =()=>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}
observador()

const cerrar=()=>{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

const confirmacion = () => {
  user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
    console.log("Enviando correo.....")
    // Email sent.
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
}