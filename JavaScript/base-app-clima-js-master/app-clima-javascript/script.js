let api_key = '91b625f34bbc2fbc975c5a896f64b485'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKel = 273.15
let clean = false

//comillas de acento grave para indexar variables dentro de strings = alt + 96 `` 



document.getElementById('botonBusqueda').addEventListener('click', function(){
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchClima(ciudad)
        clean = true
    }if(clean == true){
        document.getElementById('botonBusqueda').addEventListener('click', function(){
            document.getElementById('datosClima').innerHTML = " "
        })
        clean = false 
    }
})    

//Se realiza el fetch a la api de weather
function fetchClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(response => mostrarDatos(response))
        

    }

//Metodo para recibir el nombre de la ciudad por el id del dom 'datosClima',
//recibir los datos de la api y crear los elementos en el dom para que los datos sean visualizados
//Finalmente se utiliza el metodo appenChild() para almanenar los elementos creados Hijos en el Div Padre
function mostrarDatos(response) {
    console.log(response)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHtml = ' '
    

    const ciudadNombre = response.name
    const pais = response.sys.country
    const temperatura  = response.main.temp 
    const descripcion = response.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = 'Ciudad: '+ciudadNombre

    const ciudadPais = document.createElement('p')
    ciudadPais.textContent = 'País: '+pais
    const ciudadTemperatura = document.createElement('h3')
    ciudadTemperatura.textContent = 'La temperatura actual de '+ciudadNombre+' es: ' +Math.floor(temperatura - difKel)+ '°C'

    const ciudadDescripcion = document.createElement('p')
    ciudadDescripcion.textContent = 'Descripción del clima: '+descripcion


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(ciudadPais)
    divDatosClima.appendChild(ciudadTemperatura)
    divDatosClima.appendChild(ciudadDescripcion)

}

