---
id: 587d7b90367417b2b2512b65
title: Return Part of an Array Using the slice Method
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

طريقة `slice` ترجع نسخة من عناصر معينة من ال array. يمكن أن يتطلب الأمر وسيطتين (arguments)، الأولى تعطي فهرس مكان بدء ال slice ، والثانية هي فهرس مكان إنهاء ال slice (وهي غير مشمولة). إذا لم يتم تقديم ال arguments، فإن الافتراضي هو أن يبدأ من بداية ال array حتى النهاية، وهي طريقة سهلة لصنع نسخة من ال array بأكملها. طريقة `slice` لا تغير ال array الأصلية، ولكنها تعيد array جديدة.

إليك مثال:

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` سيكون لها القيمة `["Dog", "Tiger"]`.

# --instructions--

استخدم طريقة `slice` في `sliceArray` لإرجاع جزء من مصفوفة `anim` بالنظر إلى مؤشري `beginSlice` و `endSlice`. يجب أن تعيد الوظيفة array.

# --hints--

يجب أن يستخدم الكود الخاص بك دالة `slice`.

```js
assert(code.match(/\.slice/g));
```

متغير `inputAnim` يجب ألا يتغير.

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` يجب ان يعيد `["Dog", "Tiger"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` يجب ان يعيد `["Cat"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` يجب ان يعيد `["Dog", "Tiger", "Zebra"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
```
