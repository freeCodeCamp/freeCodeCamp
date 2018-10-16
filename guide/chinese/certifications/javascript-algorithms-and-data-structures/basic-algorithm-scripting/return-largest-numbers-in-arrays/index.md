---
title: Return Largest Numbers in Arrays
localeTitle: 返回数组中的最大数字
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

您将获得一个包含数字子数组的数组，您需要从每个子数组返回一个数字最大的数组。

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您需要使用答案和每个子阵列的最大数量来跟踪数组。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

您可以通过`Array[Index][SubIndex]`处理多维数组

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

使用循环时，请密切注意存储变量的时间

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**解决方案！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

**（程序方法）**
```
function largestOfFour(arr) { 
  var results = []; 
  for (var n = 0; n < arr.length; n++) { 
    var largestNumber = arr[n][0]; 
    for (var sb = 1; sb < arr[n].length; sb++) { 
      if (arr[n][sb] > largestNumber) { 
        largestNumber = arr[n][sb]; 
      } 
    } 
 
    results[n] = largestNumber; 
  } 
 
  return results; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/734)

### 代码说明：

*   创建一个变量以将_结果_存储为数组。
*   创建一个外部循环来迭代外部数组。
*   创建第二个变量以保存最大数字并使用第一个数字初始化它。这必须在内部循环之外，因此在我们找到更大的数字之前不会重新分配。
*   创建所述内部循环以使用子数组。
*   检查子数组的元素是否大于当前存储的最大数字。如果是，则更新变量中的数字。
*   在内循环之后，将最大数字保存在`results`数组内的相应位置。
*   最后返回所说的数组。

#### 相关链接

*   [对于循环](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

**（声明方法）**
```
function largestOfFour(arr) { 
  return arr.map(function(group){ 
    return group.reduce(function(prev, current) { 
      return (current > prev) ? current : prev; 
    }); 
  }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/733)

### 代码说明：

*   我们使用`Array.prototype.map()`将主数组中的所有项映射到一个新数组，并将此数组作为最终结果返回
*   在每个内部数组中，我们使用`Array.prototype.reduce()`将其内容减少到单个值
*   传递给reduce方法的回调函数采用先前的值和当前值并比较这两个值
*   如果当前值高于前一个值，我们将其设置为新的先前值，以便与数组中的下一个项目进行比较，或者如果它是最后一项，则将其返回到map方法回调

#### 相关链接

*   [Array.prototype.map（）](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [Array.prototype.reduce（）](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [三元运营商](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案

**（声明方法）**
```
function largestOfFour(arr) { 
  return arr.map(Function.apply.bind(Math.max, null)); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/17)

### 代码说明：

TL; DR：我们构建一个特殊的回调函数（使用`Function.bind`方法），它就像`Math.max`一样，但也有`Function.prototype.apply`能够将数组作为参数![:smiley:](https://forum.freecodecamp.com/images/emoji/emoji_one/smiley.png?v=3 "：笑脸：")

*   我们首先映射主数组中的元素。意味着每个内部数组。
*   现在需要一个回调函数来查找地图提供的每个内部数组的最大值。

因此，我们想要创建一个函数来完成`Math.max`的工作并接受输入作为数组（默认情况下不是这样）。

换句话说，如果这个单独工作，那将是非常好的和简单的：

`Math.max([9, 43, 20, 6]); // Resulting in 43`

唉，事实并非如此。

*   要以数组的形式接受参数的工作，有这个`Function.prototype.apply`方法，但它通过_调用_ _上下文_函数使事情变得复杂。

即`Math.max.apply(null, [9, 43, 20, 6]);`会调用类似`Max.max`方法的东西。我们正在寻找...几乎。

这里我们传递`null`作为`Function.prototype.apply`方法的_上下文_ ，因为`Math.max`不需要任何上下文。

*   由于`arr.map`需要一个回调函数，而不仅仅是一个表达式，因此我们使用`Function.bind`方法从前一个表达式中创建一个函数。
    
*   因为， `Function.prototype.apply`相同的静态_方法_ `Function` _对象_ ，我们可以调用`Function.prototype.bind`上`Function.prototype.apply`即`Function.prototype.apply.bind` 。
    
*   现在我们传递`Function.prototype.apply.bind`调用的_上下文_ （在这种情况下，我们需要`Math.max`以便我们可以获得它的功能）。
    
*   由于嵌入的`Function.prototype.apply`方法也需要一个上下文作为它的第一个参数，我们需要将它传递给一个虚假的_上下文_ 。
    
    *   因此，我们将`null`作为第二个参数传递给`Function.prototype.apply.bind` ，它为`Math.max`方法提供了一个_上下文_ 。
        
    *   因为， `Math.max`独立于任何_上下文_ ，因此，它忽略了`Function.prototype.apply`方法调用给出的伪造_上下文_ 。
        
    *   因此，我们的`Function.prototype.apply.bind(Math.max, null)`使一个新函数接受`arr.map`值，即内部数组。
        

#### 相关链接

*   [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
*   [DevDocs上的Function.prototype.apply](http://devdocs.io/#q=js+Function+apply)
*   [DevDocs上的Function.bind](http://devdocs.io/#q=js+Function+bind)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。