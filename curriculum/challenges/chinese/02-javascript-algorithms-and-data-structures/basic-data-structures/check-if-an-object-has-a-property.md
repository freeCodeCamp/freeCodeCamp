---
id: 587d7b7d367417b2b2512b1c
title: 检查对象是否具有某个属性
challengeType: 1
forumTopicId: 301155
---

# --description--

现在我们可以新增、修改和移除对象中的属性。但如果我们想知道一个对象中是否含有某个属性呢？JavaScript 为我们提供了两种不同的方式来实现这个功能，一个是`hasOwnProperty()`方法，另一个是`in`关键字。如果我们有一个`users`对象，它有一个`Alan`属性，我们可以用以下两种方式之一来检查该属性在对象中是否存在：

```js
users.hasOwnProperty('Alan');
'Alan' in users;
// 都返回 true
```

# --instructions--

我们已经创建了一个含有一些用户的`users`对象和一个`isEveryoneHere`函数，该函数接受`users`对象作为参数。请完成该函数使其在`users`对象中包含以下 4 个键`Alan`、`Jeff`、`Sarah`和`Ryan`时才返回`true`，否则返回`false`。

# --hints--

`users`对象应该只含有`Alan`、`Jeff`、`Sarah`和`Ryan`4 个键。

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

`isEveryoneHere`函数在`users`对象包含`Alan`、`Jeff`、`Sarah`和`Ryan`4 个键时应该返回`true`。

```js
assert(isEveryoneHere(users) === true);
```

`isEveryoneHere`函数在`users`对象不包含`Alan`、`Jeff`、`Sarah`或`Ryan`4 个键时应该返回`false`。

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

如果 `Jeff` 不是 `users` 对象的属性，函数 `isEveryoneHere` 应该返回  `false`。

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

如果 `Sarah` 不是 `users` 对象的属性，函数 `isEveryoneHere` 应该返回  `false`。

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

如果 `Ryan` 不是 `users` 对象的属性，函数 `isEveryoneHere` 应该返回  `false`。

```js
assert(
  (function () {
    delete users.Ryan;
    return isEveryoneHere(users);
  })() === false
);
```

# --solutions--

