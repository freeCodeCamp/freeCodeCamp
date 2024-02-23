---
id: a5deed1811a43193f9f1c841
title: Drop it
challengeType: 1
forumTopicId: 16010
dashedName: drop-it
---

# --description--

بالنظر إلى المصفوفة `arr` ، كرر وأزل كل عنصر بدءًا من العنصر الأول (الفهرس 0) حتى تعرض الوظيفة `func` القيمة `true` عندما يتم تمرير العنصر المتكرر من خلالها.

ثم ارجع بقية ال array بمجرد استيفاء الشرط، وإلا ، يجب إرجاع `arr` كـ array فارغة.

# --hints--

`dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` يجب ان يرجع `[3, 4]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  [3, 4]
);
```

`dropElements([0, 1, 0, 1], function(n) {return n === 1;})` يجب ان يرجع `[1, 0, 1]`.

```js
assert.deepEqual(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  [1, 0, 1]
);
```

`dropElements([1, 2, 3], function(n) {return n > 0;})` يجب ان يرجع `[1, 2, 3]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  [1, 2, 3]
);
```

`dropElements([1, 2, 3, 4], function(n) {return n > 5;})` يجب ان يرجع `[]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  []
);
```

`dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` يجب ان يرجع `[7, 4]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  [7, 4]
);
```

`dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` يجب ان يرجع `[3, 9, 2]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  [3, 9, 2]
);
```

# --seed--

## --seed-contents--

```js
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

# --solutions--

```js
function dropElements(arr, func) {
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```
