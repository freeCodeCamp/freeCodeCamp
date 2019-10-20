---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
challengeType: 1
videoUrl: ''
localeTitle: القبض على المتغيرات التي بها أخطاء في الأسماء والأسماء الدالة
---

## Description
<section id="description"> تعتبر أساليب <code>console.log()</code> و <code>typeof</code> هما طريقتان أساسيتان للتحقق من القيم المتوسطة وأنواع مخرجات البرنامج. الآن حان الوقت للوصول إلى الأشكال الشائعة التي تتخذها الحشرات. هناك مشكلة واحدة في بناء الجملة يمكن أن تتطابق معها الطابعات السريعة مع الخطأ الإملائي المتواضع. الأحرف المستعرضة أو المفقودة أو غير المكتوبة بطريقة خاطئة في متغير أو اسم وظيفي سوف يبحث المتصفح عن كائن غير موجود - ويشكو في شكل خطأ مرجعي. متغير جافا سكريبت وأسماء الدالة حساسة لحالة الأحرف. </section>

## Instructions
<section id="instructions"> قم <code>netWorkingCapital</code> الإملائيين في التعليمات البرمجية بحيث يعمل الحساب <code>netWorkingCapital</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'تحقق من هجاء المتغيرين المستخدم في حساب netWorkingCapital ، يجب أن يظهر إخراج وحدة التحكم "صافي رأس المال العامل هو: 2".'
    testString: 'assert(netWorkingCapital === 2, "Check the spelling of the two variables used in the netWorkingCapital calculation, the console output should show that "Net working capital is: 2".");'
  - text: يجب ألا تكون هناك حالات من متغيرات غير صحيحة في التعليمة البرمجية.
    testString: 'assert(!code.match(/recievables/g), "There should be no instances of mis-spelled variables in the code.");'
  - text: يجب الإعلان عن متغير <code>receivables</code> واستخدامه بشكل صحيح في الشفرة.
    testString: 'assert(code.match(/receivables/g).length == 2, "The <code>receivables</code> variable should be declared and used properly in the code.");'
  - text: يجب ألا تكون هناك حالات من متغيرات غير صحيحة في التعليمة البرمجية.
    testString: 'assert(!code.match(/payable;/g), "There should be no instances of mis-spelled variables in the code.");'
  - text: يجب الإعلان عن متغير <code>payables</code> واستخدامه بشكل صحيح في الشفرة.
    testString: 'assert(code.match(/payables/g).length == 2, "The <code>payables</code> variable should be declared and used properly in the code.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
