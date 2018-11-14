---
title: Sum All Numbers in a Range
localeTitle: Сумма всех чисел в диапазоне
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Вам нужно создать программу, которая будет принимать массив из двух чисел, которые не обязательно в порядке, а затем добавить не только эти числа, но и любые числа между ними. Например, \[3,1\] будет таким же, как `1+2+3` а не только `3+1`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Используйте `Math.max()` чтобы найти максимальное значение двух чисел.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Используйте `Math.min()` чтобы найти минимальное значение двух чисел.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Помните, что вы должны добавить все числа между ними, чтобы это потребовало способа получить эти числа.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function sumAll(arr) { 
    var max = Math.max(arr[0], arr[1]); 
    var min = Math.min(arr[0], arr[1]); 
    var temp = 0; 
    for (var i=min; i <= max; i++){ 
        temp += i; 
    } 
  return(temp); 
 } 
 
 sumAll([1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLm6/0)

### Код Объяснение:

*   Сначала создайте переменную, чтобы сохранить максимальное число между двумя.
*   То же, что и раньше для наименьшего числа.
*   Мы создаем временную переменную для добавления чисел.

Поскольку числа могут быть не всегда в порядке, использование `max()` и `min()` поможет организовать.

#### Связанные ссылки

*   [Math.max ()](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [Math.min ()](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   [Для циклов](http://forum.freecodecamp.com/t/javascript-for-loop/14666)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function sumAll(arr) { 
  // Buckle up everything to one! 
 
  // Using ES6 arrow function (one-liner) 
  var sortedArr = arr.sort((a,b) => ab); 
  var firstNum = arr[0]; 
  var lastNum = arr[1]; 
  // Using Arithmetic Progression summing formula 
 
  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2; 
  return sum; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLm7/0)

### Код Объяснение:

*   Во-первых, мы создаем переменную с именем `sortedArr` которая сортирует ее от самого низкого до самого высокого значения.
*   `firstNum` равен первому числу, а `lastNum` равен второму числу.
*   Затем, используя формулу суммирования арифметической прогрессии, мы даем `sum` равную `(lastNum - firstNum + 1) * (firstNum + lastNum) / 2` .
*   Наконец, мы возвращаем `sum` .

Строка `var sortedArr = arr.sort((a,b) => ab);` вероятно, вы будете более смущены. Это будет то же самое, что создать функцию, которая возвращает `ab` для `sort()` который является стандартным способом сортировки чисел от наименьшего до самого большого. Вместо использования стрелки или функции стрелки жира мы можем делать все это в одной отдельной строке, что позволяет нам писать меньше.

#### Связанные ссылки

*   [Array.sort ()](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [Формула суммирования арифметической прогрессии](https://en.wikipedia.org/wiki/Arithmetic_progression#Sum)
*   [Функция ES6 arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function sumAll(arr) { 
    var sum = 0; 
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){ 
        sum += i; 
    } 
  return sum; 
 } 
 
 sumAll([1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLm8/0)

### Код Объяснение:

*   Создание переменной суммы для хранения суммы элементов.
*   Запуск итерации цикла из min-элемента заданного массива и остановка при достижении максимального элемента.
*   Использование оператора спреда (... arr) позволяет передавать действительный массив функции вместо отдельных элементов.

#### Связанные ссылки

*   [Оператор распространения](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [Использование оператора Spread в Math.max ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.