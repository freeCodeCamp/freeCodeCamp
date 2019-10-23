---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنات مع المنطقية والمشغل
---

## Description
<section id="description"> في بعض الأحيان ستحتاج إلى اختبار أكثر من شيء واحد في كل مرة. إرجاع <dfn>المنطقية</dfn> والمشغل ( <code>&amp;&amp;</code> ) <code>true</code> إذا وفقط إذا كانت <dfn>المعاملات</dfn> إلى اليسار واليمين صحيحاً. يمكن تحقيق نفس التأثير بتضمين جملة if داخل أخرى إذا: <blockquote style=";text-align:right;direction:rtl"> if (num&gt; 5) { <br> إذا (عدد &lt;10) { <br> العودة &quot;نعم&quot; ؛ <br> } <br> } <br> العودة &quot;لا&quot; ؛ </blockquote> سيعود فقط &quot;نعم&quot; إذا <code>num</code> أكبر من <code>5</code> وأقل من <code>10</code> . نفس المنطق يمكن كتابته على النحو التالي: <blockquote style=";text-align:right;direction:rtl"> if (num&gt; 5 &amp; num &lt;10) { <br> العودة &quot;نعم&quot; ؛ <br> } <br> العودة &quot;لا&quot; ؛ </blockquote></section>

## Instructions
<section id="instructions"> قم بدمج العبارة &quot;if&quot; في عبارة واحدة والتي ستُرجع <code>&quot;Yes&quot;</code> إذا كان <code>val</code> أقل من أو يساوي <code>50</code> وأكبر من أو يساوي <code>25</code> . خلاف ذلك ، سيعود <code>&quot;No&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب عليك استخدام مشغل <code>&amp;&amp;</code> مرة واحدة
    testString: 'assert(code.match(/&&/g).length === 1, "You should use the <code>&&</code> operator once");'
  - text: يجب أن يكون لديك واحد فقط <code>if</code> البيان
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement");'
  - text: يجب أن ترجع <code>testLogicalAnd(0)</code> &quot;لا&quot;
    testString: 'assert(testLogicalAnd(0) === "No", "<code>testLogicalAnd(0)</code> should return "No"");'
  - text: <code>testLogicalAnd(24)</code> يجب أن ترجع &quot;لا&quot;
    testString: 'assert(testLogicalAnd(24) === "No", "<code>testLogicalAnd(24)</code> should return "No"");'
  - text: <code>testLogicalAnd(25)</code> يجب أن ترجع &quot;Yes&quot;
    testString: 'assert(testLogicalAnd(25) === "Yes", "<code>testLogicalAnd(25)</code> should return "Yes"");'
  - text: يجب أن ترجع <code>testLogicalAnd(30)</code> &quot;نعم&quot;
    testString: 'assert(testLogicalAnd(30) === "Yes", "<code>testLogicalAnd(30)</code> should return "Yes"");'
  - text: يجب أن ترجع <code>testLogicalAnd(50)</code> &quot;نعم&quot;
    testString: 'assert(testLogicalAnd(50) === "Yes", "<code>testLogicalAnd(50)</code> should return "Yes"");'
  - text: <code>testLogicalAnd(51)</code> يجب أن ترجع &quot;لا&quot;
    testString: 'assert(testLogicalAnd(51) === "No", "<code>testLogicalAnd(51)</code> should return "No"");'
  - text: يجب أن <code>testLogicalAnd(75)</code> &quot;لا&quot;
    testString: 'assert(testLogicalAnd(75) === "No", "<code>testLogicalAnd(75)</code> should return "No"");'
  - text: <code>testLogicalAnd(80)</code> يجب أن ترجع &quot;لا&quot;
    testString: 'assert(testLogicalAnd(80) === "No", "<code>testLogicalAnd(80)</code> should return "No"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
