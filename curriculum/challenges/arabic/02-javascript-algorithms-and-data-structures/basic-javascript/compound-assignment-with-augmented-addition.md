---
id: 56533eb9ac21ba0edf2244af
title: التعيين المركب مع الجمع المعزز
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

في البرمجة، من الشائع استخدام assignments (التعيينات) لتعديل محتوي المتغير. تذكر أن كل شيء إلى يمين علامة المساواة يتم تقييمه أولا، لذلك يمكننا أن نقول:

```js
myVar = myVar + 5;
```

وذلك يضيف `5` إلى `myVar`. نظرًا أن هذا نمط شائع، فهناك مشغلين يقومون بالعملية الرياضية مع عملية التعيين في خطوة واحدة.

أحد هؤلاء المشغلين هو مشغل `+=`.

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

سوف يتم عرض `6` في الكونسول.

# --instructions--

حوِّل التعيينات `a` و `b` و `c` لتستخدم المشغل `+=`.

# --hints--

يجب أن يساوي `a` قيمة `15`.

```js
assert(a === 15);
```

يجب أن يساوي `b` قيمة `26`.

```js
assert(b === 26);
```

يجب أن يساوي `c` قيمة `19`.

```js
assert(c === 19);
```

يجب عليك استخدام مشغل `+=` لكل متغير.

```js
assert(code.match(/\+=/g).length === 3);
```

لا يجب عليك تعديل الكود فوق التعليق المحدد.

```js
assert(
  /let a = 3;/.test(code) &&
    /let b = 17;/.test(code) &&
    /let c = 12;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
```
