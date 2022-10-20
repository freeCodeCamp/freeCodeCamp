---
id: bd7123c9c450eddfaeb5bdef
title: استخدم رمز آلأقواس المعكوفان للعثور على حرف معين في مقطع
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

يمكنك أيضًا استخدام <dfn>رمز الأقواس المعكوفان</dfn> للحصول على الحرف في مواقع أخرى داخل مقطع.

تذكر أن أجهزة الكمبيوتر تبدأ في العد في `0`، لذا فإن الحرف الأول هو في الواقع الحرف صفر.

مثال:

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
```

سيحتوي `secondLetterOfFirstName` على قيمة مقطع `d`.

# --instructions--

دعونا نحاول تعيين `thirdLetterOfLastName` مساوية للحرف الثالث من متغير `lastName` باستخدام رمز آلأقواس المعكوفان.

**تلميح:** حاول النظر إلى المثال أعلاه إذا كنت عالق.

# --hints--

يجب أن يحتوي متغير `thirdLetterOfLastName` على قيمة `v`.

```js
assert(thirdLetterOfLastName === 'v');
```

يجب عليك استخدام رمز آلأقواس المعكوفان.

```js
assert(code.match(/thirdLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
```
