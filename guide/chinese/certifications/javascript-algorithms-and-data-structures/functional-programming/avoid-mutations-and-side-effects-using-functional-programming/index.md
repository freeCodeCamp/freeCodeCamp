---
title: Avoid Mutations and Side Effects Using Functional Programming
localeTitle: 使用功能编程避免突变和副作用
---
## 使用功能编程避免突变和副作用

### 问题解释

填写函数`incrementer`的代码，使其返回全局变量`fixedValue`的值增加1。 `fixedValue`不应该改变，不管功能多少次`incrememter`被调用。

### 提示1

在`fixedValue`上使用增量运算符（ `++` ）将改变`fixedValue` ，这意味着它将不再引用它所分配的相同值。

### 解：

```javascript
// the global variable 
 var fixedValue = 4; 
 
 function incrementer () { 
  // Add your code below this line 
  return fixedValue + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(); // Should equal 5 
 console.log(fixedValue); // Should print 4 

```