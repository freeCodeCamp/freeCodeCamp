---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: إضافة خيار افتراضي في تبديل البيانات
---

## Description
<section id="description"> في بيان <code>switch</code> قد لا تتمكن من تحديد جميع القيم المحتملة كبيانات <code>case</code> . بدلاً من ذلك ، يمكنك إضافة العبارة <code>default</code> التي سيتم تنفيذها في حالة عدم العثور على عبارات <code>case</code> مطابقة. أعتقد أنه من مثل النهائي <code>else</code> بيان في <code>if/else</code> السلسلة. يجب أن تكون العبارة <code>default</code> هي الحالة الأخيرة. <blockquote style=";text-align:right;direction:rtl"> التبديل (عدد) { <br> قيمة الحالة 1: <br> statement1. <br> استراحة؛ <br> قيمة الحالة 2: <br> statement2. <br> استراحة؛ <br> ... <br> الافتراضي: <br> defaultStatement. <br> استراحة؛ <br> } </blockquote></section>

## Instructions
<section id="instructions"> اكتب عبارة تبديل لتعيين <code>answer</code> عن الشروط التالية: <br> <code>&quot;a&quot;</code> - &quot;apple&quot; <br> <code>&quot;b&quot;</code> - &quot;طائر&quot; <br> <code>&quot;c&quot;</code> - &quot;cat&quot; <br> <code>default</code> - &quot;الاشياء&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لـ <code>switchOfStuff(&quot;a&quot;)</code> قيمة &quot;apple&quot;
    testString: 'assert(switchOfStuff("a") === "apple", "<code>switchOfStuff("a")</code> should have a value of "apple"");'
  - text: يجب أن يكون <code>switchOfStuff(&quot;b&quot;)</code> قيمة &quot;bird&quot;
    testString: 'assert(switchOfStuff("b") === "bird", "<code>switchOfStuff("b")</code> should have a value of "bird"");'
  - text: يجب أن يكون لـ <code>switchOfStuff(&quot;c&quot;)</code> قيمة &quot;cat&quot;
    testString: 'assert(switchOfStuff("c") === "cat", "<code>switchOfStuff("c")</code> should have a value of "cat"");'
  - text: يجب أن يكون لـ <code>switchOfStuff(&quot;d&quot;)</code> قيمة &quot;الأشياء&quot;
    testString: 'assert(switchOfStuff("d") === "stuff", "<code>switchOfStuff("d")</code> should have a value of "stuff"");'
  - text: يجب أن يكون <code>switchOfStuff(4)</code> قيمة &quot;الأشياء&quot;
    testString: 'assert(switchOfStuff(4) === "stuff", "<code>switchOfStuff(4)</code> should have a value of "stuff"");'
  - text: يجب عدم استخدام أي <code>if</code> أو <code>else</code> البيانات
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: يجب عليك استخدام العبارة <code>default</code>
    testString: 'assert(switchOfStuff("string-to-trigger-default-case") === "stuff", "You should use a <code>default</code> statement");'
  - text: يجب أن يكون لديك على الأقل 3 بيانات <code>break</code>
    testString: 'assert(code.match(/break/g).length > 2, "You should have at least 3 <code>break</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
