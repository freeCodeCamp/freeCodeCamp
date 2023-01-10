---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

في بعض الأحيان، تحتاج إلى مطابقة رمز (أو مجموعة من الرموز) يظهر مرة أو أكثر على التوالي. وهذا يعني أنه يحدث مرة واحدة على الأقل، ويمكن تكراره.

يمكنك استخدام رمز `+` للتحقق مما إذا كان الأمر كذلك. تذكر ، يجب أن يكون الرمز أو النمط موجودًا على التوالي. وهذا يعني أن الرمز يجب أن يتكرر واحدًا تلو الآخر.

على سبيل المثال، `/a+/g` سيجد تطابق واحد في `abc` وسيعيد `["a"]`. بسبب `+`، سوف يجد أيضا مطابقة واحدة في `aabc` ويعيد `["aa"]`.

إذا كان بدلاً من ذلك يفحص السلسلة `abab`، فسيتم العثور على تطابقين وإرجاع `["a", "a"]` لأن احرف `a` ليست متتالية - هناك `b` بينها. أخيرا، بما أنه لا يوجد `a` في السلسلة `bcd`، فإنه لن يجد مطابقة.

# --instructions--

تريد العثور على مطابقات عندما يحدث الحرف `s` مرة أو أكثر في `Mississippi`. اكتب regex يستخدم علامة `+`.

# --hints--

يجب أن يستخدم `myRegex` علامة `+` لمطابقة حرف `s` واحد أو أكثر.

```js
assert(/\+/.test(myRegex.source));
```

يجب أن يطابق الـ regex الخاص بك `myRegex` عنصرين.

```js
assert(result.length == 2);
```

متغير `result` يجب أن يكون array مع تطابقين من `ss`

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
