---
id: cf1111c1c11feddfaeb5bdef
title: التكرار مع الحلَقات For في JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

يمكنك تشغيل نفس الكود عدة مرات باستخدام حلقة.

النوع الأكثر شيوعاً من حلقة JavaScript يسمى حلقة `for` لأنه يعمل لعدد محدد من المرات.

تعريف حلَقات For مع ثلاث عبارات اختيارية تفصل بينها الفاصلات المنقوطة (semicolons):

`for (a; b; c)`، حيث ان `a` هي تعبير التهيئة، `b` هي تعبير الشرط، و `c` هي العبارة النهائية.

يتم تنفيذ عبارة التهيئة مرة واحدة فقط قبل بَدْء الحلقة. يستخدم عادة لإعلان وإعداد متغير الحلقة الخاص بك.

يتم تقييم عبارة الشرط في بداية كل حلقة وسوف يستمر مادام أنه يقيّم إلى `true`. عندما يكون الشرط `false` في بداية الحلقة سوف تتوقف الحلقة عن التنفيذ. هذا يعني أن إذا بدأ الشرط كزائف (false)، لن تنفذ الحلقة (loop) الخاصة بك أبدا.

يتم تنفيذ العبارة النهائية في نهاية كل حلقة (loop)، قبل التحقق من الشرط التالي وعادة ما يتم استخدامه لزيادة أو إنقاص عداد الحلقة.

في المثال التالي نقوم بالتهيئة بواسطة `i = 0` ونكرر مادام الشرط `i < 5` هو حقيقي (true). زد `i` بمقدار `1` في كل حلقة (loop) مع `i++` كعبارة نهائية.

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

سيحتوي `ourArray` على قيمة `[0, 1, 2, 3, 4]`.

# --instructions--

استخدم حلقة `for` لإضافة القيم من 1 إلى 5 إلى `myArray`.

# --hints--

يجب أن تستخدم حلقة `for`.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

يجب أن يساوي `myArray` قيمة `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --seed--

## --after-user-code--

```js
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
```
