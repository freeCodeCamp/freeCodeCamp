---
title: Palindrome Checker
localeTitle: 回文检查
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/c/ca86619bb0ec05531dbb02be3c0b7b8383e67f01.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

我们解决这个问题的目的是整理传入的字符串，并检查它是否实际上是回文。

*   如果你不确定回文是什么，那么它就是一个单词或短语，当反向拼写相同的东西向前或向后。一个简单的例子是`mom` ，当你翻转字母时，它会拼出相同的东西！回文的另一个例子是`race car` 。当我们取出任何不是角色的东西时，它变成同样拼写向前或向后的`racecar` ！

一旦我们确定它是否是回文，我们想根据我们的发现返回`true`或`false` 。

#### 相关链接

*   [String.prototype.replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [String.prototype.toLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

正则表达式`RegEx`可用于从字符串中删除不需要的字符。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

`Array.prototype.split`和`Array.prototype.join`方法可以在这里使用。 `For`和`while`循环是另一种选择，或者为什么不`map` ！

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

`String.prototype.toLowerCase`可用于使字符串小写。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function palindrome(str) { 
      return str.replace(/[\W_]/g, '').toLowerCase() === 
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/2)

### 代码说明：

*   我们首先使用正则表达式将任何空格或非字母数字字符替换为`null` （或`null` ），这实质上将它们从字符串中删除。
    
*   接下来我们_连锁_ `.toLowerCase()`以消除任何大写字母，因为`A`是不同的字符比`a` 。这个问题没有让我们担心确保角色的情况是相同的，只是拼写。
    
*   我们的下一步是将我们的字符串和`.split()`它， `.reverse()`它，最后是`.join()`一起取回来。
    
*   最后一步是检查字符串是否向前和向后相同并返回我们的结果！
    

#### 相关链接

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.reverse](http://forum.freecodecamp.com/t/javascript-array-prototype-reverse/14300)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

```javascript
    function palindrome(str) { 
      str = str.toLowerCase().replace(/[\W_]/g, ''); 
      for(var i = 0, len = str.length - 1; i < len/2; i++) { 
        if(str[i] !== str[len-i]) { 
          return false; 
        } 
      } 
      return true; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/3)

### 代码说明：

*   我们首先使用相同的方法，使用`RegEx`的正则表达式替换字符串中我们不想要的字符，然后将字符串设为小写。
    
*   接下来，我们设置`for`循环并声明索引`i`以跟踪循环。我们将转义序列设置为当`i`大于字符串的长度除以2时，它告诉循环在字符串的中间点之后停止。最后我们设置`i`在每个循环后递增。
    
*   在每个循环内部，我们要检查元素`[i]`中的字母是否等于字符串长度中的字母减去i， `[str.length - i]` 。每个循环，在字符串两侧检查的元素移动到更靠近中心，直到我们检查了所有字母。如果在任何时候字母不匹配，我们返回`false` 。如果循环成功完成，则意味着我们有一个回文，因此我们返回`true` ！
    

#### 相关链接

*   正则表达式

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案（性能最佳）：

```javascript
    //this solution performs at minimum 7x better, at maximum infinitely better. 
    //read the explanation for the reason why. I just failed this in an interview. 
    function palindrome(str) { 
      //assign a front and a back pointer 
      let front = 0 
      let back = str.length - 1 
 
      //back and front pointers won't always meet in the middle, so use (back > front) 
      while (back > front) { 
        //increments front pointer if current character doesn't meet criteria 
        if ( str[front].match(/[\W_]/) ) { 
          front++ 
          continue 
        } 
        //decrements back pointer if current character doesn't meet criteria 
        if ( str[back].match(/[\W_]/) ) { 
          back-- 
          continue 
        } 
        //finally does the comparison on the current character 
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false 
        front++ 
        back-- 
      } 
 
      //if the whole string has been compared without returning false, it's a palindrome! 
      return true 
 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/4)

### 代码说明：

*   我在接受采访时得到了这个问题（剧透：我没有被录用![:frowning:](https://forum.freecodecamp.com/images/emoji/emoji_one/frowning.png?v=3 "：皱眉道：")我很快就找到了基本的解决方案，面试官告诉我要做得更好。如果他将圣经作为字符串传递，算法将花费太长时间。他希望它是即时的。
    
*   较简单的解决方案在长字符串上表现非常差，因为它们在比较**整个**字符串两次之前多次对整个字符串进行操作（toLowerCase（），replace（），split（），reverse（），join（））。
    
*   这个解决方案的美妙之处在于它永远**不需要**读完整个字符串，甚至一次，知道它不是回文。如果只是通过查看两个字母就可以看出它不是一个回文，为什么要读完整个字符串呢？
    
*   使用while循环而不是for循环作为最佳实践 - 因为我们使用两个变量，一个是从字符串的开头开始的索引，另一个是从字符串的结尾开始。
    

#### 相关链接

*   [循环复杂性](https://en.wikipedia.org/wiki/Cyclomatic_complexity)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。