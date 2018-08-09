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
    alert('No acepto el mensaje de confirmacion. Verifique su bandeja de mensajes')
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

