---
title: Use Inheritance So You Don't Repeat Yourself
localeTitle: 使用继承，所以你不要重复自己
---
## 使用继承，所以你不要重复自己

### 解

从Cat.prototype和Bear.prototype中删除“eat”方法并将其添加到Animal.prototype中。

```javascript
function Cat(name) { 
  this.name = name; 
 }; 
 
 Cat.prototype = { 
  constructor: Cat 
 }; 
 
 function Bear(name) { 
  this.name = name; 
 }; 
 
 Bear.prototype = { 
  constructor: Bear 
 }; 
 
 function Animal() { }; 
 
 Animal.prototype = { 
  constructor: Animal, 
  eat: function() { 
    console.log("nom nom nom"); 
  } 
 }; 

```