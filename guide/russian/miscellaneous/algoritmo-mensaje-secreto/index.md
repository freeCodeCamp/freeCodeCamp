---
title: Algoritmo Mensaje Secreto
localeTitle: Алгоритм секретного сообщения
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

### объяснение:

Эта проблема очень проста, вы получите строку, которая представляет фразу в двоичном коде, и вам придется перевести ее на слова. Нет прямого способа сделать это, поэтому вам придется переводить дважды.

## Подсказка: 1

Сначала вы должны преобразовать из **двоичного** в **десятичный,** а затем перевести его в символы.

## Подсказка: 2

Все проще, если сосредоточиться на небольших деталях, разделить сообщение, что вы получаете, и сосредоточиться на одной букве за раз.

## Подсказка: 3

Удостоверьтесь, что после перекодирования двоичного кода в десятичный символ можно сбросить любой из вариантов, используемых для выполнения перевода. Кроме того, не забудьте вернуть все на одну цепочку.

## Спойлер!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение ниже!**

## Решение для кода:
```
function binaryAgent(str) { 
  biString = str.split(' '); 
  uniString = []; 
 
  // Utilizando el parámetro base en parseInt podemos convertir el número 
  // binario a número decimal mientras simultáneamente lo convertimos a carácter. 
 
  for(i=0;i < biString.length;i++){ 
    uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
  } 
  // Simplemente unimos la cadena. 
  return uniString.join(''); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": ракета:") [В REPL!](https://repl.it/CLnm/0)

# Объяснение кода:

*   Мы выделяем строку в массиве строк, разделенных пробелами.
*   Мы создаем переменную, которая будет необходима на этом пути, имя самоочевидно.
*   Мы перебираем новую двоичную матрицу.
*   Мы конвертируем в десятичное число с помощью parseInt ( _двоичный_ , 2) (со вторым параметром мы расскажем вам, на какой основе наши числа в настоящее время)
*   В итоге мы возвращаем наше преобразованное сообщение.

## Второе решение:
```
function binaryAgent(str) { 
  // Separamos el código binario por sus espacios. 
  str = str.split(' '); 
  var power; 
  var decValue = 0; 
  var sentence = ''; 
 
  // Comprobamos cada número binario de la matriz. 
  for (var s = 0; s < str.length; s++) { 
    // Comprobamos cada bit del número binario. 
    for (var t = 0; t < str[s].length; t++) { 
      // Esto solo toma en consideración los activos. 
      if (str[s][t] == 1) { 
        // Esto es equivalente a 2 ** posición. 
        power = Math.pow(2, +str[s].length - t - 1); 
        decValue += power; 
 
        // Guardamos el valor decimal sumándolo al anterior. 
      } 
    } 
 
    // Luego de que el número binario es convertido a decimal, lo convertimos en una cadena y lo guardamos. 
    sentence += (String.fromCharCode(decValue)); 
 
    // Reseteamos el valor decimal para el próximo número binario. 
    decValue = 0; 
  } 
 
  return sentence; 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": ракета:") [В REPL!](https://repl.it/CLno/0)

# Объяснение кода:

*   Для каждой бинарной цепи мы проверяем те и игнорируем нули.
*   Для тех, кто является одним или активным, мы преобразуем их в десятичные. Это учитывает положение и соответствующую власть, к которой он должен быть повышен.
*   Мы сохраняем мощность в переменной **мощности,** добавляя ее к предыдущим в переменной **decValue** . Эта переменная будет продолжать добавлять полномочия к концу цикла и затем возвращать десятичное число.
*   Мы преобразуем окончательное десятичное число в ASCII и добавим его к переменной **предложения** вместе с любой другой текстовой строкой, уже преобразованной и сохраненной.
*   Мы возвращаем значение переменной **decValue,** чтобы избежать неправильных десятичных знаков, прежде чем продолжить внешний цикл.

## Третье решение:
```
function binaryAgent(str) { 
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); })); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": ракета:") [В REPL!](https://repl.it/CLnp/0)

# Объяснение кода:

*   Сначала мы используем `split()` чтобы иметь возможность работать с каждым символом в качестве матричного элемента.
*   Затем мы используем `map()` для обработки каждого двоичного элемента до десятичного с помощью `pareseInt()`
*   Наконец, мы можем использовать `String.fromCharCode()` для преобразования каждого номера ASCII в соответствующий символ.
*   Однако `fromCharCode()` ожидает серию чисел вместо матрицы. Мы можем использовать ES6 Spread Operator для передачи массива чисел в виде отдельных номеров. Дополнительная информация: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread\_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Четвертое решение:
```
function binaryAgent(str) { 
  var re = /(\d+)(\s?)/g; 
  function convertToChar(match,p1,p2){ 
    return String.fromCharCode(parseInt(p1, 2)); 
  } 
  return str.replace(re, convertToChar); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": ракета:") [В REPL!](https://repl.it/CLnr/0)

# Объяснение кода:

*   В этом решении мы используем `String.replace()` чтобы найти все двоичные числа и преобразовать их в символы.
*   Сначала мы используем регулярное выражение для нахождения всех двоичных чисел и необязательных конечных пространств.
*   Затем мы определяем функцию, которая преобразует каждое первое подконус к числу с `parseInt()` а затем символ с `String.fromCharCode()` . Не используя второе подкоординатность, мы оставляем в стороне все пространства, которые находятся между каждым двоичным числом.
*   Наконец, мы используем наше регулярное выражение и функцию, определенную как параметр `String.replace()` .

> **ПРИМЕЧАНИЕ.** Пожалуйста, добавьте свое имя пользователя, только если вы добавили в статью **соответствующий контент** . (Пожалуйста, не удаляйте существующее имя.)