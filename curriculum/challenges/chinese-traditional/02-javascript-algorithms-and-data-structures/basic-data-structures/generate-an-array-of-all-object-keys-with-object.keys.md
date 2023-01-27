---
id: 587d7b7d367417b2b2512b1e
title: 使用 Object.keys() 生成由對象的所有屬性組成的數組
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

我們可以給 `Object.keys()` 方法傳入一個對象作爲參數，來生成包含對象所有鍵的數組。 這個方法將對象作爲參數並返回代表對象中每個屬性的字符串數組。 需要注意的是，數組中元素的順序是不確定的。

# --instructions--

請完成 `getArrayOfUsers` 函數的實現，使其返回一個由輸入對象中的所有屬性所組成的數組。

# --hints--

`users` 對象應該只包含 `Alan`、`Jeff`、`Sarah`、`Ryan` 這 4 個屬性。

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

`getArrayOfUsers` 函數應返回一個包含 `users` 對象中所有屬性的數組。

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
