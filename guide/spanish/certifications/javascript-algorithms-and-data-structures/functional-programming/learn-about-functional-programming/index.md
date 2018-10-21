---
title: Learn About Functional Programming
localeTitle: Aprenda acerca de la programación funcional
---
## Aprenda acerca de la programación funcional

Una función tiene una entrada o un parámetro `const myFunc = (input) => { ...code to execute... }` . En este caso, la entrada es cuántas tazas de té se crearán.  

### Método

Solo se debe cambiar una línea de código para pasar este desafío. La función `getTea()` debe llamarse y almacenarse en la variable `tea4TeamFCC` . Asegúrese de leer la función `getTea()` y entender exactamente lo que hace. La función toma en una variable - `numOfCups` . `teaCups[]` se elabora una matriz `teaCups[]` y se configura un bucle for para contar el número de tazas pasadas a la función. Luego, se empuja una nueva taza de té a la matriz en cada iteración del bucle for.

De este modo, se `getTea()` una matriz llena de la cantidad de tazas de té que originalmente se pasaron a la función `getTea()` .

### Solución

```javascript
/** 
 * A long process to prepare tea. 
 * @return {string} A cup of tea. 
 **/ 
 const prepareTea = () => 'greenTea'; 
 
 /** 
 * Get given number of cups of tea. 
 * @param {number} numOfCups Number of required cups of tea. 
 * @return {Array<string>} Given amount of tea cups. 
 **/ 
 const getTea = (numOfCups) => { 
  const teaCups = []; 
 
  for(let cups = 1; cups <= numOfCups; cups += 1) { 
    const teaCup = prepareTea(); 
    teaCups.push(teaCup); 
  } 
 
  return teaCups; 
 }; 
 
 // Add your code below this line 
 
 const tea4TeamFCC = getTea(40); // :( 
 
 // Add your code above this line 
 
 console.log(tea4TeamFCC); 

```