---
title: Switch Statements
localeTitle: 切换语句
---
## 切换语句

编程中的`switch`语句类似于`if-else`语句，但在有很多条件时有时更容易阅读。此外，它还允许添加一个`default`块，如果没有其他条件为真，将执行该块。

### 句法：

```javascript
switch(expression) { 
  case 1: 
    console.log('1'); 
    break; 
   case 2: 
     console.log('2'); 
     break; 
   default: 
     console.log('No true condition, default'); 
 } 
```

上面的代码段显示了基本`switch`语句的语法。在此示例中，有3种不同的方案：

*   `expression = 1` ：第一个条件为true， `1`将打印到控制台。
*   `expression = 2` ：第二个条件为true，并且`2`被打印到控制台。
*   `expression = 'anything else'` ：案例1和案例2均为假，因此执行默认条件。

`default`条件是在没有其他情况为真的情况下将执行的条件。

注意：这里要注意的一个非常重要的一点是，在上面的代码片段中， `case 1:`和`case 2:`似乎代表某种顺序，但是`1`和`2`只是`(expression)`可能被评估为的答案。因此，代替1和2，它可以是`(expression)`可以评估并且可以进行测试的任何事物。

例如：

```javascript
var someValue; 
 var expression = someValue; 
 switch(expression){ 
  case someValue: 
    console.log('10'); // 10 would be printed to the console 
    break; 
  case 23: 
    console.log('12'); 
    break; 
  default: 
    console.log('No matches'); 
 } 
```

注意：上面代码段中的`expression`可以是字符串或数字。

### 打破

在每种情况下都需要`break`关键字，以确保只执行该案例中的代码。没有休息，可以执行多个案例。当JavaScript到达`break`关键字时，它会突破switch块。如果`break`了上面的例子，那就会发生这种情况：

```javascript
var expression = 1; 
 switch(expression) { 
  case 1: 
    console.log('1');  // 1 would be printed to console 
  case 2: // As there is no break after case 1, this case is also executed. 
    console.log('2'); // 2 would be printed to the console. 
    break; // break -> Switch statement is exited 
  default: 
    console.log('No true condition, default'); 
 } 
```

### 执行多个案例：

`switch`语句还允许多个case执行相同的代码块。这可以通过在代码块之前添加一个或多个`case :`关键字来完成。

例如：

```javascript
switch (day) { 
  case 4: 
  case 5: 
    console.log('it is nearly the weekend'); 
    break; 
  case 0: 
  case 6: 
    console.log('it is the weekend'); 
    break; 
  default: 
    console.log('Looking forward to the Weekend'); 
 } 
```

在上面的片段中：

*   如果`day`是`4`或`5` （星期四或星期五）， `it is nearly the weekend`在第一个案例被执行时， `it is nearly the weekend`将被打印到控制台。
*   如果`day`是`0`或`6` ，（星期六或星期日）， `it is the weekend`将被打印到控制台，因为第二个案例被执行。
*   如果`day`是任何其他值，则在执行默认情况时， `Looking forward to the Weekend`将打印到控制台。

### 更多信息：

[用于交换机的MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)