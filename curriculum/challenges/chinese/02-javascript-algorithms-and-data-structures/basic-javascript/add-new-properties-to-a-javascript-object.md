---
id: 56bbb991ad1ed5201cd392d2
title: 给 JavaScript 对象添加新属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

你也可以像更改属性一样给 JavaScript 对象添加属性。

这里展示了如何给 `ourDog` 添加一个属性 `bark`：

```js
ourDog.bark = "bow-wow";
```

或者

```js
ourDog["bark"] = "bow-wow";
```

现在，当我们执行 `ourDog.bark` 时，就能得到他的叫声，`bow-wow`。

例如：

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

给 `myDog` 添加一个属性 `bark` ，并将其设置为狗的声音，比如 “woof“。 可以使用点操作符或者中括号操作符。

# --hints--

应该给 `myDog` 添加属性 `bark`。

```js
assert(myDog.bark !== undefined);
```

不应该在 `myDog` 的初始化中添加 `bark`。

```js
assert(!/bark[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```
