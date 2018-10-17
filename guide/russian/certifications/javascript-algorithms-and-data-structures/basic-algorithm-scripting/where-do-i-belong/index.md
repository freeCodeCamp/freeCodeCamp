---
title: Where Do I Belong
localeTitle: Где я принадлежу
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Это может быть сложной проблемой для понимания. Вам нужно найти, где в массиве число должно быть вставлено по порядку и вернуть индекс, куда он должен идти.

#### Связанные ссылки

*   [JS Array Сортировать](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Первое, что нужно сделать, это отсортировать массив от более низкого до большего, просто чтобы сделать код проще. Здесь происходит сортировка, ей нужна функция обратного вызова, поэтому вам нужно ее создать.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

После сортировки массива, просто проверьте первое число, которое больше, и верните индекс.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Если для этого номера нет индекса, вам также придется иметь дело с этим делом.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function getIndexToIns(arr, num) { 
  arr.sort(function(a, b) { 
    return a - b; 
  }); 
 
  for (var a = 0; a < arr.length; a++) { 
    if (arr[a] >= num) 
      return a; 
  } 
 
  return arr.length; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/36)

## Код Объяснение:

*   Сначала я сортирую массив, используя `.sort(callbackFuntion)` чтобы отсортировать его по наименьшему и наивысшему, слева направо.
*   Затем я использую цикл for для сравнения элементов в массиве, начиная с самого маленького. Когда элемент массива больше числа, с которым мы сравниваем, мы возвращаем индекс как целое число.

#### Связанные ссылки

*   [ParseInt ()](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function getIndexToIns(arr, num) { 
  // Find my place in this sorted array. 
  var times = arr.length; // runs the for loop once for each thing in the array 
  var count = 0; 
  for (var i=0;i<times;i++){ 
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num 
    return count; // the above equals num's position in a sorted array 
 } 
 
 getIndexToIns([40, 60], 50); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/2547)

## Код Объяснение:

*   Я не сортирую массив arr arr
*   Я запускаю подсчет для цикла, когда числовой ввод больше, чем номер входа arr.
*   Это число эквивалентно тому, что позиция num будет в отсортированном массиве.

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

by [@HarinaPana](/u/harinapana)
```
function getIndexToIns(arr, num) { 
 
  arr.sort(function(a, b) { 
  return a - b; 
  }); 
 
  var i = 0; 
  while (num > arr[i]) { 
  i++; 
  } 
 
  return i; 
 } 
 
 getIndexToIns([40, 60], 50); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/4135)

## Код Объяснение:

*   Сортировка существующего массива.
*   Итерации через массив, проверяя, является ли _num_ больше.
*   Цикл будет остановлен, когда _число_ не больше _i_ и вернет последний элемент.

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

by [@faustodc](/u/faustodc)
```
function getIndexToIns(arr, num) { 
  arr.push(num); 
  arr.sort(function(a, b){return ab}); 
  return arr.indexOf(num); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/EB10/1)

## Код Объяснение:

*   Сначала мы добавляем число `num` в массив, используя `push()` который добавляет его как последний элемент массива.
*   Затем мы используем функцию `sort()` с функцией `function(a, b){return ab}` обратного вызова `function(a, b){return ab}` для сортировки чисел в порядке возрастания.
*   Наконец, мы возвращаем позицию или индекс `num` в массиве с помощью функции `indexOf()` .

#### Связанные ссылки

*   [От себя()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Сортировать()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
*   [индекс()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

**Использование `.findIndex()`**
```
function getIndexToIns(arr, num) { 
  // sort and find right index 
  var index = arr.sort((curr, next) => curr > next) 
    .findIndex((currNum)=> num <= currNum); 
  // Returns proper answer 
  return index === -1 ? arr.length : index; 
 } 
 
 getIndexToIns([40, 60], 500); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/63)

## Код Объяснение:

*   Сначала отсортируйте массив в порядке возрастания, в настоящее время это делается с использованием функций массива для минимального размера.
*   После сортировки массива мы непосредственно применяем `.findIndex()` где мы будем сравнивать каждый элемент в массиве, пока не найдем, где `num <= currNum` означает, где число, которое мы хотим вставить, меньше или равно текущему числу число в итерации.
*   Затем мы используем тройные операции, чтобы проверить, получил ли мы возвращенный индекс или `-1` . Мы получаем только `-1` когда индекс не был найден, когда мы получаем false для всех элементов int he array, и для такого случая это означало бы, что `num` должен быть вставлен в конце списка, поэтому мы используем `arr.length` ,

#### Связанные ссылки

*   [Array.findIndex ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [Функции стрелки](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [Тернарный оператор](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:

by [@nivrith](/u/nivrith)
```
function getIndexToIns(arr, num) { 
 
 return arr.concat(num).sort((a,b) => ab).indexOf(num); 
 
 } 
 
 getIndexToIns([1,3,4],2); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/IUJE/0)

## Код Объяснение:

*   Мы используем метод-цепочку для вызова одного метода за другим для решения проблемы в одной строке. Сначала мы объединяем `arr` и `num` , вызывая метод arr.concat (num)
*   Затем мы используем **функцию** `sort()` с **функцией стрелки** обратного вызова `(a, b) => return ab` для сортировки чисел в порядке возрастания
*   Наконец, мы возвращаем позицию или индекс `num` в массиве с помощью `indexOf()`

#### Связанные ссылки

*   [Цепочка метода в JavaScript](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)
*   [CONCAT ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example)
*   [Функции стрелок](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.