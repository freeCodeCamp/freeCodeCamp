---
id: 587d7db2367417b2b2512b8a
title: >-
  使用闭包保护对象内的属性不被外部修改
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

在上一次挑战中，`bird` 有一个公共属性 `name`。 公共属性的定义就是：它可以在 `bird` 的定义范围之外被访问和更改。

```js
bird.name = "Duffy";
```

因此，代码的任何地方都可以轻松地将 `bird` 的 name 属性更改为任意值。 想想密码和银行账户之类的东西，如果代码库的任何部分都可以轻易改变他们。 那么将会引起很多问题。

使属性私有化最简单的方法就是在构造函数中创建变量。 可以将该变量范围限定在构造函数中，而不是全局可用。 这样，属性只能由构造函数中的方法访问和更改。

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

这里的 `getHatchedEggCount` 是一种特权方法，因为它可以访问私有属性 `hatchedEgg`。 这是因为 `hatchedEgg` 是在与 `getHatchedEggCount` 相同的上下文中声明的。 在 JavaScript 中，函数总是可以访问创建它的上下文。 这就叫做 `closure`。

# --instructions--

更改在 `Bird` 函数中声明的 `weight` 方法，使其成为私有变量。 然后，创建一个返回 `weight` 值 15 的 `getWeight` 方法。

# --hints--

`weight` 属性应该是一个私有变量，值应该是 `15`。

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

你的代码应该在 `Bird` 中创建一个名为 `getWeight` 方法，该方法返回私有变量 `weight`。

```js
assert(new Bird().getWeight() === 15);
```

你的 `getWeight` 函数应该返回私有变量 `weight`。

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```
