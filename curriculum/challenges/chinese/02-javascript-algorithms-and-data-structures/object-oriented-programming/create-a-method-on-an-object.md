---
id: 587d7dad367417b2b2512b75
title: 在对象上创建方法
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

`对象`可以有一个叫做`方法`的特殊`属性`。

`方法`其实是一个值为函数的`属性`，它可以为一个`对象`添加不同的行为。以下就是一个带有方法属性的`duck`示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."
```

这个例子给`duck`对象添加了一个`sayName 方法`，这个方法返回一个包含`duck`名字的句子。 注意：这个`方法`在返回语句中使用`duck.name`的方式来获取`name`的属性值。在下一个挑战中我们将会使用另外一种方法来实现。

# --instructions--

给`dog 对象`设置一个名为`sayLegs`的方法，并让它返回 "This dog has 4 legs." 这句话。

# --hints--

`dog.sayLegs()`应该是一个函数。

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()`应该返回给定的字符串，需要注意标点和间距的问题。

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
