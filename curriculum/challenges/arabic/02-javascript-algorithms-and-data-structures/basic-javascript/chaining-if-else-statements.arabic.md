---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1
videoUrl: ''
localeTitle: تسلسل إذا كانت تصريحات أخرى
---

## Description
<section id="description"> <code>if/else</code> يمكن ربط عبارات <code>if/else</code> معًا لمنطق معقد. هنا هو <dfn>pseudocode</dfn> متعددة متعددة السلاسل <code>if</code> / <code>else if</code> العبارات: <blockquote style=";text-align:right;direction:rtl"> إذا ( <em>condition1</em> ) { <br> <em>statement1</em> <br> } آخر إذا ( <em>condition2</em> ) { <br> <em>statement2</em> <br> } آخر إذا ( <em>condition3</em> ) { <br> <em>statement3</em> <br> . . . <br> } آخر { <br> <em>statementN</em> <br> } </blockquote></section>

## Instructions
<section id="instructions"> كتابة مقيد <code>if</code> / <code>else if</code> عبارات تفي بالشروط التالية: <code>num &lt; 5</code> - return &quot;Tiny&quot; <br> <code>num &lt; 10</code> - عودة &quot;صغير&quot; <br> <code>num &lt; 15</code> - عودة &quot;متوسطة&quot; <br> <code>num &lt; 20</code> - عودة &quot;كبير&quot; <br> <code>num &gt;= 20</code> - return &quot;Huge&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لديك على الأقل أربع <code>else</code> البيانات
    testString: 'assert(code.match(/else/g).length > 3, "You should have at least four <code>else</code> statements");'
  - text: يجب أن يكون لديك أربعة على الأقل <code>if</code> البيانات
    testString: 'assert(code.match(/if/g).length > 3, "You should have at least four <code>if</code> statements");'
  - text: يجب أن يكون لديك بيان <code>return</code> واحد على الأقل
    testString: 'assert(code.match(/return/g).length >= 1, "You should have at least one <code>return</code> statement");'
  - text: يجب أن ترجع <code>testSize(0)</code> &quot;صغيرة&quot;
    testString: 'assert(testSize(0) === "Tiny", "<code>testSize(0)</code> should return "Tiny"");'
  - text: يجب أن ترجع <code>testSize(4)</code> &quot;صغيرة&quot;
    testString: 'assert(testSize(4) === "Tiny", "<code>testSize(4)</code> should return "Tiny"");'
  - text: <code>testSize(5)</code> إرجاع &quot;صغير&quot;
    testString: 'assert(testSize(5) === "Small", "<code>testSize(5)</code> should return "Small"");'
  - text: <code>testSize(8)</code> إرجاع &quot;صغير&quot;
    testString: 'assert(testSize(8) === "Small", "<code>testSize(8)</code> should return "Small"");'
  - text: <code>testSize(10)</code> إرجاع &quot;Medium&quot;
    testString: 'assert(testSize(10) === "Medium", "<code>testSize(10)</code> should return "Medium"");'
  - text: <code>testSize(14)</code> إرجاع &quot;Medium&quot;
    testString: 'assert(testSize(14) === "Medium", "<code>testSize(14)</code> should return "Medium"");'
  - text: <code>testSize(15)</code> إرجاع &quot;كبير&quot;
    testString: 'assert(testSize(15) === "Large", "<code>testSize(15)</code> should return "Large"");'
  - text: <code>testSize(17)</code> إرجاع &quot;كبير&quot;
    testString: 'assert(testSize(17) === "Large", "<code>testSize(17)</code> should return "Large"");'
  - text: <code>testSize(20)</code> إرجاع &quot;ضخم&quot;
    testString: 'assert(testSize(20) === "Huge", "<code>testSize(20)</code> should return "Huge"");'
  - text: <code>testSize(25)</code> إرجاع &quot;ضخم&quot;
    testString: 'assert(testSize(25) === "Huge", "<code>testSize(25)</code> should return "Huge"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
