---
id: a3566b1109230028080c9345
title: جمع كل الأعداد في نطاق معين (Sum All Numbers in a Range)
challengeType: 1
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

سنقوم بتمرير مصفوفة من رقمين. قم بإرجاع مجموع هذين الرقمين بالإضافة إلى مجموع جميع الأرقام بينهما. لن يأتي أقل رقم دائماً أولاً.

على سبيل المثال، `sumAll([4,1])` يجب أن يرجع `10` لأن مجموع جميع الأرقام بين 1 و 4 (وكلاهما شامل) هو `10`.

# --hints--

`sumAll([1, 4])` يجب أن يرجع رقم.

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` يجب أن يرجع 10.

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` يجب أن يرجع 10.

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` يجب أن يرجع 45.

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` يجب أن يرجع 45.

```js
assert.deepEqual(sumAll([10, 5]), 45);
```

# --seed--

## --seed-contents--

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

# --solutions--

```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```
