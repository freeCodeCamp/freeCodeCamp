---
id: 587d7b7c367417b2b2512b1b
title: 使用 delete 关键字删除对象属性
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

现在我们已经学习了什么是对象以及对象的基本特性和用途。 总之，对象是以键值对的形式，灵活、直观地存储结构化数据的一种方式，***而且***，通过对象的属性查找属性值是速度很快的操作。 在本章余下的挑战中，我们来了解一下对象的几种常用操作，这样你能更好地在代码中使用这个十分有用的数据结构：对象。

在之前的挑战中，我们已经试过添加和修改对象中的键值对。 现在我们来看看如何从一个对象中*移除*一个键值对。

我们再来回顾一下上一个挑战中的 `foods` 对象。 如果我们想移除 `apples` 属性，可以像这样使用 `delete` 关键字：

```js
delete foods.apples;
```

# --instructions--

请使用 delete 关键字来移除 `foods` 中的 `oranges`、`plums` 和 `strawberries` 属性。

# --hints--

`foods` 对象应只包含 3 个属性：`apples`、`grapes` 和 `bananas`。

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

应使用 `delete` 关键字来移除 `oranges`、`plums` 和 `strawberries` 属性。

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
