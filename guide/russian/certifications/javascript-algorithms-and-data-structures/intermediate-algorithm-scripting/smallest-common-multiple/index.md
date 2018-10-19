---
title: Smallest Common Multiple
localeTitle: Самый маленький общий множественный
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Наименьшее общее число между двумя числами - это наименьшее число, на которое могут делиться оба числа. Эта концепция может быть распространена и на более чем два числа.

Сначала мы можем начать с нахождения наименьшего общего числа между двумя числами. Наивно, вы можете начать писать несколько из каждого числа до тех пор, пока не напишите множественное число, существующее из обоих чисел.

Примером может служить число `3` и `4` . Кратные числа `3` равны `3, 6, 9, 12, 15, 18, ...` и кратные `4` равны `4, 8, 12, 16, 20, ...` Первое наименьшее число, с которым мы сталкиваемся в обоих списках, равно `12` так что это самый маленький общий кратный между `3` и `4` .

Эта проблема может сбивать с толку, потому что большинство людей ищут наименьший общий кратный только двух чисел, но забывают **диапазон** ключевых слов. Однако это означает, что если вам дано `[1,5]` , вам нужно проверить наименьшее общее кратное для всех чисел `[1,2,3,4,5]` , которое равномерно делится на все из них.

#### Связанные ссылки

*   [Наименее (наименьший) общий множественный](https://en.wikipedia.org/wiki/Least_common_multiple)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Создайте массив со всеми номерами, отсутствующими в исходном массиве, чтобы было легче проверить, когда нужно проверять четное деление.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Вы можете использовать оператор остатка ( `%` ), чтобы проверить, является ли напоминание о делении 0, что означает, что оно равномерно делится.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Если вы отсортируете массив от максимального к наименьшему, то вы можете использовать первые два числа в качестве первой проверки для наименьшего общего кратного. Это связано с тем, что они, скорее всего, будут наименьшим общим числом, чем более низкие.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function smallestCommons(arr) { 
  // Sort array from greater to lowest 
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014) 
  arr.sort(function(a, b) { 
    return b - a; 
  }); 
 
  // Create new array and add all values from greater to smaller from the 
  // original array. 
  var newArr = []; 
  for (var i = arr[0]; i >= arr[1]; i--) { 
    newArr.push(i); 
  } 
 
  // Variables needed declared outside the loops. 
  var quot = 0; 
  var loop = 1; 
  var n; 
 
  // Run code while n is not the same as the array length. 
  do { 
    quot = newArr[0] * loop * newArr[1]; 
    for (n = 2; n < newArr.length; n++) { 
      if (quot % newArr[n] !== 0) { 
        break; 
      } 
    } 
 
    loop++; 
  } while (n !== newArr.length); 
 
  return quot; 
 } 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLn2/0)

### Код Объяснение:

*   Из-за возможности наименьшего общего знаменателя быть среди двух самых больших чисел, имеет смысл сначала проверить их, поэтому сортируйте массив.
*   Создайте новый массив для сортировки всех чисел, `newArr` .
*   Используйте по убыванию `for` цикла ( `var i = arr[0]; i >= arr[1]; i--` ) , чтобы добавить цифры от самых больших до самых маленьких в новом массиве.
*   Объявите переменные для частного, чтобы мы могли получить доступ к ним за пределами цикла:
    *   фактор, который будет нашим самым маленьким общим многократным ( `quot` )
    *   номер цикла, который мы проверяем ( `loop` )
    *   индекс массива чисел ( `n` )
*   Используйте `do` во `n` `while` цикла , чтобы проверить , что нам нужно , пока `n` не такой же длины , как новый массив.
*   В части `do` мы будем умножать самое первое число, умноженное на число циклов, умноженное на второе число ( `quot = newArr[0] * loop * newArr[1];` ).
*   Часть `loop` позволит нам увеличить число, которое мы проверяем, за наибольшее число, которое у нас есть, без изменения алгоритма.
*   Мы вводим цикл `for` который будет идти от `n` равным 2, и подниматься на один ( `loop++` ), в то время как он меньше массива со всеми числами ( `n < newArr.length` ).
*   Если фактор не делится равномерно ( `quot % newArr[n] !== 0` ), то остановите цикл ( `break;` ). Если он четный, то проверяйте следующие элементы ( `n++` ) в массиве, пока он не станет четным, или мы найдем наш ответ.
*   Вне цикла увеличьте значение цикла ( `loop++` ).
*   В конце цикла возвращаем коэффициент ( `return quot;` ).

Примечание. Если массив имеет только два элемента, то цикл `for` никогда не используется, а возвращаемое значение является произведением указанных чисел.

#### Связанные ссылки

*   [Сортировка прототипа JS](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [JS для пояснений](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Do While Loop](http://forum.freecodecamp.com/t/javascript-do-while-loop/14662)
*   String.length

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function smallestCommons(arr) { 
    var range = []; 
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) { 
    range.push(i); 
    } 
 
    // can use reduce() in place of this block 
    var lcm = range[0]; 
    for (i = 1; i < range.length; i++) { 
    var GCD = gcd(lcm, range[i]); 
    lcm = (lcm * range[i]) / GCD; 
    } 
    return lcm; 
 
    function gcd(x, y) {    // Implements the Euclidean Algorithm 
    if (y === 0) 
        return x; 
    else 
        return gcd(y, x%y); 
    } 
 } 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLn4/0)

### Код Объяснение:

*   Первое, базовое решение требует более 2000 циклов для вычисления `smallestCommons([1,13])` числа тестовых примеров `smallestCommons([1,13])` и более 4 миллионов циклов для расчета `smallestCommons([1,25])` . Это решение оценивает `smallestCommons([1,13])` примерно в 20 циклах и `smallestCommons([1,25])` в 40, используя более эффективный алгоритм.
*   Сделать пустой **диапазон** массива.
*   Все числа между заданным диапазоном помещаются в **диапазон** с использованием цикла `for` .
*   Следующий блок кода реализует алгоритм Евклида, который используется для нахождения наименьших общих кратных чисел.

#### Связанные ссылки

*   [Евклидовой алгоритм](https://en.wikipedia.org/wiki/Euclidean_algorithm)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [JS Math Min](http://forum.freecodecamp.com/t/javascript-math-min/14684)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function smallestCommons(arr) { 
 
  // range 
  let min = Math.min.apply(null, arr); 
  let max = Math.max.apply(null, arr); 
 
  let smallestCommon = lcm(min, min + 1); 
 
  while(min < max) { 
    min++; 
    smallestCommon = lcm(smallestCommon, min); 
  } 
 
  return smallestCommon; 
 } 
 
 /** 
 * Calculates Greatest Common Divisor 
 * of two nubers using Euclidean algorithm 
 * https://en.wikipedia.org/wiki/Euclidean_algorithm 
 */ 
 function gcd(a, b) { 
  while (b > 0) { 
    let tmp = a; 
    a = b; 
    b = tmp % b; 
  } 
  return a; 
 } 
 
 /** 
 * Calculates Least Common Multiple 
 * for two numbers utilising GCD 
 */ 
 function lcm(a, b) { 
  return (a * b / gcd(a, b)); 
 } 
 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/MR9P/latest)

### Код Объяснение:

*   Извлечь минимум и максимум из предоставленного **обр** .
*   Инициализируйте **smallestCommon** с LCM первых двух чисел.
*   Циклический интервал вычисления LCM текущего LCM и следующего числа в диапазоне **lcm (a, b, c) = lcm (lcm (a, b), c)** .

#### Связанные ссылки

*   [JS Function.prototype.apply ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.