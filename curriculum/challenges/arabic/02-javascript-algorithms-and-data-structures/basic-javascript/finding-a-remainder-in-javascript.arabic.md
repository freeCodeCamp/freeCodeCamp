---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
videoUrl: ''
localeTitle: العثور على البقية في جافا سكريبت
---

## Description
<section id="description"> يعطي عامل <dfn>الباقي</dfn> <code>%</code> الباقي من قسم رقمين. <strong>مثال</strong> <blockquote style=";text-align:right;direction:rtl"> 5٪ 2 = 1 بسبب <br> Math.floor (5/2) = 2 (Quotient) <br> 2 * 2 = 4 <br> 5 - 4 = 1 (البقية) </blockquote> <strong>استعمال</strong> <br> في الرياضيات ، يمكن التحقق من الرقم ليكون زوجي أو فردي عن طريق فحص الجزء المتبقي من تقسيم الرقم إلى <code>2</code> . <blockquote style=";text-align:right;direction:rtl"> 17٪ 2 = 1 (17 فردي) <br> 48٪ 2 = 0 (48 حتى) </blockquote> <strong>ملحوظة</strong> <br> في بعض الأحيان يشار إلى مشغل <dfn>الباقي</dfn> بشكل غير صحيح باسم مشغل &quot;المعامل&quot;. وهي تشبه إلى حد بعيد المعامل ، ولكنها لا تعمل بشكل صحيح مع الأرقام السالبة. </section>

## Instructions
<section id="instructions"> حدد <code>remainder</code> مساويًا لما تبقى من <code>11</code> مقسومًا على <code>3</code> باستخدام عامل <dfn>الباقي</dfn> ( <code>%</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تهيئة المتغير <code>remainder</code>
    testString: 'assert(/var\s+?remainder/.test(code), "The variable <code>remainder</code> should be initialized");'
  - text: يجب أن تكون قيمة <code>remainder</code> <code>2</code>
    testString: 'assert(remainder === 2, "The value of <code>remainder</code> should be <code>2</code>");'
  - text: يجب عليك استخدام عامل التشغيل <code>%</code>
    testString: 'assert(/\s+?remainder\s*?=\s*?.*%.*;/.test(code), "You should use the <code>%</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line

var remainder;

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
