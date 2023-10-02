---
id: 587d7daf367417b2b2512b80
title: 更改原型时，记得设置构造函数属性
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

手动设置一个新对象的原型有一个重要的副作用。 它清除了 `constructor` 属性！ 此属性可以用来检查是哪个构造函数创建了实例，但由于该属性已被覆盖，它现在给出了错误的结果：

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

按顺序，这些表达式会返回 `false`、`true` 和 `true`。

为了解决这个问题，凡是手动给新对象重新设置过原型对象的，都别忘记在原型对象中定义一个 `constructor` 属性：

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

给 `Dog` 的 `prototype` 对象定义一个 `constructor` 属性。

# --hints--

`Dog.prototype` 应该定义一个 `constructor` 属性。

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
