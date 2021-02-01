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

`delete ourDog.bark;`

# --instructions--

删除`myDog`对象的`"tails"`属性。

# --hints--

从`myDog`中删除`"tails"`属性。

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

不要修改`myDog`的初始化。

```js
assert(code.match(/"tails": 1/g).length > 1);
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
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
```

# --solutions--

```js
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```
