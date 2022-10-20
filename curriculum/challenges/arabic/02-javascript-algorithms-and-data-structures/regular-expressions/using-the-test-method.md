---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

تستخدم الـ Regular expressions في لغات البرمجة لمطابقة أجزاء من الـ strings. أنت تنشئ أنماطا لمساعدتك على القيام بهذه المطابقة.

إذا كنت ترغب في العثور على كلمة `the` في السلسلة `The dog chased the cat`، يمكنك استخدام الـ regular expression التالي: `/the/`. لاحظ أن علامات الاقتباس غير مطلوبة في ال regular expression.

لدى جافا سكريبت طرق متعددة لاستخدام regexes. إحدى الطرق لاختبار regex هي استخدام `.test()`. `.test()` تأخذ regex، وتطبقه على سلسلة (توضع داخل الأقواس)، وتعيد `true` أو `false` إذا عثر النمط الخاص بك على شيء أو لا.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

دالة `test` هنا، ستعيد `true`.

# --instructions--

طبق `myRegex` على السلسلة `myString` باستخدام `.test()`.

# --hints--

يجب عليك استخدام `.test()` لاختبار الـ regex.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

يجب أن ترجع نتيجتك `true`.

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
