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

`[23, 65, 98, 5, 13].myMap(item => item * 2)` should equal `[46, 130, 196, 10, 26]`.

```js
const _test_s = [46, 130, 196, 10, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())` should return `["NAOMI", "QUINCY", "CAMPERBOT"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[i + 1] || array[0])` should return `[1, 2, 5, 2, 1]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

Your code should not use the `map` method.

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const doubled_s = s.myMap(item => item * 2);
```
