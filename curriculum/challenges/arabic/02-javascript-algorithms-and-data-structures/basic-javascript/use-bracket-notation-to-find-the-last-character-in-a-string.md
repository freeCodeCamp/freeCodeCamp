---
id: bd7123c9c451eddfaeb5bdef
title: استخدم رمز آلأقواس (Bracket Notation) للعثور على آخر حرف في سلسلة (String)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

للحصول على آخر حرف من سلسلة (String)، يمكنك طرح واحد من طول السلسلة (String).

على سبيل المثال، إذا `const firstName = "Ada"`، يمكنك الحصول على قيمة الحرف الأخير من السلسلة باستخدام `firstName[firstName.length - 1]`.

مثال:

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` سيكون لها قيمة تساوي السلسلة `a`.

# --instructions--

استخدم <dfn>رمز الأقواس</dfn> للعثور على الحرف الأخير في المتغير `lastName`.

**تلميح:** حاول النظر إلى المثال أعلاه إذا كنت عالق.

# --hints--

`lastLetterOfLastName` يجب أن يكون الحرف `e`.

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
