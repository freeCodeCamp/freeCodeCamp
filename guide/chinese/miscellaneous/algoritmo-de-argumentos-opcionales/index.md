---
title: Algoritmo De Argumentos Opcionales
localeTitle: 可选参数的算法
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

### 解释：

理解应该做什么可能有点复杂。当我们编程时，有不同的做法。无论使用何种算法，我们都需要创建一个执行以下操作的函数：

*   您必须添加两个作为参数接收的数字并返回结果。
*   您必须检查这两个数字是否真的是数字，否则返回**undefined**并在此时停止该功能。
*   您必须检查收到的参数是一个还是两个。如果还有更多，则应忽略它们。
*   如果只接收到一个参数，则必须返回接受另一个参数的函数，然后进行添加。

## 线索：1

每次你参加辩论时，你必须检查它是否真的是一个数字。为避免重复代码，您应该创建一个处理此任务的函数。

## 线索：2

当需要返回该函数时，建议检查第一个和唯一参数是否为新数字，并将代码作为基础。

## 线索：3

在只收到一个参数的情况下，不要担心如何请求第二个参数，只需正确定义函数，一切都会正常工作。

## 扰流板警报！

![警告标志](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**解决方案如下**

## 代码解决方案
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [在REPL中！](https://repl.it/CLnz/0)

### 代码说明：

*   首先，我们创建一个函数，唯一的目的是检查一个数字是否真的是一个数字，如果不是，我们返回undefined。使用**typeof**进行检查。
*   我们检查是否有两个参数，如果有，我们使用**checkNum**函数检查它们是否为数字。
*   如果参数**未定义，**我们添加它们并返回总和。如果其中一个未定义，那么我们返回undefined。
*   如果我们只有一个参数，那么我们返回一个需要两个参数的新函数。为此，我们在输入函数之前存储第二个参数以避免覆盖参数。
*   即使在第一个_我们_需要检查保存的参数是一个数字，如果是，那么我们返回等待第二个参数的函数。
*   现在在我们将返回的函数内部，我们必须使用**checkNum**检查新参数是否为数字，如果未定义，我们将返回该值，否则我们将添加数字并返回结果。

## 二解决方案：
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [在REPL中！](https://repl.it/CLoA/0)

## 第三种方案：
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [在REPL中！](https://repl.it/CLoB/0)

### 代码说明：

*   首先，我们迭代参数并验证它们是数字，如果它们不是，我们返回undefined。
*   然后我们检查参数数量是否大于1，如果我们使用`Array.prototype.reduce`添加参数
*   否则，如果我们不返回undefined，则返回一个函数，该函数检查接收的参数是否为数字并添加它。

> **注意：**如果您已在文章中添加了**相关内容** ，请仅添加您的用户名。 （请不要删除任何现有名称。）