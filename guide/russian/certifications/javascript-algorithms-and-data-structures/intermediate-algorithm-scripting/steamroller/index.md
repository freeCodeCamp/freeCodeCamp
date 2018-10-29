---
title: Steamroller
localeTitle: пробиваться с боями
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Эта проблема кажется простой, но вам нужно обязательно сгладить любой массив, независимо от уровня, который добавляет немного сложности в проблему.

#### Связанные ссылки

*   [Array.isArray ()](http://forum.freecodecamp.com/t/javascript-array-isarray/14284)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Вам нужно проверить, является ли элемент массивом или нет.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Если вы имеете дело с массивом, то вам нужно сгладить его, получив значение внутри массива. Это означает, что если у вас есть [\[4\]\], а вместо возврата \[4\] вам нужно вернуться 4. Если вы получите \[\[\[4\]\]\] то то же самое, вы хотите 4. Вы можете получить к нему доступ с помощью arr \[index1\] \[index2\], чтобы перейти на более глубокий уровень.](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:")

> _попытаться решить проблему сейчас_

## ! \[: speech\_balloon: Подсказка: 3

Вам определенно потребуется рекурсия или другой способ выйти за пределы двух уровней, чтобы сделать код гибким и не жестко закодированным для ответов. Повеселись!

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function steamrollArray(arr) { 
  var flattenedArray = []; 
 
  // Create function that adds an element if it is not an array. 
  // If it is an array, then loops through it and uses recursion on that array. 
  var flatten = function(arg) { 
    if (!Array.isArray(arg)) { 
      flattenedArray.push(arg); 
    } else { 
      for (var a in arg) { 
        flatten(arg[a]); 
      } 
    } 
  }; 
 
  // Call the function for each element in the array 
  arr.forEach(flatten); 
  return flattenedArray; 
 } 
 
 // test here 
 steamrollArray([1, [2], [3, [[4]]]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnh/0)

### Код Объяснение:

*   Создайте новую переменную, чтобы сохранить сплющенные массивы.
*   Создайте функцию, которая добавит элементы без массива в новую переменную, а для тех, которые являются массивом, она проходит через них, чтобы получить элемент.
*   Это делает это с помощью рекурсии, если элемент является массивом, то снова вызовите функцию со слоем массива, чтобы проверить, является ли это массивом или нет. если это не так, то нажмите этот элемент без массива на возвращаемую переменную. В противном случае продолжайте идти глубже.
*   Вызовите функцию, в первый раз, когда вы всегда будете передавать ей массив, поэтому он всегда попадает в ветку isArray
*   Верните сплющенный массив.

#### Связанные ссылки

*   [Array.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Array.forEach ()](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function steamrollArray(arr) { 
  let flat = [].concat(...arr); 
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat; 
 } 
 
 flattenArray([1, [2], [3, [[4]]]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLni/0)

### Код Объяснение:

*   Используйте оператор spread, чтобы объединить каждый элемент `arr` с пустым массивом
*   Используйте `Array.some()` чтобы узнать, содержит ли новый массив массив
*   Если это так, снова используйте рекурсивный вызов `steamrollArray` , передав новый массив, чтобы повторить процесс на массивах, которые были глубоко вложены
*   Если это не так, верните сплющенный массив

#### Связанные ссылки

*   [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
*   [Array.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [Оператор распространения](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [Тернарный оператор ( `condition ? a : b` )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function steamrollArray(arr) { 
  return arr.toString() 
    .replace(',,', ',')       // "1,2,,3" => "1,2,3" 
    .split(',')               // ['1','2','3'] 
    .map(function(v) { 
      if (v == '[object Object]') { // bring back empty objects 
        return {}; 
      } else if (isNaN(v)) {        // if not a number (string) 
        return v; 
      } else { 
        return parseInt(v);         // if a number in a string, convert it 
      } 
    }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CpDy/4)

### Код Объяснение:

*   Сначала мы преобразуем массив в строку, которая даст нам строку чисел, разделенную запятой, двойную запятую, если бы был пустой массив и литеральный текст объекта, если был объект, который мы можем исправить позже в нашем операторе if ,
*   Мы заменяем двойную запятую на одну, а затем разбиваем на массив.
*   сопоставить массив и исправить значения объекта и преобразовать строки в обычные числа.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.