---
title: Drop it
localeTitle: Брось это
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/236dcca68bf55be37bf7cbb9646f6e0156b4a3c3.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

В основном, в то время как второй аргумент неверен, вам нужно будет удалить первый элемент слева от массива, который был передан в качестве первого аргумента.

#### Связанные ссылки

*   [Аргумент объекта](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.shift ()](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [Array.slice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Вы можете использовать `Array.prototype.shift()` или фильтр, с которым вам лучше ознакомиться, чтобы решить эту проблему в нескольких строках кода.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Shift возвращает удаленный элемент, который нам действительно не нужен, все, что нам нужно, это модифицированный массив, который остается.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Если вы все еще не можете понять, как его решить с помощью сдвига, попробуйте решить его с помощью фильтра и проверьте, как работает фильтр, если вы знакомы с ним, тогда вы можете сделать код со сдвигом.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function dropElements(arr, func) { 
  // drop them elements. 
  var times = arr.length; 
  for (var i = 0; i < times; i++) { 
    if (func(arr[0])) { 
      break; 
    } else { 
      arr.shift(); 
    } 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLna/0)

### Код Объяснение:

*   Создайте цикл for для проверки каждого элемента.
*   Затем проверьте функцию, заданную, если true, а затем остановите, иначе удалите этот элемент.
*   верните массив.

#### Связанные ссылки

*   [Для циклов](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [Подробнее о циклах](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function dropElements(arr, func) { 
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length); 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnc/0)

### Код Объяснение:

*   Используйте функцию ES6 `findIndex()` чтобы найти индекс элемента, который проходит условие
*   Нарежьте массив из найденного индекса до конца
*   Есть один крайный кейс! если условие не встречается ни с одним из элементов, «findIndex» будет возвращать `-1` который помещает вход в `slice()` . В этом случае используйте простой условный оператор для возврата `false` вместо `-1` . И тройной оператор (? ![:slight_smile:](https://forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=3 ": Slight_smile:") возвращает найденный индекс требуемых элементов, когда условие `true` , и длину массива в противном случае, чтобы возвращаемое значение представляло собой пустой массив, как указано.

#### Связанные ссылки

*   [findIndex ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [Условный оператор](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function dropElements(arr, func) { 
  while(arr.length > 0 && !func(arr[0])) { 
    arr.shift(); 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnf/0)

### Обозначение кода

*   Используйте цикл while с `Array.prototype.shift()` чтобы продолжить проверку и удаление первого элемента массива, пока функция не вернет значение true. Он также гарантирует, что сначала массив не пуст, чтобы избежать бесконечных циклов.
*   Верните фильтрованный массив.

#### Связанные ссылки

*   [В то время как петли](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.