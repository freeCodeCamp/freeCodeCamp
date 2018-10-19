---
title: Reset an Inherited Constructor Property
localeTitle: 重置继承的构造函数属性
---
## 重置继承的构造函数属性

### 方法

`duck`和`beagle`对象已被编程为继承`supertypes`构造函数属性。要覆盖这两行代码，必须编写将构造函数设置为所需的构造函数`Bird`和`Dog` 。以下代码演示了如何实现此目的。

```javascript
Bird.prototype.constructor = Bird; 
```

### 解

```javascript
function Animal() { } 
 function Bird() { } 
 function Dog() { } 
 
 Bird.prototype = Object.create(Animal.prototype); 
 Dog.prototype = Object.create(Animal.prototype); 
 
 // Add your code below this line 
 Bird.prototype.constructor = Bird; 
 Dog.prototype.constructor = Dog; 
 
 let duck = new Bird(); 
 let beagle = new Dog(); 

```