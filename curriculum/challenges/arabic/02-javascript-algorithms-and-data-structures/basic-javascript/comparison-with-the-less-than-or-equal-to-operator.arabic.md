---
id: 56533eb9ac21ba0edf2244d7
title: Comparison with the Less Than Or Equal To Operator
challengeType: 1
videoUrl: ''
localeTitle: مقارنة مع أقل من أو يساوي المشغل
---

## Description
<section id="description"> يقارن <code>less than or equal to</code> المشغل ( <code>&lt;=</code> ) قيم رقمين. إذا كان الرقم إلى اليسار أقل من أو يساوي الرقم إلى اليمين ، فسيعود إلى <code>true</code> . إذا كان الرقم الموجود على اليسار أكبر من الرقم الموجود على اليمين ، فسيعرض <code>false</code> . مثل مشغل المساواة ، <code>less than or equal to</code> تحويل أنواع البيانات. <strong>أمثلة</strong> <blockquote style=";text-align:right;direction:rtl"> 4 &lt;= 5 // صحيح <br> &quot;7&quot; &lt;= 7 // صحيح <br> 5 &lt;= 5 // صحيح <br> 3 &lt;= 2 // خطأ <br> &quot;8&quot; &lt;= 4 // كاذبة </blockquote></section>

## Instructions
<section id="instructions"> إضافة <code>less than or equal to</code> المشغل إلى الخطوط المشار إليها بحيث تكون عبارات العودة منطقية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ترجع <code>testLessOrEqual(0)</code> &quot;Smaller Than أو Equal إلى 12&quot;
    testString: 'assert(testLessOrEqual(0) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(0)</code> should return "Smaller Than or Equal to 12"");'
  - text: يجب أن ترجع <code>testLessOrEqual(11)</code> &quot;أصغر من أو يساوي إلى 12&quot;
    testString: 'assert(testLessOrEqual(11) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(11)</code> should return "Smaller Than or Equal to 12"");'
  - text: يجب أن ترجع <code>testLessOrEqual(12)</code> &quot;Smaller Than أو Equal إلى 12&quot;
    testString: 'assert(testLessOrEqual(12) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(12)</code> should return "Smaller Than or Equal to 12"");'
  - text: يجب أن ترجع <code>testLessOrEqual(23)</code> &quot;Smaller Than أو Equal إلى 24&quot;
    testString: 'assert(testLessOrEqual(23) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(23)</code> should return "Smaller Than or Equal to 24"");'
  - text: يجب أن ترجع <code>testLessOrEqual(24)</code> &quot;Smaller Than أو Equal إلى 24&quot;
    testString: 'assert(testLessOrEqual(24) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(24)</code> should return "Smaller Than or Equal to 24"");'
  - text: يجب أن ترجع <code>testLessOrEqual(25)</code> &quot;أكثر من 24&quot;
    testString: 'assert(testLessOrEqual(25) === "More Than 24", "<code>testLessOrEqual(25)</code> should return "More Than 24"");'
  - text: يجب أن ترجع <code>testLessOrEqual(55)</code> &quot;أكثر من 24&quot;
    testString: 'assert(testLessOrEqual(55) === "More Than 24", "<code>testLessOrEqual(55)</code> should return "More Than 24"");'
  - text: يجب عليك استخدام <code>&lt;=</code> عامل التشغيل على الأقل مرتين
    testString: 'assert(code.match(/val\s*<=\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&lt;=</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
