---
id: 587d7db9367417b2b2512ba7
title: تحديد عدد المطابقات بالضبط (Specify Exact Number of Matches)
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

يمكنك تحديد العدد الأدنى والأعلى من الأنماط مع محددات كمية باستخدام أقواس متعرجة curly brackets. أحيانا لا تريد سوى عدد محدد من المطابقات.

لتحديد عدد معين من الأنماط ، فقط ضع هذا الرقم بين الأقواس المتعرجة.

على سبيل المثال لمطابقة كلمة `hah` فقط مع الحرف `a` بعدد `3` مرات، سيكون الـ regex الخاص بك `/ha{3}h/`.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

بالترتيب، الاستدعائات الثلاث لـ `test` ستعيد `false` و `true` و `false`.

# --instructions--

قم بتغيير `timRegex` ليطابق كلمة `Timber` فقط عندما يكون لها أربعة حروف `m`.

# --hints--

يجب أن يستخدم الـ regex الخاص بك الأقواس المتعرجة.

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

يجب أن لا يطابق الـ regex الخاص بك `Timber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

يجب أن لا يطابق الـ regex الخاص بك `Timmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

يجب أن لا يطابق الـ regex الخاص بك `Timmmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

يجب أن يطابق الـ regex الخاص بك `Timmmmber`

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

لا يجب أن يطابق الـ regex الخاص بك الـ string الآتي `Timber` مع ٣٠ حرف `m` بداخله.

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```
