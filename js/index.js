var display = document.getElementById('display')
var btn9 = document.getElementById('boton-9')
    btn9.onclick = mostrarNum
var btn8 = document.getElementById('boton-8')
var btn7 = document.getElementById('boton-7')
var btnSuma = document.getElementById('boton-suma')
var btn6 = document.getElementById('boton-6')
var btn5 = document.getElementById('boton-5')
var btn4 = document.getElementById('boton-4')
var btnResta = document.getElementById('boton-resta')
var btn3 = document.getElementById('boton-3')
var btn2 = document.getElementById('boton-2')
var btn1 = document.getElementById('boton-1')
var btnMultiplicacion = document.getElementById('boton-multiplicacion')
var btnPunto = document.getElementById('boton-punto')
var btn0 = document.getElementById('boton-0')
var btnIgual = document.getElementById('boton-igual')
var btnDivision = document.getElementById('boton-division')

function mostrarNum() {
    var num9 = Number(btn9.textContent)
    display.value += num9
    
}
display.oninput = function (){
    console.log('puto')
}

