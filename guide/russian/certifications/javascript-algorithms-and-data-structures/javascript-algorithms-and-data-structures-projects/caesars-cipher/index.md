---
title: Caesars Cipher
localeTitle: Цезарский шифр
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

*   Вам нужно написать функцию, которая возьмет строку, закодированную с помощью _шифра Цезаря,_ в качестве параметра и декодирует ее.
*   Используемый здесь ROT13, где значение буквы сдвигается на 13 мест. например, 'A' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": Left_right_arrow:") 'N', 'T' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": Left_right_arrow:") 'Г'.
*   Вы должны перенести его на 13 позиций, так что 'N' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": Left_right_arrow:") 'A'.

#### Связанные ссылки

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Используйте _String.charCodeAt ()_ для преобразования английского символа в ASCII.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Используйте _String.fromCharCode ()_ для преобразования ASCII в английский символ.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Оставьте все, что не происходит между AZ, как есть.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function rot13(str) { 
      // Split str into a character array 
      return str.split('') 
      // Iterate over each character in the array 
        .map.call(str, function(char) { 
          // Convert char to a character code 
          x = char.charCodeAt(0); 
          // Checks if character lies between AZ 
          if (x < 65 || x > 90) { 
            return String.fromCharCode(x);  // Return un-converted character 
          } 
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places 
          else if (x < 78) { 
            return String.fromCharCode(x + 13); 
          } 
          // Otherwise shift the character 13 places backward 
          return String.fromCharCode(x - 13); 
        }).join('');  // Rejoin the array into a string 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/38)

### Код Объяснение:

*   Строковая переменная `nstr` объявляется и инициализируется для хранения декодированной строки.
*   Цикл for используется для циклического прохождения каждого символа входной строки.
*   Если символ не является заглавными английскими алфавитами (то есть его ascii не лежит между 65 и 91), мы оставим его как есть и [продолжим](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) следующую итерацию.
*   Если это заглавный английский алфавит, мы вычтем 13 из его ascii-кода.
*   Если код ascii меньше 78, он выйдет за пределы диапазона при вычитании на 13, поэтому мы добавим к нему 26 (количество букв в английских алфавитах), чтобы после A он вернется к Z. например, M (77) ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": Left_right_arrow:") 77-13 = 64 (Не английский алфавит) +26 = 90 ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": Left_right_arrow:") Z (90).

#### Связанные ссылки

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

```javascript
    // Solution with Regular expression and Array of ASCII character codes 
    function rot13(str) { 
      var rotCharArray = []; 
      var regEx = /[AZ]/ ; 
      str = str.split(""); 
      for (var x in str) { 
        if (regEx.test(str[x])) { 
          // A more general approach 
          // possible because of modular arithmetic 
          // and cyclic nature of rot13 transform 
          rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65); 
        } else { 
          rotCharArray.push(str[x].charCodeAt()); 
        } 
      } 
      str = String.fromCharCode.apply(String, rotCharArray); 
      return str; 
    } 
 
    // Change the inputs below to test 
    rot13("LBH QVQ VG!"); 
```

### Код Объяснение:

*   Пустой массив создается в переменной `rotCharArray` для хранения кодов символов.
*   Переменная `regEx` сохраняет регулярное выражение для всех прописных букв от A до Z.
*   Мы разбиваем `str` на массив символов, а затем используем цикл for для циклического прохождения каждого символа в массиве.
*   Используя оператор if, мы проверяем, содержит ли строка только заглавные буквы от A до Z.
*   Если он возвращает true, мы используем `charCodeAt()` и rot13 для возврата правильного значения, иначе мы возвращаем начальное значение.
*   Затем мы возвращаем строку с кодами символов из переменной `rotCharArray` .

### Алгоритм Пояснение:
```
ALPHA    KEY BASE             ROTATED    ROT13 
 ------------------------------------------------------------- 
 [A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N] 
 [B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O] 
 [C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P] 
 [D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q] 
 [E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R] 
 [F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S] 
 [G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T] 
 [H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U] 
 [I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V] 
 [J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W] 
 [K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X] 
 [L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y] 
 [M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z] 
 [N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A] 
 [O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B] 
 [P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C] 
 [Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D] 
 [R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E] 
 [S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F] 
 [T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G] 
 [U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H] 
 [V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I] 
 [W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J] 
 [X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K] 
 [Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L] 
 [Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M] 
```

#### Связанные ссылки

*   [Function.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [Regex](https://forum.freecodecamp.com/t/regular-expressions-resources/15931)
*   [Regex.test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/39)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function rot13(str) { // LBH QVQ VG! 
  return str.replace(/[AZ]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65)); 
 } 
```

### Алгоритм Пояснение:

Понимание оператора modulo ( _иногда называемого оператором модуля_ ), символически представленного как `%` в JavaScript, является ключом к пониманию алгоритма.  
Это интересный оператор, который появляется в разных местах техники, например, в криптографии.

В принципе, управляемый по числу, он делит число на данный делитель и дает остаток от деления.  
Например,

*   `0 % 5 = 0` потому что `0 / 5 = 0` а остаток равен `0` .
    
*   `2 % 5 = 2` потому что `2 / 5 = 0` а остаток равен `2`
    
*   `4 % 5 = 4` потому что `4 / 5 = 0` а остальное - `4`
    
*   `5 % 5 = 0` потому что `5 / 5 = 1` а остаток равен `0`
    
*   `7 % 5 = 2` потому что `7 / 5 = 1` а остаток равен `2`
    
*   `9 % 5 = 4` потому что `9 / 5 = 1` а остаток равен `4`
    
*   `10 % 5 = 0` потому что `10 / 5 = 2` а остаток равен `0`
    

Но вы, должно быть, заметили здесь образец.  
Как вы могли заметить, удивительный оператор modulo обертывает значение LHS, когда он достигает нескольких значений RHS.  
например, в нашем случае, когда `LHS = 5` , он завернут до `0`  
ИЛИ  
когда `LHS = 10` , он снова завертывается в `0` .

Следовательно, мы видим следующую картину:
```
 0 ⇔ 0 
 1 ⇔ 1 
 2 ⇔ 2 
 3 ⇔ 3 
 4 ⇔ 4 
 5 ⇔ 0 
 6 ⇔ 1 
 7 ⇔ 2 
 8 ⇔ 3 
 9 ⇔ 4 
 10 ⇔ 0 
```

Следовательно, мы заключаем, что, используя modulo-оператор, можно отобразить диапазон значений в диапазоне от \[ `0` до `DIVISOR - 1` \]. В нашем случае мы отображали \[ `5 - 9` \] между \[ `0 - 4` \] или отображали \[ `6 - 10` \] между \[ `0 - 4` \].

Ты это понимал?

Теперь рассмотрим отображение диапазона из `26` чисел, т. Е. Между \[ `65 - 90` \], который представляет в верхнем регистре \[ **английские алфавиты** \] [символы Юникода, заданные](http://unicode-table.com/en/alphabets/) диапазоном чисел между \[ `0 - 25` \].
```
[A]  65 % 26 ⇔ 13 
 [B]  66 % 26 ⇔ 14 
 [C]  67 % 26 ⇔ 15 
 [D]  68 % 26 ⇔ 16 
 [E]  69 % 26 ⇔ 17 
 [F]  70 % 26 ⇔ 18 
 [G]  71 % 26 ⇔ 19 
 [H]  72 % 26 ⇔ 20 
 [I]  73 % 26 ⇔ 21 
 [J]  74 % 26 ⇔ 22 
 [K]  75 % 26 ⇔ 23 
 [L]  76 % 26 ⇔ 24 
 [M]  77 % 26 ⇔ 25 
 [N]  78 % 26 ⇔  0 
 [O]  79 % 26 ⇔  1 
 [P]  80 % 26 ⇔  2 
 [Q]  81 % 26 ⇔  3 
 [R]  82 % 26 ⇔  4 
 [S]  83 % 26 ⇔  5 
 [T]  84 % 26 ⇔  6 
 [U]  85 % 26 ⇔  7 
 [V]  86 % 26 ⇔  8 
 [W]  87 % 26 ⇔  9 
 [X]  88 % 26 ⇔ 10 
 [Y]  89 % 26 ⇔ 11 
 [Z]  90 % 26 ⇔ 12 
```

Как вы можете заметить, каждое число в диапазоне \[ `65 - 90` \] соответствует уникальному номеру между \[ `0 - 25` \].  
Возможно, вы также заметили, что каждое заданное число (например, `65` ) сопоставляется с другим номером (например, `13` ), которое может использоваться в качестве значения смещения (т.е. `65 + OFFSET` ) для получения ROT13 данного номера.

Например, `65` карт до `13` которые можно принять за значение смещения и добавить к `65` чтобы дать `78` .
```
[A]  65 % 26 ⇔ 13 + 65 =  78 [N] 
 [B]  66 % 26 ⇔ 14 + 65 =  79 [O] 
 [C]  67 % 26 ⇔ 15 + 65 =  80 [P] 
 [D]  68 % 26 ⇔ 16 + 65 =  81 [Q] 
 [E]  69 % 26 ⇔ 17 + 65 =  82 [R] 
 [F]  70 % 26 ⇔ 18 + 65 =  83 [S] 
 [G]  71 % 26 ⇔ 19 + 65 =  84 [T] 
 [H]  72 % 26 ⇔ 20 + 65 =  85 [U] 
 [I]  73 % 26 ⇔ 21 + 65 =  86 [V] 
 [J]  74 % 26 ⇔ 22 + 65 =  87 [W] 
 [K]  75 % 26 ⇔ 23 + 65 =  88 [X] 
 [L]  76 % 26 ⇔ 24 + 65 =  89 [Y] 
 [M]  77 % 26 ⇔ 25 + 65 =  90 [Z] 
 [N]  78 % 26 ⇔  0 + 65 =  65 [A] 
 [O]  79 % 26 ⇔  1 + 65 =  66 [B] 
 [P]  80 % 26 ⇔  2 + 65 =  67 [C] 
 [Q]  81 % 26 ⇔  3 + 65 =  68 [D] 
 [R]  82 % 26 ⇔  4 + 65 =  69 [E] 
 [S]  83 % 26 ⇔  5 + 65 =  70 [F] 
 [T]  84 % 26 ⇔  6 + 65 =  71 [G] 
 [U]  85 % 26 ⇔  7 + 65 =  72 [H] 
 [V]  86 % 26 ⇔  8 + 65 =  73 [I] 
 [W]  87 % 26 ⇔  9 + 65 =  74 [J] 
 [X]  88 % 26 ⇔ 10 + 65 =  75 [K] 
 [Y]  89 % 26 ⇔ 11 + 65 =  76 [L] 
 [Z]  90 % 26 ⇔ 12 + 65 =  77 [M] 
```

### Код Объяснение:

*   [Функция](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942) `String.prototype.replace` позволяет преобразовать `String` на основе некоторого соответствия шаблонов (определяется регулярным выражением) и [функции преобразования](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter) (которая применяется к каждому совпадению шаблона).
*   Синтаксис [функции Arrow](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) используется для записи параметра функции для `replace()` .
*   `L` представляет собой единую единицу, из каждого совпадения с образцом `/[AZ]/g` - это каждая буква верхнего регистра в алфавите, от `A` до `Z` , присутствующая в строке.
*   Функция стрелки применяет преобразование `rot13` для каждой прописной буквы из английского алфавита, присутствующей в данной строке.

#### Связанные ссылки

*   [String.prototype.replace ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЕ ДЛЯ УЧАСТНИКОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.