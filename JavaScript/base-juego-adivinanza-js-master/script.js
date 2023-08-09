// El juego selecciona un numero al azar para adivinar
let numeroAzar = Math.floor(Math.random() * 100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0
 
function comprobar(){ 
    intentos ++
    intento.textContent = 'Intentos: '+ intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, ingresa un numero valido entre el 1 y 100';
        mensaje.style.color = 'black';
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'Felicidades, has adivinado el numero!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled= true;
        return
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'El numero es mas grande del ingresado';
        mensaje.style.color = 'tomato';
        

    }else{
        mensaje.textContent = 'El numero es mas pequeño del ingresado';
        mensaje.style.color = 'tomato';
    }

}