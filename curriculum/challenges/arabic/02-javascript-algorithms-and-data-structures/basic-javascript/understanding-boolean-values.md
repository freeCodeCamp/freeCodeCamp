---
id: bd7123c9c441eddfaeb5bdef
title: فهم الحالات المنطقية (Understanding Boolean Values)
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

نوع آخر من البيانات هو <dfn>حالة المنطقية</dfn>. يمكن أن يكون للحالات المنطقية حالة واحدة فقط من حالتين: `true` أو `false`. إنها في الأساس كمفاتيح تشغيل صغيرة لإيقاف وبدء التشغيل، حيث إن `true` يبدأ التشغيل و `false` يوقفه. وهاتان الحالتان تستبعد إحداهما الأخرى.

**ملاحظة:** القيم الحالة المنطقية لا تكتب أبدا باستخدام علامات الاقتباس. المقطعين `"true"` و `"false"` ليست حالتي منطقية وليس لها معنى خاص في JavaScript.

# --instructions--

عدّل الوظيفة `welcomeToBooleans` بحيث ترجع `true` بدلاً من `false` عند النقر على زر التشغيل.

# --hints--

يجب أن تقوم الوظيفة `welcomeToBooleans()` بإرجاع حالة منطقية (`true`, أو `false`).

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

يجب أن يرجع `welcomeToBooleans()` حالة `true`.

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --after-user-code--

```js
welcomeToBooleans();
```

## --seed-contents--

```js
function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```
