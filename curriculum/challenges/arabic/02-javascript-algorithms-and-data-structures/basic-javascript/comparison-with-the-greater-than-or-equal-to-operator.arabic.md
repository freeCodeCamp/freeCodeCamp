---
id: 56533eb9ac21ba0edf2244d5
title: Comparison with the Greater Than Or Equal To Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنة مع أكبر من أو يساوي المشغل
---

## Description
<section id="description"> يقارن العامل <code>greater than or equal to</code> ( <code>&gt;=</code> ) قيم رقمين. إذا كان الرقم إلى اليسار أكبر من أو يساوي الرقم إلى اليمين ، فإنه يُرجع <code>true</code> . خلاف ذلك ، فإنها ترجع <code>false</code> . مثل مشغل عامل المساواة ، فإن <code>greater than or equal to</code> المشغل سيقوم بتحويل أنواع البيانات أثناء المقارنة. <strong>أمثلة</strong> <blockquote style=";text-align:right;direction:rtl"> 6&gt; = 6 // true <br> 7&gt; = &#39;3&#39; // true <br> 2&gt; = 3 // false <br> &#39;7&#39;&gt; = 9 // false </blockquote></section>

## Instructions
<section id="instructions"> إضافة <code>greater than or equal to</code> المشغل إلى الخطوط المشار إليها بحيث تكون عبارات العودة منطقية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>testGreaterOrEqual(0)</code> &quot;أقل من 10&quot;
    testString: 'assert(testGreaterOrEqual(0) === "Less than 10", "<code>testGreaterOrEqual(0)</code> should return "Less than 10"");'
  - text: <code>testGreaterOrEqual(9)</code> إرجاع &quot;أقل من 10&quot;
    testString: 'assert(testGreaterOrEqual(9) === "Less than 10", "<code>testGreaterOrEqual(9)</code> should return "Less than 10"");'
  - text: يجب أن <code>testGreaterOrEqual(10)</code> &quot;10 أو أكثر&quot;
    testString: 'assert(testGreaterOrEqual(10) === "10 or Over", "<code>testGreaterOrEqual(10)</code> should return "10 or Over"");'
  - text: <code>testGreaterOrEqual(11)</code> إرجاع &quot;10 أو أكثر&quot;
    testString: 'assert(testGreaterOrEqual(11) === "10 or Over", "<code>testGreaterOrEqual(11)</code> should return "10 or Over"");'
  - text: <code>testGreaterOrEqual(19)</code> إرجاع &quot;10 أو أكثر&quot;
    testString: 'assert(testGreaterOrEqual(19) === "10 or Over", "<code>testGreaterOrEqual(19)</code> should return "10 or Over"");'
  - text: يجب أن <code>testGreaterOrEqual(100)</code> &quot;20 أو أكثر&quot;
    testString: 'assert(testGreaterOrEqual(100) === "20 or Over", "<code>testGreaterOrEqual(100)</code> should return "20 or Over"");'
  - text: <code>testGreaterOrEqual(21)</code> إرجاع &quot;20 أو أكثر&quot;
    testString: 'assert(testGreaterOrEqual(21) === "20 or Over", "<code>testGreaterOrEqual(21)</code> should return "20 or Over"");'
  - text: يجب عليك استخدام <code>&gt;=</code> عامل التشغيل على الأقل مرتين
    testString: 'assert(code.match(/val\s*>=\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&gt;=</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
