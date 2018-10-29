---
title: Chunky Monkey
localeTitle: 矮胖的猴子
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/aadd6bead83ab7d79a795c326f005a89e6ad81f5.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

我们对此算法的目标是将`arr` （第一个参数）拆分为较小的数组块，其长度由`size` （第二个参数）提供。我们的代码需要传递4个绿色检查（目标）才能完成此算法：

1.  `(['a', 'b', 'c', 'd'], 2)`预期为`[['a', 'b'], ['c', 'd']]`
2.  `([0, 1, 2, 3, 4, 5], 3)`预计`[[0, 1, 2], [3, 4, 5]]`
3.  `([0, 1, 2, 3, 4, 5], 2)`预计`[[0, 1], [2, 3], [4, 5]]`
4.  `([0, 1, 2, 3, 4, 5], 4)`预计`[[0, 1, 2, 3], [4, 5]]`

#### 相关链接

*   [的Array.push（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

上面的链接建议使用`Array.push()` ，所以让我们首先创建一个新的数组来存储我们很快会有这样的小数组：

```javascript
    var newArray = []; 
```

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

接下来我们需要一个`for loop`来遍历`arr` 。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

最后，我们需要一个方法来进行实际的拆分，我们可以使用`Array.slice()`来做到这一点。这个算法的关键是理解`for loop` ， `size` ， `Array.slice()`和`Array.push()`是如何一起工作的。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/24)

### 代码说明：

*   首先，我们创建了两个名为`temp`和`result`空数组，我们最终会返回它们。
*   我们的**for循环**循环直到`a`等于或大于我们测试中数组的长度。
*   在我们的循环中，我们使用`temp.push(arr[a]);`推送到`temp` `temp.push(arr[a]);`如果`a / size`的余数不等于`size - 1` 。
*   否则，我们推送到`temp` ，将`temp`推送到`result`变量并将`temp`重置为空数组。
*   接下来，如果`temp`不是空数组，我们将其推送到`result` 。
*   最后，我们返回`result`的值。

#### 相关链接

*   [的Array.push（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [对于循环](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/Cj9x/3)

### 代码说明：

*   首先，我们创建一个空数组`arr2` ，我们将存储'chunk'。
*   for循环从零开始，每次循环都按`size`递增，并在达到`arr.length`时停止。
*   请注意，此for循环不会循环遍历`arr` 。相反，我们使用循环生成数字，我们可以将其用作索引，以在正确的位置切割数组。
*   在我们的循环中，我们使用`arr.slice(i, i+size)`创建每个块，并使用`arr2.push()`将此值添加到`arr2` 。
*   最后，我们返回`arr2`的值。

#### 相关链接

*   [的Array.push（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [对于循环](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/26)

### 代码说明：

*   首先，我们创建两个变量。 `newArr`是一个空数组，我们将推送到。我们还将`i`变量设置为零，以便在我们的while循环中使用。
    
*   我们的while循环循环，直到`i`等于或大于我们测试中数组的长度。
    
*   在我们的循环中，我们使用`arr.slice(i, i+size)`推送到`newArr`数组。它第一次循环，它看起来像：
    
    newArr.push（arr.slice（1,1 + 2））
    
*   在我们推送到`newArr` ，我们将`size`的变量添加到`i` 。
    
*   最后，我们返回`newArr`的值。
    

#### 相关链接

*   [的Array.push（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [循环时](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案2：

```javascript
    function chunkArrayInGroups(arr, size) { 
      var newArr = []; 
      while (arr.length) { 
        newArr.push(arr.splice(0,size)); 
      } 
      return newArr; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/579)

### 代码说明：

*   首先，我们创建一个变量。 `newArr`是一个空数组，我们将推送到。
*   我们的`while`循环循环，直到我们测试中数组的长度不为0。
*   在我们的循环中，我们使用`arr.splice(0, size)`推送到`newArr`数组。
*   对于`while`循环的每次迭代，它会从`arr`前面删除元素的`size`数量，并将它们作为数组推送到`newArr` 。
*   最后，我们返回`newArr`的值。

#### 相关链接

*   [的Array.push（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [方法Array.splice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
*   [循环时](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案3：

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/579)

### 代码说明：

*   嵌套返回小于size的数组。
*   对于任何大于大小的数组，它都被分成两部分。第一个段嵌套并与第二个第二段连接，进行递归调用。

#### 相关链接

*   [递归](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)
*   [方法Array.splice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。