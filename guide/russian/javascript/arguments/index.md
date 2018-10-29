---
title: Arguments
localeTitle: аргументы
---
Объект arguments - это **объект, подобный массиву** _(в том, что структура объекта аналогична структуре массива, однако он не должен рассматриваться как массив, поскольку он обладает всеми функциональными возможностями объекта), в_ котором хранятся все аргументы, которые вы передается функции и, в частности, принадлежит этой функции. Если вы должны были передать 3 аргумента функции, скажем, `storeNames()` , эти 3 аргумента будут храниться внутри объекта с **аргументами,** и это будет выглядеть так, когда мы передадим аргументы `storeNames("Mulder", "Scully", "Alex Krycek")` к нашей функции:

*   Сначала мы объявляем функцию и возвращаем объект arguments.

\`\` \`Javascript  
function storeNames () {return arguments; }
```
*   Then, when we execute that function with **n arguments**, 3 in this case, it will return the object to us and it will **look like** an array. We can convert it to an array, but more on that later... 
```

Javascript // Если мы выполним следующую строку в консоли: storeNames («Малдер», «Скалли», «Алекс Крайчек»); // Выход будет {'0': 'Mulder', '1': 'Scully', '2': 'Alex Kryceck'}
```
If you want to know more about this, such as converting it to an array or the optimization problem that comes with using the _slice(_) method and how to solve it, click on **read more** (Gitter Chat Only). 
 
 ## Treat it as an array 
 
 You can invoke arguments by using `arguments[n]` (where _n_ is the index of the argument in the array-like object) but if you want to use it as an array for iteration purposes or applying array methods to it, you need to _convert it to an array_ by declaring a variable and using the Array.prototype.slice.call method (because _arguments_ is not an array): 
```

Javascript var args = Array.prototype.slice.call (аргументы);

// или способ es6: var args = Array.from (аргументы)
```
Since **slice()** has two (the parameter **end** is optional) parameters, you can grab a certain portion of the arguments by specifying (using the _slice.call()_ method renders these two parameters optional, not just _end_) the beginning and the ending of your portion; check out the following code: 
```

Javascript функция getGrades () { var args = Array.prototype.slice.call (аргументы, 1, 3); return args; }

// Давайте выводим это! console.log (getGrades (90, 100, 75, 40, 89, 95));

// ВЫХОД ДОЛЖЕН БЫТЬ: // // \[100, 75\] <- Почему? Поскольку он начинался с индекса 1 и останавливался при индексе 3 // поэтому индекс 3 (40) не был учтен. // // Если мы удалим параметр «3», оставив только (аргументы, 1), мы получим // каждый аргумент из индекса 1: \[100, 75, 40, 89, 95\].
```
### Optimization issues with Array.slice() 
 
 There is a little problem, it's not recommended to use slice in the arguments object (optimization reasons)... 
 
 > **Important**: You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object. 
 > 
 > _by_ **_Mozilla Developer Network_** <a href='https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Functions/arguments' target='_blank' rel='nofollow'>(reference)<a> 
 
 
 
 So, what other method is available to convert _arguments_ to an array? I recommend the for-loop (not the for-in loop), you can do it like this: 
```

Javascript var args = \[\]; // Пустой массив, сначала. for (var i = 0; i <arguments.length; i ++) { args.push (аргументы \[I\]) } // Теперь «args» - это массив, содержащий ваши аргументы. \`\` \`

Для получения дополнительной информации по вопросам оптимизации:  
Убийцы оптимизации: [управляющие аргументы](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)

### Параметр остатка ES6 как способ обхода объекта аргументов

В ES2015 / ES6 можно использовать параметр rest ( `...` ) вместо объекта arguments в большинстве мест. Скажем, у нас есть следующая функция (не-ES6):
```
function getIntoAnArgument() { 
    var args = arguments.slice(); 
    args.forEach(function(arg) { 
        console.log(arg); 
    }); 
 } 
```

Эту функцию можно заменить в ES6:
```
function getIntoAnArgument(...args) { 
    args.forEach(arg => console.log(arg)); 
 } 
```

обратите внимание, что мы также использовали функцию стрелки для сокращения обратного вызова forEach!

Объект arguments недоступен внутри тела функции стрелки.

Параметр rest всегда должен быть последним аргументом в определении вашей функции.  
`function getIntoAnArgument(arg1, arg2, arg3, ...restOfArgs /*no more arguments allowed here*/) { //function body }`