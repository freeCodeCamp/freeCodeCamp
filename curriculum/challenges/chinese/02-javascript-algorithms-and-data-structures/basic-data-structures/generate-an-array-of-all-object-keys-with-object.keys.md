---
id: 587d7b7d367417b2b2512b1e
title: 使用 Object.keys() 生成由对象的所有属性组成的数组
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

我们可以给 `Object.keys()` 方法传入一个对象作为参数，来生成包含对象所有键的数组。 这个方法将对象作为参数并返回代表对象中每个属性的字符串数组。 需要注意的是，数组中元素的顺序是不确定的。

# --instructions--

请完成 `getArrayOfUsers` 函数的实现，使其返回一个由输入对象中的所有属性所组成的数组。

# --hints--

`users` 对象应该只包含 `Alan`、`Jeff`、`Sarah`、`Ryan` 这 4 个属性。

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

`getArrayOfUsers` 函数应返回一个包含 `users` 对象中所有属性的数组。

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

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(getArrayOfUsers(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```
