







//comillas de acento grave para indexar variables dentro de strings = alt + 96 `` 

//POST - GET


// let url = 'https://jsonplaceholder.typicode.com'
// let get = 'photos'

// let consulta = `${url}/${get}`
// fetch(consulta)
//       .then(response => response.json())
//       .then(json => console.log(json))


// let requestBody = {
//     asdsas: 'asdasdasd',
//     asdasd: 123123,
//     asdas: [1,2,3]
// }

// let post = `${url}/posts`

// fetch(post, {
//     method : 'POST',
//     headers : {
//         'Content-Type': 'application/json; charset=utf-8',

//     },
//     body : json.stringify(requestBody)
// })

// .then(response => response.json())
// .then(json => console.log(json))


//Promesas: es como un try catch pero asincrono

// let promesa = new Promise((response, reject) => {
//     let resp = 'Respuesta del servicio'
//     response(resp);
//     reject('fallo')

// });

// promesa.then(res => {
//     console.log(res)
// }).catch(e =>{
//     console.log(e)
// })



//Callback: es una funcion que llama a una funcion definida como parametro

// function mostrar(num){

//     console.log(num)

// } 

// function calcular(num1, num2, callback){

//         let suma = num1 + num2;
//         callback(suma);

// }

// calcular(1,3,mostrar)






//try catch : maneja metodos que puedan fallar o no, metodos sincronos

// try{

//     //llamado a back-end a través de un Api
//     console.log('llamando back-end')
//     setTimeout(() => {
//         console.log('El backend responde')
//         console.log('Cliente apto para la compra')
//     },( 500))
//     //throw('este cliente no puede comprar')
// }catch(e){
//     //se atrapa el error y hacemos algo que sea correcto
//     console.log('Algo fallo', e)
// }finally{
//     //Se ejecuta siempre
//     console.log('Todo correcto')
// }



















//Conversiones de datos

//String a Number
//ParseInt, ParseFloat, Number, Not a Number, +

// let a = + '3.14'

// console.log(a)
// console.log(typeof a )


// //Number a String
// let b = String(1)

// console.log(b +(' ') + typeof b)

// //Dates a Number o String

// let c = new Date()
// let d = String(c)

// console.log(c +(' ') + typeof d)

// //Number a boolean

// let e = Boolean(1)
// e = Boolean(0) 
// console.log(e + ' ' + typeof e)

// CURIOSIDAD si defines variables como let a = 0, el 0 como tipo entero siempre será false, cuidado con las condicionales que reciban 0 
// PERO si "0" es un string es TRUE









//TypeOf

// let string = typeof 'dado'

// console.log(string)


//SETS y MAPS

// let mapa = new Map([
//     ['PC',10],
//     ['Celulares', 6],
//     ['Tables', 8]
// ])

// mapa.set('Teclados', 20)

// mapa.delete('Tables')

// console.log(mapa)


// let a = new Set(['a','b','c','d','e','f'])

// a.add('loto')
// a.delete('f')

// console.log(a)







//Ciclos

// let bool = true
// let num = 1;


// while(bool == true && num <= 9 ){
//     console.log(num++, bool)
//     if(num > 9){    
//         bool = false
//         console.log(num, bool)
//         num = 1
//         if(bool==false ){
           
//             console.log('K')
//             console.log('E')
//             console.log('L')
//         }
//     }
// } 




// let array = [10,20,30,40,50,60,70,80];

// array.forEach(array => {
//     console.log(array)
// });


// const libro = {
//     nombre : 'La casa',
//     autor : 'Hogson',
//     editorial : 'Seneca',
//     anio_publicacion : 2022


// }

// for (const key in libro) {
//     console.log(libro[key]);
//     }





//let tex = ', '
// for (let index = 0; index <tec.length; index++) {
//     tex += tec[index]+ ', ';
//     bucles.textContent = tex
// }









//Condicionales 

// let edad = 18
// let nacionalidad = 'Chileno'
// let pasaporte = true

// if(edad >= 18){
//     console.log('Cumples con la mayoria de edad')
//     if(nacionalidad = 'Chileno'){
//         console.log('Eres Chileno')
//         if(pasaporte = true){
//             console.log("Puedes viajar, ten un buen viaje!")
//         }else{

//         }
//      }else{
        
//      }
// }else{


// }




// let musica = "Rap"

// switch (musica) {
//     case "Rap":
//         console.log('te recomiendo $uicideboy$')
//         break;

//     case "Rock":
//         console.log('te recomiendo Slipknot')
//         break;
     
//     case "Hip Hop":
//         console.log('te recomiendo Freddie Dredd')
//         break;
        
        
//     default:
//         'No conozco ninguno, pero te recomiendo $uicideboy$'
//         break;    


// }








//MATH

// console.log(Math.round(Math.random() * 100))

// console.log(Math.PI)

// const numero = 2.2 

// //const redondeo = Math.trunc(numero)
// const redondeo = Math.round(numero)
// console.log(redondeo)









//Arreglos

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,12,13,14,15]


// console.log(number.sort((x,y) => x-y));


// let colores = [
    
//     'Rojo', 'Amarillo', 'Negro', 'Amarillo', 'Rojo'
                
// ];

// document.getElementById('colores').innerHTML = colores.join('; ');


// let colores = [
    
//     'Rojo', 'Amarillo', 'Negro', 'Amarillo', 'Rojo'
                
// ];
// // indice, cuantos quiero cortar y que agrego
// const res = colores.splice(2,1,'Turquesa')
// console.log('Elemento cortado:'  + res);
// console.log('Array con elemento agregado: ' + colores);


// let colores = [
    
//     'Rojo', 'Amarillo', 'Negro', 'Amarillo', 'Rojo'
                
// ];

// const res = colores.unshift('Negro'); //unshift es una función que agrega un elemento especificado al inicio del arreglo
// console.log(colores);



// let colores = [
    
//     'Rojo', 'Amarillo', 'Negro', 'Amarillo', 'Rojo'
                
// ];

// const res = colores.pop() //Pop es una función que literamente arranca el ultimo elemento del arreglo para ser alamacenado en una variable o para cualquier fin conveniente
// console.log(res);
// console.log(colores)



// let colores = [
    
//     'Rojo', 'Amarillo', 'Negro', 'Amarillo', 'Rojo'
                
// ];

// const res = colores.every( x => x == 'Negro') //Every es una funcion booleana que busca si todos los elementos son igual al especificado

// console.log(res);



// let colores = [
    
//     'Rojo', 'Amarillo', 'Negro', 'Amarillo', 'Rojo'
                
// ];

// const res = colores.some( x => x == 'Negro') //Some es una funcion booleana que busca si un elemento existes dentro del arreglo

// console.log(res);


// let colores = [
    
//     'Rojo', 'Amarillo', 'Negro', 'Amarillo', 'Rojo'
                
// ];

// const res = colores.findIndex( x => x == 'Negro' ); //FindIndex devuelve la posicion de un elemento

// console.log(res)

// let colores = [
    
//     'Rojo', 'Amarillo', 'Negro', 'Amarillo', 'Rojo'
                
// ];

// const res = colores.fill('Rojo', 0) //Fill rellena los elementos del arreglo con un elemento especificando la pocision de rellenado

// console.log(res)

// let colores = [
    
//     'Rojo', 'Amarillo', 'Negro', 'Amarillo', 'Rojo'
                
// ];
// //Paint it black
// //Map es la función que convierte todos los elementos del arreglo por el elemento especificado 
// const res = colores.map(x => {
//     if(x == 'Rojo' || x == 'Amarillo' || x == 'Negro')
//         return 'Negro';
// });

//console.log(res);
// { nombre: "Sloth", apellido: "lotus"},
// { nombre: "Kel", apellido: "lotus"},
// { nombre: "Lele", apellido: "lelum"}
// ]

// //Con este filtro y ciclo se busca mostrar en consola solo los nombres que contengan como apellido "lotus"
// const res = array.filter( x => x.apellido == 'lotus') // x => x esto indica que se recorrera el arreglo en busca del elemento indicado

// for (let index = 0; index < res.length; index++) {

//         const element = res[index];
//         console.log(element.nombre)
// }



// const array = ["HTML","CSS", "JS"]

// array[array.push("Python")] // función push para agregar un elemento al arreglo creado

// document.getElementById("lista").innerHTML = array;

//  let toDo = ["Levantarse", "Comer", "Ejercitarse", "Estudiar", "Jugar", "Dormir"]

//  let texto = ''
//  for (let index = 0; index < toDo.length; index++) { //bucle que agrega elementos a la lista "ul" de html
    
//      texto += "<li>" + toDo[index] + "</li>" //por cada ciclo se llama a una elemento del arreglo y se imprime en la lista

//  }
//     document.getElementById("lista").innerHTML = texto

// const array = new Array(5)


// array[0] = 'lele'
// array[1] = 'lelum'
// array[2] = 'loto'
// array[3] = 'lotus'
// array[4] = 'cocoa'

// array[0] = 'Lele'
// array[1] = [1,2,3,4,5]
// array[2] = {nombre: "loto", apellido: "Sloth"}

// console.log(array2)
// console.log(array[4])

// console.log(array2[array2.length-1]) //buscar el ultimo elemento del arreglo
//console.log(array.sort()) // ordena como se visualiza el arreglo por el "primer caracter alfanumerico"
// console.log(array.length) // cuenta el largo del array
// document.getElementById('a').innerHTML = array //evento html











//Strings

// const texto = "Este texto esta dividido. tu misión es hacer que. se vea como tal."

// const resultado = texto.split('. '); //split especifica el caracter para separar el texto

// console.log(resultado);

// const texto = '                    Kel                             '
// const texto2 = ' ...'
// const texto3 = ' equisde'

// const respuesta = texto.trim().concat(texto3).trim(); //trim sirve para borrar los espacios sobrantes en el string, trimStart y trimEnd son sus variaciónes

// console.log(respuesta)

// const texto ="La educación es muy importante en el mundo"

// const resultado =  texto.toUpperCase() // funcion para poner texto en mayuscula, "toLowerCase()" es para lo contrario

// console.log(resultado)

// const texto ="La educación es muy importante en el mundo"

// const resultado =  texto.replace("mundo", "chile") // remplaza una cadena de texto por otra especificada

// console.log(resultado)

// let string = 'Esto esta arriba \n Esta esta abajo' // \n es para el salto de linea, aplicalo en el Back-end
// let texto = 'Kelly'
// console.log(string)

// let resultado = texto.slice(0,3) // la funcion slice sirve para mostrar los caracteres de un texto especificando un rango de posición entre los caracteres 
// console.log(resultado)






// //Funciones de eventos
// function mostrar(){
//     document.getElementById("seleccionable").innerHTML = Date()
// }

// function tocame(){
//     document.getElementById("seleccionable").innerHTML = "uyy ksajdkasdjk"
// }

// function select(){
//     let select = document.getElementById("select");
//     let opcion = select.options[select.selectedIndex].text;
//     console.log(opcion);
    

// }





// OBJETOS
// const vendedor = {
//     nombre: "Axel",
//     apellido :"Mondaca",
//     empresa:"Sloth Lotus",
//     habilidadesBlandas: ["Puntualidad, Diciplina"],
//     vender : function(){
//         return "Axel a vendido un auto"
//     },
//     nombreCompleto: function (){
//         return this.nombre +" " + this.apellido

//     }

// }
//inicializa funciones de un objeto
// console.log("El Vendedor", vendedor.nombreCompleto())
// console.log("El Vendedor", vendedor.vender())

// let auto = {

//     marca : "fiat",
//     modelo : "UNO",
//     peso : 1400,
//     color : "Rojo"
// }

// let auto2 = {

//     marca : "RENAULT",
//     modelo : "12",
//     peso : 1600,
//     color : "Aguamarina"
// }

// auto.marca = "BMW"
// auto.modelo = "X5"

// console.log(auto["marca"])
// console.log(auto["modelo"])

// console.log("Auto 1: ", auto)
// console.log("Auto 2: ", auto2)






// //Funciones 
// const temperatura = 76

// function transformarCelsius(fahrenheit){
//     return (5/9) * (fahrenheit - 32);

// }
// const respuesta = transformarCelsius(temperatura)

// console.log(parseInt(respuesta))

// let c = "69"; 

// let parse = parseInt(c) recordar que "parsear" es convetir un tipo de dato a otro
// console.log(c)




//SCOPE

// let x = 7 lo que este definido afuera del planeta solo afectará a lo que esta afuera del plante "{}"
// {
//     let x = 2
//     console.log(x)   todo lo que este dentro del planeta definira solo dentro del planeta
// }
// console.log(x)

// const variable = 'Valor de la variable';

// const suma = 1+3

// x = 5;
// y = 7;

// x++;
// y--;

// console.log(x)

// function nombre(){
//     const nombreVariable = 'Variable de función'
// }



// let x, y, z;

// x = 5; y = 7; z = x + y; forma de asignar variables en orden


// ATL + SHIFT + F para formatear orden

//Tener cuidado al momento de declarar una variable de la siguiente manera:
    // let x = 5; let y = x puede traer problemas en el alojo de memoria.


// var VAR = esta declaración de variable puede ser reasignada, por lo que no se recomienda utilizarla
// let LET = esta declaración de variable permite declararar varias variable a la vez y no deja ser reasignada utiliza ; para cerrar la variable let
// const CONST = esta declaración de variable permite una solo y unico tipo de variable 