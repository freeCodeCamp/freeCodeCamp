---
id: 587d7b7d367417b2b2512b1e
title: Створення масиву всіх ключів об’єкта за допомогою Object.keys()
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

Ми також можемо створити масив, який містить всі ключі, що зберігаються в об’єкті за допомогою методу `Object.keys()`. Цей метод приймає об’єкт як аргумент та повертає масив рядків, що представляють кожну властивість об’єкта. Знову ж таки, не буде певного порядку записів в масиві.

# --instructions--

Завершіть написання функції `getArrayOfUsers`, щоб вона повертала масив, що містить всі властивості об'єкта, який він отримує в якості аргументу.

# --hints--

Об'єкт `users` повинен містити тільки ключі `Alan`, `Jeff`, `Sarah`, та `Ryan`

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

Функція `getArrayOfUsers` повинна повернути масив, який містить усі ключі в об’єкті `users`

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
