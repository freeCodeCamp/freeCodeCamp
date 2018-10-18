---
title: Arguments Optional
localeTitle: Аргументы Дополнительно
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Может быть довольно сложно понять, что нужно сделать. Всегда есть много способов сделать что-то при кодировании, но независимо от используемого алгоритма нам нужно создать программу, которая выполняет следующие действия:

*   Он должен добавить два числа, переданные в качестве параметров, и вернуть сумму.
*   Он должен проверить, являются ли какие-либо цифры действительными числами, иначе возвратите **undefined** и остановите программу прямо там.
*   Он должен проверить, прошел ли он один или два аргумента. Больше игнорируются.
*   Если у него есть только один аргумент, он должен вернуть функцию, которая использует это число, и ожидает другого, а затем добавить его.

### Связанные ссылки

*   [Массивы](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
*   [тип](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [объект аргументов](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Каждый раз, когда вы имеете дело с аргументом, вы должны проверить, является ли это числом или нет. Для этого функция, которая обрабатывает эту задачу, сохранит повторяющийся код.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

При работе над случаем, когда ему нужно вернуть функцию, целесообразно проверить, является ли первый и единственный аргумент числом снова и основывается на этом коде.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

В случае, когда передан только один аргумент, не беспокойтесь о том, как запросить ввод для второго, просто определите определение функции правильно, и все будет работать так, как должно.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function addTogether() { 
      // Function to check if a number is actually a number 
      // and return undefined otherwise. 
      var checkNum = function(num) { 
        if (typeof num !== 'number') { 
          return undefined; 
        } else 
          return num; 
      }; 
 
      // Check if we have two parameters, check if they are numbers 
      // handle the case where one is not 
      // returns the addition. 
      if (arguments.length > 1) { 
        var a = checkNum(arguments[0]); 
        var b = checkNum(arguments[1]); 
        if (a === undefined || b === undefined) { 
          return undefined; 
        } else { 
          return a + b; 
        } 
      } else { 
        // If only one parameter was found, returns a new function that expects two 
        // Store first argument before entering the new function scope 
        var c = arguments[0]; 
 
        // Check the number again, must be outside the function to about returning an object 
        // instead of undefined. 
        if (checkNum(c)) { 
          // Return function that expect a second argument. 
          return function(arg2) { 
            // Check for non-numbers 
            if (c === undefined || checkNum(arg2) === undefined) { 
              return undefined; 
            } else { 
              // if numbers then add them. 
              return c + arg2; 
            } 
          }; 
        } 
      } 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnz/0)

### Код Объяснение:

*   Во-первых, я создаю функцию с единственной целью проверить, действительно ли число является числом и возвращает неопределенный, если это не так. Он использует **typeof** для проверки.
*   Проверьте, есть ли у нас два параметра, если да, то проверьте, являются ли они числами или нет, с **помощью** функции **checkNum, которую** я создал.
*   Если они не **определены,** добавьте их и верните добавление. Если они какие-либо из них не определены, то возвратите undefined.
*   В случае, когда у нас есть только один аргумент, мы возвращаем новую функцию, которая ожидает два параметра. Для этого мы сохраняем первый аргумент, прежде чем переходить в новую область, чтобы не перезаписывать наши аргументы.
*   Все еще внутри большого остального, нам нужно проверить аргумент, который мы сохранили, если это число, то мы возвращаем функцию, ожидающую второй аргумент.
*   Теперь внутри возвращаемой функции мы должны снова проверить **нечетные** числа так же, как в начале, используя **checkNum,** если undefined, а затем возвращаем это, в противном случае, если числа добавят их и вернут добавление.

#### Связанные ссылки

*   [тип](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [объект аргументов](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

```javascript
    function addTogether() { 
      var args = new Array(arguments.length); 
      //Storing the arguments in an array 
      for(var i = 0; i < args.length; ++i) { 
          args[i] = arguments[i]; 
        } 
     //Check for the arguments length 
     if(args.length == 2){ 
        //If there are two arguments,check for the type of both arguments 
        //Use typeof to check the type of the argument(both should be numbers) 
        if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){ 
          return undefined; 
          } 
        return args[0]+args[1]; 
       } 
     //When only one argument is provided 
     if(args.length == 1){ 
         a= args[0]; 
         //Check the  argument using typeof 
        if(typeof a!=='number'){ 
            return undefined; 
          } 
        else{ 
           //Making use of closures 
           return function(b){ 
           //Checking the second argument 
             if(typeof b !=='number'){ 
               return undefined; 
               } 
             else 
               return a+b; 
              }; 
          } 
        } 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLoA/0)

### Код Объяснение:

*   Сначала сохраните аргументы в массиве, создав массив, используя метод constructor.
*   Добавляет каждый аргумент в новый массив.
*   Затем проверьте длину нового массива, как нам нужно знать, достаточно ли у нас или нет.
*   Проверьте тип аргументов с помощью `typeof` поскольку оба они должны быть числами.
*   Возвращает undefined, если какой-либо из них не является числом или возвращает их сумму, если они есть.
*   Если был только один аргумент, мы по-прежнему проверяем тип после сохранения его в новой переменной и возвращаем новую функцию или неопределенную.

#### Связанные ссылки

*   [тип](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [объект аргументов](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:

```javascript
    //jshint esversion: 6 
    function addTogether() { 
      var args = Array.from(arguments); 
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ? 
          args.reduce((acc, n) => acc += n, 0): 
          (n) => typeof n === "number" ? 
            n + args[0]: 
            undefined; 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLoB/0)

### Код Объяснение:

*   Сначала я повторяю аргументы и проверяю аргументы, которые не являются числом, и возвращают неопределенные
*   Если это не я, то проверьте, если длина аргументов выше 1, если я суммирую аргументы, используя Array.prototype.reduce
*   Else Я возвращаю функцию, которая проверяет, является ли переданный аргумент числом и суммирует его, если не возвращает неопределенный

#### Связанные ссылки

*   [Array.prototype.reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Array.prototype.some](http://forum.freecodecamp.com/t/javascript-array-prototype-some/14304)
*   [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

> **ПРИМЕЧАНИЕ.** Пожалуйста, добавьте свое имя пользователя, только если вы добавили какое-либо **соответствующее основное содержимое** на страницу вики. (Пожалуйста, не удаляйте существующие имена пользователей.)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.