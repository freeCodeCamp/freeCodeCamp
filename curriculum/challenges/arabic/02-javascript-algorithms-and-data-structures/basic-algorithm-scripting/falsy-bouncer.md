---
id: adf08ec01beb4f99fc7a68f2
title: التنقل بين قيم زائفة (Falsy Bouncer)
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

أزل جميع القيم الزائفة falsy من القائمة (array). أنتج قائمة (array) جديدة ولا تغير قيمة القائمة (array) الأصلية.

القيم الزائفة Falsy في لغة JavaScript هي `false`, `null`, `0`, `""`, `undefined`, و `NaN`.

تلميح: حاول تحويل كل قيمة إلى Boolean.

# --hints--

`bouncer([7, "ate", "", false, 9])` يجب أن ينتج `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` يجب أن تنتج `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])`يجب أن تنتج `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` يجب أن تنتج `[1, 2]`.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

لا يجب عليك تغيير `arr`.

```js
const arr = ['a', false, 0, 'Naomi'];
bouncer(arr);
assert.deepEqual(arr, ['a', false, 0, 'Naomi'])
```

# --seed--

## --seed-contents--

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);
```
