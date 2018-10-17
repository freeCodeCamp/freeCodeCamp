---
title: Falsy Bouncer
localeTitle: Фальшивый вышибала
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55dedad40d9f3f662c70d1eac4effc00c7d26bd9.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Удалите все значения [фальши](https://guide.freecodecamp.org/javascript/falsy-values/) из массива.

#### Связанные ссылки

*   [Фальшивые ценности](https://guide.freecodecamp.org/javascript/falsy-values/)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Фальши - это то, что оценивается как ЛОЖЬ. В JavaScript всего шесть фальшивых значений: undefined, null, NaN, 0, "" (пустая строка) и false.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Мы должны убедиться, что у нас есть все значения фальши для сравнения, мы можем это знать, возможно, с функцией со всеми значениями фальши ...

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Затем нам нужно добавить `filter()` с функцией значений фальши ...

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function bouncer(arr) { 
  return arr.filter(Boolean); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/32)

### Код Объяснение:

Метод `Array.prototype.filter` ожидает функцию, которая возвращает `Boolean` значение, которое принимает один аргумент и возвращает `true` для значения [правды](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) или `false` для значения [ложности](https://guide.freecodecamp.org/javascript/falsy-values/) . Следовательно, мы передаем встроенную `Boolean` функцию.

#### Связанные ссылки

*   [логический](http://forum.freecodecamp.com/t/javascript-boolean/14311)
*   [Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [Array.prototype.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 ":трофей:") Кредиты:

Если вы нашли эту страницу полезной, вы можете поблагодарить, скопировав и вставив ее в основной чат:

**`Thanks @renelis @abhisekp @Rafase282 for your help with Algorithm: Falsy Bouncer`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.