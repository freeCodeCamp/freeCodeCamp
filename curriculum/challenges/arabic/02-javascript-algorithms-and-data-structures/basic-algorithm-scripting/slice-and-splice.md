---
id: 579e2a2c335b9d72dd32e05c
title: Slice و Splice
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

يتم منحك قائمتين وترتيب (index).

انسخ كل عنصر من القائمة الأولى إلى القائمة الثانية، بالترتيب.

ابدأ في إدراج عناصر بالترتيب `n` في القائمة الثانية.

انتج القائمة الناتجة عن ذلك. وينبغي أن تظل قائمات المدخلات (input arrays) على حالها بعد تشغيل الوظيفة (function).

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` يجب أن ينتج `[4, 1, 2, 3, 5]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` يجب أن ينتج `["a", 1, 2, "b"]`.

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` يجب أن ينتج `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.

```js
assert.deepEqual(
  frankenSplice(
    ['claw', 'tentacle'],
    ['head', 'shoulders', 'knees', 'toes'],
    2
  ),
  ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']
);
```

يجب إضافة جميع العناصر من القائمة الأولى إلى القائمة الثانية بالترتيب الأصلي. `frankenSplice([1, 2, 3, 4], [], 0)` يجب أن ينتج `[1, 2, 3, 4]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

وينبغي أن تظل القائمة الأولى على حالها بعد تشغيل الوظيفة.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

وينبغي أن تظل القائمة الثانية على حالها بعد تشغيل الوظيفة.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr2, ['a', 'b']);
```

# --seed--

## --after-user-code--

```js
let testArr1 = [1, 2];
let testArr2 = ["a", "b"];
```

## --seed-contents--

```js
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

# --solutions--

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n+i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);
```
