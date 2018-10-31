---
title: Prevent Infinite Loops with a Valid Terminal Condition
localeTitle: 使用有效的终端条件防止无限循环
---
## 使用有效的终端条件防止无限循环

*   为防止无限循环， `while-condition`必须达到终止条件才能退出循环。
*   所以这个挑战中的错误是由于for循环中的条件 - `i != 4` - 而发生的。
*   如果你仔细看看代码：

```javascript
function myFunc() { 
  for (let i = 1; i != 4; i += 2) { 
    console.log("Still going!"); 
  } 
 } 
```

*   您将看到`i`首先初始化为1，并且在循环的每次迭代之后， `i`递增2。
*   使用该逻辑，在第一次迭代之后 - `i = 3`并且第二次迭代`i = 5` ，将永远不满足条件`i != 4`并且将发生无限循环。

## 解：

```javascript
function myFunc() { 
  for (let i = 1; i <= 4; i += 2) { 
    console.log("Still going!"); 
  } 
 } 

```