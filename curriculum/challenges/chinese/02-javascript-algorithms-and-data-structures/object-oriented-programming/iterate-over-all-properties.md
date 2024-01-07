---
id: 587d7daf367417b2b2512b7d
title: 迭代所有属性
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

现在你已经了解了两种属性: <dfn>自身属性</dfn>和 `prototype` 属性。 自身属性是直接在对象上定义的。 而原型属性在 `prototype` 上定义。

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

这个示例会告诉你如何将 `duck` 的自身属性和 `prototype` 属性分别添加到 `ownProps` 数组和 `prototypeProps` 数组里面：

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
```

`console.log(ownProps)` 将在控制台中显示 `["name"]` ，`console.log(prototypeProps)` 将显示 `["numLegs"]`。

# --instructions--

将 `beagle` 的自身属性都添加到 `ownProps` 数组里面去。 将 `Dog` 中所有的 `prototype` 属性都添加到 `prototypeProps` 数组中。

# --hints--

`ownProps` 数组应该包含 `name`。

```js
assert.deepEqual(ownProps, ['name']);
```

`prototypeProps` 数组应该包含 `numLegs`。

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

在不使用内置方法 `Object.keys()` 的前提下完成这个挑战。

```js
assert(!/\Object.keys/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```
