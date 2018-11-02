---
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
localeTitle: 使用Mixin在不相关的对象之间添加常见行为
---
## 使用Mixin在不相关的对象之间添加常见行为

### 方法

就像`flyMixin`函数一样，必须使用新的`glideMixin`函数来接受`bird`和`boat`对象作为参数。使用与`flyMixin`函数相同的语法创建此新函数，然后在两个对象上调用该函数。

### 解

```javascript
let bird = { 
  name: "Donald", 
  numLegs: 2 
 }; 
 
 let boat = { 
  name: "Warrior", 
  type: "race-boat" 
 }; 
 
 // Add your code below this line 
 let glideMixin = function(obj) { 
    obj.glide = function() { 
        console.log("Gliding!"); 
    } 
 }; 
 glideMixin(bird); 
 glideMixin(boat); 

```