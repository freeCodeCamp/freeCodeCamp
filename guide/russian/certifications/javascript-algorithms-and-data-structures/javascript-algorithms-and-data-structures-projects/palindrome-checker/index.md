---
title: Palindrome Checker
localeTitle: Palindrome Checker
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/c/ca86619bb0ec05531dbb02be3c0b7b8383e67f01.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Наша цель для решения этой проблемы - убрать строку, переданную в систему, и проверить, является ли она фактически палиндром.

*   Если вы не уверены в том, что такое палиндром, это слово или фраза, что при обратном заклинаниях одно и то же вперед или назад. Простым примером является `mom` , когда вы меняете буквы, это говорит то же самое! Другим примером палиндрома является `race car` . Когда мы вынимаем все, что не является персонажем, он становится `racecar` который является тем же, что и раньше или назад!

Как только мы определили, является ли это палиндром или нет, мы хотим вернуть либо `true` либо `false` основанное на наших выводах.

#### Связанные ссылки

*   [String.prototype.replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [String.prototype.toLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Регулярные выражения, `RegEx` , могут использоваться для удаления нежелательных символов из строки.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Здесь `Array.prototype.split` `Array.prototype.join` методы `Array.prototype.split` и `Array.prototype.join` . `For` и в `while` петли - еще одна альтернатива, или почему даже `map` !

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

`String.prototype.toLowerCase` можно использовать для создания строчной строки.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function palindrome(str) { 
      return str.replace(/[\W_]/g, '').toLowerCase() === 
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/2)

### Код Объяснение:

*   Мы начинаем с использования регулярных выражений, чтобы заменить любые пробелы или не буквенно-цифровые символы ничем (или `null` ), что существенно удаляет их из строки.
    
*   Далее _цепь_ `.toLowerCase()` , чтобы удалить все заглавные буквы , потому что является иной характер , чем . `A` `a` Проблема не просила нас беспокоиться о том, чтобы убедиться, что персонажи были идентичны, просто написание.
    
*   Наш следующий шаг - взять нашу строку и `.split()` it, `.reverse()` и, наконец, `.join()` обратно.
    
*   Последний шаг - проверить, что строка одна и та же форварды и назад, и верните наш результат!
    

#### Связанные ссылки

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.reverse](http://forum.freecodecamp.com/t/javascript-array-prototype-reverse/14300)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

```javascript
    function palindrome(str) { 
      str = str.toLowerCase().replace(/[\W_]/g, ''); 
      for(var i = 0, len = str.length - 1; i < len/2; i++) { 
        if(str[i] !== str[len-i]) { 
          return false; 
        } 
      } 
      return true; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/3)

### Код Объяснение:

*   Мы начнем с использования тех же методов замены символов, которые нам не нужны в строке с использованием `RegEx` , а затем сделаем нашу строку строчной.
    
*   Затем мы настраиваем цикл `for` и объявляем индекс `i` для отслеживания цикла. Мы устанавливаем нашу escape-последовательность, когда `i` больше длины строки, деленной на две, которая сообщает, что цикл останавливается после половины точки строки. И, наконец, мы устанавливаем `i` для увеличения после каждого цикла.
    
*   Внутри каждого цикла мы хотим проверить, что буква в элементе `[i]` равна букве в длине строки минус i, `[str.length - i]` . Каждый цикл, элемент, который проверяется с обеих сторон строки, приближается к центру, пока мы не проверим все буквы. Если в какой-то момент буквы не совпадают, мы возвращаем `false` . Если цикл завершается успешно, это означает, что у нас есть палиндром, и поэтому мы возвращаем `true` !
    

#### Связанные ссылки

*   Regex

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение кода (наиболее эффективное):

```javascript
    //this solution performs at minimum 7x better, at maximum infinitely better. 
    //read the explanation for the reason why. I just failed this in an interview. 
    function palindrome(str) { 
      //assign a front and a back pointer 
      let front = 0 
      let back = str.length - 1 
 
      //back and front pointers won't always meet in the middle, so use (back > front) 
      while (back > front) { 
        //increments front pointer if current character doesn't meet criteria 
        if ( str[front].match(/[\W_]/) ) { 
          front++ 
          continue 
        } 
        //decrements back pointer if current character doesn't meet criteria 
        if ( str[back].match(/[\W_]/) ) { 
          back-- 
          continue 
        } 
        //finally does the comparison on the current character 
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false 
        front++ 
        back-- 
      } 
 
      //if the whole string has been compared without returning false, it's a palindrome! 
      return true 
 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/4)

### Код Объяснение:

*   Мне дали эту проблему в интервью (спойлер: я не был нанят ![:frowning:](https://forum.freecodecamp.com/images/emoji/emoji_one/frowning.png?v=3 ": Хмурится:") ) Я быстро пришел к основному решению, и интервьюер сказал мне сделать это лучше. Алгоритм займет слишком много времени, если он передаст Библию в качестве строки. Он хотел, чтобы это было мгновенно.
    
*   Более простые решения очень плохо работают на длинных строках, потому что они работают со всей строкой несколько раз (toLowerCase (), replace (), split (), reverse (), join ()), прежде чем сравнивать **всю** строку в два раза.
    
*   Красота этого решения заключается в том, что ему никогда не **нужно** читать всю цепочку, даже однажды, чтобы знать, что это не палиндром. Зачем читать всю строку, если вы можете сказать, что это не палиндром, просто глядя на две буквы?
    
*   Использует цикл while вместо цикла for как наилучшую практику - потому что мы используем две переменные, один из которых является индексом, начинающимся с начала строки, а другой начинается в конце строки.
    

#### Связанные ссылки

*   [Цикломатическая сложность](https://en.wikipedia.org/wiki/Cyclomatic_complexity)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.