---
title: Chunky Monkey
localeTitle: Короткая обезьяна
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/aadd6bead83ab7d79a795c326f005a89e6ad81f5.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Наша цель для этого алгоритма состоит в том, чтобы разделить `arr` (первый аргумент) на более мелкие куски массивов с длиной, предоставленной `size` (второй аргумент). Для завершения этого алгоритма необходимо выполнить 4 зеленых проверки (цели), которые необходимо выполнить нашему коду:

1.  `(['a', 'b', 'c', 'd'], 2)` ожидается `[['a', 'b'], ['c', 'd']]`
2.  `([0, 1, 2, 3, 4, 5], 3)` ожидается `[[0, 1, 2], [3, 4, 5]]`
3.  `([0, 1, 2, 3, 4, 5], 2)` ожидается `[[0, 1], [2, 3], [4, 5]]`
4.  `([0, 1, 2, 3, 4, 5], 4)` ожидается `[[0, 1, 2, 3], [4, 5]]`

#### Связанные ссылки

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

В приведенных выше ссылках предлагается использовать `Array.push()` , поэтому давайте начнем с создания первого массива для хранения меньших массивов, которые мы скоро получим так:

```javascript
    var newArray = []; 
```

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Далее нам понадобится `for loop` для циклического прохождения через `arr` .

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Наконец, нам нужен метод для фактического разделения, и мы можем использовать `Array.slice()` для этого. Ключом к этому алгоритму является понимание того, как все `for loop` , `size` , `Array.slice()` и `Array.push()` работают вместе.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function chunkArrayInGroups(arr, size) { 
 
      var temp = []; 
      var result = []; 
 
      for (var a = 0; a < arr.length; a++) { 
        if (a % size !== size - 1) 
          temp.push(arr[a]); 
        else { 
          temp.push(arr[a]); 
          result.push(temp); 
          temp = []; 
        } 
      } 
 
      if (temp.length !== 0) 
        result.push(temp); 
      return result; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/24)

### Код Объяснение:

*   Во-первых, мы создаем две пустые массивы, называемые `temp` и `result` , которые мы в конечном итоге вернем.
*   Наша **для петли** петли , пока не равно или больше , чем длина массива в нашем тесте. `a`
*   Внутри нашего цикла мы нажимаем `temp` используя `temp.push(arr[a]);` если остальная часть `a / size` не равна `size - 1` .
*   В противном случае мы нажимаем на `temp` , нажимаем `temp` на переменную `result` и сбрасываем `temp` в пустой массив.
*   Затем, если `temp` не пустой массив, мы подталкиваем его к `result` .
*   Наконец, мы возвращаем значение `result` .

#### Связанные ссылки

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Для циклов](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

```javascript
    function chunkArrayInGroups(arr, size) { 
      // Break it up. 
      var arr2 = []; 
      for (var i = 0; i < arr.length; i+=size) { 
        arr2.push(arr.slice(i , i+size)); 
      } 
      return arr2; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/Cj9x/3)

### Код Объяснение:

*   Сначала мы создаем пустой массив `arr2` где мы будем хранить наши «куски».
*   Цикл for начинается с нуля, каждый раз увеличивается по `size` через цикл и останавливается, когда он достигает `arr.length` .
*   Обратите внимание, что это для цикла не проходит через `arr` . Вместо этого мы используем цикл для генерации чисел, которые мы можем использовать в качестве индексов для срезания массива в правильных местоположениях.
*   Внутри нашего цикла мы создаем каждый фрагмент с помощью `arr.slice(i, i+size)` и добавляем это значение к `arr2` с `arr2.push()` .
*   Наконец, мы возвращаем значение `arr2` .

#### Связанные ссылки

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [Для циклов](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:

```javascript
    function chunkArrayInGroups(arr, size) { 
      // Break it up. 
      var newArr = []; 
      var i = 0; 
 
      while (i < arr.length) { 
        newArr.push(arr.slice(i, i+size)); 
        i += size; 
      } 
      return newArr; 
    } 
    chunkArrayInGroups(["a", "b", "c", "d"], 2); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/26)

### Код Объяснение:

*   Во-первых, мы создаем две переменные. `newArr` - пустой массив, на который мы будем нажимать. Мы также имеем переменную `i` равную нулю, для использования в нашем цикле while.
    
*   Наш цикл while цикл до тех пор, пока `i` будет равен или больше длины массива в нашем тесте.
    
*   Внутри нашего цикла, мы выдвигаем к `newArr` массив с помощью `arr.slice(i, i+size)` . Впервые это петли, это будет выглядеть примерно так:
    
    newArr.push (arr.slice (1, 1 + 2))
    
*   После нажатия на `newArr` мы добавляем переменную `size` в `i` .
    
*   Наконец, мы возвращаем значение `newArr` .
    

#### Связанные ссылки

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [В то время как петли](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение кода 2:

```javascript
    function chunkArrayInGroups(arr, size) { 
      var newArr = []; 
      while (arr.length) { 
        newArr.push(arr.splice(0,size)); 
      } 
      return newArr; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/579)

### Код Объяснение:

*   Во-первых, мы создаем переменную. `newArr` - пустой массив, на который мы будем нажимать.
*   Наше `while` петли петли , пока длина массива в нашем тесте не является 0.
*   Внутри нашего цикла, мы выдвигаем к `newArr` массива с помощью `arr.splice(0, size)` .
*   Для каждой итерации в `while` цикла, он удаляет `size` количество элементов из передней части `arr` и толкать их в виде массива `newArr` .
*   Наконец, мы возвращаем значение `newArr` .

#### Связанные ссылки

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
*   [В то время как петли](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода 3:

```javascript
    function chunkArrayInGroups(arr, size) { 
      if (arr.length <= size){ 
        return [arr]; 
      } 
      else { 
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size)); 
      } 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/579)

### Код Объяснение:

*   Массив меньше размера возвращается вложенным.
*   Для любого массива, большего, чем размер, он разбивается на две части. Первый сегмент вложен и согласован со вторым вторым сегментом, который делает рекурсивный вызов.

#### Связанные ссылки

*   [Рекурсия](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)
*   [Array.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.