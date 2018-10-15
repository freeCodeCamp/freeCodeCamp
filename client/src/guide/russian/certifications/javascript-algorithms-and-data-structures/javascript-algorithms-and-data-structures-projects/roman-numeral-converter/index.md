---
title: Roman Numeral Converter
localeTitle: Конвертер римской цифры
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Вы создадите программу, которая преобразует целое число в римскую цифру.

#### Связанные ссылки

*   [Римские цифры](http://www.mathsisfun.com/roman-numerals.html)
*   [Array.splice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-splice/14307)
*   [Array.indexOf ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
*   [Array.join ()](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Создание двух массивов, один с римскими цифрами и один с десятичным эквивалентом для новых форм, будет очень полезен.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Если вы добавите числа в массивы, которые идут до ввода новой буквы, например значения для 4, 9 и 40, это сэкономит вам много кода.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Вы не можете иметь более трех последовательных римских цифр вместе.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
var convertToRoman = function(num) { 
 
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]; 
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]; 
 
  var romanized = ''; 
 
  for (var index = 0; index < decimalValue.length; index++) { 
    while (decimalValue[index] <= num) { 
      romanized += romanNumeral[index]; 
      num -= decimalValue[index]; 
    } 
  } 
 
  return romanized; 
 } 
 
 // test here 
 convertToRoman(36); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLmf/0)

### Код Объяснение:

*   Мы начинаем с создания двух массивов с преобразованием по умолчанию с соответствующими индексами. Они называются `decimalValue` и `romanNumeral` . Мы также создаем пустую строковую переменную, `romanized` , в которой будет размещен последний номер римского номера.
*   Используя цикл for, мы прокручиваем `decimalValue` массива `decimalValue` . Мы продолжаем цикл до тех пор, пока значение в текущем `index` будет вписываться в `num` .
*   Затем добавим римскую цифру и `num` на десятичный эквивалент.
*   Наконец, мы возвращаем значение `romanized` .

#### Связанные ссылки

*   [Для циклов](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   В то время как петли

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function convertToRoman(num) { 
 var romans = ["I", "V", "X", "L", "C", "D", "M"], 
     ints = [], 
     romanNumber = [], 
     numeral = ""; 
  while (num) { 
    ints.push(num % 10); 
    num = Math.floor(num/10); 
  } 
  for (i=0; i<ints.length; i++){ 
      units(ints[i]); 
  } 
  function units(){ 
    numeral = romans[i*2]; 
    switch(ints[i]) { 
      case 1: 
        romanNumber.push(numeral); 
        break; 
      case 2: 
        romanNumber.push(numeral.concat(numeral)); 
        break; 
      case 3: 
        romanNumber.push(numeral.concat(numeral).concat(numeral)); 
        break; 
      case 4: 
        romanNumber.push(numeral.concat(romans[(i*2)+1])); 
        break; 
      case 5: 
        romanNumber.push(romans[(i*2)+1]); 
        break; 
      case 6: 
        romanNumber.push(romans[(i*2)+1].concat(numeral)); 
        break; 
      case 7: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral)); 
        break; 
      case 8: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral)); 
        break; 
      case 9: 
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2])); 
      } 
    } 
  return romanNumber.reverse().join("").toString(); 
 } 
 
 // test here 
 convertToRoman(97); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/C1YV)

### Код Объяснение:

*   Создайте массив римских цифр ( `romans` ).
*   Используйте цикл for для создания массива цифр ( `ints` ) в числе.
*   Прокрутите массив цифр (база 10) и, как вы это делаете, увеличьте индекс римской цифры (база 5) на 2 ( `numeral = romans[i*2]` ).
*   Внутри цикла используйте клавишу Switch Case, чтобы направить правильные римские цифры (назад) на этот массив.
*   Переверните массив Roman Numerals и превратите его в строку.

#### Связанные ссылки

*   [Для циклов](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   В то время как петли
*   [математический](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function convertToRoman(num) { 
  var romans = 
  // 10^i 10^i*5 
    ["I", "V"], // 10^0 
    ["X", "L"], // 10^1 
    ["C", "D"], // 10^2 
    ["M"]       // 10^3 
  ], 
      digits = num.toString() 
        .split('') 
        .reverse() 
        .map(function(item, index) { 
          return parseInt(item); 
        }), 
      numeral = ""; 
 
  // Loop through each digit, starting with the ones place 
  for (var i=0; i<digits.length; i++) { 
    // Make a Roman numeral that ignores 5-multiples and shortening rules 
    numeral = romans[i][0].repeat(digits[i]) + numeral; 
    // Check for a Roman numeral 5-multiple version 
    if (romans[i][1]) { 
      numeral = numeral 
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral 
        .replace(romans[i][0].repeat(5), romans[i][1]) 
        // Shorten occurrences of 9 * 10^i 
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0]) 
        // Shorten occurrences of 4 * 10^i 
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]); 
    } 
  } 
 
  return numeral; 
 } 
 
 // test here 
 convertToRoman(36); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/C1YV)

### Код Объяснение:

*   Используйте массив ( `romans` ), чтобы создать матрицу, содержащую римскую цифру для заданной мощности 10 и, если таковой имеется, римскую цифру для этой мощности в 10 раз 5.
*   Преобразуйте входной номер ( `num` ) в обратный массив цифр ( `digits` ), чтобы мы могли прокручивать эти цифры, начиная с позиции и поднимаясь вверх.
*   Пронумеруйте каждую цифру, начиная с одного места, и создайте цифровую строку с римской цифрой, добавив каждую более мощную римскую цифру в начало строки `numeral` чисел, равную `digit` . Эта начальная строка игнорирует римские цифры, которые имеют мощность 10 раз 5, а также игнорируют правила сокращения.
*   Если соответствующая мощность 10 имеет 5-кратное римское число, в `numeral` , замените 5-в-рядные вхождения с соответствующей 5-кратной римской цифрой (то есть V, L или D) и сократите количество событий 9 \* 10 ^ i (например, от VIIII до VIX) и 4 \* 10 ^ i (например, от XXXX до XL). Порядок здесь важен!
*   Наконец, верните `numeral` .

#### Связанные ссылки

*   [Для циклов](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [.Трещина()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [.задний ход()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
*   [.карта()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [.нанизывать()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
*   [ParseInt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
*   [.Надеть ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [.повторение()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.