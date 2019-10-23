---
id: 56533eb9ac21ba0edf2244d4
title: Comparison with the Greater Than Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنة مع أكبر من المشغل
---

## Description
<section id="description"> أكبر من المشغل ( <code>&gt;</code> ) يقارن قيم رقمين. إذا كان الرقم إلى اليسار أكبر من الرقم إلى اليمين ، فسيعود إلى <code>true</code> . خلاف ذلك ، فإنها ترجع <code>false</code> . مثل المشغل المساواة ، أكبر من المشغل سوف يحول أنواع البيانات من القيم في حين مقارنة. <strong>أمثلة</strong> <blockquote style=";text-align:right;direction:rtl"> 5&gt; 3 // صحيح <br> 7&gt; &#39;3&#39; // true <br> 2&gt; 3 // false <br> &#39;1&#39;&gt; 9 // false </blockquote></section>

## Instructions
<section id="instructions"> إضافة <code>greater than</code> المشغل إلى الخطوط المشار إليها بحيث تكون عبارات العودة منطقية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>testGreaterThan(0)</code> &quot;10 أو أقل&quot;
    testString: 'assert(testGreaterThan(0) === "10 or Under", "<code>testGreaterThan(0)</code> should return "10 or Under"");'
  - text: <code>testGreaterThan(10)</code> إرجاع &quot;10 أو أقل&quot;
    testString: 'assert(testGreaterThan(10) === "10 or Under", "<code>testGreaterThan(10)</code> should return "10 or Under"");'
  - text: يجب أن ترجع <code>testGreaterThan(11)</code> &quot;أكثر من 10&quot;
    testString: 'assert(testGreaterThan(11) === "Over 10", "<code>testGreaterThan(11)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(99)</code> إرجاع &quot;أكثر من 10&quot;
    testString: 'assert(testGreaterThan(99) === "Over 10", "<code>testGreaterThan(99)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(100)</code> إرجاع &quot;أكثر من 10&quot;
    testString: 'assert(testGreaterThan(100) === "Over 10", "<code>testGreaterThan(100)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(101)</code> إرجاع &quot;أكثر من 100&quot;
    testString: 'assert(testGreaterThan(101) === "Over 100", "<code>testGreaterThan(101)</code> should return "Over 100"");'
  - text: <code>testGreaterThan(150)</code> إرجاع &quot;أكثر من 100&quot;
    testString: 'assert(testGreaterThan(150) === "Over 100", "<code>testGreaterThan(150)</code> should return "Over 100"");'
  - text: يجب عليك استخدام <code>&gt;</code> مشغل على الأقل مرتين
    testString: 'assert(code.match(/val\s*>\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&gt;</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
