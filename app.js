// *** Ejercicio N° 1 ***
// A través de 'document.write' concatena un saludo almacenado en 2 variables.

document.write('<br>')
document.write('<h3>* EJERCICIO N° 1</h3>');

let saludo_I= "Hola Mauro... ";
let saludo_II = "¿Cómo estás?";

document.write(saludo_I  + saludo_II);



// *** Ejercicio N° 2 (1da. IMAGEN) ***
// Crear 3 variables y asignarle un valor numérico a las primeras dos,
// y mostrar por consola, la suma, la resta, el producto, la dividión
// y observar si son pares o no (de los primeros números).

document.write('<br>')
document.write('<br>')
document.write('<br>')
document.write('<h3>* EJERCICIO N° 2</h3>');

let primer_num = parseInt(prompt('Ingresar el primer número:'));
let segundo_num = parseInt(prompt('Ingresar segundo número:'));
let tercer_num = parseInt(prompt('Ingresar el tercer número:'));

let suma, resta, producto, division, par_o_impar;

// SUMA

suma = primer_num + segundo_num;
par_o_impar = suma % 2 == 0 ? "PAR" : "IMPAR";
document.write('<br>La suma de ambos números es: ' + suma);
console.log(suma);
document.write('<br>El resultado es ' + par_o_impar);
console.log(par_o_impar);
document.write('<br>')

// RESTA

resta = primer_num - segundo_num;
par_o_impar = resta % 2 == 0 ? "PAR" : "IMPAR";
document.write('<br>La resta de ambos números es: ' + resta);
console.log(resta);
document.write('<br>El resultado es ' + par_o_impar);
console.log(par_o_impar);
document.write('<br>')

// PRODUCTO

producto = primer_num * segundo_num;
par_o_impar = producto % 2 == 0 ? "PAR" : "IMPAR";
document.write('<br>El producto de ambos números es: ' + producto);
console.log(producto);
document.write('<br>El resultado es ' + par_o_impar);
console.log(par_o_impar);
document.write('<br>')

// DIVISIÓN

division = primer_num / segundo_num;
par_o_impar = division % 2 == 0 ? "PAR" : "IMPAR";
document.write('<br>La division de ambos números es: ' + division);
console.log(division);
document.write('<br>El resultado es ' + par_o_impar);
console.log(par_o_impar);
document.write('<br>')


// *** Ejercicio N° 3 (2da. IMAGEN) ***
// A la tercera variable asignarle un valor y sumarla a la suma anterior,
// multiplicarla por el producto anterior y restarsela a la resta anterior.

document.write('<br>')
document.write('<br>')
document.write('<h3>* EJERCICIO N° 3</h3>');

let resultado_suma = tercer_num + suma;
let resultado_producto = tercer_num * producto;
let resultado_resta = tercer_num - resta;

document.write('<br>El resultado final de la suma de los 3 números ingresados es: ' + resultado_suma);
document.write('<br>El resultado final del producto de los 3 números ingresados es: ' + resultado_producto);
document.write('<br>El resultado final de la resta de los 3 números ingresados es: ' + resultado_resta);