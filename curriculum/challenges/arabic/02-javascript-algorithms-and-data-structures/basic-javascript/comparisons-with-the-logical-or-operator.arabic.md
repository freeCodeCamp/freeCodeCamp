---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنات مع المنطقي أو المشغل
---

## Description
<section id="description"> إرجاع <dfn>المنطقية أو</dfn> عامل التشغيل ( <code>||</code> ) <code>true</code> إذا كان أي من <dfn>المعاملات</dfn> <code>true</code> . خلاف ذلك ، فإنها ترجع <code>false</code> . <dfn>المنطقي أو</dfn> المشغل يتكون من اثنين من رموز الأنبوب ( <code>|</code> ). يمكن العثور على ذلك عادةً بين مفتاحي Backspace و Enter. يجب أن يبدو النمط أدناه مألوفًا من نقاط الطريق السابقة: <blockquote style=";text-align:right;direction:rtl"> if (num&gt; 10) { <br> العودة &quot;لا&quot; ؛ <br> } <br> إذا (عدد &lt;5) { <br> العودة &quot;لا&quot; ؛ <br> } <br> العودة &quot;نعم&quot; ؛ </blockquote> سيعود &quot;نعم&quot; إلا إذا <code>num</code> ما بين <code>5</code> و <code>10</code> (5 و 10 مدرجة). نفس المنطق يمكن كتابته على النحو التالي: <blockquote style=";text-align:right;direction:rtl"> if (num&gt; 10 || num &lt;5) { <br> العودة &quot;لا&quot; ؛ <br> } <br> العودة &quot;نعم&quot; ؛ </blockquote></section>

## Instructions
<section id="instructions"> اجمع بين العبارة &quot; <code>if</code> في عبارة واحدة والتي تُرجع <code>&quot;Outside&quot;</code> إذا لم يكن <code>val</code> ما بين <code>10</code> و <code>20</code> ضمناً. خلاف ذلك ، والعودة <code>&quot;Inside&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب عليك استخدام <code>||</code> عامل مرة واحدة
    testString: 'assert(code.match(/\|\|/g).length === 1, "You should use the <code>||</code> operator once");'
  - text: يجب أن يكون لديك واحد فقط <code>if</code> البيان
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement");'
  - text: يجب أن ترجع <code>testLogicalOr(0)</code> &quot;خارج&quot;
    testString: 'assert(testLogicalOr(0) === "Outside", "<code>testLogicalOr(0)</code> should return "Outside"");'
  - text: يجب أن ترجع <code>testLogicalOr(9)</code> &quot;خارج&quot;
    testString: 'assert(testLogicalOr(9) === "Outside", "<code>testLogicalOr(9)</code> should return "Outside"");'
  - text: <code>testLogicalOr(10)</code> إرجاع &quot;Inside&quot;
    testString: 'assert(testLogicalOr(10) === "Inside", "<code>testLogicalOr(10)</code> should return "Inside"");'
  - text: <code>testLogicalOr(15)</code> إرجاع &quot;Inside&quot;
    testString: 'assert(testLogicalOr(15) === "Inside", "<code>testLogicalOr(15)</code> should return "Inside"");'
  - text: <code>testLogicalOr(19)</code> إرجاع &quot;Inside&quot;
    testString: 'assert(testLogicalOr(19) === "Inside", "<code>testLogicalOr(19)</code> should return "Inside"");'
  - text: <code>testLogicalOr(20)</code> إرجاع &quot;Inside&quot;
    testString: 'assert(testLogicalOr(20) === "Inside", "<code>testLogicalOr(20)</code> should return "Inside"");'
  - text: يجب أن ترجع <code>testLogicalOr(21)</code> &quot;خارج&quot;
    testString: 'assert(testLogicalOr(21) === "Outside", "<code>testLogicalOr(21)</code> should return "Outside"");'
  - text: يجب أن ترجع <code>testLogicalOr(25)</code> &quot;خارج&quot;
    testString: 'assert(testLogicalOr(25) === "Outside", "<code>testLogicalOr(25)</code> should return "Outside"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
