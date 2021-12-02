---
id: 56bbb991ad1ed5201cd392d0
title: 创建 JavaScript 对象
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

你之前可能听过 `object` 这个词。

对象和 `arrays` 类似，区别在于数组使用索引来访问和修改数据，而对象中的数据是通过 `properties` 访问的。

对象非常适合用来存储结构化数据，可以表示真实世界中的物体，比如一只猫。

这里是一个猫对象的样本：

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

在此示例中，所有属性都存储为字符串，例如 `name`、`legs` 和 `tails`。 然而，你也可以使用数字作为属性。 你甚至可以省略单字字符串属性中的引号，如下所示：

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

然而，如果你的对象有非字符串属性的话，JavaScript 会自动将它们转为字符串。

# --instructions--

确保对象表示一只名为 `myDog` 的狗，包含属性 `name`（字符串）、`legs`、`tails` 和 `friends`。

你可以随意设置这些对象的属性值，只要 `name` 是字符串，`legs` 和 `tails` 是数字，`friends` 是数组即可。

# --hints--

`myDog` 应该包含 `name` 属性，并且它应该是一个 `string`。

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

`myDog`应该包含 `legs` 属性，并且它应该是一个 `number`。

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

`myDog` 应该包含 `tails` 属性，并且它应该是一个 `number`。

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

`myDog` 应该包含 `friends` 属性，并且它应该是一个 `array`。

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

`myDog` 只应该包含所有给定的属性。

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
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
```

# --solutions--

```js
const myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
