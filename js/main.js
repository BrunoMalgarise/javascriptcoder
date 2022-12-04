//Nombre de Usuario y Bienvenida
let nombre = prompt("Ingrese tu nombre")
alert("Hola " + nombre + " ,bienvenido/a");

let edad = prompt("Ingresa tu edad")
if (edad < 18) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}
let numero1;
let numero2;
function numeros(opciones) {

    numero1 = prompt("ingrese un número: ")
    console.log("Tu primer número es: " + numero1);

    numero2 = prompt("ingrese otro numero: ")
    console.log("Tu segundo número es: " + numero2);

}

numeros();

let opciones = prompt("Elegí una opción: \n1- Realizar una suma. \n2- Realizar una resta. \n3- Realizar una multiplicación. \n4- Realizar una división. \n5- Ingresar otros dos números.\nPresioná X para finalizar.");

//el While mientras sea distinto de X sigue preguntando.
while (opciones != "X") {
//Opciones para el usuario segun la operacion que quiera hacer.
    switch (opciones) {
        case "5":
            numeros();
            break;
        case "1":
            let suma = parseInt(numero1) + parseInt(numero2);
            console.log("Elegiste sumar, y el resultado es: " + suma);
            break;

        case "2":
            let resta = parseInt(numero1) - parseInt(numero2);
            console.log("Elegiste restar, y el resultado es: " + resta);
            break;

        case "3":
            let multiplicacion = parseInt(numero1) * parseInt(numero2);
            console.log("Elegiste multiplicar, y el resultado es: " + multiplicacion);
            break;

        case "4":
            if (numero2 == 0) {
                console.log("Error no se puede dividir por 0");
                break;
            } else {
                let division = parseInt(numero1) / parseInt(numero2);
                console.log("Elegiste dividir, y el resultado es: " + division);
                break;
            }
        default:
            console.log("Error, ingresa una opción valida.");
            break;
    }
    //Condicion de salida de while
    opciones = prompt("Elegí una opción: \n1- Realizar una suma. \n2- Realizar una resta \n3- Realizar una multiplicación. \n4- Realizar una división. \n5- Ingresar otros dos números. \nPresioná X para finalizar.");
}

