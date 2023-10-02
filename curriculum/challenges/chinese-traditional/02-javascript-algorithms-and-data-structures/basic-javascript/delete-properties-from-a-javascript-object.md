---
id: 56bbb991ad1ed5201cd392d3
title: 刪除對象的屬性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

我們同樣可以刪除對象的屬性，例如：

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

在上面代碼的最後一行中，`ourDog` 是這樣的：

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

刪除 `myDog` 對象的 `tails` 屬性。 可以使用點操作符或者中括號操作符。

# --hints--

應該從 `myDog` 中刪除 `tails` 屬性。

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

不要修改 `myDog` 的初始化代碼。

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
