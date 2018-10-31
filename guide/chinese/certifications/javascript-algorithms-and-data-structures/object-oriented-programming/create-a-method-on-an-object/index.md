---
title: Create a Method on an Object
localeTitle: 在对象上创建方法
---
## 在对象上创建方法

### 方法：

必须在对象本身内初始化对象函数。这在以下代码中进行了演示。

```javascript
let obj = { 
  property1 = 1, 
 
  function1: function() { 
    //Code to be exectued 
  } 
 }; 
```

### 解：

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() { 
    return "This dog has " + dog.numLegs + " legs."; 
  } 
 }; 
 
 dog.sayLegs(); 

```