---
id: 587d7dac367417b2b2512b73
title: 创建一个基本的 JavaScript 对象
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

想想我们在生活中每天都可见到的事物：比如汽车、商店以及小鸟等。 它们都是<dfn>对象</dfn>：即人们可以观察和与之互动的实体事物。

这些物体的性质是什么？ 汽车有轮子。 商店销售物品。 鸟儿有翅膀。

这些特征，或者说是<dfn>属性</dfn>定义了一个对象由什么构成的。 需要注意的是：那些相似的对象可以拥有相同的属性，但是这些属性可能会有不同的值。 举个例子：所有的汽车都有轮子，但并不是所有汽车的轮子个数都是一样的。

JavaScript 中的对象可以用来描述现实世界中的物体，并赋予他们属性和行为，就像它们在现实世界中的对应物一样。 下面是使用这些概念来创建一个 `duck` 对象的示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

这个 `duck` 对象有两组键值对：一个是 `name` 属性，它的值是 `Aflac`；另一个是 `numLegs` 属性，它的值是 2。

# --instructions--

创建一个 `dog` 对象，并给这个对象添加两个属性：`name` 和 `numLegs`，同时把这两个属性的值分别设为字符串和数字。

# --hints--

`dog` 应该是一个 object。

```js
assert(typeof dog === 'object');
```

`dog` 应该有一个 `name` 属性且它的值是一个字符串。

```js
assert(typeof dog.name === 'string');
```

`dog` 应该有一个 `numLegs` 属性且它的值是一个数字。

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
