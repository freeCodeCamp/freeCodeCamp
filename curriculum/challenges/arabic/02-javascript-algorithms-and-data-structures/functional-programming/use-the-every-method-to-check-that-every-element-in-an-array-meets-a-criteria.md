---
id: 587d7dab367417b2b2512b6e
title: استخدم every Method للتحقق من أن كل عنصر في array يستوفي معايير
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

دالة `every` تعمل مع الـ arrays للتحقق مما إذا كان كل *every* عنصر يجتاز اختبار معين. إنها ترجع قيمة `true` إذا كانت جميع القيم تفي بالمعايير، `false` إن لم تكن كذلك.

على سبيل المثال، الكود التالي سيتحقق مما إذا كان كل عنصر في array الـ `numbers` أقل من 10:

```js
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

`every` ستعيد `false` هنا.

# --instructions--

استخدم دالة `every` داخل دالة `checkPositive` للتحقق مما إذا كان كل عنصر في `arr` موجبا. يجب أن يعيد الـ function قيمة Boolean.

# --hints--

يجب أن يستخدم الكود الخاص بك دالة `every`.

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` يجب أن ترجع `false`.

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` يجب أن يرجع `true`.

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` يجب أن يرجع `false`.

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
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
  return arr.every(num => num > 0);
}
```
