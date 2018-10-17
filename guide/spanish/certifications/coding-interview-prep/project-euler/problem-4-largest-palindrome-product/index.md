---
title: Largest palindrome product
localeTitle: El producto de palíndromo más grande.
---
## Problema 4: el producto palíndromo más grande

### Método:

*   Un número palindrómico es el que, cuando se invierte, lee lo mismo.
*   El número más grande obtenido del producto de dos números de 3 dígitos es `999 * 999` , por lo que podemos hacer un ciclo que comience produciendo el número más grande y verificar si ese número es palindrómico o no.

### Solución:

```js
function largestPalindromeProduct(n) { 
 
  //To get the maximum n digit number, + operator type castes String to Number type 
  let max = +[...Array(n)].reduce((a, c) => a+=9, ""); 
 
  //Next we get minimum n digit number from the max 
  let min = (max+1)/10; 
 
  //To store the result 
  let res = []; 
 
  //Starting the loop from max to min 
  for (let i = max; i >= min; i--){ 
 
    //Another loop 
    for (let j =  max; j >= min; j--){ 
 
      //Getting the product 
      let num = i*j; 
 
      //Reversing the number 
      let numReverse = [...String(num)].reverse().join(''); 
 
      //Checking for palindromic number 
      if (num == numReverse) { 
 
        //Pushing the number into array and breaking the loop for efficiency 
        res.push(num); 
        break; 
      } 
    } 
  } 
 
  // Returning the maximum of the result array 
  return Math.max(...res); 
 } 
```

*   [Ejecutar código](https://repl.it/@ezioda004/Problem-4-Largest-palindrome-product)

### Referencias:

*   [Wikipedia](https://en.wikipedia.org/wiki/Palindromic_number)