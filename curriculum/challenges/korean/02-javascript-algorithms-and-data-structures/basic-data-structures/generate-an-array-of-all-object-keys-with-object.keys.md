---
id: 587d7b7d367417b2b2512b1e
title: Object.keys()를 사용하여 모든 객체 키의 배열 생성하기
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

또한 `Object.keys()` 메서드를 사용하여 객체에 저장된 모든 키를 포함하는 배열을 생성할 수 있습니다. 이 메서드는 객체를 인수로 사용하고 객체의 각 속성을 나타내는 문자열 배열을 반환합니다. 배열의 항목에는 특정한 순서가 없을 것입니다.

# --instructions--

`getArrayOfUsers` 함수를 인수로 받은 객체의 모든 속성을 포함하는 배열을 반환하도록 완성하세요.

# --hints--

`users` 객체에는 `Alan`, `Jeff`, `Sarah`, `Ryan` 키만 포함되어야 합니다.

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

`getArrayOfUsers` 함수는 `users` 객체의 모든 키를 포함하는 배열을 반환해야 합니다.

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
