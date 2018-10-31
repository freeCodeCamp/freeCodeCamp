---
id: 56533eb9ac21ba0edf2244d1
title: Comparison with the Strict Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنة مع مشغل المساواة الصارمة
---

## Description
<section id="description"> المساواة <code>===</code> ( <code>===</code> ) هي نظير مشغل المساواة ( <code>==</code> ). ومع ذلك ، على عكس مشغل المساواة ، الذي يحاول تحويل كلتا القيمتين مقارنة بالنوع الشائع ، فإن مشغل المساواة الصارم لا يقوم بتحويل نوع. إذا كانت القيم التي يتم مقارنتها لها أنواع مختلفة ، فإنها تعتبر غير متساوية ، وسيعود المشغل الصارم للمساواة كاذبة. <strong>أمثلة</strong> <blockquote style=";text-align:right;direction:rtl"> 3 === 3 // true <br> 3 === &#39;3&#39; // false </blockquote> في المثال الثاني ، <code>3</code> هو نوع <code>Number</code> و <code>&#39;3&#39;</code> هو نوع <code>String</code> . </section>

## Instructions
<section id="instructions"> استخدم عامل التساوي الصارم في العبارة <code>if</code> بحيث تقوم الدالة بإرجاع &quot;Equal&quot; عندما تكون <code>val</code> تساوي تمامًا <code>7</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ترجع <code>testStrict(10)</code> &quot;غير مساوي&quot;
    testString: 'assert(testStrict(10) === "Not Equal", "<code>testStrict(10)</code> should return "Not Equal"");'
  - text: <code>testStrict(7)</code> إرجاع &quot;Equal&quot;
    testString: 'assert(testStrict(7) === "Equal", "<code>testStrict(7)</code> should return "Equal"");'
  - text: <code>testStrict(&quot;7&quot;)</code> إرجاع &quot;غير مساوي&quot;
    testString: 'assert(testStrict("7") === "Not Equal", "<code>testStrict("7")</code> should return "Not Equal"");'
  - text: يجب عليك استخدام عامل التشغيل <code>===</code>
    testString: 'assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0, "You should use the <code>===</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
