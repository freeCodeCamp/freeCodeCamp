---
title: Convert HTML Entities
localeTitle: 转换HTML实体
---
![HTML实体＆'<>“](//discourse-user-assets.s3.amazonaws.com/original/2X/f/fc44d1dfbd3910e574cdedb0f05162f65b4cb7c4.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

*   您必须创建一个程序，将HTML实体从字符串转换为相应的HTML实体。只有少数，所以你可以使用不同的方法。

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

*   您可以使用常规表达式，但在这种情况下我没有。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

*   您将受益于包含所有html实体的图表，以便您知道哪些是正确的。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

*   您应该将字符串分开并与每个字符一起使用以转换正确的字符然后将所有内容连接起来。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function convertHTML(str) { 
      // Split by character to avoid problems. 
 
      var temp = str.split(''); 
 
      // Since we are only checking for a few HTML elements I used a switch 
 
      for (var i = 0; i < temp.length; i++) { 
        switch (temp[i]) { 
          case '<': 
            temp[i] = '&lt;'; 
            break; 
          case '&': 
            temp[i] = '&amp;'; 
            break; 
          case '>': 
            temp[i] = '&gt;'; 
            break; 
          case '"': 
            temp[i] = '&quot;'; 
            break; 
          case "'": 
            temp[i] = "&apos;"; 
            break; 
        } 
      } 
 
      temp = temp.join(''); 
      return temp; 
    } 
 
    //test here 
    convertHTML("Dolce & Gabbana"); 
```

### 代码说明：

在此解释解决方案并添加任何相关链接

#### 相关链接

*   [str.split（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.join（）](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [切换声明](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnP/0)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function convertHTML(str) { 
 //Chaining of replace method with different arguments 
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;"); 
 return str; 
 } 
 
 // test here 
 convertHTML("Dolce & Gabbana"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnQ/0)

### 代码说明：

在此解释解决方案并添加任何相关链接

#### 相关链接

*   [str.replace（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [常用表达](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案

```javascript
    function convertHTML(str) { 
      // Use Object Lookup to declare as many HTML entities as needed. 
      const htmlEntities={ 
        '&':'&amp;', 
        '<':'&lt;', 
        '>':'&gt;', 
        '"':'&quot;', 
        '\'':"&apos;" 
      }; 
      //Use map function to return a filtered str with all entities changed automatically. 
      return str.split('').map(entity => htmlEntities[entity] || entity).join(''); 
    } 
 
    // test here 
    convertHTML("Dolce & Gabbana"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnR/0)

### 代码说明：

*   创建一个对象以使用查找功能轻松查找字符。
*   按字符拆分原始字符串并使用map检查已更改的html实体或使用相同的html实体。或者你可以使用Regex `str.replace(/&|<|>|"|'/gi` 。
*   如果没有转换，则添加一个返回转换实体或原始实体的函数。如果你去正则表达式路线然后你只需要返回匹配的命中。 `return html[entity];`
*   最后，我们再次加入所有角色。

**请注意** ，如果您使用正则表达式路线，那么您不需要加入任何内容，只需确保返回整个操作或将其保存到变量然后返回它。

#### 相关链接

*   [str.split（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.map（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [arr.join（）](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。