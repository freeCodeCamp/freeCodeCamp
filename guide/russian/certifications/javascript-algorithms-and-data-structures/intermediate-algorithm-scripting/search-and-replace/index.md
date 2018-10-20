---
title: Search and Replace
localeTitle: Поиск и замена
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Вы создадите программу, которая принимает предложение, затем ищет слово в нем и заменяет его на новый, сохраняя в верхнем регистре, если он есть.

#### Связанные ссылки

*   [Строковый глобальный объект](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [Замена прототипа JS](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

*   Найдите индекс, где `before` находится в строке.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

*   Проверьте корпус первой буквы.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

*   Строки неизменяемы, вам нужно будет сохранить изменения в другой переменной, даже если вы должны повторно использовать одно и то же, чтобы они выглядели как изменения, которые были сделаны с использованием только одной переменной.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function myReplace(str, before, after) { 
  // Find index where before is on string 
  var index = str.indexOf(before); 
  // Check to see if the first letter is uppercase or not 
  if (str[index] === str[index].toUpperCase()) { 
    // Change the after word to be capitalized before we use it. 
    after = after.charAt(0).toUpperCase() + after.slice(1); 
  } 
  // Now replace the original str with the edited one. 
  str = str.replace(before, after); 
 
  return str; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmo/0)

### Код Объяснение:

*   Используйте `indexOf()` , чтобы найти местоположение **ранее** в строке.
*   Если первая буква **предшествует** заглавной, измените первую букву **после** в верхний регистр.
*   Заменить **ранее** в строке с **после.**
*   Верните новую строку.

#### Связанные ссылки

*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS String Prototype ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [JS String Prototype CharAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [JS String Prototype Slice](http://forum.freecodecamp.com/t/javascript-string-prototype-slice/15943)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function myReplace(str, before, after) { 
 //Create a regular expression object 
  var re = new RegExp(before,"gi"); 
 //Check whether the first letter is uppercase or not 
  if(/[AZ]/.test(before[0])){ 
  //Change the word to be capitalized 
    after = after.charAt(0).toUpperCase()+after.slice(1); 
     } 
     //Replace the original word with new one 
  var  newStr =  str.replace(re,after); 
 
 return newStr; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmp/0)

### Код Объяснение:

*   В этом решении регулярное выражение `[AZ]` используется для проверки, является ли символ прописным.
*   Создайте новый объект регулярного выражения, **re** .
*   Если заглавная буква первой буквы **предшествует** , измените первую букву **после** в верхний регистр.
*   Замените его **до** **после** строки.
*   Верните новую строку.

#### Связанные ссылки

*   Ресурсы JS Regex

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function myReplace(str, before, after) { 
 
    // create a function that will change the casing of any number of letter in parameter "target" 
    // matching parameter "source" 
    function applyCasing(source, target) { 
        // split the source and target strings to array of letters 
        var targetArr = target.split(""); 
        var sourceArr = source.split(""); 
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array 
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){ 
            // find out the casing of every letter from sourceArr using regular expression 
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case 
            if (/[AZ]/.test(sourceArr[i])) { 
                targetArr[i] = targetArr[i].toUpperCase(); 
            } 
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case 
            else targetArr[i] = targetArr[i].toLowerCase(); 
        } 
        // join modified targetArr to string and return 
        return (targetArr.join("")); 
    } 
 
    // replace "before" with "after" with "before"-casing 
    return str.replace(before, applyCasing(before, after)); 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmq/0)

### Код Объяснение:

*   Оба аргумента **before** и **after** передаются как аргументы `applyCasing()` .
*   Функция `applyCasing()` используется для изменения случая соответствующих символов в **targetArr,** т. **Е. После того** , **как** в соответствии с символами в **sourceArr,** то есть **раньше** .
*   `replace()` используется для замены **before** с **после** , корпус которого такой же, как и **раньше** .

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
// Add new method to the String object, not overriding it if one exists already 
 String.prototype.capitalize =  String.prototype.capitalize || 
    function() { 
        return this[0].toUpperCase() + this.slice(1); 
    }; 
 
 const Util = (function () { 
 // Create utility module to hold helper functions 
    function textCase(str, tCase) { 
        // Depending if the tCase argument is passed we either set the case of the 
        // given string or we get it. 
        // Those functions can be expanded for other text cases. 
 
        if(tCase) { 
            return setCase(str, tCase); 
        } else { 
            return getCase(str); 
        } 
 
        function setCase(str, tCase) { 
            switch(tCase) { 
                case "uppercase": return str.toUpperCase(); 
                case "lowercase": return str.toLowerCase(); 
                case "capitalized": return str.capitalize(); 
                default: return str; 
            } 
        } 
 
        function getCase(str) { 
            if (str === str.toUpperCase()) { return "uppercase"; } 
            if (str === str.toLowerCase()) { return "lowercase"; } 
            if (str === str.capitalize()) { return "capitalized"; } 
            return "normal"; 
        } 
    } 
 
    return { 
        textCase 
    }; 
 })(); 
 
 function myReplace(str, before, after) { 
    const { textCase } = Util; 
    const regex = new RegExp(before, 'gi'); 
    const replacingStr = textCase(after, textCase(before)); 
 
    return str.replace(regex, replacingStr); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/@kr3at0/SearchAndReplace)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Advanced Code Solution Альтернатива 2:

```javascript
function myReplace(str, before, after) { 
  const myArr = str.split(' '); 
  const [wordToReplace] = myArr.filter(item => item === before); 
  return  wordToReplace[0].toUpperCase() !== wordToReplace[0] 
  ? myArr.map(item => item === before ? after : item).join(' ') 
  : myArr.map(item => item === before? after[0].toUpperCase() + after.slice(1) : item).join(' '); 
 } 
 
 // test: 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

#### Связанные ссылки

*   [Разделение прототипа JS String](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS для пояснений](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Math Min](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   String.length
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [Присоединиться](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.