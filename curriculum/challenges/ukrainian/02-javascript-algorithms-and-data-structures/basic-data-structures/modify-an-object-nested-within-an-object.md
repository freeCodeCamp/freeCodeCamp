---
id: 587d7b7c367417b2b2512b19
title: Змінити об'єкт, вкладений в інший об'єкт
challengeType: 1
forumTopicId: 301164
dashedName: modify-an-object-nested-within-an-object
---

# --description--

Тепер давайте розглянемо дещо складніший об'єкт. Властивості об'єкта можуть бути вкладені на довільну глибину, а їхні значення можуть бути будь-яким видом даних, що підтримується JavaScript, включно з масивами й навіть іншими об'єктами. Зверніть увагу:

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

`nestedObject` має три властивості: `id` (значення — це число), `date` (значення — це рядок), а `data` (значення — це об'єкт з його вкладеною структурою). Хоча структури можуть швидко ускладнюватися, все одно можна використовувати ті самі позначення, щоб отримати доступ до необхідної інформації. Щоб закріпити значення `10` до властивості `busy`, вкладеної в об'єкт `onlineStatus`, використовується точкова нотація, щоб посилатись на властивість:

```js
nestedObject.data.onlineStatus.busy = 10;
```

# --instructions--

Тут ми окреслили об'єкт `userActivity`, який включає в себе інший вкладений об'єкт. Встановіть значення ключа `online` до `45`.

# --hints--

`userActivity` повинен мати такі властивості: `id`,`date` і`data`.

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

`userActivity` має мати `data` ключ, встановлений в об'єкті з `totalUsers` і `online` ключами.

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

Властивість `online`, вкладена в `data` ключі `userActivity` повинен бути встановлений до `45`

```js
assert(userActivity.data.online === 45);
```

Властивість `online` повинна бути встановлена за допомогою точкової нотації або квадратних дужок.

```js
assert.strictEqual(code.search(/online: 45/), -1);
```

# --seed--

## --seed-contents--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);
```

# --solutions--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```
