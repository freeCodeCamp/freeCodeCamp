---
id: 587d7b8e367417b2b2512b5e
title: تجنب التحولات والآثار الجانبية باستخدام البرمجة الوظيفية Functional Programming
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

إذا لم تكتشف ذلك سلفًا، المشكلة في التحدي السابق كانت مع استدعاء `splice` في وظيفة `tabClose()`. لسوء الحظ، `splice` يغير القائمة (array) الأصلية التي فُعِل عليها، لذا التفعيل الثاني له استخدم القائمة (array) المعدلة، وأعطى نتائج غير متوقعة.

هذا مثال صغير لنمط أكبر بكثير- يمكنك تفعيل وظيفة (function) للتأثير على متغير (variable)، أو قائمة (array)، أو كائن (object). وتغير الوظيفة المتغير أو شيء ما في الكائن.

وأحد المبادئ الأساسية للبرمجة الوظيفية هو عدم تغيير الأشياء. التغييرات تؤدي إلى أعطال. من الأسهل منع الأعطال علما بأن وظائفك (functions) لا تغير أي شيء، بما في ذلك معطيات (arguments) الوظيفة أو أي متغير (variable) شامل.

المثال السابق لم يكن به أي عمليات معقدة ولكن `splice` غيرت القائمة (array) الأصلية، وأسفرت عن حدوث خطأ.

تذكر أنه في البرمجة الوظيفية، تغيير الأشياء يسمى طفرة <dfn>mutation</dfn>، وتسمى النتيجة تأثير جانبي <dfn>side effect</dfn>. من الناحية المثالية، يجب أن تكون <dfn>الوظيفة خالصة (pure function)</dfn>، مما يعني أنها لا تسبب أي تأثيرات جانبية.

حاول أن تتقن هذا النظام وألا تغير أي متغير أو كائن في التعليمات البرمجية.

# --instructions--

اكتب الكود للوظيفة `incrementer` حتي تنتج قيمة المتغير الشامل `fixedValue` بعد زيادة قيمته بواحد.

# --hints--

لا ينبغي للوظيفة (function) مسمى `incrementer` أن تغير قيمة `fixedValue` (التي هي `4`).

```js
incrementer();
assert(fixedValue === 4);
```

يجب أن تنتج الوظيفة `incrementer` قيمة أكبر من `fixedValue` بواحد.

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

يجب أن تنتج الوظيفة `incrementer` قيمة استناداً إلى قيمة المتغير الشامل `fixedValue`.

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
