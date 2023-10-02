---
id: 587d7db0367417b2b2512b81
title: 了解对象的原型来自哪里
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

就像人们从父母那里继承基因一样，对象也可直接从创建它的构造函数那里继承其 `prototype`。 请看下面的例子：`Bird` 构造函数创建了一个 `duck` 对象：

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` 从 `Bird` 构造函数那里继承了它的 `prototype`。 你可以使用 `isPrototypeOf` 方法来验证他们之间的关系：

```js
Bird.prototype.isPrototypeOf(duck);
```

这将返回 `true`。

# --instructions--

使用 `isPrototypeOf` 方法验证 `beagle` 的 `prototype`。

# --hints--

`Dog.prototype` 应该是 `beagle` 的 `prototype`。

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
