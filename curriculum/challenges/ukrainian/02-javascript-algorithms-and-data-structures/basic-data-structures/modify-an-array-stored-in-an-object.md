---
id: 587d7b7d367417b2b2512b1f
title: Змінити масив, збережений в об'єкті
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

Тепер вам відомо про всі основні операції стосовно об'єктів JavaScript. Ви можете додавати, змінювати та видаляти пари ключів і значень, перевіряти, чи існують ключі, і ітерувати усі ключі в об'єкті. Продовжуючи вивчення JavaScript ви познайомитесь з ще більш універсальними програми об'єктів. Крім того, уроки про структури даних, що належать до розділу «Coding Interview Prep» навчальної програми, також містять інформацію про ES6 <dfn>Map</dfn> та <dfn>Set</dfn> об'єкти, які є схожими на звичайні об'єкти, але забезпечують певні додаткові функції. Тепер, коли ви з'ясували, що таке масиви та об'єкти, ви цілком готові до вирішення складніших проблем з допомогою JavaScript!

# --instructions--

Зверніть увагу на об’єкт, який подано в редакторі коду. Об'єкт `user` містить три ключі. Ключ `data` містить п'ять ключів, один з яких містить масив `friends`. З цього можна зрозуміти, наскільки гнучкими є об'єкти як структури даних. Ми почали писати функцію `addFriend`. Завершіть її для того, щоб вона прийняла об'єкт `user` і додала назву аргументу `friend` до масиву, збереженого в `user.data.friends` і повернула цей масив.

# --hints--

Об'єкт `user` повинен мати наступні ключі: `name`, `age` та `data`.

```js
assert('name' in user && 'age' in user && 'data' in user);
```

Функція `addFriend` повинна прийняти об’єкт `user` і рядок `friend` у ролі аргументів, а також додати ще один до масиву `friends` в об'єкті `user`.

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")` повинен повернути `["Sam", "Kira", "Tomo", "Pete"]`.

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```
