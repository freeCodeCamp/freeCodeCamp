---
id: 56533eb9ac21ba0edf2244ac
title: زيادة رَقْم باستخدام JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

يمكنك بسهولة <dfn>زيادة</dfn> أو إضافة واحد إلى متغير مع مشغل `++`.

```js
i++;
```

هو ما يعادل

```js
i = i + 1;
```

**ملاحظة:** السطر بالأكمل يصبح `i++;`، مما يزيل الحاجة إلى علامة المساواة (equal sign).

# --instructions--

غيّر الكود لاستخدام المشغل `++` على المتغير `myVar`.

# --hints--

يجب أن يساوي `myVar` قيمة `88`.

```js
assert(myVar === 88);
```

لا يجب عليك استخدام مشغل التعيين.

```js
assert(
  /let\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2})/.test(code)
);
```

يجب عليك استخدام المشغل `++`.

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

لا يجب عليك تعديل الكود فوق التعليق المحدد.

```js
assert(/let myVar = 87;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 87;

// Only change code below this line
myVar = myVar + 1;
```

# --solutions--

```js
let myVar = 87;
myVar++;
```
