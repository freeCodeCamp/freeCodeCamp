---
title: Function Invocation
localeTitle: 函数调用
---
## 函数调用

调用函数时，将执行函数内的代码。通常使用术语“调用函数”而不是“调用函数”。

调用函数时，函数必须在范围内。函数的作用域是声明它的函数，如果它是在顶层声明的整个程序。

```javascript
function myFunction(a, b) { 
  return a * b; 
 } 
 myFunction(10, 2);           // Function invocation, will return 20 
 
 //optional parameters (es6 only) 
 //allow to set optional parameters 
 
 function myFunction(a, b = 10) { 
  return a * b; 
 } 
 myFunction(1);           // Function invocation, will return 10 
 myFunction(1,5);           // Function invocation, will return 5 
```

在示例代码中，a和b是函数的参数，它们保存值10和2，它们是函数调用中使用的参数。

### 调用函数作为方法

在JavaScript中，您可以将函数定义为对象方法。

以下示例创建一个对象（ `myObject` ），其中包含两个属性（ `firstName`和`lastName` ）和一个方法（ `fullName` ）：

```javascript
var myObject = { 
  firstName:"John", 
  lastName: "Doe", 
  fullName: function () { 
    return this.firstName + " " + this.lastName; 
  } 
 } 
 myObject.fullName();         // Function invoked as a method, will return "John Doe" 
```

### 箭头功能

在最新版本的Javascript中，您还可以使用箭头函数缩短语法。 以下演示了两个功能。一个用标准形式写成，一个用箭头写成。请记住，箭头函数没有自己的this，arguments，super或new.target。

```javascript
//regular function 
 
 function addStuff(args) { 
   return args + 2; 
 } 
 
 addStuff(2); 
 //returns 4 
 
 //arrow function 
 
 var addStuff = (args) => args + 2; 
 addStuff(2); 
 //returns 4 
```

这个简写版本的箭头函数有一个隐式返回，因此您不指定return语句。

### 更多信息：

*   功能文档： [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)