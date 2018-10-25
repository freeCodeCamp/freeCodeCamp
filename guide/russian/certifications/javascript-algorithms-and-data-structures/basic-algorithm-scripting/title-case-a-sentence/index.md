---
title: Title Case a Sentence
localeTitle: Название Случайное предложение
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Мы должны вернуть предложение с титульным листом. Это означает, что первая буква всегда будет в верхнем регистре, а остальные будут в нижнем регистре.

#### Связанные ссылки

*   [Глобальный объект String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [JS String Prototype ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [Замена прототипа JS](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

*   Вы должны начать с разделения строки на массив слов.
*   Разделите предложение.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

*   Вы должны сделать слово в нижнем регистре, прежде чем делать первую букву в верхнем регистре.
*   Используйте метод замены для каждого слова, чтобы загладить первую букву каждого слова.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

*   Вам нужно будет создать новую строку с фрагментами предыдущего и в конце снова объединить все в одну строку.
*   В методе замены дайте первый аргумент как позицию первой буквы, используя charAt. Для второго аргумента напишите функцию, чтобы вернуть заглавную букву в качестве замены.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
String.prototype.replaceAt = function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); 
 }; 
 
 function titleCase(str) { 
    var newTitle = str.split(' '); 
    var updatedTitle = []; 
    for (var st in newTitle) { 
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase()); 
    } 
    return updatedTitle.join(' '); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/8)

### Код Объяснение:

Мы модифицируем функцию `replaceAt` с использованием прототипа, чтобы облегчить использование программы.

Разделите строку пробелами и создайте переменную для отслеживания обновленного заголовка. Затем мы используем цикл для поворота первого символа слова в верхний регистр, а остальные - в нижний регистр. создавая конкатенированную строку, состоящую из всего слова в нижнем регистре, причем первый символ заменяется на верхний.

#### Связанные ссылки

*   [JS для пояснений](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [Разделение прототипа JS String](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)
*   [Присоединиться](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function titleCase(str) { 
  var convertToArray = str.toLowerCase().split(" "); 
  var result = convertToArray.map(function(val){ 
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase()); 
  }); 
  return result.join(" "); 
 } 
 
 titleCase("I'm a little tea pot"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/9)

### Код Объяснение:

Мы делаем всю строчную строчную строчку, а затем преобразуем ее в массив. Затем мы используем функцию карты, чтобы заменить символ нижнего регистра верхним регистром. Наконец, мы возвращаем строку, используя метод `join` .

#### Связанные ссылки

*   [Карта прототипа JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function titleCase(str) { 
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase()); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/14)

### Код Объяснение:

Решение работает, сначала уменьшая все символы в строке, а затем только верхний индекс первого символа каждого слова.

*   `str.toLowerCase()` цепочку с помощью `str.toLowerCase()` .
    
*   Замените каждое слово «первый символ» на верхний регистр, используя `.replace` .
    
*   Поиск символа в начале каждого слова, т.е. сопоставление любого символа, следующего за `space` или совпадающего с первым символом всей строки, с использованием следующего шаблона.
    
*   Объяснение Regex:
    
*   Найти все символы без пробелов `(\S` )
    
*   В начале строки `(^)`
    
*   Или после любого символа пробела `(\s)`
    
    *   Модификатор `g` ищет другой такой шаблон слова во всей строке и заменяет их.
        
    *   Это решение работает с национальными символами и акцентированными буквами, как показано на следующих примерах  
        `international characters:` 'бабушка курит трубку' // -> 'Бабушка Курит Трубку'  
        `accented characters:` 'località àtilacol' // -> 'Località Àtilacol'
        

#### Связанные ссылки

*   [Ресурсы JS Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.