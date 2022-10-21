//EJERCICIO 1

// function numeros(arr) {
//   let mayor = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > mayor) {
//       mayor = arr[i];
//     }
//   }
//   console.log(mayor);

// }
// numeros([20, 4, 5, 30, 2, 0])

//_______________________________________________________________________________________________________________________________

//EJERCICIO 2

/*
let arr = [];

function palindromo(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    arr.push(string[i]);
  }

  const invert = arr.join("");
  if (invert === string) {
    return "Si es palindromo";
  } else {
    return "No es palindromo";
  }
}
console.log(palindromo("Hola"));
*/

// en este console podes cambiar la palabra y te va a decir si es o no una palabra palindroma 

//_______________________________________________________________________________________________________________________________


//EJERCICIO 3

/*
function Cont(){
  const array = [
   [1,0,0], 
   [0,1,1],
   [0,1,0],
   ];
 let conta = 0;
   
 for (let i = 0; i < array.length; i++) {
   for (let j = 0; j < array[i].length; j++) {
     if (array[i][j] == 0){
       conta ++
     }
   }
 }
 return 'El numero de ceros es: ' +conta
 }
 
 console.log(Cont())*/

//_______________________________________________________________________________________________________________________________

//EJERCICIO 4

/*
function NumRepet(num){
  let repet = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] === num[i]) {
      repet.push(num[i]);   
    }  
  } 
    if(repet.length >= 1){
      return repet;
    }
    else{
      return 'no hay repetidos'
    }
  }
  console.log(NumRepet([8,8,8,1,4,5,6,7,7]))*/


//_______________________________________________________________________________________________________________________________


//EJERCICIO 5

/*
for(let i = 0; i < 10; i++) {
  let asterisco = '';

for(let j = 1 ; j < i; j++){
  asterisco += '*'
}
console.log(asterisco)
} */
