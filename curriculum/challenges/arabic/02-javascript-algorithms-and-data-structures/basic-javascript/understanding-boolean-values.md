---
id: bd7123c9c441eddfaeb5bdef
title: فهم القيم المنطقية
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

نوع آخر من البيانات هو القيم المنطقية المطلق عليها إسم <dfn>Boolean</dfn>. يمكن أن يكون للقيم المنطقية (booleans) حالة واحدة فقط من حالتين: `true` أو `false`. إنهم في الأساس كمفاتيح تشغيل صغيرة لبدء أو إيقاف التشغيل، حيث إن `true` يبدأ التشغيل و `false` يوقفه. والحالتان يستبعدان بعضهن البعض (mutually-exclusive).

**ملاحظة:** القيم المنطقية لا تكتب أبدا باستخدام علامات الاقتباس. المقطعين `"true"` و `"false"` ليسوا بقيم منطقية وليس لهم معنى خاص في JavaScript.

# --instructions--

Modify the `welcomeToBooleans` function so that it returns `true` instead of `false`.

# --hints--

يجب أن تقوم الوظيفة `welcomeToBooleans()` بإنتاج قيمة منطقية (`true`, أو `false`).

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` يجب أن ينتج `true`.

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
