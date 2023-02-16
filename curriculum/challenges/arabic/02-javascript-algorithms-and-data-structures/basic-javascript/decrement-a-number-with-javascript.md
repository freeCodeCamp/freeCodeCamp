---
id: 56533eb9ac21ba0edf2244ad
title: إنقاص رَقَم باستخدام JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

يمكنك بسهولة <dfn>أنقاص</dfn> أو تقليل متغير بواحد باستخدام المشغل `--`.

```js
i--;
```

هو ما يعادل

```js
i = i - 1;
```

**ملاحظة:** السطر بكامله يصبح `i--;`، مما يزيل الحاجة إلى علامة المساواة.

# --instructions--

غير الكود لاستخدام المشغل `--` على `myVar`.

# --hints--

يجب أن يساوي `myVar` قيمة `10`.

```js
assert(myVar === 10);
```

يجب تغيير `myVar = myVar - 1;`.

```js
assert(!code.match(/myVar\s*=\s*myVar\s*[-]\s*1.*?;?/));
```

لا يجب عليك تعيين `myVar` بقيمة `10`.

```js
assert(!code.match(/myVar\s*=\s*10.*?;?/));
```

يجب عليك استخدام المشغل `--` على `myVar`.

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

لا يجب عليك تعديل الكود فوق التعليق المحدد.

```js
assert(/let myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
let myVar = 11;
myVar--;
```
