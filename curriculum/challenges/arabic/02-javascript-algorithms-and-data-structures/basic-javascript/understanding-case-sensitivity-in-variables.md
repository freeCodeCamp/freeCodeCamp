---
id: 56533eb9ac21ba0edf2244ab
title: فهم حساسية الحالة الحروف في المتغيرات
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

في JavaScript جميع المتغيرات وأسماء الوظائف حساسة لحالة الأحرف أي case sensitive. هذا يعني أن الكتابة بالأحرف الكبيرة (capitalization) شيئ مؤثر.

لا يكون `MYVAR` مثل `MyVar` أو `myvar`. من الممكن أن يكون لديك متغيرات مميزة متعددة بنفس الاسم ولكن بحالات مختلف. يوصى بشدة، من أجل الوضوح، *عدم* استخدام مِيزة اللغة هذه.

**أفضل ممارسة**

كتابة أسماء المتغيرات في JavaScript باستخدام <dfn>camelCase</dfn>. في <dfn>camelCase</dfn>، تحتوي أسماء المتغيرات المتعددة الكلمات على الكلمة الأولى بالأحرف الصغيرة ويتم كتابة الحرف الأول من كل كلمة لاحقة بحروف كبيرة.

**على سبيل المثال:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

عدّل الإعلانات والتخصيصات الحالية بحيث تستخدم أسماؤها <dfn>camelCase</dfn>.

لا تنشئ أي متغيرات جديدة.

# --hints--

يجب أن يتم تعريف `studlyCapVar` وأن تكون قيمتها `10`.

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

يجب أن يتم تعريف`properCamelCase` وأن تكون له قيمة المقطع النصي `A String`.

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

يجب أن يتم تعريف `titleCaseOver` وأن تكون قيمتها `9000`.

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

يجب أن يستخدم `studlyCapVar` حالة camelCase في كل من أقسام الإعلان والتخصيص.

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

يجب أن يستخدم `properCamelCase` حالة camelCase في كل من أقسام التعريف والتخصيص.

```js
assert(code.match(/properCamelCase/g).length === 2);
```

يجب أن يستخدم `titleCaseOver` حالة camelCase في كل من أقسام التعريف و التخصيص.

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

# --solutions--

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
