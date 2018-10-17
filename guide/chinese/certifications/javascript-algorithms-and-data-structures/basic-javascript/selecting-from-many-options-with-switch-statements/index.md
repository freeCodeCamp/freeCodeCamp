---
title: Selecting from Many Options with Switch Statements
localeTitle: 从带有开关语句的多个选项中进行选择
---
## 从带有开关语句的多个选项中进行选择

_如果您有许多选项可供选择，请使用`switch`语句。 `switch`语句测试一个值，并且可以有许多`case`语句来定义各种可能的值。从第一个匹配的`case`值执行语句，直到遇到`break` 。_

_这是一个伪代码示例：_

```js
  switch(num) { 
    case value1: 
      statement1; 
      break; 
    case value2: 
      statement2; 
      break; 
    ... 
    case valueN: 
      statementN; 
      break; 
  } 
```

### 多一点解释

switch语句首先计算其表达式。然后它查找第一个`case`子句，其表达式的计算结果与输入表达式的结果相同（使用[严格比较](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) ，（ `===` ）并将控制转移到该子句，执行相关的语句。（如果多个案例匹配）提供的值，即使案例彼此不相等，也会选择匹配的第一个案例。）

如果未找到匹配的`case`子句，程序将查找可选的`default`子句，如果找到，则将控制转移到该子句，执行关联的语句。如果未找到`default`子句，则程序将在`switch`结束后的语句处继续执行。按照惯例， `default`子句是最后一个子句，但不一定如此。

与每个案例标签关联的可选`break`语句确保一旦执行匹配语句，程序就会断开switch，并在switch后的语句处继续执行。如果省略`break` ，程序将继续执行`switch`语句中的下一个语句。 [1](#cite1)

### 问题说明：

_编写一个switch语句，测试`val`并设置以下条件的`answer` ：_

*   `1` - “alpha”，
*   `2` - “beta”，
*   `3` - “伽玛”，
*   `4` - “三角洲”。

## 提示1

请记住，使用严格相等（ `===` ）测试`case`值。

> 现在尝试解决问题！

## 提示2

不要将_“以下条件​​”_视为有序列表，因为它在原始的freeCodeCamp演示中查找，但是作为值和语句，如此处所示

> 现在尝试解决问题！

## 扰流警报！

### 你完全确定你想要的样子吗？ ...

## 基本代码解决方案

```js
function caseInSwitch(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val) { 
    case 1: 
      return "alpha"; 
      break; 
    case 2: 
      return "beta"; 
      break; 
    case 3: 
      return "gamma"; 
      break; 
    case 4: 
      return "delta"; 
      break; 
  } 
 
  // Only change code above this line 
  return answer; 
 } 
 
 // Change this value to test 
 caseInSwitch(1); 
```

### 代码说明

通常忽略的是，使用其他表达式的任何需要严格相等地测试`case`值，如下所示： `case === value`

## 替代代码解决方案

```javascript
function caseInSwitch(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch (val){ 
    case 1: 
      answer="alpha"; 
      break; 
    case 2: 
      answer="beta"; 
      break; 
    case 3: 
      answer="gamma"; 
      break; 
    case 4: 
      answer="delta"; 
      break; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 caseInSwitch(1); 
```

·在[repl.it上](https://repl.it/@AdrianSkar/Basic-JS-Switch-statements)运行代码。

### 代码说明

由于您已经在名为`answer`的函数的开头定义了一个变量，并将其定义为最后一个return语句，因此您可以为每个案例为其分配新值，并根据传递给函数的值返回预期答案。

### 来源

1 。 [“switch”的描述 - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#Description) 。