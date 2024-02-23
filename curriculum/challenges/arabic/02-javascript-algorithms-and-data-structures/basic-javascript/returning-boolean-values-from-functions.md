---
id: 5679ceb97cbaa8c51670a16b
title: إنتاج القيم المنطقية من الوظائف
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
dashedName: returning-boolean-values-from-functions
---

# --description--

قد تتذكر من <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank" rel="noopener noreferrer nofollow">المقارنة باستخدام مشغِّل المساواة (==)</a> أن جميع مشغلي المقارنات ينتجون قيمة منطقية (boolean) سواء `true` أو `false`.

في بعض الأحيان يستخدم الناس `if/else` لإجراء المقارنة، مثلا:

```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

لكن هناك طريقة أفضل لفعل ذلك. نظرًا لأن `===` يرجع `true` أو `false`، يمكنك إعادة نتيجة المقارنة:

```js
function isEqual(a, b) {
  return a === b;
}
```

# --instructions--

أصلح الوظيفة `isLess` لإزالة تعبيرات `if/else`.

# --hints--

يجب أن ينتج `isLess(10, 15)` حالة `true`

```js
assert(isLess(10, 15) === true);
```

يجب أن ينتج `isLess(15, 10)` حالة `false`

```js
assert(isLess(15, 10) === false);
```

يجب ألا تستخدم أي عبارات `if` أو `else`

```js
assert(!/if|else/g.test(code));
```

# --seed--

## --seed-contents--

```js
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
```

# --solutions--

```js
function isLess(a, b) {
  return a < b;
}
```
