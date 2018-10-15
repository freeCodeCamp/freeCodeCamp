---
title: Truncate a String
localeTitle: Усекать строку
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Нам нужно уменьшить длину строки или **усечь** ее, если она длиннее заданной максимальной длины и добавить `...` до конца. Если это не так долго, мы сохраняем это как есть.

#### Связанные ссылки

*   [String.prototype.slice ()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Строки неизменяемы в JavaScript, поэтому нам понадобится новая переменная для хранения усеченной строки.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Вам нужно будет использовать метод slice () и указать, с чего начать и где остановиться.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Не забывайте, что когда мы усекаем слово, мы также должны учитывать длину, добавленную `...`

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function truncateString(str, num) { 
  // Clear out that junk in your trunk 
  if (str.length > num && num > 3) { 
    return str.slice(0, (num - 3)) + '...'; 
  } else if (str.length > num && num <= 3) { 
    return str.slice(0, num) + '...'; 
  } else { 
    return str; 
  } 
 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/55)

### Код Объяснение:

*   Сначала мы начинаем с простого утверждения `if` чтобы определить один из трех результатов ...
*   Если длина строки больше, чем `num` мы хотим усечь, а наша точка усечения не менее трех символов или больше в строке, мы возвращаем срез нашей строки, начиная с символа 0, и заканчивая `num - 3` . Затем мы добавляем наш `'...'` в конец строки.
*   Однако, если наша длина строки больше, чем `num` но `num` находится в пределах первых трех символов, нам не нужно считать наши точки символами. Поэтому мы возвращаем ту же строку, что и выше, с одной разницей: конечная точка нашего среза теперь просто `num` .
*   Наконец, если ни одна из приведенных выше ситуаций не верна, это означает, что наша длина строки меньше, чем наша усечка `num` . Поэтому мы можем просто вернуть строку.

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function truncateString(str, num) { 
  if (str.length <= num) { 
    return str; 
  } else { 
    return str.slice(0, num > 3 ? num - 3 : num) + '...'; 
  } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/54)

### Код Объяснение:

*   Сначала нам нужен оператор if, чтобы проверить, прошла ли длина полной строки, поскольку первый аргумент уже вписывается в ограничение размера, переданное в качестве второго аргумента. Если это так, мы можем просто вернуть строку, которая была передана.
    
    if (str.length <= num) return str;
    
*   Если наш оператор `if` выше не работает, мы переходим к `else` , где мы собираемся вернуть «срез» строки. Метод slice извлекает секцию строки и возвращает новую строку. Здесь мы передаем 0 как отправную точку для нашего среза. Чтобы определить конечную точку, мы используем тернарный оператор: `num > 3 ? num - 3 : num` . В нашем тройном, если `num` больше 3, мы должны учитывать три точки по нашей общей длине, и, таким образом, мы заканчиваем наш срез на `num-3` . Если num меньше или равно 3, наш срез получает конечную переменную только `num` . Наконец, `'...'` добавляется к концу нашей новой строки и возвращается.
    
    } else { return str.slice (0, num> 3? num - 3: num) + '...'; }
    
*   **ПРИМЕЧАНИЕ.** Чтобы понять приведенный выше код, вам нужно понять, как работает Тернарный оператор. Тернарный оператор часто используется как ярлык для оператора `if` и следует за этим форматом: `condition ? expr1 : expr2` . Если `condition` принимает значение true, оператор возвращает значение `expr1` . В противном случае он возвращает значение `expr2` .
    

#### Связанные ссылки

*   [Условный (тройной) оператор](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
*   [String.prototype.slice ()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.