---
id: 587d7db6367417b2b2512b98
title: مطابقة رموز فردية غير محددة (Match Single Characters Not Specified)
challengeType: 1
forumTopicId: 301358
dashedName: match-single-characters-not-specified
---

# --description--

حتى الآن، لقد أنشأت مجموعة من الرموز التي تريد أن تطابقها، ولكن يمكنك أيضا إنشاء مجموعة من الرموز التي لا ترد أن تطابقها. هذه الأنواع من مجموعات الرموز تسمى <dfn>negated character sets</dfn>.

لإنشاء negated character set، يمكنك وضع رمز (`^`) بعد قوس الفتح وقبل الرموز التي لا ترد مطابقتها.

على سبيل المثال، `/[^aeiou]/gi` يطابق جميع الرموز التي ليست حرف متحرك (vowel). لاحظ أن رموز مثل `.`, و`!`, و `[`, و`@`, و `/` والمسافة الفارغة (white space)، يتم مطابقتهم - تستبعد negated vowel character set أحرف العلة فقط (vowel characters).

# --instructions--

أنشئ regex واحد يطابق جميع الرموز التي ليست رقما أو vowel. تذكر أن تدرج الـ flags المناسبة في الـ regex.

# --hints--

يجب أن يطابق الـ regex الخاص بك `myRegex` ٩ عناصر.

```js
assert(result.length == 9);
```

يجب أن يستخدم الـ regex الخاص بك `myRegex` خاصية global flag.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

يجب أن يستخدم الـ regex الخاص بك `myRegex` خاصية case insensitive flag.

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
