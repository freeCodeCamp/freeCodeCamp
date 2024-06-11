---
id: 587d825b367417b2b2512c8d
title: Створіть об’єкт map в JavaScript ES6
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

У новій версії JavaScript вбудовано об’єкт Map, який передбачає всі ті функції, які до цього моменту ми писали самостійно. Попри те, що об’єкт Map схожий на звичайні об’єкти JavaScript, у ньому вбудований корисний функціонал, який відсутній у звичайних. Наприклад, Map в ES6 відстежує порядок вставки елементів, які додаються до нього. Ось детальніший огляд його методів:

- `.has(key)` повертає true або false залежно від наявності ключа
- `.get(key)` повертає значення, пов’язане з ключем
- `.set(key, value)` встановлює нову пару ключ-значення
- `.delete(key)` видаляє пару ключ-значення
- `.clear()` видаляє всі пари ключ-значення
- `.entries()` повертає масив усіх ключів в порядку вставки
- `.values()` повертає масив усіх значень в порядку вставки

# --instructions--

Визначте об’єкт JavaScript Map та призначте до нього змінну під назвою myMap. Додайте до нього пару ключ-значення `freeCodeCamp`, `Awesome!`.

# --hints--

Має існувати об’єкт `myMap`.

```js
assert(typeof myMap === 'object');
```

`myMap` має містити пару ключ-значення `freeCodeCamp`, `Awesome!`.

```js
assert(myMap.get('freeCodeCamp') === 'Awesome!');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const myMap = new Map();

myMap.set("freeCodeCamp", "Awesome!");
```
