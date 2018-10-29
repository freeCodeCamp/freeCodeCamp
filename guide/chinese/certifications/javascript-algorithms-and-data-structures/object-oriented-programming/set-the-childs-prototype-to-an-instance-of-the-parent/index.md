---
title: Set the Child's Prototype to an Instance of the Parent
localeTitle: 将Child的Prototype设置为Parent的实例
---
## 将Child的Prototype设置为Parent的实例

### 方法

这个挑战与上一个挑战没有什么不同，因为您必须创建一个继承自`supertype`的对象。只有这次子类型`Dog`才会继承`Animal`超类型。 只需创建一个`Dog.prototype`的新实例，如下例所示。

```javascript
Bird.prototype = Object.create(Animal.prototype); 
```

### 解

```javascript
function Animal() { } 
 
 Animal.prototype = { 
  constructor: Animal, 
  eat: function() { 
    console.log("nom nom nom"); 
  } 
 }; 
 
 function Dog() { } 
 
 // Add your code below this line 
 Dog.prototype = Object.create(Animal.prototype); 
 
 let beagle = new Dog(); 
 beagle.eat();  // Should print "nom nom nom" 

```