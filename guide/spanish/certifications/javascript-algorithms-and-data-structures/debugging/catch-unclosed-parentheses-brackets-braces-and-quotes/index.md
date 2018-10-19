---
title: Catch Unclosed Parentheses, Brackets, Braces and Quotes
localeTitle: Captura paréntesis, corchetes, llaves y citas sin cerrar
---
## Captura paréntesis, corchetes, llaves y citas sin cerrar

El método reduce () reduce una matriz a un solo valor. Si no está familiarizado con él, el siguiente código muestra un ejemplo de cómo usar el método:
```
const array1 = [1, 2, 3, 4]; 
 console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));  // expected output: 10 
```

También puede definir el argumento del método de reducción como una variable o constante y entregarlo a la función, por ejemplo,
```
const array1 = [1, 2, 3, 4]; 
 const reducer = (accumulator, currentValue) => accumulator + currentValue; 
 
 // 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer));      // expected output: 10 
 
 // 5 + 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer, 5));   // expected output: 15 
```

Puede ver y ejecutar este código en [Array.prototype.reduce ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) .

## Solución:

```javascript
let myArray = [1, 2, 3]; 
 let arraySum = myArray.reduce((previous, current) =>  previous + current); 
 console.log(`Sum of array values is: ${arraySum}`); 

```