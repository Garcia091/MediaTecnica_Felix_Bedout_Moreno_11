let num1;
let num2;

let btnSuma = document.getElementById('Ejercicio1');
let btnResta = document.querySelector('#Ejercicio2');
let ResOpe = document.querySelector('#Resultado');
let btnBorrar = document.getElementById('Borrar');

btnBorrar.addEventListener('click', function() {
    document.getElementById('Resultado').innerHTML = '';
});

btnSuma.addEventListener('click', function() {
   LeerDatos();
   console.log(`El resultado es ${Suma(num1,num2)}`)
   ResOpe.innerHTML = `<h3> La suma es:</h3> ${Suma(num1,num2)}`;
})

function LeerDatos(params) {
    num1 = Number(prompt('Ingrese número 1'));
    num2 = Number(prompt('Ingrese número 2'));
}

function Suma(num1, num2) {
    let suma = num1 + num2;
    return suma
}

