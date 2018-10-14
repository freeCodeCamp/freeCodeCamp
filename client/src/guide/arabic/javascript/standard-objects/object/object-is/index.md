---
title: Object Is
localeTitle: الكائن هو
---
# الكائن هو

## وصف

يتم استخدام الأسلوب `object.is()` لتحديد ما إذا كانت قيمتين هي نفس القيمة. تم تقديم هذه الطريقة في ES6.

## بناء الجملة

`Object.is(val1, val2)`

### المعلمات

**val1** - القيمة الأولى للمقارنة

**val2** - القيمة الثانية للمقارنة

## قيمة الإرجاع

A [Boolean](https://guide.freecodecamp.org/javascript/booleans) يشير إلى ما إذا كانت الوسيطتان لهما نفس القيمة

## وصف

يقارن `Object.is()` ، ويعود إلى `true` إذا استوفيت كلتا القيمتين أحد الشروط التالية:

*   `undefined`
*   `null`
*   كلاهما `true` أو `false`
*   سلسلة من نفس الطول ونفس الأحرف
*   نفس الشيء
*   كل من الأرقام و:
*   كل من `+0` أو كليهما `-0`
*   كلا `NaN`
*   أو كلاهما رقم ليس صفرا وليس `NaN`

## أمثلة

\`\` \`

Object.is ('string' ، 'string')؛ // صحيح Object.is (غير محدد ، غير محدد) ؛ // صحيح Object.is (فارغة ، خالية) ؛ // صحيح

Object.is ('string ،' word ')؛ // خاطئة Object.is (صواب ، خطأ) ؛ // خاطئة Object.is (\[\] ، \[\]) ؛ //خاطئة

var obj = {name: Jane}؛ Object.is (obj، obj)؛ // صحيح

Object.is (NaN، NaN)؛ // صحيح

Object.is (+0، -0)؛ // خاطئة Object.is (-0، -0)؛ // صحيح

\`\` \`

#### معلومات اكثر:

[Object.is () MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) [عامل مساواة صارم `===`](https://guide.freecodecamp.org/certificates/comparison-with-the-strict-equality-operator)