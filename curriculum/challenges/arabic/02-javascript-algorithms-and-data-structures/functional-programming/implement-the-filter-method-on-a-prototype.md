---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

قد تتعلم الكثير عن دالة `filter` إذا قمت بتنفيذ الإصدار الخاص بك منها. من المستحسن أن تستخدم حلقات `for` التكرارية أو `Array.prototype.forEach()`.

# --instructions--

اكتب `Array.prototype.myFilter()`الخاص بك، والذي يجب أن يتصرف مثل `Array.prototype.filter()`. يجب ألا تستخدم دالة `filter` المدمجة. يمكن الوصول إلى مثيل (instance) `Array` في دالة `myFilter` باستخدام `this`.

# --hints--

يجب أن يساوي `[23, 65, 98, 5, 13].myFilter(item => item % 2)` قيمة `[23, 65, 5, 13]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item % 2;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

يجب أن ينتج `["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")` قائمة `["naomi"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element === "naomi";
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

يجب أن ينتج `[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)` قائمة `[1, 2, 5]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array.indexOf(element) === index;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

يجب ألا يستخدم كودك الطريقة (method) المسمى `filter`.

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
