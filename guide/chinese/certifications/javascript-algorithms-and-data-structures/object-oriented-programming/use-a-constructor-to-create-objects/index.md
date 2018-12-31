---
title: Use a Constructor to Create Objects
localeTitle: 使用构造函数创建对象
---
## 使用构造函数创建对象

### 方法：

我们在最后的挑战中看到了如何创建构造函数。现在我们可以简单地调用此函数来创建一个具有已在构造函数中定义的属性的新对象。只需初始化一个调用`Dog()`构造函数的新变量`hound` 。

### 解：

```javascript
function Dog() { 
  this.name = "Rupert"; 
  this.color = "brown"; 
  this.numLegs = 4; 
 } 
 // Add your code below this line 
 let hound = new Dog(); 

```