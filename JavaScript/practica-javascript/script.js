import {mouses,teclados, componentes,armas,blindajes} from './store.js'

let productos = document.querySelectorAll('a')

let getImagen = document.getElementById('imagen')
let getModelo = document.getElementById('modelo')
let getMarca = document.getElementById('marca')
let getEspecificaciones = document.getElementById('especificaciones')
let getPrecio = document.getElementById('precio')

console.log(productos)

productos.forEach(function(producto) {

        producto.addEventListener('click', function(){

            productos.forEach(function(producto){

                producto.classList.remove('active');
            });

            this.classList.add('active');

            let producto = getProductos(this.textContent)
            
            getImagen.innerHTML = producto.imagen 
            getModelo.innerHTML = producto.modelo 
            getMarca.innerHTML = producto.marca 
            getEspecificaciones.innerHTML = producto.especificaciones
            getPrecio.innerHTML = 'CLP: ' + producto.precio +'$'
    


        });

});

function getProductos(producto){

    let products = {
        'Mouses' : mouses,
        'Teclados' : teclados,
        'Componentes' : componentes,
        'Armas' : armas,
        'Blindajes' : blindajes

    }
    return products[producto]
}