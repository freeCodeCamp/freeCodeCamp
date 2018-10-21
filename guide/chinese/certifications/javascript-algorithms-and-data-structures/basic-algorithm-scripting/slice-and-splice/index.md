---
title: Slice and Splice
localeTitle: 切片和拼接
---
## 切片和拼接

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

我们需要将第一个数组中的每个元素从索引n开始复制到第二个数组中。我们还必须确保原始数组不会发生变异。也就是说，我们无法对原始数组进行任何更改。

#### 相关链接

*   [str.slice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
*   [str.splice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

在函数内部创建第二个数组的副本。这将确保原始数组不会发生变异。这可以通过在第二个数组上使用切片操作来完成，并将其分配给变量。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

遍历第一个数组中的所有项目。对于第一个数组中的每个项，将其拼接到作为参数给出的索引中的复制数组中。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

执行拼接后增加索引。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function frankenSplice(arr1, arr2, n) { 
  // It's alive. It's alive! 
  let localArray = arr2.slice(); 
  for (let i = 0; i < arr1.length; i++) { 
    localArray.splice(n, 0, arr1[i]); 
    n++; 
  } 
  return localArray; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU)

### 代码说明：

*   我们的目标是从`arr1`获取所有元素，并从索引位置`n`开始将它们插入到`arr2` 。同时我们必须确保`arr`或`arr2`都没有变异。
    
*   使用`slice()`函数，我们可以创建`arr2`的精确副本，并将操作的结果分配给变量`localArray` 。
    
*   现在我们有了一个可以变异的数组，我们可以迭代第一个数组中的每个项目。对于第一个数组中的每个项目，我们可以使用`splice()`函数将项目插入`localArray`索引`n`中。
    
*   我们将索引`n`递增1。这将确保`arr1`中的每个项都插入到正确索引位置的`localArray`中。
    
*   最后，我们返回`localArray`并结束该函数。
    

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。