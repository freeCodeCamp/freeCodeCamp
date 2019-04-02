---
title: Array.prototype.sort
localeTitle: Array.prototype.sort
---
## Array.prototype.sort

Этот метод сортирует элементы массива на месте и возвращает массив.

Метод `sort()` следует **порядку ASCII** !

Индекс | характер --- | --- 33 |! 34 |» 35 | # 36 | $ 37 |%

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

# Расширенное использование

Метод `sort()` также может принимать параметр: `array.sort(compareFunction)`

### Например

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

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)