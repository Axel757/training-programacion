document.body.onload = () => {
    let funciones = [ej1, ej2, ej3]

    funciones.forEach(funcion => {
        funcion();
    })
}


function ej1() {

    let h1 = document.createElement("h1")
    let p = document.createElement("p")

    let hello = document.createTextNode("Javascript");
    let parrafo = document.createTextNode("El contenido de esta pagina esta generado a partir de javascript")

    h1.appendChild(hello);
    p.appendChild(parrafo);

    let h = document.getElementById('hello');
    let pa = document.getElementById('parrafo');
    document.body.insertBefore(h1, h);
    document.body.insertBefore(p, pa)



}


function ej2() {

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    let tabla = document.createElement("table")
    tabla.classList.add("table", "table-dark", "table-hover");
    tabla.id = "mes"


    meses.forEach(mes => {
        let fila = document.createElement("tr")
        let celda = document.createElement("td")

        let contenido = document.createTextNode(mes)

        celda.appendChild(contenido)

        celda.classList.add("table-dark", "border", "table-hover")

        fila.appendChild(celda)
        tabla.appendChild(fila)
    });
    document.body.appendChild(tabla)
}

function ej3() {
    let num = 0
    var valores = [true, 5, false, "hola", "adios", 2];
    let boton = document.createElement("button")
    boton.innerHTML = "Click Me!"
    document.body.appendChild(boton)

    if (typeof String) {
        let string1 = valores[3];
        let string2 = valores[4];

        if (string1 > string2) {
            console.log("El texto mas largo es: " + string2)
        } else {
            console.log("El texto mas largo es: " + string1)
        }
    }

    if (typeof Boolean) {
        let si = true
        let no = false

        boton.addEventListener("click", () => {
            num++

            if (num % 2 == 0) {
                console.log(si)
                alert(num + " es par")
            } else {
                console.log(no)
                alert(num + " es impar")
            }

        })

    }

}
