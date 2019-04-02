---
title: Catch Unclosed Parentheses, Brackets, Braces and Quotes
localeTitle: Pegar parênteses, suportes, chaves e citações não fechadas
---
## Pegar parênteses, suportes, chaves e citações não fechadas

O método reduce () reduz um array a um único valor. Se você não estiver familiarizado com isso, o código a seguir mostra um exemplo do uso do método:
```
const array1 = [1, 2, 3, 4]; 
 console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));  // expected output: 10 
```

Você também pode definir o argumento para o método reduce como uma variável ou constante e entregá-lo à função, por exemplo,
```
const array1 = [1, 2, 3, 4]; 
 const reducer = (accumulator, currentValue) => accumulator + currentValue; 
 
 // 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer));      // expected output: 10 
 
 // 5 + 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer, 5));   // expected output: 15 
```

Você pode ver e executar este código em [Array.prototype.reduce ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) .

## Solução:

```javascript
let myArray = [1, 2, 3]; 
 let arraySum = myArray.reduce((previous, current) =>  previous + current); 
 console.log(`Sum of array values is: ${arraySum}`); 

```