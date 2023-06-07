---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

في الـ regular expressions ، تعثر المطابقة من نوع <dfn>greedy</dfn> على أطول جزء ممكن من الـ string الذي يلائم نمط الـ regex، وترجعه كمطابق. البديل يسمى مطابقة من نوع <dfn>lazy</dfn> والتي تجد أصغر جزء ممكن من الـ string الذي يستوفي نمط الـ regex.

يمكنك تطبيق الـ regex الآتي `/t[a-z]*i/` على السلسلة `"titanic"`. الـ regex هذا هو في الأساس نمط يبدأ بـ `t`، وينتهي بـ `i`، ولديه بعض الحروف بينهما.

الـ Regular expressions هي greedy بشكل افتراضي، لذا فإن المطابقة ستعيد `["titani"]`. وهي تجد أكبر سلسلة فرعية (sub-string) ممكنة لتتناسب مع النمط.

ومع ذلك، يمكنك استخدام رمز `?` لتغييره إلى تطابق lazy. مطابقة `"titanic"` للـ regex المعدل `/t[a-z]*?i/`  يعيد `["ti"]`.

**ملاحظة:** يجب تجنب تحليل HTML باستخدام الـ regular expressions، ولكن لا بأس من مطابقة نمط لـ HTML string مع الـ regular expressions.

# --instructions--

قم بإصلاح `/<.*>/` لإرجاع الـ HTML tag الآتي `<h1>` وليس النص `"<h1>Winter is coming</h1>"`. تذكر ان الرمز `.` في الـ regular expression، يطابق أي حرف.

# --hints--

متغير `result` يجب أن يكون array مع `<h1>` بداخله

```js
assert(result[0] == '<h1>');
```

`myRegex` يجب أن يستخدم المطابقة الـ lazy

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

`myRegex` لا يجب أن يتضمن السلسلة `h1`

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```
