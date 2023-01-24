---
id: 587d7da9367417b2b2512b6a
title: أرجع قائمة مفرزة دون تغير القائمة الأصلية
challengeType: 1
forumTopicId: 301237
dashedName: return-a-sorted-array-without-changing-the-original-array
---

# --description--

التأثير الجانبي لطريقة `sort` هو أنخها تغير ترتيب العناصر في القائمة (array) الأصلية. وبعبارة أخرى، فإنه يغير ال array في مكانها. إحدى الطرق لتجنب ذلك هي أن تقوم أولاً بلزق array فارغة إلى ال array التي يتم فرزها (تذكر أن `slice` و `concat` تعيد array جديدة)، ثم قم بتشغيل `sort`.

# --instructions--

استخدم `sort` في الوظيفة `nonMutatingSort` لفرز عناصر array بالترتيب التصاعدي. يجب أن تعيد الوظيفة array جديدا، وليس تغيِّر متغير `globalArray`.

# --hints--

يجب أن يستخدم الكود الخاص بك طريقة `sort`.

```js
assert(nonMutatingSort.toString().match(/\.sort/g));
```

متغير `globalArray` يجب ألا يتغير.

```js
assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
```

`nonMutatingSort(globalArray)` يجب أن يعيد `[2, 3, 5, 6, 9]`.

```js
assert(
  JSON.stringify(nonMutatingSort(globalArray)) ===
    JSON.stringify([2, 3, 5, 6, 9])
);
```

`nonMutatingSort(globalArray)` لا ينبغي أن تكون قيمها مثبتة (hard-coded).

```js
assert(!nonMutatingSort.toString().match(/\[.*?[23569].*?\]/gs));
```

وينبغي أن تعيد الوظيفة array جديدا، وليس ال array التي أعطت ها.

```js
assert(nonMutatingSort(globalArray) !== globalArray);
```

`nonMutatingSort([1, 30, 4, 21, 100000])` يجب ان تعيد `[1, 4, 21, 30, 100000]`.

```js
assert(JSON.stringify(nonMutatingSort([1, 30, 4, 21, 100000])) ===
    JSON.stringify([1, 4, 21, 30, 100000]))
```

`nonMutatingSort([140000, 104, 99])` يجب ان تعيد `[99, 104, 140000]`.

```js
assert(JSON.stringify(nonMutatingSort([140000, 104, 99])) ===
    JSON.stringify([99, 104, 140000]))
```

# --seed--

## --seed-contents--

```js
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}

nonMutatingSort(globalArray);
```

# --solutions--

```js
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a,b) => a-b);
}
```
