---
title: Prototypes
localeTitle: 原型
---
## 原型

JavaScript是一种基于原型的语言，因此理解原型对象是JavaScript从业者需要知道的最重要的概念之一。本文将通过各种示例简要概述Prototype对象。在阅读本文之前，您需要对[JavaScript](/src/pages/javascript/this-reference/index.md)中的[`this`引用](/src/pages/javascript/this-reference/index.md)有一个基本的了解。

### 原型对象

为清楚起见，我们来看一下以下示例：

```javascript
function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
```

当声明`Point2D`函数时，将为它创建一个名为`prototype`的默认属性（请注意，在JavaScript中，函数也是一个对象）。 `prototype`属性是一个包含`constructor`属性的对象，其值为`Point2D`函数： `Point2D.prototype.constructor = Point2D` 。当您使用`new`关键字调用`Point2D`时， _新创建的对象将继承_ `Point2D.prototype` _所有属性_ 。要检查这一点，您可以将名为`move`的方法添加到`Point2D.prototype` ，如下所示：

```javascript
Point2D.prototype.move = function(dx, dy) { 
  this.x += dx; 
  this.y += dy; 
 } 
 
 var p1 = new Point2D(1, 2); 
 p1.move(3, 4); 
 console.log(p1.x); // 4 
 console.log(p1.y); // 6 
```

`Point2D.prototype`被称为**原型对象**或`p1`对象的**原型** ，以及用`new Point2D(...)`语法创建的任何其他对象。您可以根据需要向`Point2D.prototype`对象添加更多属性。常见的模式是`Point2D.prototype`声明方法，其他属性将在构造函数中声明。

JavaScript中的内置对象以类似的方式构造。例如：

*   使用`new Object()`或`{}`语法创建的对象的原型是`Object.prototype` 。
*   使用`new Array()`或`[]`语法创建的数组的原型是`Array.prototype` 。
*   等等其他内置对象，如`Date`和`RegExp` 。

`Object.prototype`由所有对象继承，并且没有原型（其原型为`null` ）。

### 原型链

原型链机制很简单：当您访问对象`obj`上的属性`p`时，JavaScript引擎将在`obj`对象中搜索此属性。如果引擎无法搜索，它会继续搜索`obj`对象的原型，依此类推，直到达到`Object.prototype` 。如果在搜索完成后，没有找到任何结果，则结果将是`undefined` 。 例如：

```javascript
var obj1 = { 
  a: 1, 
  b: 2 
 }; 
 
 var obj2 = Object.create(obj1); 
 obj2.a = 2; 
 
 console.log(obj2.a); // 2 
 console.log(obj2.b); // 2 
 console.log(obj2.c); // undefined 
```

在上面的代码片段中，语句`var obj2 = Object.create(obj1)`将使用原型`obj1`对象创建`obj2`对象。换句话说，默认情况下， `obj1`成为`obj2`的原型而不是`Object.prototype` 。如您所见， `b`不是`obj2`的属性，您仍然可以通过原型链访问它。但是，对于`c`属性，您将获得`undefined`值，因为它无法在`obj1`和`Object.prototype`找到。

### 类

在ES2016中，我们现在可以使用`Class`关键字以及上面提到的方法来操作`prototype` 。 JavaScript `Class`吸引了来自OOP背景的开发人员，但它基本上与上面做了同样的事情。

```javascript
class Rectangle { 
  constructor(height, width) { 
    this.height = height 
    this.width = width 
  } 
 
  get area() { 
    return this.calcArea() 
  } 
 
  calcArea() { 
    return this.height * this.width 
  } 
 } 
 
 const square = new Rectangle(10, 10) 
 
 console.log(square.area) // 100 
```

这基本上与以下相同：

```javascript
function Rectangle(height, width) { 
  this.height = height 
  this.width = width 
 } 
 
 Rectangle.prototype.calcArea = function calcArea() { 
  return this.height * this.width 
 } 
```

类中的`getter`和`setter`方法将Object属性绑定到将在查找该属性时调用的函数。这只是语法糖，有助于更容易_查找_或_设置_属性。

**进一步阅读：**

*   [MDN：对象原型](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)