---
title: Return Largest Numbers in Arrays
localeTitle: Возвращает наибольшие числа в массивах
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Вы получите массив, содержащий вспомогательные массивы чисел, и вам нужно вернуть массив с наибольшим числом из каждого из вспомогательных массивов.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Вам нужно будет отслеживать массив с ответом и наибольшим количеством каждого подматрица.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Вы можете работать с многомерными массивами с помощью `Array[Index][SubIndex]`

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Обратите особое внимание на время хранения переменных при работе с циклами

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решения впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

**(Процедурный подход)**
```
function largestOfFour(arr) { 
  var results = []; 
  for (var n = 0; n < arr.length; n++) { 
    var largestNumber = arr[n][0]; 
    for (var sb = 1; sb < arr[n].length; sb++) { 
      if (arr[n][sb] > largestNumber) { 
        largestNumber = arr[n][sb]; 
      } 
    } 
 
    results[n] = largestNumber; 
  } 
 
  return results; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/734)

### Код Объяснение:

*   Создайте переменную для хранения _результатов_ в виде массива.
*   Создайте внешний цикл для итерации по внешнему массиву.
*   Создайте вторую переменную, чтобы удерживать наибольшее число и инициализировать ее первым номером. Это должно быть вне внутреннего цикла, поэтому он не будет переназначен, пока мы не найдем большее число.
*   Создайте внутренний цикл для работы с суб-массивами.
*   Убедитесь, что элемент вспомогательного массива больше, чем текущий наибольший номер. Если да, то обновите номер в переменной.
*   После внутреннего цикла сохраните наибольшее число в соответствующей позиции внутри массива `results` .
*   И, наконец, верните указанный массив.

#### Связанные ссылки

*   [Для петель](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

**(Декларативный подход)**
```
function largestOfFour(arr) { 
  return arr.map(function(group){ 
    return group.reduce(function(prev, current) { 
      return (current > prev) ? current : prev; 
    }); 
  }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/733)

### Код Объяснение:

*   мы сопоставляем все элементы в основном массиве с новым массивом с использованием `Array.prototype.map()` и возвращаем этот массив в качестве конечного результата
*   внутри каждого внутреннего массива мы сводим его содержимое до одного значения, используя `Array.prototype.reduce()`
*   функция обратного вызова, переданная методу уменьшения, принимает предыдущее значение и текущее значение и сравнивает два значения
*   если текущее значение выше предыдущего значения, мы устанавливаем его как новое предыдущее значение для сравнения со следующим элементом массива или возвращаем его на обратный вызов метода карты, если это последний элемент

#### Связанные ссылки

*   [Array.prototype.map ()](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [Array.prototype.reduce ()](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Тернарные операторы](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:

**(Декларативный подход)**
```
function largestOfFour(arr) { 
  return arr.map(Function.apply.bind(Math.max, null)); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/17)

### Код Объяснение:

TL; DR: Мы создаем специальную функцию обратного вызова (используя метод `Function.bind` ), который работает точно так же, как и `Math.max` но также обладает способностью `Function.prototype.apply` брать массивы в качестве аргументов ![:smiley:](https://forum.freecodecamp.com/images/emoji/emoji_one/smiley.png?v=3 ": Смайлик:")

*   Начнем с отображения элементов внутри основного массива. Значение каждого из внутренних массивов.
*   Теперь нужна функция обратного вызова, чтобы найти максимальный размер каждого внутреннего массива, предоставленного картой.

Поэтому мы хотим создать функцию, которая выполняет работу `Math.max` и принимает ввод как массив (который по умолчанию не используется).

Другими словами, было бы очень приятно и просто, если бы это сработало само по себе:

`Math.max([9, 43, 20, 6]); // Resulting in 43`

Увы, этого нет.

*   Чтобы выполнить работу с принятием аргументов в форме массива, существует этот метод `Function.prototype.apply` , но он немного усложняет ситуацию, _вызывая_ функцию _контекста_ .

т.е. `Math.max.apply(null, [9, 43, 20, 6]);` будет ссылаться на что-то вроде метода `Max.max` . То, что мы ищем ... почти.

Здесь мы передаем `null` как _контекст_ метода `Function.prototype.apply` как `Math.max` не нуждается в каком-либо контексте.

*   Поскольку `arr.map` ожидает функцию обратного вызова, а не только выражение, мы создаем функцию из предыдущего выражения с помощью метода `Function.bind` .
    
*   Поскольку `Function.prototype.apply` является статическим _методом_ одного и того же _объекта_ `Function` , мы можем вызвать `Function.prototype.bind` на `Function.prototype.apply` то есть `Function.prototype.apply.bind` .
    
*   Теперь мы передаем _контекст_ для вызова `Function.prototype.apply.bind` (в этом случае мы хотим `Math.max` чтобы мы могли получить его функциональность).
    
*   Поскольку встроенный метод `Function.prototype.apply` также потребует контекста, поскольку это первый аргумент, нам нужно передать ему фиктивный _контекст_ .
    
    *   Итак, мы передаем `null` как второй параметр в `Function.prototype.apply.bind` который дает _контекст_ методу `Math.max` .
        
    *   Поскольку `Math.max` не зависит от какого-либо _контекста_ , следовательно, он игнорирует фиктивный _контекст,_ заданный вызовом метода `Function.prototype.apply` .
        
    *   Таким образом, наш `Function.prototype.apply.bind(Math.max, null)` создает новую функцию, принимающую значения `arr.map` т.е. внутренние массивы.
        

#### Связанные ссылки

*   [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
*   [Function.prototype.apply на DevDocs](http://devdocs.io/#q=js+Function+apply)
*   [Function.bind в DevDocs](http://devdocs.io/#q=js+Function+bind)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.