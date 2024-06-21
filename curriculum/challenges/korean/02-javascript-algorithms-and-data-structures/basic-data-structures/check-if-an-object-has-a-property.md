---
id: 587d7b7d367417b2b2512b1c
title: 객체에 속성이 있는지 확인하기
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

이제 객체에 키를 추가하고 수정하고 제거할 수 있습니다. 그러나 객체가 특정 속성을 가지고 있는지 알고 싶은 경우에는 어떻게 할까요? 이를 위해서 자바스크립트는 두 가지 다른 방법을 제공합니다. 하나는 `hasOwnProperty()` 메서드를 사용하고 다른 하나는 `in` 키워드를 사용합니다. `Alan`이라는 속성을 가진 `users` 객체가 있다면 다음 두 가지 방법 중 하나로 그 존재 여부를 확인할 수 있습니다.

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

두 방법 모두 `true`를 반환합니다.

# --instructions--

함수를 완성하여 전달된 객체에 모든 이름 `Alan`, `Jeff`, `Sarah`, `Ryan`이 모두 포함되어 있는 경우 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

# --hints--

`users` 객체에는 직접 액세스하지 않아야 합니다.

```js 

assert(__helpers.removeJSComments(code).match(/users/gm).length <= 2)

```

`users` 객체는 오직 키 `Alan`, `Jeff`, `Sarah`, `Ryan`만을 포함해야 합니다.

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

함수 `isEveryoneHere`는 전달된 객체에 `Alan`, `Jeff`, `Sarah`, `Ryan`이라는 속성이 있는 경우 `true`를 반환해야 합니다.

```js
assert(isEveryoneHere(users) === true);
```

함수 `isEveryoneHere`는 전달된 객체에 `Alan`이 속성으로 없는 경우 `false`를 반환해야 합니다.

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

함수 `isEveryoneHere`는 전달된 객체에 `Jeff`가 속성으로 없는 경우 `false`를 반환해야 합니다.

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

함수 `isEveryoneHere`는 전달된 객체에 `Sarah`가 속성으로 없는 경우 `false`를 반환해야 합니다.

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

함수 `isEveryoneHere`는 전달된 객체에 `Ryan`이 속성으로 없는 경우 `false`를 반환해야 합니다.

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

function isEveryoneHere(userObj) {
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

function isEveryoneHere(userObj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(user => userObj.hasOwnProperty(user));
}

console.log(isEveryoneHere(users));
```
