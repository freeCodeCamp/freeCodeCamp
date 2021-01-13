---
id: 587d7dac367417b2b2512b73
title: 创建一个基本的 JavaScript 对象
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

想想我们在生活中每天都可见到的事物：比如汽车、商店以及小鸟等。它们都是`物体`：即人们可以观察和与之互动的实体事物。

那么这些`物体`都有哪些特征呢？比如汽车的特征是有轮子，商店是用来出售商品的，而小鸟的特征是有翅膀。

这些特征，或者说是`属性`定义了一个`物体`由什么构成的。需要注意的是：那些相似的`物体`可以拥有相同的`属性`，但是这些`属性`可能会有不同的值。举个例子：所有的汽车都有轮子，但并不是所有汽车的轮子个数都是一样的。

JavaScript 中的`对象`可以用来描述现实世界中的物体，并赋予他们`属性`和行为，就像它们在现实世界中的对应物一样。下面是使用这些概念来创建一个`duck 对象`的示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

这个`duck 对象` 有两组键值对：一个是`name`属性，它的值是 "Aflac"；另一个是`numLegs`属性，它的值是 2。

# --instructions--

创建一个`dog 对象`，并给这个对象添加两个属性：`name`和`numLegs`，同时把这两个属性的值分别设为字符串和数字。

# --hints--

`dog`应该是一个`object`。

```js
assert(typeof dog === 'object');
```

`dog`应该有一个`name`属性，且它的值是一个<code>字符串<code>。

```js
assert(typeof dog.name === 'string');
```

`dog`应该有一个`numLegs`属性，且它的值是一个`数字`。

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
