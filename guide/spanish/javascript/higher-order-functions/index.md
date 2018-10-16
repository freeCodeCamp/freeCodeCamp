---
title: Higher Order Functions
localeTitle: Funciones de orden superior
---
## Funciones de orden superior

Una función de orden superior es cualquier función que devuelve una función cuando se ejecuta, toma una función como uno o más de sus argumentos, o ambos. Si ha usado alguno de los métodos de `Array` como `map` o `filter` , o si ha pasado una función de devolución de llamada a `$.get` jQuery, ya ha trabajado con las Funciones de orden superior.

Cuando utiliza `Array.map` , proporciona una función como único argumento, que se aplica a todos los elementos contenidos en la matriz.

```javascript
var arr = [ 1, 2, 3 ]; 
 
 var arrDoubled = arr.map(function(num) { 
  return num * 2; 
 }); 
 
 console.log(arrDoubled); // [ 2, 4, 6 ] 
```

Las funciones de orden superior también pueden devolver una función. Por ejemplo, puedes hacer una función llamada `multiplyBy` que toma un número y devuelve una función que multiplica otro número que proporcionas por el primer número proporcionado. Puede utilizar este enfoque para crear una función `multiplyByTwo` para pasar a `Array.map` . Esto te dará el mismo resultado que viste anteriormente.

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

Consulte la guía de [cierres](https://guide.freecodecamp.org/javascript/closures) para obtener más información sobre cómo `multiplyByTwo` mantiene una referencia a `num1` en el ejemplo anterior.

[Más información sobre cierres](https://eloquentjavascript.net/05_higher_order.html)