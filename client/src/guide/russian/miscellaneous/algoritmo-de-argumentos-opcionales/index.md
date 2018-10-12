---
title: Algoritmo De Argumentos Opcionales
localeTitle: Алгоритм опционных аргументов
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

### объяснение:

Может быть немного сложно понять, что нужно делать. Когда мы программируем, есть разные способы сделать что-то. Независимо от используемого алгоритма нам необходимо создать функцию, которая выполняет следующие действия:

*   Вы должны добавить два числа, полученные в качестве параметров, и вернуть результат.
*   Вы должны проверить, что оба числа действительно являются числами, иначе возвратите **undefined** и остановите функцию в то время.
*   Вы должны проверить, что полученные аргументы - один или два. Если их больше, их следует игнорировать.
*   Если получен только один аргумент, должна быть возвращена функция, которая принимает другой аргумент, а затем добавление.

## Подсказка: 1

Каждый раз, когда вы работаете с аргументом, вы должны проверить, действительно ли это число или нет. Чтобы избежать повторения кода, вы должны создать функцию, которая занимается этой задачей.

## Подсказка: 2

Когда необходимо вернуть функцию, рекомендуется проверить, является ли первый и единственный аргумент новым номером и основывает на нем код.

## Подсказка: 3

В случае, когда принимается только один аргумент, не беспокойтесь о том, как запросить второй, просто выполните определение функции правильно, и все будет работать так, как должно.

## Спойлер!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение ниже!**

## Решение для кода:
```
function addTogether() { 
  // Función para comprobar si un número es realmente un número 
  // y retornar undefined en caso contrario. 
  var checkNum = function(num) { 
    if (typeof num !== 'number') { 
      return undefined; 
    } else 
      return num; 
  }; 
 
  // Comprobar si tenemos dos parámetros y si ambos son números 
  // En caso que no lo sean retornamos undefined 
  // retornamos la suma 
  if (arguments.length > 1) { 
    var a = checkNum(arguments[0]); 
    var b = checkNum(arguments[1]); 
    if (a === undefined || b === undefined) { 
      return undefined; 
    } else { 
      return a + b; 
    } 
  } else { 
    // Si solo es encontrado un parámetro retornamos una nueva función para solicitar un segundo parámetro 
    // Guardamos el primer argumento antes de entrar al scope de la nueva función 
    var c = arguments[0]; 
 
    // Comprobamos que sea número de nuevo, debe ser fuera del objeto que retornaremos 
    // en lugar de undefined. 
    if (checkNum(c)) { 
      // // Retornamos la función que espera el segundo parámetro. 
      return function(arg2) { 
        // Comprobamos que no sean números. 
        if (c === undefined || checkNum(arg2) === undefined) { 
          return undefined; 
        } else { 
          // Si lo son, sumamos. 
          return c + arg2; 
        } 
      }; 
    } 
  } 
 } 
 
 // realizamos el test 
 addTogether(2,3); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": ракета:") [В REPL!](https://repl.it/CLnz/0)

### Объяснение кода:

*   Сначала мы создаем функцию с единственной целью проверить, действительно ли число действительно является числом, и мы возвращаем неопределенное, если это не так. Используйте **typeof** для проверки.
*   Мы проверяем, есть ли у нас два параметра, если у нас есть, мы проверяем, являются ли они числами или не используют функцию **checkNum** .
*   Если параметры не **определены,** мы добавляем их и возвращаем сумму. Если один из них не определен, мы возвращаем undefined.
*   Если у нас есть только один аргумент, мы возвращаем новую функцию, которая ожидает два параметра. Для этого мы сохраняем второй параметр перед входом в функцию, чтобы избежать перезаписи аргумента.
*   Даже в первом случае _нам_ нужно проверить, что сохраненный аргумент - это число, если оно есть, то мы возвращаем функцию, ожидающую второго аргумента.
*   Теперь внутри возвращаемой функции мы должны проверить, что новый параметр является числом с помощью **checkNum** , если он не определен, мы вернем его, и в противном случае мы добавим числа и вернем результат.

## Второе решение:
```
function addTogether() { 
  var args = new Array(arguments.length); 
  // Almacenamos los argumentos en un array. 
  for(var i = 0; i < args.length; ++i) { 
    args[i] = arguments[i]; 
  } 
  // Comprobamos la cantidad de argumentos. 
  if(args.length == 2){ 
    // Si hay dos argumentos, comprobamos el tipo de ambos 
    // Utiliza typeof para comprobar el tipo de argumentos. (ambos deben ser números) 
    if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){ 
      return undefined; 
    } 
    return args[0]+args[1]; 
  } 
  // Cuando solo un argumento es provisto. 
  if(args.length == 1){ 
    a = args[0]; 
    // Comprobamos el tipo utilizando typeof. 
    if(typeof a!=='number'){ 
      return undefined; 
    } 
    else{ 
      // Hacemos uso de las funciones internas. 
      return function(b){ 
      // Comprobamos el segundo parámetro. 
      if(typeof b !=='number'){ 
        return undefined; 
      } 
      else 
        return a+b; 
      }; 
    } 
  } 
 } 
 
 // realizamos el test 
 addTogether(2,3); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": ракета:") [В REPL!](https://repl.it/CLoA/0)

## Третье решение:
```
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
 
 // realizamos el test 
 addTogether(2,3); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": ракета:") [В REPL!](https://repl.it/CLoB/0)

### Объяснение кода:

*   Сначала мы перебираем аргументы и проверяем, что они являются числами, и если они не возвращаются, мы не возвращаем неопределенные.
*   Затем мы проверяем, что количество аргументов больше 1, если мы добавляем аргументы, используя `Array.prototype.reduce`
*   В противном случае мы возвращаем функцию, которая проверяет, что полученный параметр является числом и добавляет его, если мы не возвращаем неопределенные.

> **ПРИМЕЧАНИЕ.** Пожалуйста, добавьте свое имя пользователя, только если вы добавили в статью **соответствующий контент** . (Пожалуйста, не удаляйте существующее имя.)