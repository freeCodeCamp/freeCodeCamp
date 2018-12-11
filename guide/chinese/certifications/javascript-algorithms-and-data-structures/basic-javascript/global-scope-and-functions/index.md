---
title: Global Scope and Functions
localeTitle: 全球范围和职能
---
## 全球范围和职能

变量的范围是它的可见性;代码中的哪个部分是可用的功能？以下是变量可以具有的不同范围的列表。

*   **全局范围** ：该变量在整个代码中可用
*   **本地范围** ：仅在某个区域可用（仅在功能内）
*   **块范围** ：在_更_确定的区域内可用（如if语句）

您的任务是了解如何在变量名称之前添加`var` （而不是添加），可以更改变量的范围。

在变量名称之前添加`var` ，其范围取决于放置位置。像这样：

```javascript
var num1 = 18; // Global scope 
 function fun() { 
  var num2 = 20; // Local (Function) Scope 
  if (true) { 
    var num3 = 22; // Block Scope (within an if-statement) 
  } 
 } 
```

如果不这样做，结果如下：

```javascript
num1 = 18; // Global scope 
 function fun() { 
  num2 = 20; // Global Scope 
  if (true) { 
    num3 = 22; // Global Scope 
  } 
 } 
```

好的，这是基本的代码解决方案。

```javascript
// Declare your variable here 
 var myGlobal = 10; 
 
 function fun1() { 
  oopsGlobal = 5; 
 
 } 
 
 // Only change code above this line 
 function fun2() { 
  var output = ""; 
  if (typeof myGlobal != "undefined") { 
    output += "myGlobal: " + myGlobal; 
  } 
  if (typeof oopsGlobal != "undefined") { 
    output += " oopsGlobal: " + oopsGlobal; 
  } 
  console.log(output); 
 } 

```