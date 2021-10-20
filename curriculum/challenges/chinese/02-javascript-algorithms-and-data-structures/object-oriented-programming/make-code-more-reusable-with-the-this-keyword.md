---
id: 587d7dad367417b2b2512b76
title: 使用 this 关键字提高代码重用性
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

在上一个挑战中我们了解了该如何给 `duck` 对象设置一个方法。 然后在 return 语句里，我们通过使用 “点号表示法” `duck.name` 来获取 `name` 的属性值：

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

虽然这是访问对象属性的有效方法，但是这里有一个陷阱。 如果变量名发生了改变，那么引用了原始名称的任何代码都需要更新。 在一个简短的对象定义中，这并不是问题，但是如果对象有很多对其属性的引用，那么发生错误的可能性就更大了。

我们可以使用 `this` 关键字来避免这一问题：

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` 是一个很复杂的知识点，而上面那个例子也只是使用它的一种方法而已。 在当前的上下文环境中，`this` 指向的就是与这个方法有关联的 `duck` 对象。 如果把对象的变量名改为 `mallard`，那使用 this 后就没有必要在代码中找到所有指向 `duck` 的部分。 这样可以使得代码更具有可读性和复用性。

# --instructions--

修改 `dog.sayLegs` 方法，以将所有直接对 `dog` 的引用删除。 可以参考上面 `duck` 的例子。

# --hints--

`dog.sayLegs()` 应该返回一个指定的字符串。

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

应该使用 `this` 关键字来访问 `dog` 对象的 `numLegs` 属性值。

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
