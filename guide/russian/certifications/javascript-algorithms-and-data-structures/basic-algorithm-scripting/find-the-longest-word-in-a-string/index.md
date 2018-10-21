---
title: Find the Longest Word in a String
localeTitle: Найти самое длинное слово в строке
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Вам нужно пройти каждое слово и выяснить, какой из них самый длинный, и не вернуть слово, но сколько персонажей у него есть.

#### Связанные ссылки

*   [Длина строки JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Вы должны разделить строку на массив слов.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Вам нужно будет найти способ отслеживать глобальную максимальную длину.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Помните, как получить длину элементов массива? `Array[index].length` .

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function findLongestWordLength(str) { 
  var words = str.split(' '); 
  var maxLength = 0; 
 
  for (var i = 0; i < words.length; i++) { 
    if (words[i].length > maxLength) { 
      maxLength = words[i].length; 
    } 
  } 
 
  return maxLength; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/5)

### Код Объяснение:

Возьмите строку и преобразуйте ее в массив слов. Объявите переменную, чтобы отслеживать максимальную длину и цикл от 0 до длины массива слов.

Затем проверьте самое длинное слово, сравнивая текущее слово с предыдущим и сохраняя новое длинное слово. В конце цикла просто верните числовое значение переменной maxLength.

#### Связанные ссылки

*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

**Использование `.reduce()`**
```
function findLongestWordLength(s) { 
  return s.split(' ') 
    .reduce(function(x, y) { 
      return Math.max(x, y.length) 
    }, 0); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/6)

### Код Объяснение:

Для получения дополнительной информации об `reduce` [нажмите здесь.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

В случае, если вам интересно об этом `0` после функции обратного вызова, он используется, чтобы дать начальное значение `x` , так что `Math.max` будет знать, с чего начать.

#### Связанные ссылки

*   [Сокращение JS](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS упростит работу](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682.md)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:

**Использование рекурсивности**
```
function findLongestWordLength(str) { 
 
  //split the string into individual words 
  //(important!!, you'll see why later) 
  str = str.split(" "); 
 
  //str only has 1 element left that is the longest element, 
  //return the length of that element 
  if(str.length == 1){ 
    return str[0].length; 
  } 
 
  //if the first element's length is greater than the second element's (or equal) 
  //remove the second element and recursively call the function) 
  if(str[0].length >= str[1].length){ 
    str.splice(1,1); 
    return findLongestWordLength(str.join(" ")); 
  } 
 
  //if the second element's length is greater thant the first element's start 
  //call the function past the first element 
  if(str[0].length <= str[1].length){ 
    // from the first element to the last element inclusive. 
    return findLongestWordLength(str.slice(1,str.length).join(" ")); 
  } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/7)

### Код Объяснение:

Первая строка разбивает строку на отдельные слова. Затем мы проверяем, имеет ли `str` только один элемент слева, то есть самый длинный элемент, и мы его возвращаем. Если длина первого элемента больше второго (или равного) второго элемента, мы удаляем второй элемент и рекурсивно вызываем функцию `findLongestWord` . Однако, если длина второго элемента больше, чем начало первого элемента, мы вызываем функцию через первый элемент.

#### Связанные ссылки

*   [Функции JS](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [Основы рекурсии](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.