---
id: 587d7dad367417b2b2512b75
title: 在对象上创建方法
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

对象可以有一个叫做 <dfn>method</dfn> 的特殊属性。

方法属性也就是函数。 这给对象添加了不同的行为。 以下就是一个带有方法属性的 `duck` 示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

示例添加了 `sayName` 方法，函数返回包含 `duck` 名字的一个句子。 注意：这个方法在返回语句中使用 `duck.name` 的方式来获取 `name` 的属性值。 在下一个挑战中我们将会使用另外一种方法来实现。

# --instructions--

给 `dog` 对象设置一个名为 `sayLegs` 的方法。 并让它返回 `This dog has 4 legs.` 这句话。

# --hints--

`dog.sayLegs()` 应该是一个函数。

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` 应该返回给定的字符串，需要注意标点和间距的问题。

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

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
