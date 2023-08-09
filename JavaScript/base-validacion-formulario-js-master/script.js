
const firebaseConfig = {
    apiKey: "AIzaSyC5z8iTYm2JR6scqWhwZapRTQLIAGSY_9c",
    authDomain: "validacion-formulario-e7af1.firebaseapp.com",
    projectId: "validacion-formulario-e7af1",
    storageBucket: "validacion-formulario-e7af1.appspot.com",
    messagingSenderId: "782055752671",
    appId: "1:782055752671:web:87427248016e1c69bf7a6a",
    measurementId: "G-PT2QFG6QX9"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById("formulario").addEventListener("submit", (event) =>{

    event.preventDefault();


    //Validar nombre

    let inputNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')
    
    if(inputNombre.value.trim() === ''){
        errorNombre.textContent = 'Ingresa tu nombre de usuario'
        errorNombre.classList.add('error-message')

    }else{

        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }
    //Validar Correo

    let inputCorreo = document.getElementById('email')
    let errorCorreo = document.getElementById('emailError')
    let patternCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patron de validacion de correo basico
    
    if(!patternCorreo.test(inputCorreo.value)){
        errorCorreo.textContent = 'Ingresa un correo electronico valido'
        errorCorreo.classList.add('error-message') 

    }else if(inputCorreo.value.trim() === ''){
        errorNombre.textContent = 'Ingresa un correo electronico'
        errorNombre.classList.add('error-message')
    }else{    
        errorCorreo.textContent = ''
        errorCorreo.classList.remove('error-message')
    }
    
    //Validad Constraseña

    let inputPass = document.getElementById('password')
    let errorPass = document.getElementById('passwordError')
    let patternPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/; 

    if(inputPass.value.length <= 8){
        errorPass.textContent = 'Ingresa una constraseña de almenos 8 cáracteres'
        errorPass.classList.add('error-message') 
    }else{
        errorPass.textContent = ''
        errorPass.classList.remove('error-message')
    }


    //Si es todo correcto, enviar fomulario


    if(!errorNombre.textContent && !errorCorreo.textContent && !errorPass.textContent){
        
        //Backend que reciba 

        db.collection("user").add({
            nombre: inputNombre.value,
            correo: inputCorreo.value,
            password: inputPass.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        alert('Formulario enviado exitosamente')
        document.getElementById('formulario').reset
    }
})