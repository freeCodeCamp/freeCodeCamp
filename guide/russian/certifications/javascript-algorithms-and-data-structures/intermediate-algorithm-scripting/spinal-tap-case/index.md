---
title: Spinal Tap Case
localeTitle: Чехол для спинного диска
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Преобразуйте данную строку в строчное предложение со словами, связанными тире.

#### Связанные ссылки

*   [Строковый глобальный объект](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   Ресурсы JS Regex
*   [Замена прототипа JS](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Создайте регулярное выражение для всех пробелов и подчеркиваний.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Вам также придется сделать все в нижнем регистре.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Сложная часть - заставить часть регулярного выражения работать, как только вы это сделаете, просто переведите верхний регистр в нижний регистр и замените пробелы символами подчеркивания, используя `replace()` .

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function spinalCase(str) { 
  // Create a variable for the white space and underscores. 
  var regex = /\s+|_+/g; 
 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
 
  // Replace space and underscore with - 
  return str.replace(regex, '-').toLowerCase(); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnS/0)

### Код Объяснение:

*   **регулярное выражение** содержит регулярное выражение `/\s+|_+/g` , которое выберет все пробелы и подчеркивания.
*   Первая `replace()` помещает пробел перед любыми встречающимися прописными буквами в строке **str,** чтобы потомки могли быть заменены на дефисы позже.
*   При возврате строки другая `replace()` заменяет пробелы и символы подчеркивания тире с помощью **regex** .

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function spinalCase(str) { 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
  // Split on whitespace and underscores and join with dash 
  return str.toLowerCase().split(/(?:_| )+/) .join('-'); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnT/0)

### Код Объяснение:

*   Подобно первому решению, первая `replace()` помещает пробел перед любыми встречающимися прописными буквами в строке **str,** чтобы потомки могли быть заменены дефишированными позже.
*   Вместо того чтобы использовать `replace()` здесь для замены пробелов и подчеркивания тире, строка `split()` на регулярное выражение `/(?:_| )+/` И `join()` -ed on `-` .

#### Связанные ссылки

*   [Разделение прототипа JS String](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Присоединиться](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function spinalCase(str) { 
  // "It's such a fine line between stupid, and clever." 
  // --David St. Hubbins 
 
  return str.split(/\s|_|(?=[AZ])/).join('-').toLowerCase() 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/EUZV)

### Код Объяснение:

*   Разделите строку в одном из следующих условий ( _преобразование в массив_ )
    *   пробельный символ \[ `\s` \] встречается
    *   символ подчеркивания \[ `_` \] встречается
    *   или за ним следует заглавная буква \[ `(?=[AZ])` \]
*   Присоединитесь к массиву с помощью дефиса ( `-` )
*   Опишите всю полученную строку

#### Связанные ссылки

*   [Строка # раскол](http://devdocs.io/javascript/global_objects/string/split)
*   [RegExp](http://devdocs.io/javascript/global_objects/regexp)
*   [Arrray # присоединиться](http://devdocs.io/javascript/global_objects/array/join)
*   [Строка # toLowerCase](http://devdocs.io/javascript/global_objects/string/tolowercase)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.