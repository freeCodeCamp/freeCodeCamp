---
id: 587d7dac367417b2b2512b74
title: 使用点符号来访问对象的属性
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

在上一个挑战中，我们创建了一个拥有不同`属性`的`对象`，现在我们来看看该如何访问这些`属性`：

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// 这段代码会在控制台中输出 "Aflac"
```

我们可以用“点号表示法”来访问对象的属性，只需要在`对象`名称后面加上`.`以及`属性`名即可。比如，`duck.name`就可以访问到 "Aflac"。

# --instructions--

请在控制台里面输出`dog`对象中两个`属性`对应的值。

# --hints--

你应该使用`console.log`来将`dog`对象的`name`属性值输出到控制台。

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

你应该使用`console.log`来将`dog`对象的`numLegs`属性值输出到控制台。

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
