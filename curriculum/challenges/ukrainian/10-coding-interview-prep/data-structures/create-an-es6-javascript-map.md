---
id: 587d825b367417b2b2512c8d
title: Створення ES6 JavaScript Map
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

У новій версії JavaScript вбудований об'єкт Map, який передбачає наявність усіх тих функцій, які до цього ми мали писати самостійно. Незважаючи на те, що обʼєкт Map схожий на звичайні обʼєкти JavaScript, у ньому вбудований корисний функціонал, який відсутній у звичайних. Наприклад, ES6 Map відстежує порядок вставки елементів, які додаються до нього. Here is a more complete overview of its methods:

- `.has(key)` returns true or false based on the presence of a key
- `.get(key)` returns the value associated with a key
- `.set(key, value)` sets a new key, value pair
- `.delete(key)` removes a key, value pair
- `.clear()` removes all key, value pairs
- `.entries()` returns an array of all the keys in insertion order
- `.values()` returns an array of all the values in insertion order

# --instructions--

Визначте об’єкт JavaScript Map та призначте йому змінну під назвою myMap. Додайте до нього пару ключ-значення `freeCodeCamp`, `Awesome!`.

# --hints--

The `myMap` object should exist.

```js
assert(typeof myMap === 'object');
```

`myMap` should contain the key value pair `freeCodeCamp`, `Awesome!`.

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
