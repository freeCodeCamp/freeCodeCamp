---
title: Golf Code
localeTitle: 高尔夫码
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

在高尔夫比赛中，每个洞都具有**标准**意义，即高尔夫球手为了将球沉入洞中以完成比赛所期望的平均**击球**次数。根据你的**笔画**高出或低于**标准杆**的距离，有一个不同的昵称。

您的函数将通过**par**和**stroke**参数。您必须根据此表返回正确的字符串，该表按优先级顺序列出笔划;顶部（最高）到底部（最低）：

笔画|返回  
：--------- | ：-------------  
1 | “一杆进洞！”  
<= par - 2 | “鹰”  
par - 1 | “小鸟”  
帕尔| “相提并论”  
par + 1 | “柏忌”  
par + 2 | “双柏忌” > = par + 3 | “回家！”

**标准杆**和**笔画**将始终为数字和正数。

*   更改下面的代码`// Only change code below this line`以上的代码`// Only change code below this line`以上的`// Only change code above this line` 。
*   确保您正在编辑`golfScore`功能的内部。
*   您必须使函数返回与表中所示的完全相同的字符串，具体取决于传递给函数的参数**par**和**笔画**的值。

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

`+number -number`可用于增加或减少条件中的参数。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

您可以使用`if / else if` chains在不同的场景中返回不同的值。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

根据表的优先级顺序控制函数流 - 顶部（最高）到底部（最低）以返回匹配的字符串值。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return "Hole-in-one!"; 
  } else if (strokes <= par -2){ 
    return "Eagle"; 
  } else if (strokes == par -1) { 
    return "Birdie"; 
  } else if (strokes == par) { 
    return "Par"; 
  } else if (strokes == par +1) { 
    return "Bogey"; 
  } else if (strokes == par +2) { 
    return "Double Bogey"; 
  } else { 
    return "Go Home!"; 
  } 
  // Only change code above this line 
 } 
 // Change these values to test 
 golfScore(5, 4); 
```

### 代码说明：

*   比较参数**par**和**stroke**以返回适当的字符串值。
*   `if / else if` chain用于流量控制。
*   字符串“回家！”对于**笔划**大于或等于**par + 3的**每个条件都会返回。

## 替代代码解决方案

```javascript
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]; 
 function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return names[0]; 
  } 
  else if (strokes <= par-2){ 
    return names[1]; 
  } 
  else if (strokes == par -1){ 
    return names[2]; 
  } 
  else if (strokes == par){ 
    return names[3]; 
  } 
  else if (strokes == par +1){ 
    return names[4]; 
  } 
  else if (strokes == par +2){ 
    return names[5]; 
  } 
  else {return names[6];} 
  // Only change code above this line 
 } 
 
 // Change these values to test 
 golfScore(5, 4); 
```

·在[repl.it](https://repl.it/@AdrianSkar/Basic-JS-Golf-code)运行

##代码说明 由于我们已经在变量`names`定义了一个数组，我们可以利用它并将它用于使用索引的返回语句（例如： `names[0] is the first one` ）。这样，如果您需要更改特定结果，则不需要在函数内部查找它，它将位于数组的开头。

### 资源

*   [高尔夫球](https://en.wikipedia.org/wiki/Golf)
*   [挑战：链接如果其他声明](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [挑战：与大于等于运营商的比较](http://www.freecodecamp.com/challenges/comparison-with-the-greater-than-equal-to-operator)
*   [挑战：与小于等于运营商的比较](http://www.freecodecamp.com/challenges/comparison-with-the-less-than-equal-to-operator)
*   [“Array” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)