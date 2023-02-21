---
id: bd7123c9c549eddfaeb5bdef
title: استخدم علامات الأقواس للعثور على اول حرف في مقطع
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>القوسان المربعان</dfn> هما طريقة للحصول على رمز في ترتيب (index) معين داخل مقطع نصي.

معظم لغات البرمجة الحديثة، مثل JavaScript، لا تبدأ في العد من 1 كما يفعل البشر. إنهم يبدؤون عند الصفر. يشار إلى هذا بالترتيب من الصفر <dfn>zero-based indexing</dfn>.

على سبيل المثال، الرمز في ترتيب 0 في كلمة `Charles` هو `C`. إذن إذا `const firstName = "Charles"`، يمكنك الحصول على قيمة الرمز الأول من المقطع باستخدام `firstName[0]`.

مثال:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

سيكون إلى `firstLetter` قيمة تساوي المقطع `C`.

# --instructions--

استخدم علامات الأقواس المربعة للعثور على الرمز الأول في متغير `lastName` وتعيينه إلى `firstLetterOfLastName`.

**تلميح:** حاول النظر إلى المثال أعلاه إذا كنت عالق.

# --hints--

يجب أن يحتوي متغير `firstLetterOfLastName` قيمة `L`.

```js
assert(firstLetterOfLastName === 'L');
```

يجب عليك استخدام علامات الأقواس.

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
