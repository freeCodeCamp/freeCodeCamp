---
id: 587d7b7d367417b2b2512b1c
title: 檢查對象是否具有某個屬性
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

我們已經學習瞭如何添加、修改和移除對象中的屬性。 但如果我們想知道一個對象中是否包含某個屬性呢？ JavaScript 爲我們提供了兩種不同的方式來實現這個功能： 一個是通過 `hasOwnProperty()` 方法，另一個是使用 `in` 關鍵字。 假如我們有一個 `users` 對象，爲檢查它是否含有 `Alan` 屬性，可以這樣寫：

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

這兩者結果都應該爲 `true`。

# --instructions--

我們已經定義了一個包含若干用戶信息的 `users` 對象和一個 `isEveryoneHere` 函數，該函數接收 `users` 對象作爲參數。 請完成該函數使其在 `users` 對象中同時包含 `Alan`、`Jeff`、`Sarah`、`Ryan` 四個屬性時才返回 `true`，否則返回 `false`。

# --hints--

`users` 對象應該只包含 `Alan`、`Jeff`、`Sarah`、`Ryan` 4 個屬性。

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

`isEveryoneHere` 函數在 `users` 對象包含 `Alan`、`Jeff`、`Sarah`、`Ryan` 4 個屬性時應返回 `true`。

```js
assert(isEveryoneHere(users) === true);
```

`isEveryoneHere` 函數在 `users` 對象不包含 `Alan` 時應返回 `false`。

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

`isEveryoneHere` 函數在 `users` 對象不包含 `Jeff` 時應返回 `false`。

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

`isEveryoneHere` 函數在 `users` 對象不包含 `Sarah` 時應返回 `false`。

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

`isEveryoneHere` 函數在 `users` 對象不包含 `Ryan` 時應返回 `false`。

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
