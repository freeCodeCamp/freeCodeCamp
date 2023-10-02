---
id: 56533eb9ac21ba0edf2244a8
title: تخزين القيم مع مشغل التعيين (=)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

في JavaScript، يمكنك تخزين قيمة في متغير باستخدام مشغل <dfn>تعيين</dfn> يبدو (`=`).

```js
myVariable = 5;
```

هذا يعين `Number` بقيمة `5` إلى `myVariable`.

إذا كانت هناك أي حسابات إلى يمين مشغل `=`، يتم أداء هذه الحسابات قبل تعيين القيمة إلى المتغير الموجود على يسار المشغل.

```js
var myVar;
myVar = 5;
```

أولا، هذا الكود ينشئ متغير يسمى `myVar`. ثم، الكود يعين `5` إلى `myVar`. الآن، إذا ظهر `myVar` مرة أخرى في الكود، فإن البرنامَج سيعامله كما لو أنه `5`.

# --instructions--

عيين قيمة `7` إلى المتغير `a`.

# --hints--

لا يجب عليك تعديل الكود فوق التعليق المحدد.

```js
assert(/var a;/.test(code));
```

يجب أن يحتوي `a` قيمة 7.

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
