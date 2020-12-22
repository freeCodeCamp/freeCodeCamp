---
id: 587d7db0367417b2b2512b81
title: 了解对象的原型来自哪里
challengeType: 1
forumTopicId: 301330
---

# --description--

就像人们从父母那里继承基因一样，对象也可直接从创建它的构造函数那里继承其`原型`。请看下面的例子：`Bird`构造函数创建了一个`duck`对象：

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck`从`Bird`构造函数那里继承了它的`原型`，你可以使用`isPrototypeOf`方法来验证他们之间的关系：

```js
Bird.prototype.isPrototypeOf(duck);
// 返回 true
```

# --instructions--

使用`isPrototypeOf`方法验证`beagle`是否继承了`Dog`构造函数的`原型`。

# --hints--

`Dog.prototype`应该是`beagle`的`原型`。

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --solutions--

