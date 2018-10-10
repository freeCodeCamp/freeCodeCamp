---
id: 56533eb9ac21ba0edf2244d6
title: Comparison with the Less Than Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنة مع أقل من المشغل
---

## Description
<section id="description"> يقارن <dfn>أقل من</dfn> المشغل ( <code>&lt;</code> ) قيم رقمين. إذا كان الرقم إلى اليسار أقل من الرقم إلى اليمين ، فسيعود إلى الحالة <code>true</code> . خلاف ذلك ، فإنها ترجع <code>false</code> . مثل المشغل المساواة ، <dfn>أقل من</dfn> المشغل يحول أنواع البيانات أثناء مقارنة. <strong>أمثلة</strong> <blockquote style=";text-align:right;direction:rtl"> 2 &lt;5 / صحيح <br> &quot;3&quot; &lt;7 // صحيح <br> 5 &lt;5 // خاطئة <br> 3 &lt;2 // false <br> &quot;8&quot; &lt;4 // كاذبة </blockquote></section>

## Instructions
<section id="instructions"> إضافة <code>less than</code> المشغل إلى الخطوط المشار إليها بحيث تكون عبارات العودة منطقية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ترجع <code>testLessThan(0)</code> &quot;تحت 25&quot;
    testString: 'assert(testLessThan(0) === "Under 25", "<code>testLessThan(0)</code> should return "Under 25"");'
  - text: يجب أن ترجع <code>testLessThan(24)</code> &quot;تحت 25&quot;
    testString: 'assert(testLessThan(24) === "Under 25", "<code>testLessThan(24)</code> should return "Under 25"");'
  - text: يجب أن ترجع <code>testLessThan(25)</code> &quot;تحت 55&quot;
    testString: 'assert(testLessThan(25) === "Under 55", "<code>testLessThan(25)</code> should return "Under 55"");'
  - text: يجب أن ترجع <code>testLessThan(54)</code> &quot;تحت 55&quot;
    testString: 'assert(testLessThan(54) === "Under 55", "<code>testLessThan(54)</code> should return "Under 55"");'
  - text: <code>testLessThan(55)</code> إرجاع &quot;55 أو أكثر&quot;
    testString: 'assert(testLessThan(55) === "55 or Over", "<code>testLessThan(55)</code> should return "55 or Over"");'
  - text: يجب أن ترجع <code>testLessThan(99)</code> &quot;55 أو أكثر&quot;
    testString: 'assert(testLessThan(99) === "55 or Over", "<code>testLessThan(99)</code> should return "55 or Over"");'
  - text: يجب عليك استخدام <code>&lt;</code> المشغل مرتين على الأقل
    testString: 'assert(code.match(/val\s*<\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&lt;</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
