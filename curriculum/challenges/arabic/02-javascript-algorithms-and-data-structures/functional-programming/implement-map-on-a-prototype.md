---
id: 587d7b8f367417b2b2512b62
title: تنفيذ طريقة map في Prototype
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

كما رأيتم من تطبيق `Array.prototype.map()`، أو `map()` من قبل، فطريقة `map` تنتج قائمة (array) من نفس طول القائمة (array) التي تم تفعيل الطريقة (method) عليها. وهي إلى ذلك لا تغير القائمة (array) الأصلية، مادام أن وظيفتها لإعادة التفعيل (callback function) لا تفعل ذلك.

بمعنى آخر، `map` هي وظيفة خالصة (pure function)، ومخرجها يعتمد فقط على مدخلاتها. إضافةً إلى ذلك، فإنها تأخذ وظيفة أخرى كمعطى (argument) لها.

قد تتعلم الكثير عن طريقة `map` إذا مارست نسختك منها. من المستحسن أن تستخدم حلقات `for` التكرارية أو `Array.prototype.forEach()`.

# --instructions--

اكتب `Array.prototype.myMap()` الخاص بك، الذي يجب أن يقلد مثل `Array.prototype.map()`. يجب ألا تستخدم طريقة `map` مبنية داخلياً (built-in method). يمكن الوصول إلى مثيل (instance) `Array` في طريقة `myMap` باستخدام `this`.

# --hints--

يجب أن يساوي `[23, 65, 98, 5, 13].myMap(item => item * 2)` قيمة `[46, 130, 196, 10, 26]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

يجب أن ينتج `["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())` قائمة `["NAOMI", "QUINCY", "CAMPERBOT"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

يجب أن ينتج `[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])` قائمة `[1, 2, 5, 2, 1]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

يجب ألا يستخدم كودك الطريقة (method) المسمى `map`.

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
