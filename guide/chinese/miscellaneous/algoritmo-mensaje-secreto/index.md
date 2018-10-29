---
title: Algoritmo Mensaje Secreto
localeTitle: 秘密消息算法
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

### 解释：

这个问题非常简单，您将获得一个代表二进制代码中的短语的字符串，您必须将其翻译成单词。没有直接的方法可以这样做，所以你必须翻译两次。

## 线索：1

首先，您必须从**二进制**转换为**十进制** ，然后将其转换为字符。

## 线索：2

如果您专注于小部件，将消息分成您收到的内容并且一次只关注一个字母，事情会变得更容易。

## 线索：3

确保将二进制代码转换为十进制字符后，重置用于执行转换的任何变体。另外，不要忘记将所有东西放回一条链上。

## 扰流板警报！

![警告标志](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**解决方案如下**

## 代码解决方案
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [在REPL中！](https://repl.it/CLnm/0)

# 代码说明：

*   我们将字符串分隔为由空格分隔的字符串数组。
*   我们创建了一个必要的变量，名称是不言自明的。
*   我们遍历新的二进制矩阵。
*   我们使用parseInt（ _二进制_ ，2）转换为十进制（第二个参数我们告诉你我们的数字当前是什么基础）
*   最后，我们返回转换后的消息。

## 二解决方案：
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [在REPL中！](https://repl.it/CLno/0)

# 代码说明：

*   对于每个二进制链，我们检查那些并忽略零。
*   对于那些一个或活跃的人，我们将它们转换为十进制。这考虑了它必须提升的位置和适当的功率。
*   我们将功率保存在可变**功率中，**将其添加到变量**decValue中**的先前**功率** 。此变量将继续将资源的权力添加到循环的末尾，然后返回十进制数。
*   我们将最终的十进制数转换为ASCII，并将其与已经转换和存储的任何其他文本字符串一起添加到**句子**变量中。
*   我们重置**decValue**变量的值以避免在继续外部循环之前出现错误的小数。

## 第三种方案：
```
function binaryAgent(str) { 
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); })); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [在REPL中！](https://repl.it/CLnp/0)

# 代码说明：

*   首先，我们使用`split()`将每个字符作为矩阵元素。
*   然后我们使用`map()`使用`pareseInt()`将每个二进制元素处理为十进制
*   最后，我们可以使用`String.fromCharCode()`将每个ASCII编号转换为其对应的字符。
*   但是， `fromCharCode()`需要一系列数字而不是矩阵。我们可以使用ES6 Spread Operator将一组数字作为单独的数字传递。更多信息： [https](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) ： [//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread\_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## 第四解决方案
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [在REPL中！](https://repl.it/CLnr/0)

# 代码说明：

*   在这个解决方案中，我们使用`String.replace()`来查找所有二进制数并将它们转换为字符。
*   首先，我们使用正则表达式来查找所有二进制数和可选的最终空格。
*   接下来，我们定义一个函数，它使用`parseInt()`将每个第一个子符号转换为数字，然后使用`String.fromCharCode()`转换为一个字符。通过不使用第二个subcoincidence，我们将每个二进制数之间的所有空格都放在一边。
*   最后，我们使用正则表达式和定义为`String.replace()`参数的函数。

> **注意：**如果您已在文章中添加了**相关内容** ，请仅添加您的用户名。 （请不要删除任何现有名称。）