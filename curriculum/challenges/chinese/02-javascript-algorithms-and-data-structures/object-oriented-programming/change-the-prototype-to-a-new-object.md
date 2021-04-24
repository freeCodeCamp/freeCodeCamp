---
id: 587d7daf367417b2b2512b7f
title: 将原型更改为新对象
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

到目前为止，你已经可以单独给 `prototype` 添加属性了：

```js
Bird.prototype.numLegs = 2;
```

需要添加多个属性的，这未免会显得拖沓。

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

一种更有效的方法就是给对象的 `prototype` 设置为一个已经包含了属性的新对象。 这样一来，所有属性都可以一次性添加进来：

```js
Bird.prototype = {
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

通过给 `prototype` 设置一个对象，在 `Dog` 构造函数的 `prototype` 上添加一个属性 `numLegs` 以及两个方法：`eat()` 和 `describe()`。

# --hints--

`Dog.prototype` 应该被设置为一个新对象。

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` 应该拥有属性 `numLegs`。

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` 应该拥有方法 `eat()`。

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` 应该拥有方法 `describe()`。

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```
