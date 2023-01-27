---
id: 56533eb9ac21ba0edf2244b2
title: التعيين المركب مع التقسيم المعزز
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

يقوم المشغل `/=` بتقسيم متغير علي رَقَم أخر.

```js
myVar = myVar / 5;
```

سيتم تقسيم `myVar` علي `5`. ويمكن إعادة كتابة هذا على النحو التالي:

```js
myVar /= 5;
```

# --instructions--

حول التعيينات `a`, و `b`, و `c` لتستخدم المشغل `/=`.

# --hints--

يجب أن يساوي `a` قيمة `4`.

```js
assert(a === 4);
```

يجب أن يساوي `b` قيمة `27`.

```js
assert(b === 27);
```

يجب أن يساوي `c` قيمة `3`.

```js
assert(c === 3);
```

يجب عليك استخدام مشغل `/=` لكل متغير.

```js
assert(code.match(/\/=/g).length === 3);
```

لا يجب عليك تعديل الكود فوق التعليق المحدد.

```js
assert(
  /let a = 48;/.test(code) &&
    /let b = 108;/.test(code) &&
    /let c = 33;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
```

# --solutions--

```js
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;
```
