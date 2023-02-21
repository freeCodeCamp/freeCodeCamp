---
id: bd7123c9c451eddfaeb5bdef
title: استخدم علامات الأقواس (Bracket Notation) للعثور على آخر حرف في مقطع نصي (String)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

للحصول على آخر حرف من المقطع النصي (String)، يمكنك طرح واحد من طوله.

على سبيل المثال، إذا `const firstName = "Ada"`، يمكنك الحصول على قيمة الحرف الأخير من المقطع باستخدام `firstName[firstName.length - 1]`.

مثال:

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

سيكون قيمة `lastLetter` تساوي المقطع النصي `a`.

# --instructions--

استخدم <dfn>علامات الأقواس</dfn> للعثور على الحرف الأخير في المتغير `lastName`.

**تلميح:** حاول النظر إلى المثال أعلاه إذا كنت عالق.

# --hints--

يجب أن يكون `lastLetterOfLastName` الحرف `e`.

```js
assert(lastLetterOfLastName === 'e');
```

يجب عليك استخدام `.length` للحصول على آخر حرف.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
```
