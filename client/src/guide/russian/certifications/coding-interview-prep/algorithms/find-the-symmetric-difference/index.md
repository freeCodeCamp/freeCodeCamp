---
title: Find the Symmetric Difference
localeTitle: Найти симметричную разницу
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать [**`Read-Search-Ask`**](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/) если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Симметричная разность (обычно обозначаемая Δ) двух множеств - это набор элементов, которые находятся в любом из двух наборов, но не в обоих.

Например, `sym([1, 2, 3], [5, 2, 1, 4])` должен дать `[3, 4, 5]` .

Следующее выше определение, симметричная разность трех множеств _A_ , _B_ и _C_ может быть выражена как `(A &Delta; B) &Delta; C`

#### Связанные ссылки

*   [Симметричная разница - Википедия](https://en.wikipedia.org/wiki/Symmetric_difference)
*   [Симметричная разница - YouTube](https://www.youtube.com/watch?v=PxffSUQRkG4)

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

 [## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Объектом _arguments_ является объект типа _Array,_ который только наследует свойство `Array.length` . Поэтому рассмотрим преобразование его в реальный _массив_ .

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Deem записывает вспомогательную функцию, которая возвращает симметричную разницу двух массивов на каждый вызов, а не пытается разделить все множества одновременно.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Примените вспомогательную функцию к созданному массиву аргументов, который в свою очередь редуцирует их элементы, чтобы сформировать ожидаемый результат.

**Заметка** В случае _нечетного числа множеств_ симметричная разность будет включать одинаковые элементы, присутствующие во всех заданных наборах. Например;
```
A = {1, 2, 3} 
 B = {2, 3, 4} 
 C = {3, 4, 5} 
 
 (A &Intersection; B) &Intersection; C = {1, 4} &Intersection {3, 4, 5} 
 A &Intersection; B = {1, 3, 5} 
```

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![:warning:](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif ":предупреждение:")

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function sym() { 
      var args = []; 
      for (var i = 0; i < arguments.length; i++) { 
        args.push(arguments[i]); 
      } 
 
      function symDiff(arrayOne, arrayTwo) { 
        var result = []; 
 
        arrayOne.forEach(function(item) { 
          if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        arrayTwo.forEach(function(item) { 
          if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        return result; 
      } 
 
      // Apply reduce method to args array, using the symDiff function 
      return args.reduce(symDiff); 
    } 

```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 

 [![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) [Код запуска](https://repl.it/C4II/0)

### Код Объяснение:

*   `push()` используется для разбиения объекта _аргументов_ на массив, _args_ .
*   Функция `symDiff` находит симметричную разницу между двумя наборами. Он используется как функция обратного вызова для метода `reduce()` вызываемого в _args_ .
*   `arrayOne.forEach()` подталкивает элементы к _результату,_ которые присутствуют только в _arrayOne,_ а также не являются частью _результата_ .
*   `arrayTwo.forEach()` подталкивает элементы к _результату,_ которые присутствуют только в _arrayTwo,_ а также не являются частью _результата_ .
*   Возвращается _результат_ , являющийся симметричной разницей. Это решение работает для любого количества наборов.

#### Связанные ссылки

*   [JavaScript для](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for)
*   [JavaScript Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JavaScript Array.prototype.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [JavaScript Array.prototype.forEach ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
*   [JavaScript Array.prototype.indexOf ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

```javascript
    function sym() { 
 
      // Convert the argument object into a proper array 
      var args = Array.prototype.slice.call(arguments); 
 
      // Return the symmetric difference of 2 arrays 
      var getDiff = function(arr1, arr2) { 
 
        // Returns items in arr1 that don't exist in arr2 
        function filterFunction(arr1, arr2) { 
          return arr1.filter(function(item) { 
            return arr2.indexOf(item) === -1; 
          }); 
        } 
 
        // Run filter function on each array against the other 
        return filterFunction(arr1, arr2) 
          .concat(filterFunction(arr2, arr1)); 
      }; 
 
      // Reduce all arguments getting the difference of them 
      var summary = args.reduce(getDiff, []); 
 
      // Run filter function to get the unique values 
      var unique = summary.filter(function(elem, index, self) { 
        return index === self.indexOf(elem); 
        }); 
      return unique; 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLoc/0)

### Код Объяснение:

*   Метод `slice()` используется для разбиения объекта _аргументов_ на массив _args_ .
*   Функция `getDiff` находит симметричную разницу между двумя наборами, _arr1_ и _arr2_ . Он используется как функция обратного вызова для метода `reduce()` вызываемого в _args_ .
*   Первая `filterFunction()` возвращает элементы в _arr1,_ которые не существуют в _arr2_ .
*   Следующий `filterFunction()` запускается на каждом массиве против другого, чтобы проверить обратную `filterFunction()` первой проверки на уникальность и объединить ее.
*   _резюме_ состоит из приведенных аргументов.
*   `filter()` используется в _сводке_ для сохранения только уникальных значений и _уникальных_ значений.

#### Связанные ссылки

*   [JavaScript Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [JavaScript Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [JavaScript Array.prototype.concat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:

```javascript
    function sym() { 
      let argv = Array.from(arguments).reduce(diffArray); 
      return argv.filter((element, index, array) => index === array.indexOf(element));//remove duplicates 
    } 
 
    function diffArray(arr1, arr2) { 
      return arr1 
        .filter(element => !arr2.includes(element)) 
        .concat(arr2.filter(element => !arr1.includes(element))); 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/@ashenm/Symmetric-Difference)

### Код Объяснение:

*   Основная функция _sym ()_ создает массив из _аргументов_ и уменьшает его элементы, используя вспомогательную функцию _diffArray ()_ для одного массива.
    
*   Функция _diffArray ()_ возвращает симметричную разность двух массивов путем выделения уникальных элементов в параметризованных массивах; _arr1_ и _arr2_ .
    

#### Связанные ссылки

*   [JavaScript Array.from ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
*   [JavaScript Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.