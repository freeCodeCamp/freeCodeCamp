---
title: Array.prototype.sort
localeTitle: Array.prototype.sort
---
## Array.prototype.sort

Este método ordena los elementos de una matriz en su lugar y devuelve la matriz.

El método `sort()` sigue el **orden ASCII** !

índice | carácter --- | --- 33 |! 34 | " 35 | # 36 | $ 37 |%

```js
var myArray = ['#', '!']; 
 var sortedArray = myArray.sort();   // ['!', '#'] because in the ASCII table "!" is before "#" 
 
 myArray = ['a', 'c', 'b']; 
 console.log(myArray.sort()); // ['a', 'b', 'c'] 
 console.log(myArray) // ['a', 'b', 'c'] 
 
 myArray = ['b', 'a', 'aa']; 
 console.log(myArray.sort());   // ['a', 'aa', 'b'] 
 
 myArray = [1, 2, 13, 23]; 
 console.log(myArray.sort());   // [1, 13, 2, 23] numbers are treated like strings! 
```

# Uso avanzado

El método `sort()` también puede aceptar un parámetro: `array.sort(compareFunction)`

### Por ejemplo

```js
function compare(a, b){ 
  if (a < b){return -1;} 
  if (a > b){return 1;} 
  if (a === b){return 0;} 
 } 
 
 var myArray = [1, 2, 23, 13]; 
 console.log(myArray.sort()); // [ 1, 13, 2, 23 ] 
 console.log(myArray.sort(compare));   // [ 1, 2, 13, 23 ] 
 
 myArray = [3, 4, 1, 2]; 
 sortedArray = myArray.sort(function(a, b){.....});   // it depends from the compareFunction 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)