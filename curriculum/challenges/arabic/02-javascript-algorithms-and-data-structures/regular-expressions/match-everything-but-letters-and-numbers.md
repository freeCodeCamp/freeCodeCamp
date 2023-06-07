---
id: 587d7db8367417b2b2512ba0
title: مطابقة كل شيء ما عدا الحروف والأرقام
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

لقد تعلمت أنه يمكنك استخدام اختصار لمطابقة الحروف و الارقام `[A-Za-z0-9_]` باستخدام `\w`. نمط طبيعي قد ترغب في البحث عنه و هو ما عكس الحروف و الأرقام.

يمكنك البحث عن العكس الـ `\w` باستخدام `\W`. ملاحظة: النمط المعاكس يستخدم حرف كبير. هذا الاختصار هو نفسه مثل `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

ستعيد أول `match` القيمة `["%"]` والثانية ستعيد `["!"]`.

# --instructions--

استخدم الـ shorthand character class الآتي `\W` لحساب عدد الأحرف الأبجدية والارقام في مختلف الاقتباسات والـ strings.

# --hints--

يجب أن يستخدم regex الخاص بك الـ global flag.

```js
assert(nonAlphabetRegex.global);
```

يجب أن يجد الـ regex الخاص بك 6 رموز لا أبجدية او رقمية في الـ string الآتي `The five boxing wizards jump quickly.`.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

يجب أن يستخدم regex الخاص بك shorthand character لمطابقة جميع الرموز غير الحروف الابجدية و الارقام.

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

يجب أن يجد الـ regex الخاص بك 8 رموز لا أبجدية او رقمية في الـ string الآتي `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

يجب أن يجد الـ regex الخاص بك 6 رموز لا أبجدية او رقمية في الـ string الآتي `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

يجب أن يجد الـ regex الخاص بك 6 رموز لا أبجدية او رقمية في الـ string الآتي `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
