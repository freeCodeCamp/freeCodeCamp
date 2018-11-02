---
title: Mutations
localeTitle: Мутации
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

*   Возвращает true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива.

#### Связанные ссылки

*   [String.indexOf ()](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

*   Если все в нижнем регистре, сравнивать будет легче.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

*   С нашими струнами можно было бы работать легче, если бы они были массивами персонажей.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

*   Петля может помочь. Используйте `indexOf()` чтобы проверить, является ли буква второго слова первой.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

**процедурный**
```
function mutation(arr) { 
  var test = arr[1].toLowerCase(); 
  var target = arr[0].toLowerCase(); 
  for (var i=0;i<test.length;i++) { 
    if (target.indexOf(test[i]) < 0) 
      return false; 
  } 
  return true; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/30)

### Код Объяснение:

Сначала мы делаем две строки в массиве строчными буквами. `test` проведет то, что мы ищем в `target` .  
Затем мы прокручиваем наши тестовые символы, и если какой-либо из них не найден, мы `return false` .

Если _все_ они будут найдены, цикл завершится, не возвращая ничего, и мы `return true` .

#### Связанные ссылки

*   [String.toLowerCase ()](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [Для петель](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

**декларативный**
```
function mutation(arr) { 
  return arr[1].toLowerCase() 
    .split('') 
    .every(function(letter) { 
      return arr[0].toLowerCase() 
        .indexOf(letter) != -1; 
    }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/31)

### Код Объяснение:

Возьмите вторую строку, в нижнем регистре и превратите ее в массив; затем убедитесь, что _каждая_ из его _букв_ является частью нижней строки с нижним регистром.

`Every` будет в основном давать вам письмо по буквам для сравнения, которое мы используем с помощью `indexOf` в первой строке. `indexOf` даст вам -1, если текущая `letter` отсутствует. Мы проверяем, что это не так, потому что, если это произойдет даже один раз, `every` будет ложным.

#### Связанные ссылки

*   [Array.split ()](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.every ()](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.