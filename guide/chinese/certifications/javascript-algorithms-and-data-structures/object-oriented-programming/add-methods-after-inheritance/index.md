---
title: Add Methods After Inheritance
localeTitle: 继承后添加方法
---
## 继承后添加方法

### 方法

就像下面的例子一样，必须创建一个对象的新实例 - `Dog` - 并且必须设置`prototype` 。

```javascript
function Bird() { } 
 Bird.prototype = Object.create(Animal.prototype); 
 Bird.prototype.constructor = Bird; 
```

然后必须在Dog原型中添加一个新函数 - `bark()` - 。

### 解

```javascript
function Animal() { } 
 Animal.prototype.eat = function() { console.log("nom nom nom"); }; 
 
 function Dog() { } 
 
 // Add your code below this line 
 Dog.prototype = Object.create(Animal.prototype); 
 Dog.prototype.constructor = Dog; 
 Dog.prototype.bark = function() { 
    console.log("Woof woof!"); 
 }; 
 // Add your code above this line 
 
 let beagle = new Dog(); 
 
 beagle.eat(); // Should print "nom nom nom" 
 beagle.bark(); // Should print "Woof!" 

```