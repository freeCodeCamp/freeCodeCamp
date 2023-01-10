---
id: bd7123c9c452eddfaeb5bdef
title: استخدم رمز آلأقواس المعكوفان للعثور على حرف معين قبل الأخر في مقطع
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

يمكنك استخدام نفس المبدأ الذي استخدمناه للتو لاسترداد الحرف الأخير في مقطع لاسترداد الحرف ما قبل أخر حرف.

على سبيل المثال يمكنك الحصول على قيمة الحرف الثالث إلى الأخير من مقطع `const firstName = "Augusta"` باستخدام `firstName[firstName.length - 3]`

مثال:

```js
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

سيحتوي `thirdToLastLetter` قيمة من المقطع `s`.

# --instructions--

استخدم <dfn>رمز آلأقواس المعكوفان</dfn> للعثور على الحرف الثاني إلى الأخير في مقطع `lastName`.

**تلميح:** حاول النظر إلى المثال أعلاه إذا كنت عالق.

# --hints--

يجب أن ينتج `secondToLastLetterOfLastName` حرف `c`.

```js
assert(secondToLastLetterOfLastName === 'c');
```

يجب عليك استخدام `.length` للحصول على الحرف الثاني الأخير.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
