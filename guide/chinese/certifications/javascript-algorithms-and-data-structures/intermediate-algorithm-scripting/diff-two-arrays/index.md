---
title: Diff Two Arrays
localeTitle: 差分两个阵列
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/24043ff6eaf64c58ca15936ec29bd7c22809c9de.gif)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

检查两个数组并返回一个新数组，该数组仅包含不在任何一个原始数组中的项。

#### 相关链接

*   [for Loop（Devdocs）](https://devdocs.io/javascript/statements/for)
*   [Array.prototype.includes（Devdocs）](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter（Devdocs）](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat（Devdocs）](https://devdocs.io/javascript/global_objects/array/concat)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

合并列表以便于比较功能。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

使用filter来获取新数组，您需要创建一个回调函数。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

回调函数的最佳方法是检查新合并数组中的数字是否不在**两个**原始数组中并返回它。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案（势在必行的解决方案）：

```javascript
    function diffArray(arr1, arr2) { 
      var newArr = []; 
 
      function onlyInFirst(first, second) { 
      // Looping through an array to find elements that don't exist in another array 
        for (var i=0;i<first.length;i++) { 
          if (second.indexOf(first[i]) === -1) { 
            // Pushing the elements unique to first to newArr 
            newArr.push(first[i]); 
          } 
        } 
      } 
 
      onlyInFirst(arr1, arr2); 
      onlyInFirst(arr2, arr1); 
 
      return newArr; 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLme/0)

### 代码说明：

阅读代码中的注释。

#### 相关链接

*   [for Loop（Devdocs）](https://devdocs.io/javascript/statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中间代码解决方案（声明解决方案）：

```javascript
    function diffArray(arr1, arr2) { 
      return arr1 
        .concat(arr2) 
        .filter( 
            item => !arr1.includes(item) || !arr2.includes(item) 
        ) 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CNYb/0)

### 代码说明：

在此解释解决方案并添加任何相关链接

#### 相关链接

*   [Array.prototype.concat（Devdocs）](https://devdocs.io/javascript/global_objects/array/concat)
*   [Array.prototype.filter（Devdocs）](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.includes（Devdocs）](https://devdocs.io/javascript/global_objects/array/includes)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案（声明解决方案）：
```
function diffArray(arr1, arr2) { 
    return arr1 
      .filter(el => !arr2.includes(el)) 
      .concat( 
        arr2.filter(el => !arr1.includes(el)) 
      ) 
 } 
 
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CNYU/0)

### 代码说明：

在此解释解决方案并添加任何相关链接

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案替代（声明解决方案）：
```
function diffArray(arr1, arr2) { 
  return [ 
    ...diff(arr1, arr2), 
    ...diff(arr2, arr1) 
  ] 
 
  function diff(a, b) { 
    return a.filter(item => b.indexOf(item) === -1); 
  } 
 } 
```

#### 相关链接

*   [Array.prototype.includes（Devdocs）](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter（Devdocs）](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat（Devdocs）](https://devdocs.io/javascript/global_objects/array/concat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。