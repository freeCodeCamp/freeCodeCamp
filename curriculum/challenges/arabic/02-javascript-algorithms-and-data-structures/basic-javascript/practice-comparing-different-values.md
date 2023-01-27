---
id: 599a789b454f2bbd91a3ff4d
title: التدريب على مقارنة القيم المختلفة (Practice comparing different values)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

في التحديين الأخيرين، لقد تعلمنا عن مشغل المساواة (`==`) ومشغل المساواة الصارمة (`===`). راجع بسريعة وتتدرب باستخدام هؤلاء المشغلين.

إذا لم تكن القيم الذي يجري مقارنتهم من نفس النوع، يقوم المشغل المعني بالمساواة بإجراء تحويل نوعي، ثم يقوم بتقييم القيم. ومع ذلك، فإن عامل المساواة الصارمة (strict equality operator) سيقارن بين نوع البيانات والقيمة كما هي، دون تحويل نوع إلى آخر.

**على سبيل المثال**

`3 == '3'` يرجع `true` لأن JavaScript تحويل المقطع إلى رَقْم. يرجع `3 === '3'` حالة `false` لأن الأنواع مختلفة ولا يتم إجراء تحويل.

**ملاحظة:** في JavaScript، يمكنك تحديد نوع متغير أو قيمة باستخدام مشغل `typeof` على النحو التالي:

```js
typeof 3
typeof '3'
```

ينتج `typeof 3` المقطع `number`، ويرجع `typeof '3'` المقطع `string`.

# --instructions--

تقوم وظيفة `compareEquality` في المحرر بمقارنة قيمتين باستخدام مشغل المساواة. عدل الوظيفة بحيث تنتج المقطع `Equal` فقط عندما تكون القيم متساوية بصرامة (strictly equal).

# --hints--

يجب أن ينتج `compareEquality(10, "10")` مقطع `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

يجب أن ينتج `compareEquality("20", 20)` مقطع `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

يجب عليك استخدام المشغل `===`

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
