---
id: 587d7b83367417b2b2512b33
title: استخدام وحدة تحكم JavaScript للتحقق من قيمة متغير
challengeType: 1
forumTopicId: 18372
dashedName: use-the-javascript-console-to-check-the-value-of-a-variable
---

# --description--

لكل من Chrome و Firefox وحدات تحكم JavaScript ممتازة، تعرف أيضًا باسم DevTools، لتصحيح أخطاء JavaScript الخاص بك.

يمكنك العثور على أدوات المطور في قائمة Chrome أو وحدة تحكم الويب في قائمة Firefox. إذا كنت تستخدم متصفحًا مختلفًا أو هاتفًا جوالاً، فإننا نوصي بشدة بالتبديل إلى Firefox أو Chrome لسطح المكتب.

طريقة`console.log()`، التي "تطبع" إخراج ما يوجد بين القوسين إلى وحدة التحكم، من المرجح أن تكون أداة تصحيح الأخطاء الأكثر فائدة. وضعها في أماكن استراتيجية في الكود الخاص بك يمكن أن يظهر لك قيم المتغيرات. من الممارسات الجيدة أن يكون لديك فكرة عما يجب أن يكون عليه الناتج قبل النظر إلى ماهيته. سيساعد وجود نقاط لمعرفة حالة حساباتك في الكود الخاص بك على تضييق نطاق المشكلة.

إليك مثال لطباعة السلسلة `Hello world!` إلى وحدة التحكم:

```js
console.log('Hello world!');
```

# --instructions--

استخدم طريقة `console.log()` لطباعة قيمة المتغير `a` حيث تمت الإشارة أليها في الكود.

# --hints--

يجب أن يستخدم الكود الخاص بك `console.log()` للتحقق من قيمة المتغير `a`.

```js
assert(code.match(/console\.log\(a\)/g));
```

# --seed--

## --seed-contents--

```js
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
```

# --solutions--

```js
var a = 5; console.log(a);
```
