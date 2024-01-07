---
id: a6e40f1041b06c996f7b2406
title: من يجد شيئا يحتفظ به Finders Keepers
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

أنشئ وظيفة تبحث في القائمة `arr` وترجع العنصر الأول فيها الذي يجتاز 'اختبار الحقيقة'. وهذا يعني أنه نظراً لعنصر `x`، يتم اجتياز 'اختبار الحقيقة' إذا كان `func(x)` صحيحا `true`. إذا لم ينجح أي عنصر في الاختبار، انتج `undefined`.

# --hints--

يجب إن `findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` ينتج `8`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

يجب إن `findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` ينتج `undefined`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

# --seed--

## --seed-contents--

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

# --solutions--

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
