---
id: 587d7dae367417b2b2512b7c
title: 使用原型属性来减少重复代码
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

所有 `Bird` 实例可能会有相同的 `numLegs` 值，所以在每一个 `Bird` 的实例中本质上都有一个重复的变量 `numLegs`。

当只有两个实例时可能并不是什么问题，但想象一下如果有数百万个实例。 这将会产生许许多多重复的变量。

更好的方法是使用 `Bird` 的 `prototype`。 `prototype` 是一个可以在所有 `Bird` 实例之间共享的对象。 以下是一个在 `Bird prototype` 中添加 `numLegs` 属性的示例：

```js
Bird.prototype.numLegs = 2;
```

现在所有的 `Bird` 实例都拥有了共同的 `numLegs` 属性值。

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

由于所有的实例都可以继承 `prototype` 上的属性，所以可以把 `prototype` 看作是创建对象的 "配方"。 请注意：`duck` 和 `canary` 的 `prototype` 属于 `Bird` 的构造函数，即 Bird 的原型 `Bird.prototype`。

# --instructions--

给 `Dog` 的 `prototype` 添加一个 `numLegs` 属性。

# --hints--

`beagle` 应该有一个 `numLegs` 属性。

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` 应该是一个数字。

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` 应该是一个 `prototype` 属性，而不是一个自身属性。

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
