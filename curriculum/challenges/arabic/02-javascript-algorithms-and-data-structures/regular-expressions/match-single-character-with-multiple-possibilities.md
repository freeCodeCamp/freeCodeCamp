---
id: 587d7db5367417b2b2512b95
title: مطابقة رمز فردي مع احتمالات متعددة (Match Single Character with Multiple Possibilities)
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

تعلمت كيفية مطابقة الأنماط الحرفية (`/literal/`) و wildcard character (`/./`). هذه هي أقصى درجات العبارات النمطية، حيث يجد احدهم التطابقات الدقيقة والآخر يطابق كل شيء. وهناك خيارات تمثل توازنا بين الطرفين.

يمكنك البحث عن نمط حرفي مع بعض المرونة باستخدام <dfn>character classes</dfn>. تتيح لك Character classes تعريف مجموعة من الأحرف التي ترغب في تطابقها عن طريق وضعها داخل الأقواس المربعة (`[` و `]`).

على سبيل المثال، تريد مطابقة `bag` و `big` و `bug` ولكن ليس `bog`. يمكنك إنشاء regex الآتي `/b[aiu]g/` للقيام بذلك. `[aiu]` هي character class التي ستطابق فقط الأحرف `a` او `i` او `u`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

بالترتيب، ستعيد الاستدعائات الاربعة لـ `match` القيم `["big"]` و `["bag"]` و `["bug"]` و `null`.

# --instructions--

استخدم character class مع حروف (`a`, `e`, `i`, `o`, `u`) في regex الخاص بك `vowelRegex` للعثور على جميع الـ vowels في المقطع النصي `quoteSample`.

**ملاحظة**: تأكد من مطابقة الـ vowels الكبيرة و الصغيرة.

# --hints--

يجب أن تجد جميع الـ 25 vowels.

```js
assert(result.length == 25);
```

يجب أن يستخدم الـ regex الخاص بك `vowelRegex` الـ character class.

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

يجب أن يستخدم الـ regex الخاص بك `vowelRegex` الـ global flag.

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

يجب أن يستخدم الـ regex الخاص بك `vowelRegex` الـ case insensitive flag.

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

لا يجب أن يتطابق regex مع أي consonants.

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
