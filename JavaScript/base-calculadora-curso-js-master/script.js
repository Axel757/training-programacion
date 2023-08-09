//Agrega a la pantalla el valor del boton
function agregar(valor){
    document.getElementById('pantalla').value += valor;

}

function resetear(){
    document.getElementById('pantalla').value = ''
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}