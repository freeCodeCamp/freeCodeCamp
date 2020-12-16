---
id: 587d7b7d367417b2b2512b1e
title: 使用 Object.Keys() 生成对象所有键组成的数组
challengeType: 1
forumTopicId: 301160
---

# --description--

我们还可以输入一个对象作为参数来调用`Object.keys()`方法，使其生成一个包含对象中所有键的数组。这会返回一个由对象中所有键的名称（字符串）组成的数组。再次说明，这个数组中的项的顺序是不确定的。

# --instructions--

请你完成`getArrayOfUsers`函数，使其返回一个包含输入的对象的所有属性的数组。

# --hints--

`users`对象应该只包含`Alan`、`Jeff`、`Sarah`和`Ryan`这 4 个键

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

`getArrayOfUsers`函数应该返回一个包含`users`对象中所有键的数组

```js
assert(
  (function () {
    users.Sam = {};
    users.Lewis = {};
    let R = getArrayOfUsers(users);
    return (
      R.indexOf('Alan') !== -1 &&
      R.indexOf('Jeff') !== -1 &&
      R.indexOf('Sarah') !== -1 &&
      R.indexOf('Ryan') !== -1 &&
      R.indexOf('Sam') !== -1 &&
      R.indexOf('Lewis') !== -1
    );
  })() === true
);
```

# --solutions--

