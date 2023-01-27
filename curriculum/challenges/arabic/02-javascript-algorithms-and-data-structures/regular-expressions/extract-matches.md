---
id: 587d7db4367417b2b2512b92
title: استخراج المطابقات (Extract Matches)
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

حتى الآن، كنت تتحقق فقط من وجود أو عدم وجود نمط داخل string. يمكنك أيضا استخراج المطابقات الفعلية التي وجدتها باستخدام دالة `.match()`.

لاستخدام وظيفة `.match()` ، قم بتطبيق الوظيفة على string ومرر بداخلها الـ regex في الأقواس.

إليك مثال:

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

ستعيد أول `match` القيمة `["Hello"]` والثانية ستعيد `["expressions"]`.

لاحظ أن الـ syntax لـ`.match` هو "عكس" لدالة `.test` التي تستخدمها حتى الآن:

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

قم بتطبيق دالة `.match()` لاستخراج الـ string الآتي `coding`.

# --hints--

`result` يجب أن تحتوي على `coding`

```js
assert(result.join() === 'coding');
```

الـ regex الخاص بك `codingRegex` يجب أن يبحث عن الـ string الآتي `coding`

```js
assert(codingRegex.source === 'coding');
```

يجب أن يستخدم الكود الخاص بك دالة `.match()`.

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

# --solutions--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```
