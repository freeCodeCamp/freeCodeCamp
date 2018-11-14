---
title: Missing Letters
localeTitle: Пропущенные буквы
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Вы создадите программу, которая найдет недостающую букву из строки и вернет ее. Если отсутствует пропущенная буква, программа должна вернуться к неопределенной. В настоящее время нет тестового примера для строки, содержащей более одной буквы, но если бы она была одна, была бы использована рекурсия. Кроме того, буквы всегда предоставляются в порядке, поэтому их сортировка не требуется.

#### Связанные ссылки

*   [Строковый глобальный объект](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype CharCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Вам нужно будет преобразовать из символа в ASCII-код, используя два метода, описанных в описании.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Вам нужно будет проверить разницу в коде ASCII, поскольку они в порядке. Использование диаграммы было бы очень полезно.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Вам нужно будет выяснить, где находится недостающее письмо, а также обрабатывать случай отсутствия буквы, поскольку для этого требуется определенное возвращаемое значение.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function fearNotLetter(str) { 
 
  for(var i = 0; i < str.length; i++) { 
    /* code of current character */ 
    var code = str.charCodeAt(i); 
 
    /* if code of current character is not equal to first character + no of iteration 
    hence character has been escaped */ 
    if (code !== str.charCodeAt(0) + i) { 
 
      /* if current character has escaped one character find previous char and return */ 
      return String.fromCharCode(code - 1); 
    } 
  } 
  return undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnD/0)

### Код Объяснение:

*   В этих решениях используется цикл `for` .
*   Код встреченного символа сохраняется в **коде** .
*   Он проверяется, является ли код текущего символа ожидаемым (никакие символы не пропускаются), используя логический `code of current character = code of first character + number of iterations` .
*   Если символ отсутствует, отображается отсутствующий символ и возвращается окончательная строка.
*   `undefined` возвращается, если в строке отсутствует символ.

#### Связанные ссылки

*   [JS для пояснений](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   String.length

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
// Adding this solution for the sake of avoiding using 'for' and 'while' loops. 
 // See the explanation for reference as to why. It's worth the effort. 
 
 function fearNotLetter(str) { 
  var compare = str.charCodeAt(0), missing; 
 
  str.split('').map(function(letter,index) { 
    if (str.charCodeAt(index) == compare) { 
      ++compare; 
    } else { 
      missing = String.fromCharCode(compare); 
    } 
  }); 
 
  return missing; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnE/0)

### Код Объяснение:

*   Сначала мы определяем переменные для хранения символьного кода для первой буквы в строке и для хранения любых отсутствующих букв, которые мы можем найти.
*   Мы превращаем строку в массив, чтобы сопоставить ее, вместо того, чтобы использовать петли `for` и `while` .
*   Как мы `map` через коды символов наши письма, мы идем по сравнению с той , которая должна быть в этом положении.
*   Если текущая буква совпадает, мы переместим переменную сравнения в следующую позицию, чтобы мы могли сравнить ее в следующем цикле.
*   Если нет, пропущенная буква будет назначена `missing` переменной, которая будет возвращена после завершения карты.
*   Если отсутствующих символов нет, верните `undefined` .

#### Связанные ссылки

*   [Разделение прототипа JS String](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Карта прототипа JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Упрощенное расширенное решение кода:
```
function fearNotLetter(str) { 
  for (let i = 1; i < str.length; ++i) { 
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) { 
      return String.fromCharCode(str.charCodeAt(i - 1) + 1); 
    } 
  } 
 } 
```

### Код Объяснение:

*   Петля над строкой
*   Проверьте, не отличается ли разница в символьных кодах между соседними символами в строке более 1 (таблица ASCII chack)
*   Верните отсутствующий символ (+1, из которого был обнаружен разрыв)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function fearNotLetter(str) { 
  var allChars = ''; 
  var notChars = new RegExp('[^'+str+']','g'); 
 
  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++) 
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i); 
 
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnG/0)

### Код Объяснение:

*   Создается новая строка **allChars** .
*   Создайте регулярное выражение **notChars,** которое выбирает все, кроме **str** .
*   Цикл `for` используется для добавления всех букв в диапазоне к **allChars** .
*   `match()` используется, чтобы отменить **str-** буквы из вновь созданной строки, и она возвращается.
*   Если отсутствующих символов нет, верните `undefined` .

#### Связанные ссылки

*   Ресурсы JS Regex
*   [JS Ternary](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)
*   [Совместимость с JS String Prototype](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [Присоединиться](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.