---
title: Everything Be True
localeTitle: Все верно
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d69c7f2d86b8902a9bc83653d95932115de47e6a.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Программе необходимо проверить, является ли второй аргумент [истинным](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) элементом, и он должен проверить это для каждого объекта в первом аргументе.

#### Связанные ссылки

*   [JavaScript Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [Аргументы JavaScript](http://forum.freecodecamp.com/t/javascript-arguments/14283.md)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Не забудьте перебрать первый аргумент, чтобы проверить каждый объект.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Только если все они будут истиной, мы вернемся к истине, поэтому убедитесь, что все они проверяют.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

> _попытаться решить проблему сейчас_

Вы можете использовать функции циклов или обратных вызовов, существует несколько способов решения этой проблемы.

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решения впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

**Использование for-in loop & hasOwnProperty**
```
function truthCheck(collection, pre) { 
  // Create a counter to check how many are true. 
  var counter = 0; 
  // Check for each object 
  for (var c in collection) { 
    // If it is has property and value is truthy 
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) { 
      counter++; 
    } 
  } 
  // Outside the loop, check to see if we got true for all of them and return true or false 
  return counter == collection.length; 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnw/0)

### Код Объяснение:

*   Сначала я создаю счетчик, чтобы проверить, сколько случаев действительно истинно.
*   Затем проверьте каждый объект, если значение правдиво
*   Вне цикла я проверяю, имеет ли переменная счетчика то же значение, что и длина **коллекции** , если true, а затем возвращает **true** , в противном случае возвращает **false**

#### Связанные ссылки

*   [JS Loops](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [Object.prototype.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

**Использование Array.every ()**
```
function truthCheck(collection, pre) { 
  return collection.every(function (element) { 
    return element.hasOwnProperty(pre) && Boolean(element[pre]); 
  }); 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLny/0)

### Код Объяснение:

*   Использует собственный «каждый» метод, чтобы проверить, проходят ли все элементы массива в тесте.
*   Эта ссылка поможет [Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### Связанные ссылки

*   [JS Array.prototype.every ()](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)
*   [MDN Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function truthCheck(collection, pre) { 
  // Is everyone being true? 
  return collection.every(obj => obj[pre]); 
 } 
 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/E2u6/0)

### Код Объяснение:

*   Для _каждого_ объекта в массиве `collection` проверьте правдоподобие свойства объекта, переданного в параметре `pre`
*   `Array#every` метод внутренне проверяет, является ли значение, возвращаемое из обратного вызова, правдивым.
*   Возвращает `true` если оно передается для _каждого_ объекта. В противном случае верните `false` .

#### Связанные ссылки

*   [`Array#every`](http://devdocs.io/javascript/global_objects/array/every)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.