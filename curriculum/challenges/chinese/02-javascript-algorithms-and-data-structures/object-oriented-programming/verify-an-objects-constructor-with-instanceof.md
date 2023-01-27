---
id: 587d7dae367417b2b2512b7a
title: 使用 instanceof 验证对象的构造函数
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

凡是通过构造函数创建出的新对象，这个对象都叫做这个构造函数的 <dfn>实例</dfn>。 JavaScript 提供了一种很简便的方法来验证这个事实，那就是通过 `instanceof` 操作符。 `instanceof` 允许你将对象与构造函数之间进行比较，根据对象是否由这个构造函数创建的返回 `true` 或者 `false`。 以下是一个示例：

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

`instanceof` 方法会返回 `true`.

如果一个对象不是使用构造函数创建的，那么 `instanceof` 将会验证这个对象不是构造函数的实例：

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

`instanceof` 方法会返回 `false`。

# --instructions--

给 `House` 构造函数创建一个新实例，取名为 `myHouse` 并且传递一个数字给 bedrooms 参数。 然后使用 `instanceof` 操作符验证这个对象是否为 `House` 的实例。

# --hints--

`myHouse` 应该有一个 `numBedrooms` 属性值被赋为一个数字。

```js
assert(typeof myHouse.numBedrooms === 'number');
```

应该使用 `instanceof` 操作符验证 `myHouse` 这个对象是 `House` 构造函数的一个实例。

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```
