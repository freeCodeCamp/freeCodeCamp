---
title: Spread syntax
localeTitle: Синтаксис распространения
---
## Синтаксис распространения

Синтаксис Spread позволяет вызывать итерабельность, такую ​​как выражение массива или строку, в местах, где ожидаются нулевые или более аргументы (для вызовов функций) или элементы (для литералов массива), или выражение объекта, которое должно быть расширено в местах, где ожидается нуль ,

### Синтаксис

Для вызовов функций:
```
myFunction(...iterableObj); 
```

Для литералов или строк массива:
```
[...iterableObj, '4', 'five', 6]; 
```

### Примеры

#### Распространение вызовов функций

#### Заменить заявку

Обычно используется `Function.prototype.apply` в тех случаях, когда вы хотите использовать элементы массива в качестве аргументов функции.
```
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction.apply(null, args); 
```

С синтаксисом распространения вышесказанное может быть записано как:
```
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction(...args); 
```

Любой аргумент в списке аргументов может использовать синтаксис распространения и его можно использовать несколько раз.
```
function myFunction(v, w, x, y, z) { } 
 var args = [0, 1]; 
 myFunction(-1, ...args, 2, ...[3]); 
```

### Подать заявку на новые

При вызове конструктора с `new` невозможно **напрямую** использовать массив и `apply` ( `apply` `[[Call]]` а не `[[Construct]]` ). Тем не менее, массив можно легко использовать с новой благодарностью за распространение синтаксиса:
```
var dateFields = [1970, 0, 1];  // 1 Jan 1970 
 var d = new Date(...dateFields); 
```

Чтобы использовать новое с массивом параметров без синтаксиса распространения, вам придется **косвенно** это делать через частичное приложение:
```
function applyAndNew(constructor, args) { 
   function partial () { 
      return constructor.apply(this, args); 
   }; 
   if (typeof constructor.prototype === "object") { 
      partial.prototype = Object.create(constructor.prototype); 
   } 
   return partial; 
 } 
 
 
 function myConstructor () { 
   console.log("arguments.length: " + arguments.length); 
   console.log(arguments); 
   this.prop1="val1"; 
   this.prop2="val2"; 
 }; 
 
 var myArguments = ["hi", "how", "are", "you", "mr", null]; 
 var myConstructorWithArguments = applyAndNew(myConstructor, myArguments); 
 
 console.log(new myConstructorWithArguments); 
 // (internal log of myConstructor):           arguments.length: 6 
 // (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null] 
 // (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"} 
```

### Распространение в литералах массива

#### Более мощный литерал массива

Без синтаксиса распространения для создания нового массива с использованием существующего массива в качестве одной его части синтаксис литерального массива уже не является достаточным, и вместо этого необходимо использовать императивный код, используя комбинацию push, splice, concat и т. Д. С синтаксисом распространения это становится намного более кратким:
```
var parts = ['shoulders', 'knees']; 
 var lyrics = ['head', ...parts, 'and', 'toes']; 
 // ["head", "shoulders", "knees", "and", "toes"] 
```

Так же, как распространение для списков аргументов, `...` можно использовать в любом месте литерала массива, и его можно использовать несколько раз.

### Скопировать массив
```
var arr = [1, 2, 3]; 
 var arr2 = [...arr]; // like arr.slice() 
 arr2.push(4); 
 
 // arr2 becomes [1, 2, 3, 4] 
 // arr remains unaffected 
```

> **Примечание** . Синтаксис Spread эффективно идет на один уровень глубины при копировании массива. Поэтому он может быть непригоден для копирования многомерных массивов, как показано в следующем примере (это то же самое с Object.assign () и синтаксисом распространения).
```
var a = [[1], [2], [3]]; 
 var b = [...a]; 
 b.shift().shift(); // 1 
 // Now array a is affected as well: [[], [2], [3]] 
```

### Лучший способ объединить массивы

`Array.concat` часто используется для конкатенации массива в конец существующего массива. Без синтаксиса распространения это делается как:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Append all items from arr2 onto arr1 
 arr1 = arr1.concat(arr2); 
```

С синтаксисом распространения это становится:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr1, ...arr2]; 
```

`Array.unshift` часто используется для вставки массива значений в начале существующего массива. Без синтаксиса распространения это делается как:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Prepend all items from arr2 onto arr1 
 Array.prototype.unshift.apply(arr1, arr2) // arr1 is now [3, 4, 5, 0, 1, 2] 
```

С синтаксисом распространения это становится:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2] 

```