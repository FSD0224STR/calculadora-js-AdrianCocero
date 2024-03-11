// Declaración de variables
var num1 = 0;
var num2 = 0;
var opera;

// Función que coloca el numero presionado utilizando el onclick
function darNumero(numero){
    if(num1==0 && num1 !== '0.'){
        num1 = numero;
    }else{
        num1 += numero;
    }
    refrescar();
}

//Se utilizan dos funciones para limpiar el input
function darAC(){
    num1 = 0;
    num2 = 0;
    refrescar();
}
function refrescar(){
    document.getElementById("valor_numero").value = num1;
}

//Función que coloca la coma
function darComa(){
    if(num1 == 0) {
        num1 = '0.';
    } else if(num1.indexOf('.') == -1) {
        num1 += '.';
    }
    refrescar();
}

//Se utiliza la funcion Operar() y Esigual() para realizar las distintas operaciones
function operar(valor){
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("valor_numero").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    opera = valor;
}

function esIgual(){
    num1 = parseFloat(num1);
    switch (opera){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
    }
    refrescar();
    num2 = parseFloat(num1);
    num1 = 0;
}

//Al boton C no he conseguido darle una función, a lo largo del curso me gustaria seguir añadiendo funcionalidades.
