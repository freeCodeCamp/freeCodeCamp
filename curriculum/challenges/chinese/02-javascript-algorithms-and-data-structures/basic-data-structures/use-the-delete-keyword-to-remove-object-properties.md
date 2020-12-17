---
id: 587d7b7c367417b2b2512b1b
title: 使用 delete 关键字删除对象属性
challengeType: 1
forumTopicId: 301168
---

# --description--

现在你已经知道什么是对象以及对象的基本特性和用途。总之，对象是以键值对的形式，灵活、直观地存储结构化数据的一种方式，***并且***查找对象属性的速度是很快的。在本章剩下的挑战中，我们会讲对象的几种常用操作，这样你能更好地在你的程序中使用这种有用的数据结构。

在之前的挑战中，我们已经试过新增和修改对象中的键值对。现在我们来看如何从一个对象中*移除*一个键值对。

我们再来看上一个挑战中的`foods`对象。如果我们想移除`apples`属性，我们可以使用`delete`关键字：

```js
delete foods.apples;
```

# --instructions--

请你用 delete 关键字来移除`foods`中的`oranges`、`plums`和`strawberries`属性。

# --hints--

`foods`对象应该只含有 3 个键：`apples`、`grapes`和`bananas`。

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

你应该用`delete`关键字来移除`oranges`、`plums`和`strawberries`属性。

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --solutions--

