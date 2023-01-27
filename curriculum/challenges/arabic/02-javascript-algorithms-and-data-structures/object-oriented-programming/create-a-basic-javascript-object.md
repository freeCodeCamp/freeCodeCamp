---
id: 587d7dac367417b2b2512b73
title: إنشاء كائن جافا سكريبت بسيط
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

فكر في الأشياء التي يراها الناس كل يوم، مثل السيارات والمتاجر والطيور. هذه كلها <dfn>objects</dfn>: أشياء ملموسة يمكن للناس مراقبتها والتفاعل معها.

ما هي بعض الصفات لهذه الكائنات؟ السيارة لديها عجلات. المتاجر تبيع السلع. الطيور لها أجنحة.

هذه الصفات، أو <dfn>الخصائص</dfn>، تحدد ما الذي يشكل الكائن. لاحظ أن الـ objects المتشابهة تشترك في نفس الخواص، ولكن قد تكون لها قيم مختلفة لتلك الخواص. على سبيل المثال، جميع السيارات لديها عجلات ولكن ليس كل السيارات لديها نفس العدد من العجلات.

الـ objects في جافا سكريبت تستخدم في نمذجة الكائنات في العالم الحقيقي، وتعطيهم خصائص وسلوكيات مثل نظرائهم في العالم الحقيقي. إليك مثال باستخدام هذه المفاهيم لإنشاء كائن `duck`:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

هذا الكائن `duck` يحتوي على زوجين من خواص/قيمة: `name` من `Aflac` و `numLegs` من 2.

# --instructions--

قم بإنشاء كائن `dog` مع `name` و `numLegs` و قم بتعيينه إلى string ورقم، على التوالي.

# --hints--

`dog` يجب أن يكون object.

```js
assert(typeof dog === 'object');
```

`dog` يجب أن يكون لديه خاصية `name` من نوع string.

```js
assert(typeof dog.name === 'string');
```

`dog` يجب أن يكون لديه خاصية `numLegs` من نوع number.

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
