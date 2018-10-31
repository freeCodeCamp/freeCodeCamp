---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنة مع مشغل المساواة
---

## Description
<section id="description"> هناك العديد من <dfn>مشغلي المقارنة</dfn> في JavaScript. كل هذه العوامل إرجاع منطقية <code>true</code> أو <code>false</code> القيمة. المشغل الأساسي هو مشغل المساواة <code>==</code> . يقارن عامل المساواة بين قيمتين ويعرض <code>true</code> إذا كانت مكافئة أو <code>false</code> إذا لم تكن كذلك. لاحظ أن المساواة تختلف عن الواجب ( <code>=</code> ) ، الذي يعين القيمة على يمين المشغل إلى متغير في اليسار. <blockquote style=";text-align:right;direction:rtl"> الوظيفة equalestTest (myVal) { <br> if (myVal == 10) { <br> العودة &quot;يساوي&quot; ؛ <br> } <br> &quot;لا يساوي&quot;؛ <br> } </blockquote> إذا كانت <code>myVal</code> تساوي <code>10</code> ، <code>myVal</code> عامل التساوي <code>true</code> ، لذا سيتم تنفيذ الشفرة في الأقواس المتعرجة ، وستعرض الدالة <code>&quot;Equal&quot;</code> . خلاف ذلك ، ستقوم الدالة بإرجاع <code>&quot;Not Equal&quot;</code> . لكي تتمكن JavaScript من مقارنة نوعين مختلفين من <code>data types</code> (على سبيل المثال ، <code>numbers</code> <code>strings</code> ) ، يجب أن تقوم بتحويل نوع واحد إلى آخر. هذا هو المعروف باسم &quot;نوع الإكراه&quot;. وبمجرد الانتهاء من ذلك ، يمكن مقارنة الشروط كما يلي: <blockquote style=";text-align:right;direction:rtl"> 1 == 1 // true <br> 1 == 2 // false <br> 1 == &#39;1&#39; // true <br> &quot;3&quot; == 3 // true </blockquote></section>

## Instructions
<section id="instructions"> أضف <code>equality operator</code> إلى الخط المحدد بحيث تقوم الدالة بإرجاع &quot;Equal&quot; عندما يكون <code>val</code> مساويًا لـ <code>12</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testEqual(10)</code> يجب أن ترجع &quot;غير مساوي&quot;
    testString: 'assert(testEqual(10) === "Not Equal", "<code>testEqual(10)</code> should return "Not Equal"");'
  - text: <code>testEqual(12)</code> يجب أن ترجع &quot;Equal&quot;
    testString: 'assert(testEqual(12) === "Equal", "<code>testEqual(12)</code> should return "Equal"");'
  - text: <code>testEqual(&quot;12&quot;)</code> إرجاع &quot;Equal&quot;
    testString: 'assert(testEqual("12") === "Equal", "<code>testEqual("12")</code> should return "Equal"");'
  - text: يجب عليك استخدام عامل التشغيل <code>==</code>
    testString: 'assert(code.match(/==/g) && !code.match(/===/g), "You should use the <code>==</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
