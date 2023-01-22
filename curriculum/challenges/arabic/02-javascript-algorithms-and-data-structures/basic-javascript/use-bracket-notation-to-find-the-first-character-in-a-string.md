---
id: bd7123c9c549eddfaeb5bdef
title: استخدم رمز الاقواس للعثور على اول حرف في مقطع (Use Bracket Notation to Find the First Character in a String)
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>القوسان المعكوفان</dfn> هي طريقة للحصول على رمز في ترتيب معين داخل المقطع.

معظم لغات البرمجة الحديثة، مثل JavaScript، لا تبدأ في العد من 1 كما يفعل البشر. إنهم يبدؤون عند الصفر. يشار إلى هذا بالترتيب <dfn>مبني على الصفر</dfn>.

على سبيل المثال، رمز ترتيب 0 في كلمة `Charles` هو `C`. إذن إذا `const firstName = "Charles"`، يمكنك الحصول على قيمة الرمز الأول من المقطع باستخدام `firstName[0]`.

مثال:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

سيكون إلى `firstLetter` قيمة تساوي المقطع `C`.

# --instructions--

استخدم رمز الأقواس للعثور على الرمز الأول في متغير `lastName` وتعيينه إلى `firstLetterOfLastName`.

**تلميح:** حاول النظر إلى المثال أعلاه إذا كنت عالق.

# --hints--

يجب أن يحتوي متغير `firstLetterOfLastName` قيمة `L`.

```js
assert(firstLetterOfLastName === 'L');
```

يجب عليك استخدام رمز الأقواس المعكوفان.

```js
assert(code.match(/firstLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
