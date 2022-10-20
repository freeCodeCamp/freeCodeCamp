---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

طريقة `sort` تقوم بتصنيف عناصر array وفقا ل callback function.

على سبيل المثال:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

هذا من شأنه أن يعيد القيمة `[1, 2, 3, 4, 5]`.

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

هذا سوف يعيد القيمة `['z', 's', 'l', 'h', 'b']`.

طريقة فرز جافا سكريبت الافتراضية هي بواسطة قيمة string Unicode point، التي قد ترجع نتائج غير متوقعة. لذلك ، يوصى بتوفير callback function لتحديد كيفية فرز عناصر ال array. عندما يتم توفير وظيفة callback function هذه ، والتي تسمى عادةً `compareFunction`، يتم فرز عناصر ال array وفقًا لقيمة الإرجاع الخاصة بـ `compareFunction`: إذا كانت `compareFunction(a,b)` ترجع قيمة أقل من 0 لعنصرين `a` و `b` ، فـ `a` سيأتي قبل `b`. إذا `compareFunction(a,b)` ترجع قيمة أكبر من 0 لعنصرين `a` و `b`، فـ `b` ستأتي قبل `a`. إذا `compareFunction(a,b)` ترجع قيمة تساوي 0 لعنصرين `a` و `b`، ثم سيبقى `a` و `b` دون تغيير.

# --instructions--

استخدم طريقة `sort` في دالة `alphabeticalOrder` لفرز عناصر `arr` بالترتيب الأبجدي. يجب أن تعيد الـ function الـ array مرتبة اي sorted array.

# --hints--

يجب أن يستخدم الكود الخاص بك دالة `sort`.

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` يجب ان تعيد `["a", "a", "c", "d", "g", "z"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` يجب ان تعيد `["a", "h", "m", "m", "n", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` يجب ان تعيد `["a", "a", "a", "a", "t", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
```
