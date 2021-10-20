---
id: 587d7db1367417b2b2512b86
title: 重置一个继承的构造函数属性
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

当一个对象从另一个对象那里继承了其 `prototype` 时，那它也继承了父类的 constructor 属性。

请看下面的举例：

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

但是 `duck` 和其他所有 `Bird` 的实例都应该表明它们是由 `Bird` 创建的，而不是由 `Animal` 创建的。 为此，你可以手动将 `Bird` 的构造函数属性设置为 `Bird` 对象：

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

修改你的代码，使得 `duck.constructor` 和 `beagle.constructor` 返回各自的构造函数。

# --hints--

`Bird.prototype` 应该是 `Animal` 的一个实例。

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` 应该返回 `Bird`。

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` 应该是 `Animal` 的一个实例。

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` 应该返回 `Dog`。

```js
assert(beagle.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();
```
