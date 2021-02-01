---
id: 56bbb991ad1ed5201cd392d2
title: 给对象添加新属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

你也可以像更改属性一样给对象添加属性。

我们可以像这样给 `ourDog` 添加 `"bark"` 属性：

`ourDog.bark = "bow-wow";`

或者

`ourDog["bark"] = "bow-wow";`

现在当我们访问 `ourDog.bark` 时会得到它 bark 的属性值 "bow-wow".

代码示例:

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

请给 `myDog` 添加一个 `"bark"` 属性，将它的值设置为狗的叫声，如 "woof"。你可以使用点号表示法或方括号表示法来完成此挑战。

# --hints--

应给 `myDog` 添加 `"bark"` 属性。

```js
assert(myDog.bark !== undefined);
```

不应在初始化 myDog 的时候添加 `"bark"` 属性。

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
