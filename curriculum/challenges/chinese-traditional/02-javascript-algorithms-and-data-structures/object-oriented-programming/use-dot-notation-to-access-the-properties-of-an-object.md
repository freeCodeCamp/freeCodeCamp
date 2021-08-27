---
id: 587d7dac367417b2b2512b74
title: 使用點符號來訪問對象的屬性
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

最後一個挑戰創建了一個具有各種屬性的對象。 現在你會看到如何訪問這些屬性的值。 下面是一個示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

我們可以用“點號表示法”來訪問對象的屬性，`duck` 後面加上點號以及屬性名 `name`，來訪問到 `Aflac`。

# --instructions--

請在控制檯裏面輸出 `dog` 對象中兩個屬性的值。

# --hints--

你應該使用 `console.log` 來將 `dog` 對象的 `name` 屬性值輸出到控制檯。

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

你應該使用 `console.log` 來將 `dog` 對象的 `numLegs` 屬性值輸出到控制檯。

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
