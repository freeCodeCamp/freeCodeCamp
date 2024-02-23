---
id: 587d7db3367417b2b2512b8e
title: استخدام طريقة Test
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

تستخدم Regular expressions في لغات البرمجة لمطابقة أجزاء من المقاطع النصية (strings). أنت تنشئ أنماطا لمساعدتك على القيام بهذه المطابقة.

إذا كنت ترغب في العثور على كلمة `the` في مقطع `The dog chased the cat`، يمكنك استخدام regular expression التالي: `/the/`. لاحظ أن علامات الاقتباس غير مطلوبة في regular expression.

لدى JavaScript طرق متعددة لاستخدام regexes. إحدى الطرق لاختبار regex هي استخدام طريقة (method) تسمى `.test()`. يوضع regex في طريقة `.test()`، وتطبقه على مقطع نصي (توضع داخل الأقواس)، وتنتج `true` أو `false` إذا عثر نمطك على شيء أو لا.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

ستنتج طريقة `test` حالة `true` هنا.

# --instructions--

طبق regex يسمى `myRegex` على مقطع `myString` باستخدام طريقة `.test()`.

# --hints--

يجب عليك استخدام `.test()` لاختبار الـ regex.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

يجب أن تنتج `true`.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
