---
title: Largest palindrome product
localeTitle: Maior produto de palíndromo
---
## Problema 4: Maior produto de palíndromo

### Método:

*   Um número palíndromo é aquele que quando invertido lê o mesmo.
*   O maior número obtido a partir do produto de dois números de 3 dígitos é `999 * 999` , portanto, podemos fazer um loop que começa por produzir o maior número e verificar se esse número é palíndromo ou não.

### Solução:

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

*   [Executar código](https://repl.it/@ezioda004/Problem-4-Largest-palindrome-product)

### Referências:

*   [Wikipedia](https://en.wikipedia.org/wiki/Palindromic_number)