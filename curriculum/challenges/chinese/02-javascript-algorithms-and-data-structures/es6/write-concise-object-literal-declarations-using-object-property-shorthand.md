---
id: 587d7b8a367417b2b2512b4f
title: 使用简单字段编写简洁的对象字面量声明
challengeType: 1
forumTopicId: 301225
---

# --description--

ES6 添加了一些很棒的功能，以便于更方便地定义对象。

请看以下代码：

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition`是一个返回了拥有2个属性的对象的简单函数。 ES6 提供了一个语法糖，消除了类似`x: x`这种冗余的写法.你可以仅仅只写一次`x`，解释器会自动将其转换成`x: x`。 下面是使用这种语法重写的同样的函数：

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

请使用简单属性对象的语法来创建并返回一个`Person`对象。

# --hints--

输出是`{name: "Zodiac Hasbro", age: 56, gender: "male"}`。

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

不要使用`key:value`。

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --solutions--

