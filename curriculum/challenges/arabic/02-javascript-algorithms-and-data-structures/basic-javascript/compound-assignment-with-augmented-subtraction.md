---
id: 56533eb9ac21ba0edf2244b0
title: التعيين المركب مع الطرح المعزز
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

مثل مشغل `+=`, يقوم مشغل`-=` بطرح رقماً من متغير.

```js
myVar = myVar - 5;
```

سيتم طرح `5` من `myVar`. ويمكن إعادة كتابة هذا على النحو التالي:

```js
myVar -= 5;
```

# --instructions--

حول التعيينات `a`, و `b`, و `c` لتستخدم المشغل `-=`.

# --hints--

يجب أن يساوي `a` قيمة `5`.

```js
assert(a === 5);
```

يجب أن يساوي `b` قيمة `-6`.

```js
assert(b === -6);
```

يجب أن يساوي `c` قيمة `2`.

```js
assert(c === 2);
```

يجب عليك استخدام مشغل `-=` لكل متغير.

```js
assert(code.match(/-=/g).length === 3);
```

لا يجب عليك تعديل الكود فوق التعليق المحدد.

```js
assert(
  /let a = 11;/.test(code) && /let b = 9;/.test(code) && /let c = 3;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
