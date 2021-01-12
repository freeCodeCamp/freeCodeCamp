---
id: 56bbb991ad1ed5201cd392d0
title: 新建 JavaScript 对象
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

你之前可能听说过对象`object`。

对象和数组很相似，数组是通过索引来访问和修改数据，而对象是通过属性来访问和修改数据。

对象适合用来存储结构化数据，就和真实世界的对象一模一样，比如一只猫。

这是一个对象的示例：

```js
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

在这个示例中所有的属性以字符串的形式储存，例如，`"name"`、`"legs"`和`"tails"`。但是，你也可以使用数字作为属性，你甚至可以省略字符串属性的引号，如下所示：

```js
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

但是，如果你的对象具有任何非字符串属性，JavaScript 将自动将它们转换为字符串类型。

# --instructions--

创建一个叫做`myDog`的对象，它里面有这些属性：`"name"`、`"legs"`、`"tails"`、`"friends"`。

你可以设置对象属性为任何值，只需要确保`"name"`是字符串，`"legs"`和`"tails"`是数字，`"friends"`是数组。

# --hints--

`myDog`应该包含`name`属性，并且是一个字符串`string`。

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

`myDog`应该包含`legs`属性，并且是一个数字`number`。

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

`myDog`应该包含`tails`属性，并且是一个数字`number`。

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

`myDog`应该包含`friends`属性，并且是一个数组`array`。

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

`myDog`应该只包含给出的属性。

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
