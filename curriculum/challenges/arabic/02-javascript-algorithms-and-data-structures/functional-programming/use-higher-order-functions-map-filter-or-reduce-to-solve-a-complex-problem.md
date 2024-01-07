---
id: 587d7b88367417b2b2512b45
title: 'استخدام وظائف (Functions) عالية التجريد (Higher-Order) مثل map, أو filter, أو reduce لحل مشكلة معقدة'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

الآن بعد أن تدربت على بعض التحديات باستخدام وظائف (functions) عالية التجريد (higher-order) مثل `map()`, و `filter()`, و `reduce()`، يمكنك الآن تطبيقها لحل تحدي أكثر تعقيدا.

# --instructions--

أكمل الكود لوظيفة `squareList` باستخدام أي مزيج من `map()`, و `filter()`, و `reduce()`. يجب أن تنتج الوظيفة (function) قائمة (array) جديدة تحتوي على تربيع *فقط* الأعداد الصحيحة الموجبة (الأرقام العشرية ليست عدد صحيح) عندما تمرر إليها قائمة (array) من الأرقام الحقيقية. مثال لـ array من الأعداد الحقيقية (real numbers) هو `[-3, 4.8, 5, 3, -3.2]`.

**ملاحظة:** يجب ألا تستخدم وظيفتك أي نوع من حلَقات (loops) مثل `for`, أو `while`, أو `forEach()`.

# --hints--

`squareList` يجب أن يكون `function`.

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

`for` و `while` و `forEach` يجب عدم استخدامها.

```js
assert(!code.match(/for|while|forEach/g));
```

`map` او `filter` او `reduce` ينبغي استخدامها.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

يجب أن تنتج وظيفتك `array`.

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` يجب أن ترجع `[16, 1764, 36]`.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` يجب أن ترجع `[9, 100, 49]`.

```js
assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [
  9,
  100,
  49
]);
```

# --seed--

## --seed-contents--

```js
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

# --solutions--

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```
