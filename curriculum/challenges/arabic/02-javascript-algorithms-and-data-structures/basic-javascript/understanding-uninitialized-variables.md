---
id: 56533eb9ac21ba0edf2244aa
title: فهم المتغيرات غير المهيأة
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

عند إعلان المتغيرات في JavaScript، يكون لها قيمة أولية وهي `undefined`. إذا قمت بعملية رياضية على متغير قيمته `undefined` ستكون نتيجتك `NaN` مما يعني <dfn>"Not a Number"</dfn> إي "ليس رقما". إذا ربط مقطع نصي مع متغير `undefined`، فستحصل على <dfn>مقطع نصي</dfn> بقيمة `undefined`.

# --instructions--

قم بتهيئة المتغيرات الثلاثة `a`, و `b`, و `c` بالقيم `5`, و `10`, و `"I am a"` على التوالي، حتى لا يكونوا `undefined`.

# --hints--

يجب أن يتم تعريف `a` وأن تكون قيمتها `6`.

```js
assert(typeof a === 'number' && a === 6);
```

يجب أن يتم تعريف `b` وأن تكون قيمتها `15`.

```js
assert(typeof b === 'number' && b === 15);
```

يجب ألّا يحتوي `c` على `undefined` ويجب أن يكون لديه مقطع بقيمة `I am a String!`

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

لا يجب عليك تعديل الكود فوق التعليق المحدد.

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
