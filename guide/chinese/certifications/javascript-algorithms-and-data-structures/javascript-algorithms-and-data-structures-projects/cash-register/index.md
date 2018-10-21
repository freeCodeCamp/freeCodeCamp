---
title: Cash Register
localeTitle: 收银机
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

*   您必须创建一个程序，该程序将返回包含`status`键和`change`键的对象。 `status`的值是字符串`INSUFFICIENT_FUNDS` ， `CLOSED`或`OPEN` ， `change`的值是更改到期的2D数组。

#### 相关链接

*   数据结构数组

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

*   当你事先知道你的登记册中有多少钱时，这会更容易。为此，建议使用函数将此信息分配给变量。然后，您可以查看是否有足够的资金来完成交易并返回更改，或者您是否应关闭注册表。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

*   当您知道正在使用的每个账单或硬币的价值时，这个问题会更容易，而不仅仅是寄存器中每个账单或硬币的总和。例如，知道镍的价值为0.05，以及您在收银机中拥有价值2.05美元的镍币这一事实是有用的。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

*   在移动到下一个之前，您必须从一种类型的账单或硬币获得尽可能多的更改，从更大到更小的价值。继续前进，直到计算完所有变更为止。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")初学者代码解决方案：
```
// Create an array of objects which hold the denominations and their values 
 var denom = [ 
  { name: 'ONE HUNDRED', val: 100.00}, 
  { name: 'TWENTY', val: 20.00}, 
  { name: 'TEN', val: 10.00}, 
  { name: 'FIVE', val: 5.00}, 
  { name: 'ONE', val: 1.00}, 
  { name: 'QUARTER', val: 0.25}, 
  { name: 'DIME', val: 0.10}, 
  { name: 'NICKEL', val: 0.05}, 
  { name: 'PENNY', val: 0.01} 
 ]; 
 
 function checkCashRegister(price, cash, cid) { 
  var output = { status: null, change: [] }; 
  var change = cash - price; 
 
  // Transform CID array into drawer object 
  var register = cid.reduce(function(acc, curr) { 
    acc.total += curr[1]; 
    acc[curr[0]] = curr[1]; 
    return acc; 
  }, { total: 0 }); 
 
  // Handle exact change 
  if (register.total === change) { 
    output.status = 'CLOSED'; 
    output.change = cid; 
    return output; 
  } 
 
  // Handle obvious insufficient funds 
  if (register.total < change) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Loop through the denomination array 
  var change_arr = denom.reduce(function(acc, curr) { 
    var value = 0; 
    // While there is still money of this type in the drawer 
    // And while the denomination is larger than the change remaining 
    while (register[curr.name] > 0 && change >= curr.val) { 
      change -= curr.val; 
      register[curr.name] -= curr.val; 
      value += curr.val; 
 
      // Round change to the nearest hundreth deals with precision errors 
      change = Math.round(change * 100) / 100; 
    } 
    // Add this denomination to the output only if any was used. 
    if (value > 0) { 
        acc.push([ curr.name, value ]); 
    } 
    return acc; // Return the current change_arr 
  }, []); // Initial value of empty array for reduce 
 
  // If there are no elements in change_arr or we have leftover change, return 
  // the string "Insufficient Funds" 
  if (change_arr.length < 1 || change > 0) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Here is your change, ma'am. 
  output.status = 'OPEN'; 
  output.change = change_arr; 
  return output; 
 } 
 
 // test here 
 checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/@scissorsneedfoo/cash-register-example)

### 代码说明：

首先，创建一个对象数组，其中包含每个面额或硬币面额的值，以及带有状态和更改键的输出对象。接下来，将CID数组转换为抽屉对象。然后，处理确切变化和资金不足的条件。循环通过`denom`数组并更新变化和值，同时抽屉中仍然存在每种类型的`denom` ，而面额大于剩余的变化。如果使用任何此类型，则将此面额添加到`change_arr`的累加器中。在循环之后， `change_arr`是变化到期的2D数组，从最高面额到最低面额排序。如果在没有元素`change_arr`或者你还欠变化，的状态返回输出对象`INSUFFICIENT_FUNDS` 。最后，您可以给出正确的更改。返回输出对象，状态为`OPEN` ， `change_arr`为change的值。

#### 相关链接

*   [JS Array Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS减少轻松](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [JS循环](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [JS阵列推送](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。