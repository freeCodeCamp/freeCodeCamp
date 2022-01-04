---
id: 587d7b8f367417b2b2512b62
title: Карта реалізації на прототипі
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

Як ви бачили з використання `Array.prototype.map()`, або просто `map()` раніше, метод `map` повертає масив тієї ж довжини, що і той, на який був викликаний. Він також не змінює оригінальний масив, поки його функція зворотного виклику не змінюється.

Іншими словами, `map` - це чиста функція, і її вихід залежить виключно від вхідних даних. Крім того, в якості аргумента використовується інша функція.

Ви можете багато дізнатись про метод `map`, якщо ви реалізуєте вашу власну версію. Рекомендується використовувати код циклу `for` або `Array.prototype.forEach()`.

# --instructions--

Напишіть ваш власний `Array.prototype.myMap()`, що повинен поводити себе точно так як `Array.prototype.map()`. Не варто використовувати вбудований метод `map`. Екземпляр `Array` може бути доступним за допомогою методу `myMap` з використанням `this`.

# --hints--

`new_s` повинне дорівнювати `[46, 130, 196, 10]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

Не використовуйте метод `map` у вашому коді.

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (const elem of this) {
    newArray.push(callback(elem));
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```
