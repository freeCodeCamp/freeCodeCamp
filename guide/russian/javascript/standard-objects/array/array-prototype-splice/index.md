---
title: Array.prototype.splice
localeTitle: Array.prototype.splice
---
## Array.prototype.splice

Метод splice похож на [Array.prototype.slice](https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-slice) , но в отличие от `slice()` он мутирует массив, на который он вызывается. Он также отличается тем, что его можно использовать для добавления значений в массив, а также для их удаления.

### параметры

`splice()` может принимать один или несколько

#### сращивать (начало)

Если включен только один параметр, то `splice(start)` удалит все элементы массива от `start` до конца массива.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(2); 
 // exampleArray is now ['first', 'second']; 
```

Если `start` отрицательно, оно будет отсчитываться назад от конца массива.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(-1); 
 // exampleArray is now ['first', 'second', 'third']; 
```

#### сращивание (start, deleteCount)

Если включен второй параметр, то `splice(start, deleteCount)` удалит элементы `deleteCount` из массива, начиная с `start` .

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth']; 
```

#### splice (start, deleteCount, newElement1, newElement2, ....)

Если включено более двух параметров, дополнительными параметрами будут новые элементы, которые добавляются в массив. Расположение этих добавленных элементов начнется с `start` .

Элементы могут быть добавлены без удаления каких-либо элементов, передав `0` в качестве второго параметра.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 0, 'new 1', 'new 2'); 
 // exampleArray is now ['first', 'new 1', 'new 2', 'second', 'third', 'fourth'] 
```

Элементы также могут быть заменены.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2, 'new second', 'new third'); 
 // exampleArray is now ['first', 'new second', 'new third', 'fourth'] 
```

### Возвращаемое значение

В дополнение к изменению массива, на который он вызывается, `splice()` также возвращает массив, содержащий удаленные значения. Это способ разрезать массив на два разных массива.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 let newArray = exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth'] 
 // newArray is ['second', 'third'] 
```

#### Дополнительная информация:

[MDN - Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)