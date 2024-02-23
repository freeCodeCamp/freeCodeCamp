---
id: 587d7dab367417b2b2512b6f
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

دالة `some` تعمل مع الـ arrays للتحقق مما إذا كان *اي* عنصر يجتاز اختبار معين. إنها ترجع قيمة منطقية - `true` إذا كان أي من القيم تستوفي المعايير، `false` إن لم تستوف.

على سبيل المثال، الكود التالي سيتحقق مما إذا كان اي عنصر في array الـ `numbers` أقل من 10:

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

دالة `some`، ستعيد `true`.

# --instructions--

استخدم طريقة (method) مسمى `some` داخل وظيفة (fucntion) مسمى `checkPositive` للتحقق مما إذا كان أي عنصر في `arr` موجبا. يجب أن يرجع الوظيفة (function) قيمة منطقية (Boolean).

# --hints--

يجب أن يستخدم الكود الخاص بك دالة `some`.

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` يجب أن يرجع `true`.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` يجب أن يرجع `true`.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` يجب أن يرجع `false`.

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```
