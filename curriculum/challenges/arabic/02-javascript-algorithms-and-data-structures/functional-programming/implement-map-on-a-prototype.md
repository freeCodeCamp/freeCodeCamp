---
id: 587d7b8f367417b2b2512b62
title: تنفيذ دالة map على Prototype
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

كما رأيتم من تطبيق `Array.prototype.map()`، أو `map()` من قبل، فدالة `map` ترجع array من نفس طول الـ array التي استُدعت الدالة عليها. كما أنها لا تغير الـ array الأصلية، طالما أن دالة الـ callback الخاصة بها لا تفعل ذلك.

بمعنى آخر، `map` هي دالة خالصة (pure function)، ومخرجها يعتمد فقط على مدخلاتها. وعلاوة على ذلك، فإنها تأخذ دالة أخرى كوسيطه (argument) لها.

قد تتعلم الكثير عن دالة `map` إذا قمت بتنفيذ الإصدار الخاص بك منها. من المستحسن أن تستخدم حلقات `for` التكرارية أو `Array.prototype.forEach()`.

# --instructions--

اكتب `Array.prototype.myMap()` الخاص بك، والذي يجب أن يتصرف مثل `Array.prototype.map()`. يجب ألا تستخدم دالة `map` المدمجة. يمكن الوصول إلى مثيل (instance) `Array` في دالة `myMap` باستخدام `this`.

# --hints--

`new_s` يجب أن يساوي `[46, 130, 196, 10]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

يجب ألا يستخدم الكود الخاص بك دالة `map`.

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
