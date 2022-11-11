//EJERCICIO 1

/* Escribe un programa que invierta una cadena usando recursión. Dada la
cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf"*/

function Invertir(str) {
  if (str === "") {
    return "";
  } else {
    return Invertir(str.substr(1)) + str.charAt(0);
  }
}

let Vuelta = Invertir("freecodecamp");
console.log(Vuelta);

/*==========================================================================================================*/
//EJERCICIO  2

/*Escribe un programa que devuelva el número de veces que aparece una
letra en una cadena. Tu programa debería recibir una cadena y la letra.*/

function conteoRecursivo(texto) {
  return texto.length ? 1 + conteoRecursivo(texto.slice(1)) : 0;
}

function conteo(texto) {
  if (typeof texto != "string") {
    throw TypeError("El argumento debe ser una cadena de caracteres");
  }
  return conteoRecursivo(texto);
}

try {
  console.log(conteo("JavaScript")); //10
} catch (e) {
  console.log(`Error: ${e.message}`);
}

/*En este ejercicio busque en YT y en MDN, por ejemplo el try catch se me hizo interesante de como try
se ejecuta primero y si manda como una excepcion el catch va a ejecutar el codigo del bloque, como dijiste que investiguemos un toque de mas
entonces fue asi que resolvi el
*/

/*==========================================================================================================*/
/* EJERCICIO 3:
Escriba un programa que reciba una frase y este debe de intercambiar las vocales
 por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”. */

const remplazar = {
  a: "i",
  e: "i",
  i: "i",
  o: "i",
  u: "i",
  A: "I",
  E: "I",
  I: "I",
  O: "I",
  U: "I",
};

const cambiarVocales = (string) => {
  return string.replace(/[aeiou]/gi, (match) => remplazar[match]);
};

console.log(cambiarVocales("esta es la entrada"));
/* ingresar datos por la consola*/

/*==========================================================================================================*/

//EJERCICIO 4

/*Escriba un programa que reciba una palabra y reordene sus letras en orden
alfabético. Ej. hola → ahlo
*/

function ordenAlfabeto(str) {
  return str.split("").sort().join("");
}
console.log(ordenAlfabeto("hola"));

//ingresar datos por la consola

/*==========================================================================================================*/
