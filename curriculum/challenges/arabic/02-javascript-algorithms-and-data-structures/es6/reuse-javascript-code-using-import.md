---
id: 587d7b8c367417b2b2512b55
title: إعادة استخدام كود جافا سكريبت باستخدام الاستيراد (Reuse JavaScript Code Using import)
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

يسمح لك `import` باختيار أجزاء الملف أو الوحدة المراد تحميلها. في الدرس السابق، تم تصدير `add` من ملف `math_functions.js`. إليك كيف يمكنك استيراده لاستخدامه في ملف آخر:

```js
import { add } from './math_functions.js';
```

هنا ، `import` سوف تجد `add` في `math_functions.js`، قم باستيراد هذه الوظيفة فقط لاستخدامها، وتجاهل البقية. الكود `./` يخبر الـ import بالبحث عن ملف `math_functions.js` في نفس المجلد مثل الملف الحالي. مسار الملف النسبي (`./`) وملحق الملف (`.js`) مطلوبين عند استخدام الاستيراد بهذه الطريقة.

يمكنك استيراد أكثر من عنصر واحد من الملف عن طريق إضافته في بيان `import` مثل هذا:

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

أضف بيان `import` المناسب الذي سيسمح للملف الحالي باستخدام الوظائف `uppercaseString` و `lowercaseString` التي قمت بتصديرها في الدرس السابق. هذه الوظائف موجودة في ملف يسمى `string_functions.js`، وهو في نفس المجلد مثل الملف الحالي.

# --hints--

يجب عليك استيراد `uppercaseString` بشكل صحيح.

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

يجب عليك استيراد `lowercaseString` بشكل صحيح.

```js
assert(
  code.match(
    /import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```
