---
id: 587d7b8a367417b2b2512b4f
title: 使用简单字段编写简洁的对象字面量声明
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 添加了一些很棒的功能，用于更方便地定义对象。

请看以下代码：

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` 简单的函数，返回拥有两个属性的对象。 ES6 提供了一个语法糖，消除了类似 `x: x` 这种冗余的写法。 你可以只写一次 `x`，解释器会自动将其转换成 `x: x`（或效果相同的内容）。 下面是使用这种语法重写的同样的函数：

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

请使用简单属性对象的语法来创建并返回一个具有 `name`、`age` 和 `gender` 属性的对象。

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` 应该返回 `{name: "Zodiac Hasbro", age: 56, gender: "male"}`。

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

不要使用 `key:value`。

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```
