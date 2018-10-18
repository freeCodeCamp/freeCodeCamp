---
title: Dna Pairing
localeTitle: Dna配对
---
![脱氧核糖核酸](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2798a83aaaa34ec2b18f4b8ec122b76c264a9d67.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

*   您将获得DNA链序列，您需要获得该对并将其作为碱基对的2D阵列返回。请记住，提供的链应始终是第一位的。
    
*   解释问题的另一种方法是：DNA中存在四个潜在的字符：“A”，“T”，“G”和“C”。 “A”和“T”总是配对在一起，“G”和“C”总是配对在一起。  
    此问题为您提供输入，例如“ATCGA”。这五个角色中的每一个都缺少对子。  
    例如，第一个字符“A”需要与“T”配对以给出数组元素\[“A”，“T”\]。  
    第二个字符“T”需要与“A”配对以给出数组元素\[“T”，“A”\]。  
    最终输出中的元素数等于输入中的字符数。
    

该问题不涉及将输入重新排列成不同的组合或排列。

#### 相关链接

*   [的Array.push（）](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [String.split（）](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

*   有两种基本情况，AT和CG，这两种情况都有。如果你能想到任何事情的陈述，你可以使用正则表达式。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

*   我建议使用开关，因为它使事情变得更顺畅。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

*   结果必须是一个数组数组，因此在推送时要记住这一点。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function pairElement(str) { 
      // Return each strand as an array of two elements, the original and the pair. 
      var paired = []; 
 
      // Function to check with strand to pair. 
      var search = function(char) { 
        switch (char) { 
          case 'A': 
            paired.push(['A', 'T']); 
            break; 
          case 'T': 
            paired.push(['T', 'A']); 
            break; 
          case 'C': 
            paired.push(['C', 'G']); 
            break; 
          case 'G': 
            paired.push(['G', 'C']); 
            break; 
        } 
      }; 
 
      // Loops through the input and pair. 
      for (var i = 0; i < str.length; i++) { 
        search(str[i]); 
      } 
 
      return paired; 
    } 
 
    // test here 
    pairElement("GCG"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmz/0)

### 代码说明：

*   该程序非常简单，我提出的最佳解决方案是使用开关来捕获所有可能的四个元素。使用if语句会占用太多代码。您也可以使用正则表达式。
*   由于我们必须使用原始和配对，我决定采用所有四种情况而不是基数两种情况。
*   创建一个空数组并使用`search`功能将正确的值推送到数组并返回它们。

#### 相关链接

*   [切换语句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

```javascript
    function pairElement(str) { 
    //create object for pair lookup 
    var pairs = { 
      "A": "T", 
      "T": "A", 
      "C": "G", 
      "G": "C" 
    } 
    //split string into array of characters 
    var arr = str.split(""); 
    //map character to array of character and matching pair 
    return arr.map(x => [x,pairs[x]]); 
  } 
 
  //test here 
  pairElement("GCG"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/repls/ThoroughSphericalComputeranimation)

## 代码说明：

*   首先定义一个具有所有对可能性的对象，这允许我们通过键或值轻松找到。
*   将`str`拆分为字符数组，以便我们可以使用每个字母来查找它的对。
*   使用map函数将数组中的每个字符映射到具有字符及其匹配对的数组，从而创建2D数组。

#### 相关链接

*   [Array.prototype.map（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [物业访问者](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
*   [箭头功能](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。