---
id: 587d7b8e367417b2b2512b5f
title: Pass Arguments to Avoid External Dependence in a Function
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

التحدي الأخير كان يقترب خطوة من مبادئ الـ functional programming، ولكن لا يزال هناك شيء مفقود.

لم نقم بتغيير قيمة المتغير الشامل (global)، ولكن الوظيفة `incrementer` لن تعمل بدون وجود المتغير الـشامل و هو `fixedValue`، هناك.

وهناك مبدأ آخر للبرمجة الوظيفية (functional programming) وهو إعلان تبعياتك (dependencies) بشكل صريح. هذا يعني إذا كان الـ function يعتمد على متغير أو object موجود، قم بتمرير هذا المتغير أو الـ object مباشرة إلى الـ function كـ argument.

وهناك عدة نتائج جيدة لهذا المبدأ. الـ function يصبح أسهل لاختباره، فأنت تعرف بالضبط المدخلات التي يتطلبها، ولن يعتمد على أي شيء آخر في برنامجك.

يمكن أن يمنحك هذا المزيد من الثقة عند تغيير أو إزالة أو إضافة كود جديد. ستعرف ما يمكنك تغييره وما لا يمكنك تغييره ويمكنك أن ترى مكان الافخاخ المحتملة.

وأخيرا، سينتج الـ function دائما نفس الناتج لنفس المجموعة من المدخلات، بغض النظر عن الجزء من الكود الذي ينفذه.

# --instructions--

حدث وظيفة `incrementer` لتعلن بوضوح تبعياتها.

اكتب دالة `incrementer` بحيث أنها تأخذ arguments، ثم ترجع نتيجة بعد زيادة القيمة بواحد.

# --hints--

لا ينبغي للدالة `incrementer` أن تغير قيمة `fixedValue` (والتي هي `4`).

```js
assert(fixedValue === 4);
```

يجب أن تأخذ دالة `incrementer` الخاصة بك، argument.

```js
assert(incrementer.length === 1);
```

يجب أن تعيد دالة `incrementer` قيمة أكبر من `fixedValue` بواحد.

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}
```
