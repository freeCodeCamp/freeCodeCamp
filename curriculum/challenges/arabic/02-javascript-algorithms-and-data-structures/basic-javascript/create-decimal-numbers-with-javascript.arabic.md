---
id: cf1391c1c11feddfaeb4bdef
title: Create Decimal Numbers with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: قم بإنشاء أرقام عشرية باستخدام جافا سكريبت
---

## Description
<section id="description"> يمكننا تخزين الأرقام العشرية في المتغيرات أيضًا. ويشار إلى الأرقام العشرية في بعض الأحيان باسم أرقام <dfn>النقطة العائمة</dfn> أو <dfn>العوامات</dfn> . <strong>ملحوظة</strong> <br> لا يمكن تمثيل جميع الأرقام الحقيقية بدقة في <dfn>نقطة عائمة</dfn> . هذا يمكن أن يؤدي إلى أخطاء التقريب. <a href="https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems" target="_blank">التفاصيل هنا</a> . </section>

## Instructions
<section id="instructions"> إنشاء متغير <code>myDecimal</code> وإعطائه قيمة عشرية مع جزء كسري (على سبيل المثال <code>5.7</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>myDecimal</code> رقمًا.
    testString: 'assert(typeof myDecimal === "number", "<code>myDecimal</code> should be a number.");'
  - text: <code>myDecimal</code> يجب أن يكون لديك <code>myDecimal</code> العشرية
    testString: 'assert(myDecimal % 1 != 0, "<code>myDecimal</code> should have a decimal point"); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var ourDecimal = 5.7;

// Only change code below this line

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
