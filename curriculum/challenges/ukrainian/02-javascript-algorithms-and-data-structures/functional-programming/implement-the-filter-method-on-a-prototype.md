---
id: 587d7b8f367417b2b2512b64
title: Реалізація методу фільтра для прототипу
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

Ви можете багато дізнатись про метод `filter`, якщо ви реалізуєте вашу власну версію. Рекомендується використовувати код циклу `for` або `Array.prototype.forEach()`.

# --instructions--

Напишіть ваш власний `Array.prototype.myFilter()`, який буде поводити себе точно так як `Array.prototype.filter()`. Не варто використовувати вбудований метод `filter`. Приклад `Array` може бути доступним за допомогою методу `myFilter` з використанням `this`.

# --hints--

`new_s` повинне дорівнювати `[23, 65, 5]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

Не використовуйте метод `filter` для вашого коду.

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```
