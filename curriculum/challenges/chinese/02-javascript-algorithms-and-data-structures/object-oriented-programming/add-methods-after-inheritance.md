---
id: 587d7db1367417b2b2512b87
title: 继承后添加方法
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

从`父类`继承其`原型`对象的构造函数除了继承的方法之外，还可以有自己的方法。

请看举例：`Bird`是一个构造函数，它继承了`Animal`构造函数的`原型`：

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

除了从`Animal`构造函数继承的行为之外，还需要给`Bird`对象添加它独有的行为。这里，我们给`Bird`对象添加一个`fly()`函数。函数会以一种与其他构造函数相同的方式添加到`Bird`的`原型`中：

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

现在`Bird`的实例中就有了`eat()`和`fly()`这两个方法：

```js
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
```

# --instructions--

添加必要的代码，使得`Dog`对象继承`Animal`构造函数，并且把`Dog 原型`上的 constructor 属性设置为 Dog。然后给`Dog`对象添加一个`bark()`方法，这样的话，`beagle`将同时拥有`eat()`和`bark()`这两个方法。`bark()`方法中应该输出 "Woof!" 到控制台。

# --hints--

`Animal`应该没有`bark()`方法。

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog`应该继承了`Animal`构造函数的`eat()`方法。

```js
assert(typeof Dog.prototype.eat == 'function');
```

`Dog`应该有一个`bark()`方法作为`自身`属性。

```js
assert(Dog.prototype.hasOwnProperty('bark'));
```

`beagle`应该是`Animal`的一个`instanceof`。

```js
assert(beagle instanceof Animal);
```

`beagle`的 constructor 属性应该被设置为`Dog`。

```js
assert(beagle.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
