---
title: Prototypes
---
## Prototypes

JavaScript is a prototype-based language, therefore understanding the prototype object is one of the most important concepts which  JavaScript practitioners need to know. This article will give you a short overview of the Prototype object through various  examples. Before reading this article, you will need to have a basic understanding of the [`this` reference in JavaScript](/src/pages/javascript/this-reference/index.md).

### Prototype object

For the sake of clarity, let's examine the following example:

```javascript
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}
```

As `Point2D` function is declared, a default property named `prototype` will be created for it (note that, in JavaScript, a function is also an object). The `prototype` property is an object which contains a `constructor` property and its value is `Point2D` function: `Point2D.prototype.constructor = Point2D`. And when you call `Point2D` with `new` keyword, *newly created objects will inherit all properties from* `Point2D.prototype`. To check that, you can add a method named `move` into `Point2D.prototype` as follows:

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

The `Point2D.prototype` is called **prototype object** or **prototype** of `p1` object and for any other object created with `new Point2D(...)` syntax. You can add more properties to `Point2D.prototype` object as you like. The common pattern is declare methods to `Point2D.prototype` and other properties will be declared in constructor function.

Built-in objects in JavaScript are constructed in a similar manner. For example:

- Prototype of objects created with `new Object()` or `{}` syntax is `Object.prototype`.
- Prototype of arrays created with `new Array()` or `[]` syntax is `Array.prototype`.
- And so on with other built-in objects such as `Date` and `RegExp`.

`Object.prototype` is inherited by all objects and it has no prototype (its prototype is `null`).

### Prototype chain

The prototype chain mechanism is simple: When you access a property `p` on object `obj`, the JavaScript engine will search this property inside `obj` object. If the engine fails to search, it continues searching in the  prototype of `obj` object and so on until reaching `Object.prototype`. If after the search has finished, and nothing has been found the result will be `undefined`.
For example:

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

In above snippet, the statement `var obj2 = Object.create(obj1)` will create `obj2` object with prototype  `obj1` object. In other words, `obj1` becomes the prototype of `obj2` instead of `Object.prototype` by default. As you can see,  `b` is not a property of `obj2`, you can still access it via the  prototype chain. For `c` property, however, you get `undefined` value because it can't be found in `obj1` and `Object.prototype`.

### Classes

In ES2016, we now get to use the `Class` keyword as well as the methods mentioned above to manipulate `prototype`. The JavaScript `Class` appeals to developers from OOP backgrounds, but it's essentially doing the same thing as above.

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

This is basically the same as:

```javascript
function Rectangle(height, width) {
  this.height = height
  this.width = width
}

Rectangle.prototype.calcArea = function calcArea() {
  return this.height * this.width
}
```

The `getter` and `setter` methods in classes bind an Object property to a function that will be called when that property is looked up. It's just syntactic sugar to help make it easier to _look up_ or _set_ properties.

**Further Reading:**
* [MDN: Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
