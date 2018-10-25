---
title: Pig Latin
localeTitle: Pig Latin
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Вам нужно создать программу, которая будет транслироваться с английского на Pig Latin. Pig Latin берет первый согласный (или согласный кластер) английского слова, переводит его в конец слова и суффиксы «ay». Если слово начинается с гласного, вы просто добавляете «путь» до конца. Это может быть не очевидно, но вам нужно удалить все согласные до первой гласной, если слово не начинается с гласного.

#### Связанные ссылки

*   [Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin)
*   [Совместимость с JS String Prototype](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Возможно, вы захотите использовать регулярные выражения. Это позволит легко конвертировать слова.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Если первый символ является гласным, тогда возьмите это слово и добавьте «путь» в конец. В противном случае приходит сложная часть, возьмите согласный (и) перед первой гласной и переместите ее до конца и добавьте «ay». Это может сбивать с толку, но это не только первый согласный, но все они до первого гласного.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Вам нужно будет использовать все, что вы знаете о строковых манипуляциях, чтобы получить последнюю часть. Однако это можно сделать только с помощью `substr` .

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function translatePigLatin(str) { 
  // Create variables to be used 
  var pigLatin = ''; 
  var regex = /[aeiou]/gi; 
 
  // Check if the first character is a vowel 
  if (str[0].match(regex)) { 
    pigLatin = str + 'way'; 
 
  } else if(str.match(regex) === null) { 
    // Check if the string contains only consonants 
    pigLatin = str + 'ay'; 
  } else { 
 
    // Find how many consonants before the first vowel. 
    var vowelIndice = str.indexOf(str.match(regex)[0]); 
 
    // Take the string from the first vowel to the last char 
    // then add the consonants that were previously omitted and add the ending. 
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay'; 
  } 
 
  return pigLatin; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmt/0)

### Код Объяснение:

*   Сделайте пустую строку, чтобы удерживать латинское слово Pig.
*   Назначьте соответствующее регулярное выражение переменной.
*   Если первый символ является гласным, просто добавьте **путь** к концу строки и верните его.
*   Если первый символ не является гласным:
    *   Найдите количество согласных перед первым гласным с помощью `indexOf()` , `match()` и регулярного выражения.
    *   Запустите Pig Latin string с первой гласной до конца.
    *   Добавьте буквы перед первым гласным до конца строки.
    *   `substr()` для обработки строк.
    *   Добавьте **ay** в конец строки и верните ее.

#### Связанные ссылки

*   Ресурсы JS Regex
*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function translatePigLatin(str) { 
  function check(obj) { 
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj; 
  } 
 
  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay'); 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmw/0)

### Код Объяснение:

*   Это декларативный, а также рекурсивный подход к этой проблеме.
*   `check()` - это функция, которая проверяет, чтобы первая буква строки находилась в массиве гласных, `['a','i','u','e','o']` .
*   В случае согласных, `check()` вызывает себя на следующих символах, пока не найдет первый гласный.
*   Он вернет индекс того, что он считает последним согласным, т. Е. Шмидсвилл будет 3.
*   Затем буквы до этого индекса будут удалены из строки и сцепляются либо тот же куском удаляемой строки или **ш** соответственно, а затем **Ау** независимо.

#### Связанные ссылки

*   [JS String Prototype CharAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [JS String Prototype Concat](http://forum.freecodecamp.com/t/javascript-string-prototype-concat/15935)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function translatePigLatin(str) { 
    var strArr = []; 
    var tmpChar; 
 
    // check if the char is consonant using RegEx 
    function isConsonant(char) { 
        return !/[aeiou]/.test(char); 
    } 
 
    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array 
    if (!isConsonant(str.charAt(0))) 
        return str + "way"; 
    else 
        strArr = str.split(""); 
 
    // push all consonats to the end of the array 
    while (isConsonant(strArr[0])) { 
        tmpChar = strArr.shift(); 
        strArr.push(tmpChar); 
    } 
 // convert array to string and concatenate "ay" at the end 
 return strArr.join("")+"ay"; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmv/0)

### Код Объяснение:

*   `isConsonant()` используется, чтобы проверить, является ли символ согласным.
*   Если первый символ является гласным, добавьте **путь** к концу строки и верните его.
*   Если первый символ не является гласным:
    *   Разделите строку на массив с помощью `split()` .
    *   Нажимайте все согласные до конца массива с помощью `shift()` и `push()` .
    *   Преобразуйте массив в строку с помощью `join()` и добавьте **ay** в конец строки. Верни это.

#### Связанные ссылки

*   [Разделение прототипа JS String](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Сдвиг прототипа массива JS](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Присоединиться](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

### ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 ":трофей:") Кредиты:

Если вы нашли эту страницу полезной, вы можете сказать спасибо вкладчикам, скопировав и вставив следующую строку в основной чат:

**`Thanks @Rafase282 @sabahang @aganita @Hallaathrad for your help with Algorithm: Pig Latin`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.