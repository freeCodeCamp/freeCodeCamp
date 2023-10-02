---
id: 587d7db5367417b2b2512b96
title: مطابقة الحروف الابجدية
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

لقد رأيت كيف يمكنك استخدام <dfn>character sets</dfn> لتحديد مجموعة من الأحرف للمطابقة، لكن هذا يؤدي الي الكثير من الكتابة عندما تحتاج إلى مطابقة مجموعة كبيرة من الأحرف (على سبيل المثال، كل الحروف في الأبجدية). لحسن الحظ، هناك ميزة داخلية تجعل هذا قصير وبسيط.

داخل character set، يمكنك تحديد مجموعة من الأحرف لتطابق باستخدام رمز الشَرطة: `-`.

على سبيل المثال ، لمطابقة الأحرف الصغيرة `a` حتى `e` سوف تستخدم `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

بالترتيب، ستعيد الاستدعائات الثلاث لـ `match` القيم `["cat"]` و `["bat"]`، و `null`.

# --instructions--

طابق جميع الأحرف في الـ string الآتي `quoteSample`.

**ملاحظة**: تأكد من مطابقة الحروف الكبيرة والحروف الصغيرة.

# --hints--

يجب أن يطابق الـ regex الخاص بك <`alphabetRegex` ٣٥ عناصر.

```js
assert(result.length == 35);
```

يجب أن يستخدم الـ regex الخاص بك `alphabetRegex` الـ global flag.

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

يجب أن يستخدم الـ regex الخاص بك `alphabetRegex` الـ case insensitive flag.

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```
