---
title: Use class Syntax to Define a Constructor Function
localeTitle: 使用类语法定义构造函数
---
## 使用类语法定义构造函数

在本课程中，您将使用类语法定义Vegetable对象。

## 提示1：

创建名为`Vegetable`的类。它将包含有关`Vegetable`对象的必要详细信息。

## 提示2：

使用名为`name`的参数构造一个构造函数，并将其设置为`this.name` 。

## 剧透警报 - 提前解决！

## 解：

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
  class Vegetable { 
    constructor(name){ 
      this.name = name; 
    } 
  } 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
```

\=======

扰流板警告：如果您遇到困难，这是解决此挑战的基本解决方案。

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
 
   class Vegetable { 
     constructor(Vegetable){ 
       this.Vegetable = Vegetable; 
 
     } 
   } 
 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
 const Vegetable = makeClass(); 
 const carrot = new Vegetable('carrot'); 
 console.log(carrot.name); // => should be 'carrot' 

```