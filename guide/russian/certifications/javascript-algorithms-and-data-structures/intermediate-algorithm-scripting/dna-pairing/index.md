---
title: Dna Pairing
localeTitle: Dna Pairing
---
![ДНК](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2798a83aaaa34ec2b18f4b8ec122b76c264a9d67.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

*   Вы получите последовательность цепочек ДНК, и вам нужно получить пару и вернуть ее в виде 2D-массива базовых пар. Имейте в виду, что предоставленная прядь должна быть всегда первой.
    
*   Другой способ интерпретировать проблему: в ДНК существуют четыре потенциальных характера: «A», «T», «G» и «C». «A» и «T» всегда соединяются вместе, а «G» и «C» всегда соединяются вместе.  
    Эта проблема представляет вам ввод, например, «ATCGA». Каждому из этих пяти персонажей не хватает их пар.  
    Например, первый символ «A» должен быть сопряжен с «T», чтобы дать элемент массива \[«A», «T»\].  
    Второй символ «T» должен быть сопряжен с «A», чтобы получить элемент массива \[«T», «A»\].  
    Количество элементов в конечном выходе равно количеству символов на входе.
    

Эта проблема не связана с перестановкой ввода в разные комбинации или перестановки.

#### Связанные ссылки

*   [Array.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [String.split ()](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

*   Есть два базовых варианта: AT и CG, они идут в обе стороны. Вы можете использовать регулярное выражение, если заявления о чем-либо, о чем вы можете думать.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

*   Я бы рекомендовал использовать переключатель, так как он делает вещи более гладкими.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

*   Результат должен быть массивом массивов, поэтому имейте это в виду при нажатии на вещи.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function pairElement(str) { 
      // Return each strand as an array of two elements, the original and the pair. 
      var paired = []; 
 
      // Function to check with strand to pair. 
      var search = function(char) { 
        switch (char) { 
          case 'A': 
            paired.push(['A', 'T']); 
            break; 
          case 'T': 
            paired.push(['T', 'A']); 
            break; 
          case 'C': 
            paired.push(['C', 'G']); 
            break; 
          case 'G': 
            paired.push(['G', 'C']); 
            break; 
        } 
      }; 
 
      // Loops through the input and pair. 
      for (var i = 0; i < str.length; i++) { 
        search(str[i]); 
      } 
 
      return paired; 
    } 
 
    // test here 
    pairElement("GCG"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmz/0)

### Код Объяснение:

*   Программа очень проста, лучшим решением, которое я придумал, является использование переключателя для захвата всех возможных четырех элементов. Использование операторов if потребует слишком много кода. Вы также можете использовать регулярные выражения.
*   Поскольку у нас есть оригинал и пара, я решил взять все четыре случая вместо двух базовых.
*   Создайте пустой массив и используйте функцию `search` чтобы вывести правильные значения в массив и вернуть их.

#### Связанные ссылки

*   [Записи переключателей](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

```javascript
    function pairElement(str) { 
    //create object for pair lookup 
    var pairs = { 
      "A": "T", 
      "T": "A", 
      "C": "G", 
      "G": "C" 
    } 
    //split string into array of characters 
    var arr = str.split(""); 
    //map character to array of character and matching pair 
    return arr.map(x => [x,pairs[x]]); 
  } 
 
  //test here 
  pairElement("GCG"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/repls/ThoroughSphericalComputeranimation)

## Код Объяснение:

*   Сначала определите объект со всеми возможностями пары, это позволяет легко найти ключ или значение.
*   Разделите `str` на массив символов, чтобы мы могли использовать каждую букву, чтобы найти ее пару.
*   Используйте функцию карты для сопоставления каждого символа в массиве с массивом с символом и совпадающей парой, создавая 2D-массив.

#### Связанные ссылки

*   [Array.prototype.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [Агенты по недвижимости](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
*   [Функции стрелок](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.