---
title: Pseudoclassical Class Definition
localeTitle: 伪古典类定义
---
伪经典类定义发生在2个代码块而不是1个代码块中，这种情况发生在Python和PHP等其他语言中。

第一个块称为“构造函数”，它是声明类的属性的地方。这些是每个新实例独有的类的方面。汽车的例子是品牌，颜色和位置可能不同。在第二个代码块中，您声明将由类的每个实例共享的方法。例如汽车可以做的事情，前进，停止，打开门。

## 例
```
var Car = function(brand, color, location) { 
 this.brand = brand; 
 this.color = color; 
 this.location = location 
 }; 
 
 Car.prototype = { 
 move: function() { this.location++; }, 
 stop: function() { this.location = 0; }, 
 }; 
```

## 说明

在2个块中声明整个类的原因是在开始创建类的实例时节省内存。如果类声明是“功能”样式，则会为**每个**实例创建一个新的方法副本。通过声明类“Pseudoclassical”风格只是方法复制_单个_存储在内存中。

当类的实例尝试访问方法时：
```
var x_car = new Car('lexus', 'white', 0); 
 x_car.move(); 
```

实际上，解释器_首先_无法在对象本身中找到被调用的方法，因为它是由Car构造函数创建的。如您所见，没有引用Car构造函数中的任何方法。从那里，解释器搜索`Car.prototype` ，现在所有实例之间共享。解释器找到了被调用的方法！

### 进一步阅读：

[纳塔克的博客](https://natacseanc.wordpress.com/2015/08/04/javascript-object-create-and-classes/)

[MDN课程](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)