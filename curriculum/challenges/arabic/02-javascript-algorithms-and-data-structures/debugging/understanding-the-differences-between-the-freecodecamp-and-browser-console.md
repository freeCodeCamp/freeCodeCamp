---
id: 587d7b83367417b2b2512b37
title: فهم الاختلافات بين وحدة تحكم المتصفح (Browser Console) و freeCodeCamp
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

ربما لاحظتم أن بعض تحديات freeCodeCamp تشمل وحدة التحكم الخاصة بها. تتصرف هذه الوحدة بشكل مختلف قليلا عن وحدة تحكم المتصفح.

هناك العديد من الطرق لاستخدام `console` لإخراج الرسائل. علي سبيل المثال `log`, و`warn`, و `clear`. وحدة تحكم freeCodeCamp ستخرج فقط `log` رسائل، في حين أن وحدة التحكم في المتصفح ستخرج جميع الرسائل. عند إجراء تغييرات على الكود الخاص بك، سيتم تشغيلها تلقائياً وإظهار السجلات. ثم يتم مسح وحدة تحكم freeCodeCamp في كل مرة يتم فيها تشغيل الكود.

# --instructions--

أولا، افتح وحدة تحكم المتصفح الخاصة بك حتى تتمكن من رؤية السجلات. للقيام بذلك، يمكنك النقر بزر الماوس الأيمن (right-click) على شريط freeCodeCamp في الأعلى وانقر فوق `inspect`. ثم اعثر على علامة التبويب `console` في النافذة التي تفتح.

بعد ذلك، استخدم `console.log` لتسجيل `output` المتغير. قم بعرض وحدتي التحكم لمشاهدة السجل. أخيرا، استخدم `console.clear` بعد السجل الخاص بك لمسح وحدة تحكم المتصفح. قم بعرض الفرق في وحدتي التحكم.

# --hints--

يجب عليك استخدام `console.log()` لطباعة `output` المتغير.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

يجب عليك استخدام `console.clear()` لمسح وحدة تحكم المتصفح.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

يجب عليك مسح وحدة التحكم بعد السجل الخاص بك.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```
