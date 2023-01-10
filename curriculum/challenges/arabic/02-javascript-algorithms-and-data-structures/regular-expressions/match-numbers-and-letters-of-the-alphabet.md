---
id: 587d7db5367417b2b2512b97
title: مطابقة أرقام وحروف الأبجدية (Match Numbers and Letters of the Alphabet)
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

استخدام الشَرطة (`-`) لمطابقة مجموعة من الرموز لا يقتصر على الأحرف فقط. هي تعمل أيضا لمطابقة مجموعة من الأرقام.

على سبيل المثال، `/[0-5]/` يطابق أي رقم بين `0` و `5`، يشمل `0` و `5`.

ومن الممكن أيضا الجمع بين مجموعة من الأحرف والأرقام في character set واحدة.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

قم بإنشاء regex واحد يتطابق مع مجموعة من الحروف بين `h` و `s`، ومجموعة من الأرقام بين `2` و `6`. تذكر أن تدرج الـ flags المناسبة في الـ regex.

# --hints--

يجب أن يطابق الـ regex الخاص بك `myRegex` ١٧ عنصر.

```js
assert(result.length == 17);
```

يجب أن يستخدم الـ regex الخاص بك `myRegex` الـ global flag.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

يجب أن يستخدم الـ regex الخاص بك `myRegex` الـ case insensitive flag.

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
