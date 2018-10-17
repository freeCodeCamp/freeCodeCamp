---
title: Multiple Identical Options in Switch Statements
localeTitle: 交换机语句中的多个相同选项
---
## 交换机语句中的多个相同选项

### 问题解释

_如果从switch语句的大小写中省略了break语句，则会执行以下case语句，直到遇到break。如果您有多个具有相同输出的输入，则可以在switch语句中表示它们，如下所示：_

```javascript
switch(val) { 
  case 1: 
  case 2: 
  case 3: 
    result = "1, 2, or 3"; 
    break; 
  case 4: 
    result = "4 alone"; 
 } 
```

_1,2和3的情况都会产生相同的结果。_

_写一个switch语句来设置以下范围的答案：_ `1-3` - “低”  
`4-6` - “中”  
`7-9` - “高”

_注意： 您需要为范围中的每个数字都有一个case语句。_

## 扰流板警报！

**提前解决！**

## 代码解决方案

```javascript
function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val) { 
    case 1: 
    case 2: 
    case 3: 
      return "Low"; 
      break; 
    case 4: 
    case 5: 
    case 6: 
      return "Mid"; 
      break; 
    case 7: 
    case 8: 
    case 9: 
      return "High"; 
      break; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
```

## 替代代码解决方案

```javascript
function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val){ 
    case 1: case 2: case 3: 
      answer = "Low"; 
      break; 
    case 4: case 5: case 6: 
      answer = "Mid"; 
      break; 
    case 7: case 8: case 9: 
      answer = "High"; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
```

·在[repl.it上](https://repl.it/@AdrianSkar/Basic-JS-Multiple-opts-in-switch)运行代码。

### 代码说明

由于您已经定义了一个名为`answer`的变量并且函数返回它，因此您可以在每组case语句中修改其值以满足练习要求。

### 资源

*   [“切换：多标准案例的方法” - _MDN Javascript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)