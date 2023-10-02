---
id: 587d7b8f367417b2b2512b64
title: Імплементація методу filter на прототипі
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

Ви можете багато дізнатись про метод `filter`, якщо реалізуєте власну версію. Рекомендовано використовувати цикл `for` або `Array.prototype.forEach()`.

# --instructions--

Напишіть свій `Array.prototype.myFilter()`, який поводиться як `Array.prototype.filter()`. Ви не повинні використовувати вбудований метод `filter`. Доступ до екземпляра `Array` можна отримати у методі `myFilter` за допомогою `this`.

# --hints--

`[23, 65, 98, 5, 13].myFilter(item => item % 2)` має дорівнювати `[23, 65, 5, 13]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item % 2;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")` має повертати `["naomi"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element === "naomi";
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)` має повертати `[1, 2, 5]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array.indexOf(element) === index;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

Ваш код не повинен використовувати метод `filter`.

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const odd_s = s.myFilter(item => item % 2 === 1);
```
