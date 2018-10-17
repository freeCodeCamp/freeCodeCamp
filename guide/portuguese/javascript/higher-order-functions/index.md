---
title: Higher Order Functions
localeTitle: Funções de ordem superior
---
## Funções de ordem superior

Uma função de ordem superior é qualquer função que retorna uma função quando executada, assume uma função como um ou mais de seus argumentos ou ambos. Se você usou algum dos métodos `Array` como `map` ou `filter` , ou passou uma função de callback para o `$.get` do jQuery, você já trabalhou com Higher Order Functions.

Quando você usa `Array.map` , você fornece uma função como seu único argumento, que se aplica a todos os elementos contidos na matriz.

```javascript
var arr = [ 1, 2, 3 ]; 
 
 var arrDoubled = arr.map(function(num) { 
  return num * 2; 
 }); 
 
 console.log(arrDoubled); // [ 2, 4, 6 ] 
```

Funções de ordem mais alta também podem retornar uma função. Por exemplo, você pode fazer uma função chamada `multiplyBy` que recebe um número e retorna uma função que multiplica outro número fornecido pelo primeiro número fornecido. Você pode usar essa abordagem para criar uma função `multiplyByTwo` para passar para `Array.map` . Isso lhe dará o mesmo resultado que você viu acima.

```javascript
function multiplyBy(num1) { 
  return function(num2) { 
    return num1 * num2; 
  } 
 } 
 
 var multiplyByTwo = multiplyBy(2); 
 
 var arr = [ 1, 2, 3 ]; 
 
 var arrDoubled = arr.map(multiplyByTwo); 
 
 console.log(arrDoubled); // [ 2, 4, 6 ] 
```

Consulte o guia sobre [Closures](https://guide.freecodecamp.org/javascript/closures) para obter mais informações sobre como o `multiplyByTwo` mantém uma referência a `num1` no exemplo acima.

[Mais informações sobre Closures](https://eloquentjavascript.net/05_higher_order.html)