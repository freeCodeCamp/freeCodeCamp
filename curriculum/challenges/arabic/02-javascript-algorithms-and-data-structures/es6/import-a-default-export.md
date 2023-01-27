---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

في التحدي الأخير، تعلمت عن `export default` واستخداماته. لاستيراد default export، تحتاج إلى استخدام صيغة `import` مختلفة. في المثال التالي، `add` هو الـ default export لملف `math_functions.js`. إليك كيفية استيرادها (import):

```js
import add from "./math_functions.js";
```

الـ syntax يختلف في مكان رئيسي واحد. القيمة المستوردة (imported)، `add`، ليست محاطة بأقواس متعرجة (`{}`). `add` هنا ببساطة اسم متغير لأيا كان الـ default export لـ ملف `math_functions.js`. يمكنك استخدام أي اسم هنا عند استيراد default.

# --instructions--

في الكود التالي، قم باستيراد default export من ملف `math_functions.js`، الموجود في نفس الدليل مثل هذا الملف. قم بإعطاء الاستيراد اسم `subtract`.

# --hints--

يجب عليك استيراد `subtract` بشكل صحيح من `math_functions.js`.

```js
assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

subtract(7,4);
```

# --solutions--

```js
import subtract from "./math_functions.js";

subtract(7,4);
```
