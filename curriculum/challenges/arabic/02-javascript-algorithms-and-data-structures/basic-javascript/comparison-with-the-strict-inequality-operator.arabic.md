---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنة مع مشغل عدم المساواة الصارم
---

## Description
<section id="description"> إن عامل عدم المساواة الصارم ( <code>!==</code> ) هو المقابل المنطقي للمشغل الصارم للمساواة. ويعني &quot;عدم التساوي في الدقة&quot; ويعود <code>false</code> حيث تعود المساواة الصارمة إلى <code>true</code> <em>والعكس صحيح</em> . عدم المساواة الصارمة لن تقوم بتحويل أنواع البيانات. <strong>أمثلة</strong> <blockquote style=";text-align:right;direction:rtl"> 3! == 3 // false <br> 3! == &#39;3&#39; // true <br> 4! == 3 // صحيح </blockquote></section>

## Instructions
<section id="instructions"> إضافة <code>strict inequality operator</code> إلى العبارة <code>if</code> بحيث تقوم الدالة بإرجاع &quot;غير مساوي&quot; عندما لا يكون <code>val</code> مساوياً تمامًا لـ <code>17</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrictNotEqual(17)</code> إرجاع &quot;مساواة&quot;
    testString: 'assert(testStrictNotEqual(17) === "Equal", "<code>testStrictNotEqual(17)</code> should return "Equal"");'
  - text: <code>testStrictNotEqual(&quot;17&quot;)</code> &quot;غير مساوي&quot;
    testString: 'assert(testStrictNotEqual("17") === "Not Equal", "<code>testStrictNotEqual("17")</code> should return "Not Equal"");'
  - text: يجب أن <code>testStrictNotEqual(12)</code> &quot;غير مساوي&quot;
    testString: 'assert(testStrictNotEqual(12) === "Not Equal", "<code>testStrictNotEqual(12)</code> should return "Not Equal"");'
  - text: <code>testStrictNotEqual(&quot;bob&quot;)</code> &quot;غير مساوي&quot;
    testString: 'assert(testStrictNotEqual("bob") === "Not Equal", "<code>testStrictNotEqual("bob")</code> should return "Not Equal"");'
  - text: يجب عليك استخدام <code>!==</code> المشغل
    testString: 'assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0, "You should use the <code>!==</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
