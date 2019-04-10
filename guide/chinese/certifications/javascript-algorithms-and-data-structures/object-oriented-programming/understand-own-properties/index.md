---
title: Understand Own Properties
localeTitle: 了解自己的属性
---
## 了解自己的属性

### 方法：

在给出的示例代码中，您将看到一个新数组`ownProps[]` intialised，然后是`for...in`语句循环遍历`duck`的属性，然后使用`push()`语句填充新数组。对于`canary`对象必须遵循相同的方法。

只需将'for ... in'语句中的`duck`对象替换为`canary`对象即可传递所有测试用例。

### 解：

```javascript
let canary = new Bird("Tweety"); 
 let ownProps = []; 
 // Add your code below this line 
 for(let property in canary) { 
  if(canary.hasOwnProperty(property)) { 
    ownProps.push(property); 
  } 
 } 

```