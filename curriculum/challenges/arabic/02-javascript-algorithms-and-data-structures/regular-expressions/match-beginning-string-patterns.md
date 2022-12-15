---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

أظهرت التحديات السابقة أنه يمكن استخدام الـ regular expressions للبحث عن عدد من التطابقات. وهي تستخدم أيضا للبحث عن أنماط في مواقع محددة في ال strings.

وفي تحد سابق، لقد استخدمت رمز الـ caret character الآتي (`^`) داخل مجموعة رموز لإنشاء negated character set في شكل `[^thingsThatWillNotBeMatched]`. خارج مجموعة الرموز، يتم استخدام الـ caret للبحث عن أنماط في بداية ال strings.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

أول استدعاء لـ `test` سيعيد `true` والثاني سيعيد `false`.

# --instructions--

استخدم رمز الـ caret في regex لإيجاد `Cal` فقط في بداية السلسلة `rickyAndCal`.

# --hints--

يجب أن يبحث regex الخاص بك عن السلسلة `Cal` بحرف كبير (capital).

```js
assert(calRegex.source == '^Cal');
```

لا يجب أن يستخدم الـ regex الخاص بك أي flags.

```js
assert(calRegex.flags == '');
```

يجب أن يطابق الـ regex الخاص بك السلسلة `Cal` في بداية السلسلة.

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

يجب أن لا يطابق الـ regex الخاص بك السلسلة `Cal` في وسط السلسلة.

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
