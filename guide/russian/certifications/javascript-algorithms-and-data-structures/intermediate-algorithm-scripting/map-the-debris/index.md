---
title: Map the Debris
localeTitle: Карта обломков
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Первое, что нужно сделать, это познакомиться с программой, зная, что такое орбитальный период. Вы должны вернуть новый массив, который преобразует среднюю высоту элемента в их орбитальные периоды. Детали, которые обычно находили сложными, находят формулу, реализуют ее и для некоторых людей, изменяя объекты ключом. Тем не менее, что-то, что не очень понятно, заключается в том, что ваша программа должна иметь возможность проверять любое количество объектов в массиве; Это то, что проверено на второй части.

#### Связанные ссылки

*   [Орбитальный период](https://en.wikipedia.org/wiki/Orbital_period)
*   [Объекты JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
*   [Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
*   [JS Math Pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   [Math.sqrt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
*   [Math.round ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Необходимая формула:

![](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e212370f07c55165ff69f318ee1eed24779c7532.png)

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Используйте `Math.round()` для округления до следующего целого числа в соответствии с запросом. Использование `Math.ceil()` позволит вам пройти первый тест, но не `Math.ceil()` второй.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Узнайте, как удалить и добавить ключ к объекту JavaScript.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
  var a = 2 * Math.PI; 
  var newArr = []; 
  var getOrbPeriod = function(obj) { 
    var c = Math.pow(earthRadius + obj.avgAlt, 3); 
    var b = Math.sqrt(c / GM); 
    var orbPeriod = Math.round(a * b); 
    delete obj.avgAlt; 
    obj.orbitalPeriod = orbPeriod; 
    return obj; 
  }; 
 
  for (var elem in arr) { 
    newArr.push(getOrbPeriod(arr[elem])); 
  } 
 
  return newArr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLow/0)

### Код Объяснение:

*   **GM** и **earthRadius** даны нам.
*   Чтобы упростить редактирование и чтение кода, каждая часть уравнения записывается отдельно.
*   Создайте **newArr** для хранения `orbPeriod` .
*   **a** - 2 раза pi. Часть, которая является константой, находится в глобальном масштабе, а остальная часть - часть функции.
*   Создайте функцию `gerOrbPeriod()` , которая выполнит необходимую работу для любого количества объектов.
*   **c** является ( **earthRadius** + **avgAlt** ) в куб.
*   **b** - квадратный корень из **c,** деленный на **GM** .
*   Создайте **orbPeriod** для сохранения продукта **a** и **b** , используя функцию `Math.round()` применяемую для округления до следующего целого числа.
*   Затем мы удаляем ключ **avgAlt** и добавляем новый ключ и его значение.

#### Связанные ссылки

*   [JS For In Loop](http://forum.freecodecamp.com/t/javascript-for-in-loop/14665)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  //Looping through each key in arr object 
  for(var prop in arr) { 
    //Rounding off the orbital period value 
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)); 
    //deleting the avgAlt property 
    delete arr[prop].avgAlt; 
    //adding orbitalPeriod property 
    arr[prop].orbitalPeriod = orbitalPer; 
  } 
 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLoy/0)

### Код Объяснение:

*   **GM** и **earthRadius** даны нам.
*   Цикл `for..in` используется для повторения каждого значения в заданном массиве **arr** .
*   **orbitalPer** содержит значение орбитального периода для каждой итерации, рассчитанной по формуле.
*   Ключ **avgAlt** удаляется, а найденный **orbitalPer** присваивается в **обр** .

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  // Loop through each item in the array arr 
  arr.forEach(function(item) { 
    // Calculate the Orbital period value 
    var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)); 
    //Delete the avgAlt property 
    delete item.avgAlt; 
    //Add orbitalPeriod property 
    item.orbitalPeriod = tmp; 
  }); 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLoz/0)

### Код Объяснение:

*   **GM** и **earthRadius** даны нам.
*   Метод `forEach()` используется для выполнения функции один раз для элемента ( **элемента** ) в **обр** .
*   **tmp** содержит значение орбитального периода для каждого элемента, вычисленного по формуле.
*   Ключ **avgAlt** удаляется, и найденный орбитальный период ( **tmp** ) присваивается ключу **orbitalPeriod** .

#### Связанные ссылки

*   [Прототип JS Array для всех](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.