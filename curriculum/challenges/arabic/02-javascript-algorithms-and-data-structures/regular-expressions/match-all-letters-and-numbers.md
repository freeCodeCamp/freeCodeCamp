---
id: 587d7db7367417b2b2512b9f
title: مطابقة جميع الحروف والأرقام (Match All Letters and Numbers)
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

باستخدام character classes ، كنت قادرا على البحث عن جميع الأحرف الأبجدية مع `[a-z]`. هذا النوع منcharacter class شائع بما فيه الكفاية بحيث يكون هناك اختصار له، على الرغم من أنه يتضمن بعض الأحرف الإضافية أيضا.

أقرب حرف في جافا سكريبت لمطابقة الأبجدية هو `\w`. هذا الاختصار يعادل `[A-Za-z0-9_]`. Character class هذه تتطابق مع الأحرف الكبيرة والاحرف الصغيرة بالإضافة إلى الأرقام. ملاحظة، تشمل character class هذه أيضا رمز الـ underscore (`_`).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

جميع هذه الاستدعائات `test` الأربعة سترجع `true`.

Character classes هذه معروفة أيضًا باسم <dfn>shorthand character classes</dfn>.

# --instructions--

استخدم shorthand character class الآتي `\w` لحساب عدد الأحرف الأبجدية والارقام في مختلف الاقتباسات والـ strings.

# --hints--

يجب أن يستخدم regex الخاص بك الـ global flag.

```js
assert(alphabetRegexV2.global);
```

يجب أن يستخدم regex الخاص بك الرمز `\w` لمطابقة جميع الحروف الابجدية و الارقام.

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

يجب أن يجد الـ regex الخاص بك 31 رمزا أبجديًا او رقميًا في الـ string الآتي `The five boxing wizards jump quickly.`

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

يجب أن يجد الـ regex الخاص بك 32 رمزا أبجديًا او رقميًا في الـ string الآتي `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

يجب أن يجد الـ regex الخاص بك 30 رمزا أبجديًا او رقميًا في الـ string الآتي `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

يجب أن يجد الـ regex الخاص بك 36 رمزا أبجديًا او رقميًا في الـ string الآتي `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2)
    .length === 36
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```
