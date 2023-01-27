---
id: 56533eb9ac21ba0edf2244e1
title: الحلَقات For المتداخلة
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

إذا كان لديك قائمة متعددة الأبعاد، يمكنك استخدام نفس المنطق مثل النقطة السابقة للمرور علي من كل من القائمة وأي قوائم فرعية. إليك مثال:

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

هذا يخرج كل عنصر فرعي في `arr` واحد تلو الأخر. لاحظ أنه فيما يتعلق بالحلقة الداخلية، نحن نتحقق من `.length` الخاص إلى `arr[i]`، لما كان `arr[i]` هو نفسه قائمة.

# --instructions--

عدل الوظيفة `multiplyAll` بحيث تظهر ناتج ضرب جميع الأرقام في القائمات الفرعية من `arr`.

# --hints--

يجب أن ينتج `multiplyAll([[1], [2], [3]])` قيمة `6`

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

يجب أن ينتج `multiplyAll([[1, 2], [3, 4], [5, 6, 7]])` قيمة `5040`

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

يجب أن ينتج `multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])` قيمة `54`

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```
