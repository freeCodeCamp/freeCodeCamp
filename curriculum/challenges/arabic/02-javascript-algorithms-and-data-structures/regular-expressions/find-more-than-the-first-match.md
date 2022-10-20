---
id: 587d7db4367417b2b2512b93
title: العثور على اكثر من التطابق الاول (Find More Than the First Match)
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

حتى الآن، لم تتمكن من استخراج أو البحث عن نمط إلا مرة واحدة.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

هنا `match` سترجع `["Repeat"]`.

للبحث عن نمط أو استخراجه أكثر من مرة، يمكنك استخدام global search flag: `g`.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

وهنا `match` ترجع القيمة `["Repeat", "Repeat", "Repeat"]`

# --instructions--

باستخدام الـ regex الآتي `starRegex`، ابحث عن واستخرج كلمتي `Twinkle` من الـ string الآتي `twinkleStar`.

**ملاحظة**  
يمكن أن يكون لديك العديد من الـ flags في الـ regex الخاص بك مثل `/search/gi`

# --hints--

يجب أن يستخدم الـ regex الخاص بك `starRegex` الـ global flag الآتي `g`

```js
assert(starRegex.flags.match(/g/).length == 1);
```

يجب أن يستخدم الـ regex الخاص بك`starRegex` الـ case insensitive flag الآتي `i`

```js
assert(starRegex.flags.match(/i/).length == 1);
```

يجب أن يتطابق التطابق مع تكراري الكلمة `Twinkle`

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

نتيجة التطابق `result` الخاصة بك يجب أن تحتوي على عنصرين.

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
