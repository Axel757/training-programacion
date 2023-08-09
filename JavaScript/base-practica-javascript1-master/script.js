import { barcelona, roma, paris, londres, calama} from './ciudades.js'

let enlaces = document.querySelectorAll('a');

let getTitulo = document.getElementById('titulo')
let getSubtitulo = document.getElementById('subtitulo')
let getParrafo = document.getElementById('parrafo')
let getPrecio = document.getElementById('precio')

console.log(enlaces)

enlaces.forEach(function(enlace) {

        enlace.addEventListener('click', function() {

            enlaces.forEach(function(enlace) {

                enlace.classList.remove('active');
            });

        
    this.classList.add('active');

    let contenido = Contenido(this.textContent);

    getTitulo.innerHTML = contenido.titulo;
    getSubtitulo.innerHTML = contenido.subtitulo;
    getParrafo.innerHTML = contenido.parrafo;
    getPrecio.innerHTML = 'Precio: ' + contenido.precio + " Euros";
    

        });
});



function Contenido(enlace){
    let contenido = {

        'Barcelona' : barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
        'Calama': calama

    };

return contenido[enlace];

}