---
id: 5ee127a03c3b35dd45426493
title: تعيين قيمة متغير إلى متغير آخر
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

بعد تعيين قيمة إلى متغير باستخدام مشغل <dfn>التعيين (=)</dfn>، يمكنك تعيين قيمة هذا المتغير إلى متغير آخر باستخدام مشغل <dfn>التعيين (=)</dfn> ذاتها.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

ما ورد أعلى يعلن المتغير `myVar` دون قيمة، ثم يخصص له قيمة `5`. بعد ذلك، يتم إعلان متغير آخر يدعى `myNum` دون قيمة. ثم يتم تعيين قيمة المتغير `myVar` (التي تساوي `5`) إلى المتغير `myNum`. الآن المتغير `myNum` لديه القيمة `5`.

# --instructions--

عيًن قيمة المتغير`a` إلى المتغير `b`.

# --hints--

لا يجب عليك تعديل التعليمات البرمجية فوق التعليق المحدد.

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

المتغير `b` يجب أن يساوي `7`.

```js
assert(typeof b === 'number' && b === 7);
```

قيمة المتغير `a` يجب أن يتم تعيينها إلى المتغير `b` باستخدام `=`.

```js
assert(/b\s*=\s*a\s*/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
