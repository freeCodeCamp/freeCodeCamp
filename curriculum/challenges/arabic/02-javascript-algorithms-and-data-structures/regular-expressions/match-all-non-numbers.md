---
id: 587d7db8367417b2b2512ba1
title: مطابقة جميع غير الأرقام (Match All Non-Numbers)
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

أظهر التحدي الأخير كيفية البحث عن الأرقام باستخدام الاختصار `\d` مع حرف صغير `d`. يمكنك أيضا البحث عن غير أرقام (non-digits) باستخدام اختصار مماثل يستخدم حرف كبير `D` بدلا من ذلك.

الاختصار للبحث عن رموز ليست أرقام هو `\D`. هذا يساوي الـ character class الآتي `[^0-9]`، والذي يبحث عن رمز واحد ليس رقما بين الصفر و التاسعة.

# --instructions--

استخدم shorthand character class لغير الأرقام `\D` لحساب عدد غير الأرقام (non-digits) في عناوين الأفلام.

# --hints--

يجب أن يستخدم الـ regex الخاص بك رمز الاختصار (shortcut character) لمطابقة الرموز التي ليست أرقام (non-digit characters)

```js
assert(/\\D/.test(noNumRegex.source));
```

يجب أن يستخدم regex الخاص بك الـ global flag.

```js
assert(noNumRegex.global);
```

يجب أن لا يجد regex الخاص بك أي أرقام في السلسلة `9`.

```js
assert('9'.match(noNumRegex) == null);
```

يجب على regex الخاص بك أن يجد 6 رموز ليست أرقام، في السلسلة `Catch 22`.

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

يجب على regex الخاص بك أن يجد 11 رموز ليست أرقام، في السلسلة `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

يجب على regex الخاص بك أن يجد 15 رموز ليست أرقام، في السلسلة `One, Two, Three`.

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

يجب على regex الخاص بك أن يجد 12 رموز ليست أرقام، في السلسلة `21 Jump Street`.

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

يجب على regex الخاص بك أن يجد 17 رموز ليست أرقام، في السلسلة `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
