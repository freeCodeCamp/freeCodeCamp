---
title: Sum All Odd Fibonacci Numbers
localeTitle: Сумма всех нечетных чисел Фибоначчи
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Вам нужно будет собрать все **числа Фибоначчи,** а затем проверить нечетные. Как только вы получите нечетные, вы добавите их все. Последним номером должно быть число, заданное как параметр, если оно фактически является выключенным числом Фибоначчи.

#### Связанные ссылки

*   [Число Фибоначчи](https://en.wikipedia.org/wiki/Fibonacci_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Чтобы получить следующий номер серии, вам нужно добавить текущий к предыдущему, и это даст вам следующий.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Чтобы проверить, действительно ли номер, все, что вам нужно проверить, это `number % 2 == 0` .

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Когда вы получите следующий нечетный, не забудьте добавить его в глобальную переменную, которая может быть возвращена в конце. `result += currNumber;` будет делать трюк.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function sumFibs(num) { 
    var prevNumber = 0; 
    var currNumber = 1; 
    var result = 0; 
    while (currNumber <= num) { 
        if (currNumber % 2 !== 0) { 
            result += currNumber; 
        } 
 
        currNumber += prevNumber; 
        prevNumber = currNumber - prevNumber; 
    } 
 
    return result; 
 } 
 
 // test here 
 sumFibs(4); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnV/0)

### Код Объяснение:

*   Создайте переменную, чтобы вести запись текущего и предыдущего номеров вместе с результатом, который будет возвращен.
*   Используйте цикл while, чтобы убедиться, что мы не переходим через число, указанное как параметр.
*   Мы используем операнд по модулю, чтобы проверить, является ли текущий номер нечетным или четным. Если он четный, добавьте его в результат.
*   Завершите круг Фибоначчи, повернув следующий номер и меняя значения.
*   Верните результат.

#### Связанные ссылки

*   JS while Loop

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function sumFibs(num) { 
    // Perform checks for the validity of the input 
    if (num < 0) return -1; 
    if (num === 0 || num === 1) return 1; 
 
    // Create an array of fib numbers till num 
    const arrFib = [1, 1]; 
    let nextFib = 0; 
 
    // We put the new Fibonacci numbers to the front so we 
    // don't need to calculate the length of the array on each 
    // iteration 
    while((nextFib = arrFib[0] + arrFib[1]) <= num) { 
        arrFib.unshift(nextFib); 
    } 
 
    // Sum only the odd numbers and return the value 
    return arrFib.reduce((acc, curr) => { 
        return acc + curr * (curr % 2); 
    }); 
 } 
 
 // test here 
 sumFibs(4); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/@kr3at0/SumAllOddFibonacciNumbers)

### Код Объяснение:

*   Создайте массив чисел фибоначчи до **num** .
*   Используйте метод `reduce()` чтобы найти сумму нечетных элементов массива.
*   Верните сумму.

#### Связанные ссылки

*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS для пояснений](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [Сокращение прототипа JS](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.