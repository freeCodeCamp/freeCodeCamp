---
title: Catch Unclosed Parentheses, Brackets, Braces and Quotes
localeTitle: Поймать скошенные скобки, скобки, скобки и цитаты
---
## Поймать скошенные скобки, скобки, скобки и цитаты

Метод reduce () уменьшает массив до одного значения. Если вы не знакомы с ним, следующий код показывает пример использования метода:
```
const array1 = [1, 2, 3, 4]; 
 console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));  // expected output: 10 
```

Вы также можете определить аргумент метода reduce как переменную или константу и передать ее функции, например,
```
const array1 = [1, 2, 3, 4]; 
 const reducer = (accumulator, currentValue) => accumulator + currentValue; 
 
 // 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer));      // expected output: 10 
 
 // 5 + 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer, 5));   // expected output: 15 
```

Вы можете увидеть и запустить этот код в [Array.prototype.reduce ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) .

## Решение:

```javascript
let myArray = [1, 2, 3]; 
 let arraySum = myArray.reduce((previous, current) =>  previous + current); 
 console.log(`Sum of array values is: ${arraySum}`); 

```