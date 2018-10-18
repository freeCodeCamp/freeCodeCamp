---
title: Binary Agents
localeTitle: Двоичные агенты
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

## Проблема Объяснение:

Эта проблема очень проста, вы получите строку, которая будет представлять предложение в двоичном коде, и вам нужно перевести это на слова. Нет прямого способа сделать это, поэтому вам придется переводить дважды.

### Связанные ссылки

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Прежде чем преобразовать эти значения в символы, вы должны сначала преобразовать их из **двоичного** в **десятичный** .

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Все проще, если сосредоточиться на небольших частях, разделить вход для фокусировки на одну букву в то время.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Убедитесь, что каждый раз, когда вы перекодируете символ из двоичного в десятичный, вы возвращаете любую переменную, которую вы использовали для отслеживания. Также не забудьте вернуть все обратно в одну строку.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function binaryAgent(str) { 
      biString = str.split(' '); 
      uniString = []; 
 
    /*using the radix (or base) parameter in parseInt, we can convert the binary 
      number to a decimal number while simultaneously converting to a char*/ 
 
      for(i=0;i < biString.length;i++){ 
        uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
      } 
 
      // we then simply join the string 
      return uniString.join(''); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnm/0)

# Код Объяснение:

*   Разделите строку на массив строк, разделенных пробелами.
*   Создайте некоторые переменные, которые понадобятся на этом пути, имена по большей части поясняются сами по себе.
*   Итерации через каждую двоичную строку в новом массиве.
*   Преобразуйте в десятичное число с помощью parseInt ( _двоичный_ , 2) (со вторым параметром, который мы укажем, в какой базе находятся наши номера)
*   В конце мы возвращаем преобразованное сообщение.

## Связанные ссылки

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [ParseInt](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

```javascript
    function binaryAgent(str) { 
      // Separate the binary code by space. 
      str = str.split(' '); 
      var power; 
      var decValue = 0; 
      var sentence = ''; 
 
      // Check each binary number from the array. 
      for (var s = 0; s < str.length; s++) { 
        // Check each bit from binary number 
        for (var t = 0; t < str[s].length; t++) { 
          // This only takes into consideration the active ones. 
          if (str[s][t] == 1) { 
            // This is quivalent to 2 ** position 
            power = Math.pow(2, +str[s].length - t - 1); 
            decValue += power; 
 
            // Record the decimal value by adding the number to the previous one. 
          } 
        } 
 
        // After the binary number is converted to decimal, convert it to string and store 
        sentence += (String.fromCharCode(decValue)); 
 
        // Reset decimal value for next binary number. 
        decValue = 0; 
      } 
 
      return sentence; 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLno/0)

# Обозначение кода

*   Для каждой из этих двоичных строк проверьте их и игнорируйте нули.
*   Для тех, кто является одним или активным, затем преобразуйте их в десятичные числа, это учитывает положение и правильную силу, к которой он должен быть поднят.
*   Храните энергию в переменной **мощности** , добавляя ее к любым предыдущим в переменной **decValue** . Эта переменная добавит и добавит мощности активных до конца цикла, а затем вернет десятичное число.
*   Преобразуйте окончательное десятичное значение вне внутреннего цикла, а затем преобразуйте его в ASCII и сохраните в **предложении** вместе с любой другой текстовой строкой, уже преобразованной и сохраненной.
*   Сбросьте переменную **decValue,** чтобы избежать **появления** неправильных десятичных знаков, прежде чем продолжить внешний цикл.

## Связанные ссылки

*   [Math.pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   String.length
*   [Название ссылки 3](http://example.com)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:

```javascript
    function binaryAgent(str) { 
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); })); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnp/0)

# Обозначение кода

*   Сначала мы используем `split()` чтобы иметь возможность работать с каждым символом в качестве элемента Array
*   Затем используйте `map()` для обработки каждого элемента из двоичного в десятичное с помощью `pareseInt()`
*   Наконец, мы можем использовать `String.fromCharCode()` для преобразования каждого номера ASCII в соответствующий символ
*   Однако `fromCharCode()` ожидает серию чисел, а не массив! Мы можем использовать ES6 Spread Operator для передачи в массив чисел в виде отдельных чисел. См. Здесь для получения дополнительной информации; [Оператор распространения](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Связанные ссылки

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.