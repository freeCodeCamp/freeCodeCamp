---
id: 56533eb9ac21ba0edf2244b1
title: التعيين المركب مع الضرب المعزز
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

يقوم المشغل `*=` f بمضاعفة متغير في عدد.

```js
myVar = myVar * 5;
```

سيتم ضرب `myVar` في `5`. ويمكن إعادة كتابة هذا على النحو التالي:

```js
myVar *= 5;
```

# --instructions--

حول التعيينات `a`, و `b`, و `c` لتستخدم المشغل `*=`.

# --hints--

يجب أن يساوي `a` قيمة `25`.

```js
assert(a === 25);
```

يجب أن يساوي `b` قيمة `36`.

```js
assert(b === 36);
```

يجب أن يساوي `c` قيمة `46`.

```js
assert(c === 46);
```

يجب عليك استخدام مشغل `*=` لكل متغير.

```js
assert(code.match(/\*=/g).length === 3);
```

لا يجب عليك تعديل الكود فوق التعليق المحدد.

```js
assert(
  /let a = 5;/.test(code) &&
    /let b = 12;/.test(code) &&
    /let c = 4\.6;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
