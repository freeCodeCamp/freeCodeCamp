---
id: 56533eb9ac21ba0edf2244c0
title: المجال الشامل مقابل النطاق المحدد في الوظائف
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
dashedName: global-vs--local-scope-in-functions
---

# --description--

من الممكن الحصول على متغيرات <dfn>محدودة (local)</dfn> و <dfn>شاملة (global)</dfn> بنفس الاسم. عندما تفعل ذلك، يكون المتغير المحدود (local) له الأسبقية على المتغير الشامل (global).

وفي هذا المثال:

```js
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
```

سوف تنتج الوظيفة `myFun` المقطع النصي `Head` لأن النسخة المحدودة (local) من المتغير موجودة.

# --instructions--

أضف متغير محدود (local) إلى وظيفة `myOutfit` لتجاوز قيمة `outerWear` الحالية بالمقطع النصي التالي `sweater`.

# --hints--

لا يجب عليك تغيير قيمة المتغير الشامل (global) الآتي `outerWear`.

```js
assert(outerWear === 'T-Shirt');
```

يجب أن ينتج `myOutfit` المقطع `sweater`.

```js
assert(myOutfit() === 'sweater');
```

لا يجب عليك تغيير التعبير المنتج (return statement).

```js
assert(/return outerWear/.test(code));
```

# --seed--

## --seed-contents--

```js
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();
```

# --solutions--

```js
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
```
