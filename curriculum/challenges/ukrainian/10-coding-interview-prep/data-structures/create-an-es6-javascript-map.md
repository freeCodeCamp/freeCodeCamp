---
id: 587d825b367417b2b2512c8d
title: Створення ES6 JavaScript Map
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

У новій версії JavaScript вбудований об'єкт Map, який передбачає наявність усіх тих функцій, які до цього ми мали писати самостійно. Незважаючи на те, що обʼєкт Map схожий на звичайні обʼєкти JavaScript, у ньому вбудований корисний функціонал, який відсутній у звичайних. Наприклад, ES6 Map відстежує порядок вставки елементів, які додаються до нього. Серед його методів є такі: метод `.has(key)` повертає true або false з огляду на наявність ключа; метод `.get(key)` повертає значення, повʼязане з ключем; метод `.set(key, value)` задає нову пару ключ-значення; метод `.delete(key)` видаляє пару ключ-значення; метод `.clear()` видаляє всі пари ключів-значень; метод `.entries()` повертає весь масив ключів у порядку їх вставки; метод `.values()` повертає весь масив значень у порядку їх вставки

# --instructions--

Визначте об’єкт JavaScript Map та призначте йому змінну під назвою myMap. Додайте до нього пару ключ-значення `freeCodeCamp`, `Awesome!`.

# --hints--

Повинен існувати об'єкт myMap.

```js
assert(typeof myMap === 'object');
```

myMap повинен містити пару ключ-значення `freeCodeCamp`, `Awesome!`.

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
