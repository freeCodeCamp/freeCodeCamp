---
id: 587d7db1367417b2b2512b87
title: 继承后添加方法
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

从超类构造函数继承其 `prototype` 对象的构造函数，除了继承的方法外，还可以拥有自己的方法。

请看举例：`Bird` 是一个构造函数，它继承了 `Animal` 的 `prototype`：

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

除了从 `Animal` 构造函数继承的行为之外，还需要给 `Bird` 对象添加它独有的行为。 这里，我们给 `Bird` 对象添加一个 `fly()` 函数。 函数会以一种与其他构造函数相同的方式添加到 `Bird's` 的 `prototype` 中：

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

现在 `Bird` 的实例中就有了 `eat()` 和 `fly()` 这两个方法：

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` 将在控制台中显示字符串 `nom nom nom`， `duck.fly()` 将显示字符串 `I'm flying!`。

# --instructions--

添加必要的代码，使得 `Dog` 对象继承 `Animal`，并且把 `Dog` 的 `prototype`上的 constructor 属性设置为 `Dog`。 然后给 `Dog` 对象添加一个 `bark()` 方法，这样的话，`beagle` 将同时拥有 `eat()` 和 `bark()` 这两个方法。 `bark()` 方法中应该输出 `Woof!` 到控制台。

# --hints--

`Animal` 应该没有 `bark()` 方法。

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` 应该继承了 `Animal` 的 `eat()` 方法。

```js
assert(typeof Dog.prototype.eat == 'function');
```

`Dog` 原型应该有一个 `bark()` 方法。

```js
assert('bark' in Dog.prototype);
```

`beagle` 应该是 `Animal` 的一个 `instanceof`。

```js
assert(beagle instanceof Animal);
```

`beagle` 的 constructor 属性应该被设置为 `Dog`。

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` 应该记录字符串 `nom nom nom`

```js
capture();
beagle.eat();
uncapture();
assert(logOutput == 'nom nom nom');
```

`beagle.bark()` 应该将字符串 `Woof!` 打印到控制台

```js
capture();
beagle.bark();
uncapture();
assert(logOutput == 'Woof!');
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput = message;
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

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
