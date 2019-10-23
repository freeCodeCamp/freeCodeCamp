---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
videoUrl: ''
localeTitle: نطاق عالمي مقابل نطاق محلي في الوظائف
---

## Description
<section id="description"> من الممكن أن يكون لديك متغيرات <dfn>محلية</dfn> <dfn>وعالمية</dfn> تحمل نفس الاسم. عند القيام بذلك ، يأخذ المتغير <code>local</code> الأسبقية على المتغير <code>global</code> . في هذا المثال: <blockquote style=";text-align:right;direction:rtl"> var someVar = &quot;Hat&quot; ، <br> وظيفة myFun () { <br> var someVar = &quot;الرأس&quot; ؛ <br> عودة بعض <br> } </blockquote> ستقوم الدالة <code>myFun</code> بإرجاع <code>&quot;Head&quot;</code> لأن الإصدار <code>local</code> للمتغير موجود. </section>

## Instructions
<section id="instructions"> إضافة متغير محلي لوظيفة <code>myOutfit</code> لتجاوز قيمة <code>outerWear</code> مع <code>&quot;sweater&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: لا تغير قيمة <code>outerWear</code>
    testString: 'assert(outerWear === "T-Shirt", "Do not change the value of the global <code>outerWear</code>");'
  - text: يجب أن يعود <code>myOutfit</code> <code>&quot;sweater&quot;</code>
    testString: 'assert(myOutfit() === "sweater", "<code>myOutfit</code> should return <code>"sweater"</code>");'
  - text: لا تقم بتغيير بيان الإرجاع
    testString: 'assert(/return outerWear/.test(code), "Do not change the return statement");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line



  // Only change code above this line
  return outerWear;
}

myOutfit();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
