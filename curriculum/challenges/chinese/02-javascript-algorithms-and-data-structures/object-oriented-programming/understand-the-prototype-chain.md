---
id: 587d7db0367417b2b2512b82
title: 了解原型链
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

JavaScript 中所有的对象（除了少数例外）都有自己的 `prototype`。 而且，对象的 `prototype` 本身也是一个对象。

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

正因为 `prototype` 是一个对象，所以 `prototype` 对象也有它自己的 `prototype`！ 这样看来的话，`Bird.prototype` 的 `prototype` 就是 `Object.prototype`：

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

这有什么作用呢？ 你可能还记得我们在上一个挑战中学到的 `hasOwnProperty` 方法：

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

`hasOwnProperty` 是定义在 `Object.prototype` 上的一个方法，尽管在 `Bird.prototype` 和 `duck`上并没有定义该方法，但是我们依然可以在这两个对象上访问到。 这就是 `prototype` 链的一个例子。 在这个`prototype` 链中，`Bird` 是 `duck` 的 `supertype`，而 `duck` 是 `subtype`。 `Object` 则是 `Bird` 和 `duck` 实例共同的 `supertype`。 `Object` 是 JavaScript 中所有对象的 `supertype`，也就是原型链的最顶层。 因此，所有对象都可以访问 `hasOwnProperty` 方法。

# --instructions--

修改以下代码使其展示出正确的原型链。

# --hints--

你的代码应该展示 `Object.prototype` 是 `Dog.prototype` 的原型。

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```
