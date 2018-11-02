---
title: Telephone Number Validator
localeTitle: Проверка номера телефона
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Задача не так уж трудно понять, ее реализация - самая сложная задача. Вы должны подтвердить номер телефона в США. Это означает, что требуется определенное количество номеров, в то время как вам не нужно указывать код страны, вам по-прежнему нужен код города и использовать один из немногих разрешенных форматов.

#### Связанные ссылки

*   [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
*   [regexpal.com](http://regexpal.com/)
*   [regex101.com/](https://regex101.com/#javascript)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Нет никакого способа обойти это, вам нужно будет освежить свои навыки регулярных выражений.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Попробуйте использовать сайт из предыдущего списка, чтобы протестировать регулярное выражение во время его создания.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Начните с того, что попытайтесь заставить его проверить каждый формат из примера, каждый из них должен взять новую строку, как только вы их выберете, затем добавьте примеры, которые не следует выбирать, и убедитесь, что они не выбраны.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function telephoneCheck(str) { 
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; 
   return regex.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLo9/0)

### Код Объяснение:

*   `^` обозначает начало строки.
*   `(1\s?)?` допускает «1» или «1», если таковой имеется.
*   `\d{n}` проверяет ровно n число цифр, поэтому `\d{3}` проверяет три цифры.
*   `x|y` проверяет либо x OR y, поэтому `(\(\d{3}\)|\d{3})` проверяет либо три цифры, окруженные скобками, либо три цифры самостоятельно без круглых скобок.
*   `[\s\-]?` проверяет пробелы или тире между группами цифр.
*   `$` обозначает конец строки. В этом случае начало `^` и конец строки `$` используются в регулярном выражении, чтобы предотвратить совпадение любой длинной строки, которая может содержать действительный номер телефона (например, s 555 555 5555 3 ").
*   Наконец, мы используем `regex.test(str)` чтобы проверить, придерживается ли строка регулярному выражению, возвращает `true` или `false` .

#### Связанные ссылки

*   [Regex.test ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
    
*   [Регулярное выражение](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function telephoneCheck(str) { 
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/; 
  return re.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLoa/0)

### Код Объяснение:

Это пример очень всеобъемлющего и надежного решения для проверки клиентской части номеров телефонов США. В таких случаях было бы намного лучше и проще реализовать эту библиотеку [libphonenumber](https://github.com/googlei18n/libphonenumber) .

#### Связанные ссылки

*   [Regex.test ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
*   [libphonenumber](https://github.com/googlei18n/libphonenumber)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.