---
id: 587d7dac367417b2b2512b74
title: 使用点符号来访问对象的属性
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

最后一个挑战创建了一个具有各种属性的对象。 现在你会看到如何访问这些属性的值。 下面是一个示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

我们可以用“点号表示法”来访问对象的属性，`duck` 后面加上点号以及属性名 `name`，来访问到 `Aflac`。

# --instructions--

请在控制台里面输出 `dog` 对象中两个属性的值。

# --hints--

你应该使用 `console.log` 来将 `dog` 对象的 `name` 属性值输出到控制台。

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

你应该使用 `console.log` 来将 `dog` 对象的 `numLegs` 属性值输出到控制台。

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
