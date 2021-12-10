---
id: a10d2431ad0c6a099a4b8b52
title: Перевірка значень властивостей об'єкта
challengeType: 5
forumTopicId: 16011
dashedName: everything-be-true
---

# --description--

Перевірити, чи предикат (другий аргумент) є правильним (<dfn>truthy</dfn>) в усіх елементах збору (перший аргумент).

Іншими словами, вам дано набір масивів об'єктів. Предикат `pre` буде властивістю об'єкта і вам потрібно повернути `true`, якщо його значення `truthy`. В іншому випадку, повернути `false`.

В JavaScript, значення `truthy` - це значення, що перекладаються `true` при оцінці в булевому контексті.

Пам'ятайте, ви можете отримати доступ до властивостей об'єкта, використовуючи точкові позначення або `[]`.

# --hints--

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` повинен повертатися як `true`.

```js
assert.strictEqual(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  ),
  true
);
```

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` повинен повертатися як `false`.

```js
assert.strictEqual(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  ),
  false
);
```

`truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")` повинен повертатися як `false`.

```js
assert.strictEqual(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male', age: 2 },
      { user: 'Dipsy', sex: 'male', age: 0 },
      { user: 'Laa-Laa', sex: 'female', age: 5 },
      { user: 'Po', sex: 'female', age: 4 }
    ],
    'age'
  ),
  false
);
```

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")` повинен повертатися як `false`.

```js
assert.strictEqual(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true },
      { name: 'FastForward', onBoat: null }
    ],
    'onBoat'
  ),
  false
);
```

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")` повинен повертатися як `true`.

```js
assert.strictEqual(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true, alias: 'Repete' },
      { name: 'FastForward', onBoat: true }
    ],
    'onBoat'
  ),
  true
);
```

`truthCheck([{"single": "yes"}], "single")` повинен повертатися як `true`.

```js
assert.strictEqual(truthCheck([{ single: 'yes' }], 'single'), true);
```

`truthCheck([{"single": ""}, {"single": "double"}], "single")` повинен повертатися як `false`.

```js
assert.strictEqual(
  truthCheck([{ single: '' }, { single: 'double' }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": undefined}], "single")` повинен повертатися як `false`.

```js
assert.strictEqual(
  truthCheck([{ single: 'double' }, { single: undefined }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": NaN}], "single")` повинен повертатися як `false`.

```js
assert.strictEqual(
  truthCheck([{ single: 'double' }, { single: NaN }], 'single'),
  false
);
```

# --seed--

## --seed-contents--

```js
function truthCheck(collection, pre) {
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

# --solutions--

```js
function truthCheck(collection, pre) {
  return collection.every(function(e) { return e[pre]; });
}
```
