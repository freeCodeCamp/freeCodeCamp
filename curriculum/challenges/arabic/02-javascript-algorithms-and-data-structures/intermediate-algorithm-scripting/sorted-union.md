---
id: a105e963526e7de52b219be9
title: اتحاد مرتب (Sorted Union)
challengeType: 1
forumTopicId: 16077
dashedName: sorted-union
---

# --description--

أكتب وظيفة (function) تأخذ قائمتين أو أكثر وتنتج مجموعة جديدة من القيم الفريدة حسب ترتيب القوائم (arrays) الأصلية المقدمة.

بعبارة أخرى، ينبغي إدراج جميع القيم الموجودة من جميع القوائم (arrays) بترتيبها الأصلي، ولكن دون تكرار لها في القائمة (array) النهائية.

ينبغي فرز الأرقام الفريدة حسب الترتيب الأصلي، ولكن لا ينبغي فرز القائمة (array) النهائية بالترتيب العددي.

تحقق إن اختبارات التأكيد من الأمثلة.

# --hints--

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` يجب أن يرجع `[1, 3, 2, 5, 4]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` يجب أن يرجع `[1, 2, 3, 5]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` يجب أن يرجع `[1, 2, 3, 5, 4, 6, 7, 8]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [
  1,
  2,
  3,
  5,
  4,
  6,
  7,
  8
]);
```

`uniteUnique([1, 3, 2], [5, 4], [5, 6])` يجب أن يرجع `[1, 3, 2, 5, 4, 6]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 4], [5, 6]), [1, 3, 2, 5, 4, 6]);
```

`uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])` يجب أن يرجع `[1, 3, 2, 5, 4]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

# --seed--

## --seed-contents--

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

# --solutions--

```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(
      a, 
      b.filter(function(e, currentIndex) {
        return b.indexOf(e) === currentIndex && a.indexOf(e) === -1;
      }));
  }, []);
}
```
