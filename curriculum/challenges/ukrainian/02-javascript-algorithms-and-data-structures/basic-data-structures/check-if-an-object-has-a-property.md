---
id: 587d7b7d367417b2b2512b1c
title: Перевірте, чи має об'єкт властивість
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

Тепер ми можемо додавати, змінювати та видаляти ключі з об'єктів. А якщо ми просто хочемо знати, чи об'єкт має конкретну властивість? JavaScript надає нам два різних способи це зробити. Один використовує метод `hasOwnProperty()` а інший використовує ключове слово `in`. Якщо у нас є об'єкт `users` з властивістю `Alan`, ми можемо перевірити її наявність одним із таких способів:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

Обидва вони повернуть `true`.

# --instructions--

Завершіть написання функції таким чином, щоб вона повертала `true`, якщо переданий їй об'єкт містить всі чотири імені: `Alan`, `Jeff`, `Sarah` та `Ryan`, а в іншому випадку щоб повертала `false`.

# --hints--

До об'єкту `users` не можна звертатися безпосередньо

```js 

assert(code.match(/users/gm).length <= 2)

```

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

Функція `isEveryoneHere` повинна повертати `true` якщо `Alan`, `Jeff`, `Sarah`, та `Ryan` це властивості переданого їй об'єкту.

```js
assert(isEveryoneHere(users) === true);
```

Функція `isEveryoneHere` повинна повернути `false` якщо `Alan` не є властивістю переданого їй об'єкту.

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

Функція `isEveryoneHere` повинна повернути`false` якщо `Jeff` не є властивістю переданого їй об'єкту.

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

Функція `isEveryoneHere` повинна повернути `false` якщо `Sarah` не є властивістю переданого їй об'єкту.

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

Функція `isEveryoneHere` повинна повернути `false` якщо `Ryan` не є властивістю переданого їй об'єкту.

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
