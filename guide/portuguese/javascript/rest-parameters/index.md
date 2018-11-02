---
title: Rest Parameters
localeTitle: Parâmetros de descanso
---
## Parâmetros de descanso

No ES6, a sintaxe do resto do parâmetro `...` permite reunir um número indefinido de argumentos em uma matriz.

Mesmo que pareçam iguais, ele faz o oposto do operador de propagação, que pega cada item de um iterável e os espalha em seus valores individuais.

### Sintaxe

```js
function myFunc(...args) { 
  console.log(args); 
 } 
 
 myFunc( 1, 2, 3, 4, 5);       // [1,2,3,4,5] 
```

Você pode prefixar o último parâmetro de uma função com `...` quando quiser fazer algo com os parâmetros iniciais e depois tratar todos os demais parâmetros de maneira diferente.

```js
function convertCurrency(rate, fee, ...amounts) { 
  return amounts.map(amount => (amount * rate) + fee); 
 } 
 
 convertCurrency(0.89, 2.5, 100, 250, 75, 150, 300); // [ 91.5, 225, 69.25, 136, 269.5 ] 
```

O `...` permite reunir o restante dos argumentos, se houver algum, em uma matriz.

### A diferença entre os parâmetros de descanso e o objeto de argumentos

`arguments` é um objeto do tipo array, disponível dentro de funções, que contém os argumentos passados ​​para essas funções. É chamado de "array-like" porque não possui todos os métodos `.forEach()` de um array, como `.forEach()` e `.map()` .

Os parâmetros restantes são uma matriz, com todos os métodos da matriz incluídos.