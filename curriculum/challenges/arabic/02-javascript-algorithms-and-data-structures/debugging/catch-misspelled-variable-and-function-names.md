---
id: 587d7b84367417b2b2512b35
title: إدراك الأخطاء الإملائية في أسماء المتغيرات والوظيفة (Catch Misspelled Variable and Function Names)
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

يكونا `console.log()` و `typeof` الطرقتان الرئيستان للتحقق من القيم وأنواعها في الكود. الآن حان الوقت للدخول في الأشكال الشائعة التي تأخذها الأخطاء (bugs). أحد المشاكل ويقع فيه بالذات الكتبة السريعين هو الخطأ الإملائي المتواضع (humble spelling error).

الأحرف المبدلة، المفقودة، أو الأحرف كبيرة بالخطأ (mis-capitalized) في اسم متغير أو وظيفة سيجعل المتصفح يبحث عن شيء غير موجود - ويبلغ عن خطأ مرجعي (reference error). في لغة JavaScript أسماء المتغير والوظائف هي حساسة لحالة الأحرف (case-sensitive).

# --instructions--

أصحّح الخطأين الإملائيان في الكود بحيث تجري العملية الحسابية `netWorkingCapital` بشكل صحيح.

# --hints--

تحقق من أملاء المتغيرات المستخدمَين في حساب netWorkingCapital، يجب أن يظهر النص الآتي "Net working capital is: 2" في وحدة التحكم.

```js
assert(netWorkingCapital === 2);
```

لا ينبغي أن تكون هناك استخدامات للمتغيرات تملى بشكل خاطئ في الكود.

```js
assert(!code.match(/recievables/g));
```

يجب إعلان متغير باسم `receivables` واستخدامه بشكل صحيح في الكود.

```js
assert(code.match(/receivables/g).length == 2);
```

لا ينبغي أن تكون هناك استخدامات للمتغيرات تملى بشكل خاطئ في الكود.

```js
assert(!code.match(/payable;/g));
```

يجب إعلان متغير باسم `payables` واستخدامه بشكل صحيح في الكود.

```js
assert(code.match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```
