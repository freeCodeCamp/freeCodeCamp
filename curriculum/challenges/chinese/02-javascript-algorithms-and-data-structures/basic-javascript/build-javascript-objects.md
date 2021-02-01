---
id: 56bbb991ad1ed5201cd392d0
title: 创建 JavaScript 对象
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

你可能听说过对象（`object`）这个概念。

对象和数组很相似。区别在于，数组是通过索引来访问和修改数据，而对象是通过`属性`来访问和修改数据。

对象可以让存储的数据结构化，它可以让我们更好地描述真实世界的物体，比如一只猫。

这是一个对象的示例：

```js
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

在这个示例中，属性都是以字符串的形式储存，例如 `"name"`、`"legs"`、`"tails"`。然而，我们也可以使用数字作为属性，甚至可以省略字符串属性的引号，如下所示：

```js
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

但是，如果你的对象包含任何非字符串属性，JavaScript 也会将它们自动转换为字符串。

# --instructions--

请创建一个名为 `myDog` 的对象，它应包含这些属性：`"name"`、`"legs"`、`"tails"`、`"friends"`。

请确保 `"name"` 属性值是字符串、`"legs"` 和 `"tails"` 属性值是数字、`"friends"` 属性值是数组。只要满足这些条件，你可以随意设定这些属性值。

# --hints--

`myDog` 应包含 `name` 属性，且属性值是一个字符串。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` 应包含 `legs` 属性，且属性值是一个数字。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` 应包含 `tails` 属性，且属性值是一个数字。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` 应包含 `friends` 属性，且属性值是一个数组。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` 应只包含给定的属性。

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
var myDog = {
// Only change code below this line


// Only change code above this line
};
```

# --solutions--

```js
var myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
