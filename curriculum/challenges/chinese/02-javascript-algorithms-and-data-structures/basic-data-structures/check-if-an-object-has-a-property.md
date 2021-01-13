---
id: 587d7b7d367417b2b2512b1c
title: 检查对象是否具有某个属性
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

我们已经学习了如果添加、修改和移除对象中的属性。但如果我们想知道一个对象中是否包含某个属性呢？JavaScript 为我们提供了两种不同的方式来实现这个功能：一个是通过 `hasOwnProperty()` 方法，另一个是使用 `in` 关键字。假如我们有一个 `users` 对象，为检查它是否含有 `Alan` 属性，可以这样写：

```js
users.hasOwnProperty('Alan');
'Alan' in users;
// 都返回 true
```

# --instructions--

我们已经定义了一个包含若干用户信息的 `users` 对象和一个 `isEveryoneHere` 函数，该函数接收 `users` 对象作为参数。请完成该函数使其在 `users` 对象中同时包含 `Alan`、`Jeff`、`Sarah`、`Ryan` 四个属性时才返回 `true`，否则返回 `false`。

# --hints--

`users` 对象应该只包含 `Alan`、`Jeff`、`Sarah`、`Ryan` 4 个属性。

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

`isEveryoneHere` 函数在 `users` 对象包含 `Alan`、`Jeff`、`Sarah`、`Ryan` 4 个属性时应返回 `true`。

```js
assert(isEveryoneHere(users) === true);
```

`isEveryoneHere` 函数在 `users` 对象不包含 `Alan`、`Jeff`、`Sarah`、`Ryan` 4 个属性时应返回 `false`。

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

如果 `users` 对象中不包含属性 `Jeff`，则函数 `isEveryoneHere` 应返回 `false`。

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

如果 `users` 对象中不包含属性 `Sarah`，则函数 `isEveryoneHere` 应返回 `false`。

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

如果 `users` 对象中不包含属性 `Ryan`，则函数 `isEveryoneHere` 应返回 `false`。

```js
assert(
  (function () {
    delete users.Ryan;
    return isEveryoneHere(users);
  })() === false
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(isEveryoneHere(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(i => obj.hasOwnProperty(i));
}

console.log(isEveryoneHere(users));
```
