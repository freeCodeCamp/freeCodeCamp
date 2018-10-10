---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنة مع مشغل عدم المساواة
---

## Description
<section id="description"> عامل عدم المساواة ( <code>!=</code> ) هو عكس مشغل المساواة. يعني &quot;غير متساوٍ&quot; ويعيد <code>false</code> حيث أن المساواة ستعود <code>true</code> <em>والعكس صحيح</em> . وعلى غرار مشغل المساواة ، يقوم مشغل عدم المساواة بتحويل أنواع البيانات من القيم عند المقارنة. <strong>أمثلة</strong> <blockquote style=";text-align:right;direction:rtl"> 1! = 2 / صحيح <br> 1! = &quot;1&quot; // false <br> 1! = &#39;1&#39; // false <br> 1! = true // false <br> 0! = false // false </blockquote></section>

## Instructions
<section id="instructions"> إضافة عامل عدم المساواة <code>!=</code> في جملة <code>if</code> بحيث تقوم الدالة بإرجاع &quot;غير مساوي&quot; عندما لا يكون <code>val</code> مساوياً لـ <code>99</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testNotEqual(99)</code> يجب أن ترجع &quot;Equal&quot;
    testString: 'assert(testNotEqual(99) === "Equal", "<code>testNotEqual(99)</code> should return "Equal"");'
  - text: <code>testNotEqual(&quot;99&quot;)</code> يجب أن يقوم بإرجاع &quot;Equal&quot;
    testString: 'assert(testNotEqual("99") === "Equal", "<code>testNotEqual("99")</code> should return "Equal"");'
  - text: يجب أن <code>testNotEqual(12)</code> &quot;غير مساوي&quot;
    testString: 'assert(testNotEqual(12) === "Not Equal", "<code>testNotEqual(12)</code> should return "Not Equal"");'
  - text: <code>testNotEqual(&quot;12&quot;)</code> &quot;غير مساوي&quot;
    testString: 'assert(testNotEqual("12") === "Not Equal", "<code>testNotEqual("12")</code> should return "Not Equal"");'
  - text: <code>testNotEqual(&quot;bob&quot;)</code> &quot;غير مساوي&quot;
    testString: 'assert(testNotEqual("bob") === "Not Equal", "<code>testNotEqual("bob")</code> should return "Not Equal"");'
  - text: يجب عليك استخدام <code>!=</code> عامل التشغيل
    testString: 'assert(code.match(/(?!!==)!=/), "You should use the <code>!=</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
