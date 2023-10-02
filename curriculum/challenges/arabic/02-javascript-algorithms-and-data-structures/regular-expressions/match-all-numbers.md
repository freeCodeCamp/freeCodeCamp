---
id: 5d712346c441eddfaeb5bdef
title: مطابقة جميع الأرقام (Match All Numbers)
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

لقد تعلمت اختصارات لأنماط string شائعة مثل الأبجدية العددية (alphanumerics). نمط شائع آخر هو البحث عن أرقام فقط.

الاختصار للبحث عن الأرقام هو `\d`، مع حرف صغير `d`. هذا يساوي الـ character class الآتي `[0-9]`، والذي يبحث عن رقم واحد بين الصفر و التاسعة.

# --instructions--

استخدم shorthand character class الآتي `\d` لحساب عدد الأرقام في عناوين الأفلام. ولا تحسب الأرقام المكتوبة ("six" بدلاً من 6).

# --hints--

يجب أن يستخدم الـ regex الخاص بك رمز الاختصار (shortcut character) لمطابقة الأرقام

```js
assert(/\\d/.test(numRegex.source));
```

يجب أن يستخدم regex الخاص بك الـ global flag.

```js
assert(numRegex.global);
```

يجب أن يجد الـ regex الخاص بك رقم واحد في السلسلة `9`.

```js
assert('9'.match(numRegex).length == 1);
```

يجب على regex الخاص بك أن يجد رقمان، في السلسلة `Catch 22`.

```js
assert('Catch 22'.match(numRegex).length == 2);
```

يجب على regex الخاص بك أن يجد 3 أرقام، في السلسلة `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

يجب على regex الخاص بك أن لا يجد أرقام، في السلسلة `One, Two, Three`.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

يجب على regex الخاص بك أن يجد رقمان، في السلسلة `21 Jump Street`.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

يجب على regex الخاص بك أن يجد 4 أرقام، في السلسلة `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
