---
id: 56bbb991ad1ed5201cd392d3
title: 删除对象的属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

我们同样可以删除对象的属性，例如：

```js
delete ourDog.bark;
```

例如：

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

在上面代码的最后一行中，`ourDog` 是这样的：

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

删除 `myDog` 对象的 `tails` 属性。 可以使用点操作符或者中括号操作符。

# --hints--

应该从 `myDog` 中删除 `tails` 属性。

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

不要修改 `myDog` 的初始化代码。

```js
assert(code.match(/"tails": 1/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```
