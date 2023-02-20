---
id: 587d7b8f367417b2b2512b62
title: Імплементація map на прототипі
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

Як ви бачили з використання `Array.prototype.map()`, або просто `map()`, метод `map` повертає масив тієї ж довжини, що і той, на якому був викликаний. Він також не змінює вихідний масив, оскільки функція зворотного виклику цього не робить.

Іншими словами, `map` – це чиста функція, де вихідні дані залежать від вхідних. Крім того, вона приймає іншу функцію як аргумент.

Ви можете багато дізнатись про метод `map`, якщо реалізуєте власну версію. Рекомендовано використовувати цикл `for` або `Array.prototype.forEach()`.

# --instructions--

Напишіть свій `Array.prototype.myMap()`, який поводиться як `Array.prototype.map()`. Ви не повинні використовувати вбудований метод `map`. Доступ до екземпляра `Array` можна отримати у методі `myMap` за допомогою `this`.

# --hints--

`[23, 65, 98, 5, 13].myMap(item => item * 2)` має дорівнювати `[46, 130, 196, 10, 26]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())` має повертати `["NAOMI", "QUINCY", "CAMPERBOT"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])` має повертати `[1, 2, 5, 2, 1]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

Ваш код не повинен використовувати метод `map`.

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
