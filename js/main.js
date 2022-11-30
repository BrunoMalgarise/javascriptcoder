//Nombre de Usuario y Bienvenida
let nombre = prompt("Ingrese tu nombre")
alert("Hola " + nombre + " ,bienvenido");

let edad = prompt("Ingresa tu edad")
if (edad < 18){
    console.log("Eres menor de edad");
}else{
    console.log("Eres mayor de edad");
}

let numero1 = prompt("ingrese un número: ")
console.log("Tu primer número es: " + numero1);

let numero2 = prompt("ingrese otro numero: ")
console.log("Tu segundo número es: " + numero2);

let signo = prompt("Ingresa un signo para tu operacion: + Suma, - Resta, * Multiplicación , / Division")

function calculadora(signo) {

    switch (signo) {
        case "+":
            let suma = parseInt(numero1) + parseInt(numero2)
            console.log("Elegiste sumar, y el resultado es: " + suma);
            resultado = suma;
            break;

        case "-":
            let resta = parseInt(numero1) - parseInt(numero2)
            console.log("Elegiste restar, y el resultado es: " + resta);
            resultado = resta;
            break;

        case "*":
            let multiplicacion = parseInt(numero1) * parseInt(numero2)
            console.log("Elegiste multiplicar, y el resultado es: " + multiplicacion);
            resultado = multiplicacion;
            break;

        case "/":
            if (numero2 == 0) {
                console.log("no se puede dividir por 0");
            } else {
                let division = parseInt(numero1) / parseInt(numero2)
                console.log("Elegiste dividir, y el resultado es: " + division);
                resultado = division;
                break;
            }
        default:
            console.log("Error, ingresa un signo valido.");
            break;
    }

}
resultado = (calculadora(signo));
console.log("Nos vemos " + nombre );





