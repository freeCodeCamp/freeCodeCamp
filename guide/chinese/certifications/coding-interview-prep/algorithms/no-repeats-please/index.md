---
title: No Repeats Please
localeTitle: 请不要重复
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

此任务要求我们返回没有重复连续字母的提供字符串的总排列数。假设所提供的字符串中的所有字符都是唯一的。例如， `aab`应该返回2，因为它总共有6个排列（ `aab` ， `aab` ， `aba` ， `aba` ， `baa` ， `baa` ），但只有2个（ `aba`和`aba` ）没有相同的字母（在这种情况下为`a` ）重复。

为此，我们必须查看字符串的每个可能的排列。有几种方法可以做到这一点。一个常见的面试问题是构建一个收集字符串所有排列的函数。互联网上有几个关于如何做到这一点的教程。

#### 用作解决方案的潜在方法

##### 递归方法

即使在观看教程之后，这项任务也令人望而生畏。要编写递归解决方案，您需要发送函数的每个新用法三个输入：

1.  正在构建的新字符串（或字符数组）。
2.  新字符串中的一个位置将在下一个填充。
3.  还没有使用原始字符串中的字符（更具体地说是位置）的想法。

伪代码看起来像这样：
```
var str = ???; 
 permAlone(current position in original string, characters used already in original string, created string) { 
  if (current string is finished) { 
    print current string; 
  } else { 
    for (var i = 0; i < str.length; i++) { 
      if (str[i] has not been used) { 
        put str[i] into the current position of new string; 
        mark str[i] as used; 
        permAlone(current position in original string, characters used already in original string, created string); 
        remove str[i] as used because another branch in the tree for i + 1 will likely use it; 
      } 
    } 
  } 
 } 
 permAlone(0, nothing used yet, empty new string (or array the same size as str)); 
```

考虑这个问题的另一种方法是从一个空的空间开始。介绍该空间的第一个字母。此空间现在将包含第一个子排列。这是一个说明这个想法的图表：

![图](//discourse-user-assets.s3.amazonaws.com/original/2X/6/69896bacc8bd3b2e347beb4b304a7f97caa6d9ab.png)

##### 非递归方法
```
// An approach to introduce a new character to a permutation 
 var ch = '?'; 
 var source = ['?', '?', '?'];     // Current sub-permutation 
 var temp, dest = []; 
 
 for (var i = 0; i <= source.length; ++i) { 
  temp = source.slice(0);         // Copy the array 
  temp.splice(i, 0, ch);          // Insert the new character 
  dest.push(temp);                // Store the new sub-permutation 
 } 
```

然后，通过将上述内容包括在采用源阵列并返回目标阵列的函数中，可以非递归地完成每个置换。对于输入字符串的每个字母，传递该字符，以及从上一次调用函数返回的数组。

可视化这种方法的方法是考虑以字符串的第一个字符开头的树：

![排列树](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8187f2b06cdc02cf62286c18ce15bfcdc99bc68c.png)

#### 相关链接

*   [排列](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
*   [Heap的算法](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
*   JS Regex资源
*   [JS String对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

*   最简单的方法是使用Heap算法递归获取所有排列的列表。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

*   获得列表后，只需创建一个正则表达式来捕获重复的字符。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

*   您将希望将排列作为连接字符串的数组而不是分隔的字符。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function permAlone(str) { 
 
  // Create a regex to match repeated consecutive characters. 
  var regex = /(.)\1+/g; 
 
  // Split the string into an array of characters. 
  var arr = str.split(''); 
  var permutations = <a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>]; 
  var tmp; 
 
  // Return 0 if str contains same character. 
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0; 
 
  // Function to swap variables' content. 
  function swap(index1, index2) { 
    tmp = arr[index1]; 
    arr[index1] = arr[index2]; 
    arr[index2] = tmp; 
  } 
 
  // Generate arrays of permutations using the algorithm. 
  function generate(int) { 
    if (int === 1) { 
      // Make sure to join the characters as we create  the permutation arrays 
      permutations.push(arr.join('')); 
    } else { 
      for (var i = 0; i != int; ++i) { 
        generate(int - 1); 
        swap(int % 2 ? 0 : i, int - 1); 
      } 
    } 
  } 
 
  generate(arr.length); 
 
  // Filter the array of repeated permutations. 
  var filtered = permutations.filter(function(string) { 
    return !string.match(regex); 
  }); 
 
  // Return how many have no repetitions. 
  return filtered.length; 
 } 
 
 // Test here. 
 permAlone('aab'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLop/0)

### 代码说明：

*   **正则表达式**包含匹配重复连续字符的正则表达式。
*   字符串**str**被分成一个字符数组**arr** 。
*   如果**str**包含相同的字符，则返回0。
*   函数`swap()`用于交换两个变量内容的内容。
*   下一个代码块使用堆的算法来产生在**排列**的排列的阵列。
*   **过滤的**变量过滤**排列**以仅包括非重复的排列。
*   `filtered.length`返回没有重复连续字母的提供字符串的总排列数。

#### 相关链接

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [JS阵列原型推送](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)
*   [JS for Loops解释](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS数组原型过滤器](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。