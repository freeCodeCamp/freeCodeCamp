---
title: Counting Cards
localeTitle: 计数卡
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

在赌场游戏**Blackjack中** ，玩家可以通过跟踪牌组中剩余的高牌和低牌的相对数量来获得优势。这称为卡片计数。

在牌组中剩下更多高牌有利于玩家。根据下表为每张卡分配一个值。当计数为正数时，玩家应该下注。当计数为零或负数时，玩家应该下注低。

价值|牌  
\----- | ：-------------------：  
+1 | 2,3,4,5,6  
0 | 7,8,9  
\-1 | 10，'J'，'Q'，'K'，'A'

你会写一个卡计数功能。它将接收一个**卡**参数，并根据卡的值递增或递减全局**计数**变量（参见表格）。然后，该函数将返回一个包含当前计数的字符串，如果计数为正则返回字符串`Bet` ，如果计数为零或为负，则返回`Hold` 。当前计数和玩家的决定（ `Bet`或`Hold` ）应该由一个空格分隔。

*   更改下面的代码`// Only change code below this line` ，最多为`// Only change code above this line`
*   确保您正在编辑`cc`函数的内部。
*   使用您学到的知识来检查传递给函数的每个**卡**参数的值。
*   保持该数字的运行计数。
*   如果最终计数为1或更大，则返回**#Hold** 。
*   如果最终计数为0或更少，则返回**#Bet** 。

**示例输出：**

*   \-3保持
*   5投注

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

使用`switch` （或`else if` ）语句计算每张卡的值。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

将每张卡的值加/减到变量**计数** 。如果卡值为0，请不要做任何事情。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

在计算卡片后，使用`if`语句检查**计数值** 。另外，请确保您的`return`在数字和字符串之间有空格。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function cc(card) { 
      // Only change code below this line 
      switch(card){ 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6: 
          count++; 
          break; 
        case 10: 
        case "J": 
        case "Q": 
        case "K": 
        case "A": 
          count--; 
          break; 
      } 
      if (count > 0){ 
        return count + " Bet"; 
      } else { 
        return count + " Hold"; 
      } 
      // Only change code above this line 
    } 
```

### 代码说明：

*   通过`switch`语句检查每张卡的值。
*   变量**计数** ：
    *   如果卡是2,3,4,5或6，则增加1。
    *   由于7,8和9不值得，我们在`switch`语句中忽略了这些卡。
    *   如果卡是10，'J'，'Q'，'K'或'A'，则减1。
*   检查**count**的值并返回相应的响应。

**示例运行**

*   `cc(2);`运行。
*   `switch`语句命中`case 2` ，跳转并将变量`count` 。
*   然后`switch`语句命中了`break`和`cc(3);`运行。
*   这个循环一直持续到最后的呼叫为止， `cc('A');` 。
*   在`switch`语句之后， `if`语句检查`count` ，现在为0。
*   然后这将下降到`else`语句，该语句将返回**0 Hold** 。

**_注意_** ：如前所述， `switch`语句也可能是`else if`语句。

## 附加代码解决方案

```javascript
function cc(card) { 
  // Only change code below this line 
  var regex = /[JQKA]/; 
  if (card > 1 && card < 7){count++;} 
  else if (card === 10 || String(card).match(regex)){count--;} 
 
  if (count > 0) return count + " Bet"; 
  return count + " Hold"; 
 
  // Only change code above this line 
 } 
```

·在[repl.it上](https://repl.it/@AdrianSkar/Basic-JS-Counting-cards)运行代码。

### 代码说明

·该功能首先评估`if`条件`card`是一个大于`1`且小于`7` ，在这种情况下它递增`count`由一个。 ·然后，如果卡`10`或更高的IT递减`count`由一个。 ·变量`regex`是表示较高卡的值（字母）的[正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 。 · `else`语句使用`|| (logical OR)`检查这些值`|| (logical OR)`运算符;首先是`10` ，然后是使用[String.match（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)匹配正则表达式的任何字符串。

#### 资源

*   [卡计数在维基百科](https://en.wikipedia.org/wiki/Card_counting)
*   [挑战：使用切换语句从多个选项中进行选择](http://www.freecodecamp.com/challenges/selecting-from-many-options-with-switch-statements)
*   [挑战：链接如果其他声明](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [挑战：使用Javascript增加数字](http://www.freecodecamp.com/challenges/increment-a-number-with-javascript)