// Ciclo con For y condicionales 

const num10 = 10

for (let i = 0; i <= num10; i++){

    //Condicionales

    if (i === num10){
        alert ("Llegamos al numero 10")
    }else{
        alert (`Estamos en la iteracion ${i}`)
    }
}
 

// Variables.

const num1 = 10
const num2 = 5



// Funcion Comun



function sumar (num1 , num2) {

    return num1 + num2;

 }

console.log(sumar(5,20))




// Funcion flecha / Arrow Function


const sumarNumero = (num3 = 0, num4 = 0) => {

    return num3 - num4;

}
console.log(sumarNumero())






// Objeto js


const matias = {

    apellido: 'ferreira',
    localidad: 'ezeiza', 
    edad : 25,
    estudiando : true,

}
const facundo = {

    apellido: 'fernandez',
    localidad: 'ushuaia',
    edad : 35,
    estudiando : true,

}
const objeto3 = {
    nombre: 'fernando',
    apellido: 'lezcano',
    localidad: 'mar del plata', 
    edad : 15,
    estudiando : false,

}
console.log(matias)
console.log(matias.apellido)






// Arrays


const array1 = ['manzana', 'pera', 'banana', 1, true, ['mercedez', 'ford']];

console.log(array1[5][0])






// array para guardar objetos.


const array2 = [];

// Metodo Push para agregar objetos dentro de un array.

array2.push(objeto3)
console.log(array2)






const colores = ['azul','rosa','verde','violeta']

const resultado = colores.filter( longitud => longitud.length > 3)

console.log(resultado)