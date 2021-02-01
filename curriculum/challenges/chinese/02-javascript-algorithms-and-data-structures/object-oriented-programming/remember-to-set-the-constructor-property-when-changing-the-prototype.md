---
id: 587d7daf367417b2b2512b80
title: 更改原型时，记得设置构造函数属性
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

手动给新对象重新设置`原型`对象，会产生一个重要的副作用：删除了`constructor`属性！我们来看一下，上一个挑战中`duck`的`constructor`属性输出到控制台的结果：

```js
duck.constructor === Bird; // false -- 啊哦
duck.constructor === Object; // true, 所有的对象都继承自 Object.prototype
duck instanceof Bird; // true, 依然生效
```

为了解决这个问题，凡是手动给新对象重新设置过原型对象的，都别忘记在原型对象中定义一个`constructor`属性：

```js
Bird.prototype = {
  constructor: Bird, // define the constructor property
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

给`Dog 的原型`对象定义一个`constructor`属性。

# --hints--

`Dog.prototype`应该定义一个`constructor`属性。

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
