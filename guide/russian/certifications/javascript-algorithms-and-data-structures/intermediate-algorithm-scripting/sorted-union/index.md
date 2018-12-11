---
title: Sorted Union
localeTitle: Сортированный союз
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Программа должна возвращать новый массив уникальных значений из двух исходных массивов в том порядке, в котором они отображаются. Таким образом, сортировка не требуется, и не должно быть никаких дубликатов.

#### Связанные ссылки

*   [Аргументы JS](http://forum.freecodecamp.com/t/javascript-arguments/14283)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Поскольку вы не знаете, сколько параметров было передано, было бы лучше всего перебрать **аргументы** перед циклом через массивы.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Нет необходимости использовать циклы. Вы можете использовать такие функции, как `map()` , `reduce()` или другие, если хотите.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Вам нужно будет проверить, находится ли текущее значение уже в массиве, который будет возвращен для каждого значения.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function uniteUnique(arr1, arr2, arr3) { 
  // Creates an empty array to store our final result. 
  var finalArray = []; 
 
  // Loop through the arguments object to truly made the program work with two or more arrays 
  // instead of 3. 
  for (var i = 0; i < arguments.length; i++) { 
    var arrayArguments = arguments[i]; 
 
    // Loops through the array at hand 
    for (var j = 0; j < arrayArguments.length; j++) { 
      var indexValue = arrayArguments[j]; 
 
      // Checks if the value is already on the final array. 
      if (finalArray.indexOf(indexValue) < 0) { 
        finalArray.push(indexValue); 
      } 
    } 
  } 
 
  return finalArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnM/0)

### Код Объяснение:

*   Создайте пустой массив **finalResult,** чтобы сохранить окончательный результат.
*   **Прокрутите** объект **аргументов** во внешнем цикле и сохраните его в **arrayArguments** .
*   Внутренний цикл используется для циклического перемещения отдельных элементов массива.
*   Если элемент еще не существует в **finalArray** , добавьте его.
*   Возвращение **finalArray** .

#### Связанные ссылки

*   [JS для пояснений](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## Альтернативное базовое кодовое решение

```javascript
function uniteUnique(arr) { 
  var args = [...arguments]; 
  var result = []; 
  for(var i = 0; i < args.length; i++) { 
    for(var j = 0; j < args[i].length; j++) { 
       if(!result.includes(args[i][j])) { 
        result.push(args[i][j]); 
      } 
    } 
  } 
  return result; 
 } 
 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function uniteUnique(arr1, arr2, arr3) { 
 var newArr; 
 //Convert the arguments object into an array 
  var args = Array.prototype.slice.call(arguments); 
  //Use reduce function to flatten the array 
  newArr = args.reduce(function(arrA,arrB){ 
  //Apply filter to remove the duplicate elements in the array 
    return arrA.concat(arrB.filter(function(i){ 
      return arrA.indexOf(i) === -1; 
    })); 
  }); 
 
   return newArr; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnO/0)

### Код Объяснение:

*   **аргумент** объект преобразуется в массив с помощью `slice()` .
*   Функция `reduce()` используется для выравнивания массива, т. е. для каждого элемента, находящегося в массиве (или вложенных массивах), извлекает его элементы в одномерный массив.
*   После сглаживания массива `filter()` используется для удаления повторяющихся элементов из **newArr** .

#### Связанные ссылки

*   [JS Array Prototype Slice](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [Сокращение прототипа JS](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Простой прототип JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [Фильтр прототипов JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function uniteUnique() { 
  var concatArr = []; 
  var i = 0; 
  while (arguments[i]){ 
    concatArr = concatArr.concat(arguments[i]); i++; 
  } 
  uniqueArray = concatArr.filter(function(item, pos) { 
    return concatArr.indexOf(item) == pos; 
  }); 
  return uniqueArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnN/0)

### Код Объяснение:

*   Количество аргументов может изменяться динамически, поэтому нам не нужно беспокоиться о том, чтобы предоставить нам функцию `uniteUnique()` с аргументами вообще.
*   Мы используем `while` цикл , чтобы объединить все аргументы в один массив называется **concatArr.**
*   Мы используем `filter()` для удаления повторяющихся элементов путем проверки индекса каждого элемента и удаления одинаковых элементов с разными позициями.
*   Заказ будет сохранен здесь.

#### Связанные ссылки

*   JS While Loop

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Альтернативное решение для кода с использованием ES2015
```
//jshint esversion:6 
 
 function uniteUnique(...arrays) { 
 
  //make an array out of the given arrays and flatten it (using the spread operator) 
  const flatArray = [].concat(...arrays); 
 
  // create a Set which clears any duplicates since it's a regulat set and not a multiset 
  return [...new Set(flatArray)]; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CcWk/0)

### Код Объяснение:

*   Сначала мы используем `concat()` с пустым массивом `<a href='http://exploringjs.com/es6/ch_maps-sets.html#_set' target='_blank' rel='nofollow'>]` в качестве отправной точки и оператор распространения `...` для создания массива из объекта Arguments и сглаживания его в одно и то же время
*   то мы используем новый объект **Set** ES2015 для хранения только уникальных значений
*   (чтобы узнать больше о наборах, прочитайте \[здесь\]

#### Связанные ссылки

*   [Array.prototype.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [аргументы](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
*   [Задавать](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.