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

`ourDog.bark = "bow-wow";`

或者

`ourDog["bark"] = "bow-wow";`

现在，当我们执行 `ourDog.bark` 时，我们就能得到他的叫声，`bow-wow`。

例如：

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

给 `myDog` 添加一个属性 `bark` ，并将其设置为狗的声音，比如“woof“. 你可以使用点号表示法或方括号表示法来完成此挑战。

# --hints--

你应该将属性 `bark` 添加到 `myDog`。

```js
assert(myDog.bark !== undefined);
```

你不应该在 Setup 部分添加 `bark`。

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
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
```

# --solutions--

```js
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```
