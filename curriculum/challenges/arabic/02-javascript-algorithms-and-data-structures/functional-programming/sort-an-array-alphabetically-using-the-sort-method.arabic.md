---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
videoUrl: ''
localeTitle: فرز صفيف أبجديا باستخدام طريقة الفرز
---

## Description
<section id="description"> يقوم أسلوب <code>sort</code> بفرز عناصر المصفوفة وفقًا لوظيفة رد الاتصال. فمثلا: <blockquote style=";text-align:right;direction:rtl"> function ascendingOrder (arr) { <br> return arr.sort (function (a، b) { <br> عودة a - b؛ <br> })؛ <br> } <br> تصاعدي ([1 ، 5 ، 2 ، 3 ، 4]) ؛ <br> // إرجاع [1 ، 2 ، 3 ، 4 ، 5] <br><br> function reverseAlpha (arr) { <br> return arr.sort (function (a، b) { <br> ارجع &lt;b؛ <br> })؛ <br> } <br> reverseAlpha ([&#39;l&#39;، &#39;h&#39;، &#39;z&#39;، &#39;b&#39;، &#39;s&#39;])؛ <br> // Returns [&#39;z&#39;، &#39;s&#39;، &#39;l&#39;، &#39;h&#39;، &#39;b&#39;] </blockquote> ملاحظة: يتم تشجيعه على توفير وظيفة رد اتصال لتحديد كيفية فرز عناصر المصفوفة. طريقة الفرز الافتراضية لجافا سكريبت هي عن طريق سلسلة قيمة نقطة Unicode ، والتي قد ترجع نتائج غير متوقعة. </section>

## Instructions
<section id="instructions"> استخدم طريقة <code>sort</code> في الدالة <code>alphabeticalOrder</code> لفرز عناصر <code>arr</code> حسب الترتيب الأبجدي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك طريقة <code>sort</code> .
    testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
  - text: '<code>alphabeticalOrder([&quot;a&quot;, &quot;d&quot;, &quot;c&quot;, &quot;a&quot;, &quot;z&quot;, &quot;g&quot;])</code> يجب أن ترجع <code>[&quot;a&quot;, &quot;a&quot;, &quot;c&quot;, &quot;d&quot;, &quot;g&quot;, &quot;z&quot;]</code> .'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])) === JSON.stringify(["a", "a", "c", "d", "g", "z"]), "<code>alphabeticalOrder(["a", "d", "c", "a", "z", "g"])</code> should return <code>["a", "a", "c", "d", "g", "z"]</code>.");'
  - text: '<code>alphabeticalOrder([&quot;x&quot;, &quot;h&quot;, &quot;a&quot;, &quot;m&quot;, &quot;n&quot;, &quot;m&quot;])</code> يجب أن ترجع <code>[&quot;a&quot;, &quot;h&quot;, &quot;m&quot;, &quot;m&quot;, &quot;n&quot;, &quot;x&quot;]</code> .'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])) === JSON.stringify(["a", "h", "m", "m", "n", "x"]), "<code>alphabeticalOrder(["x", "h", "a", "m", "n", "m"])</code> should return <code>["a", "h", "m", "m", "n", "x"]</code>.");'
  - text: '<code>alphabeticalOrder([&quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;x&quot;, &quot;t&quot;])</code> يجب أن ترجع <code>[&quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;t&quot;, &quot;x&quot;]</code> .'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])) === JSON.stringify(["a", "a", "a", "a", "t", "x"]), "<code>alphabeticalOrder(["a", "a", "a", "a", "x", "t"])</code> should return <code>["a", "a", "a", "a", "t", "x"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function alphabeticalOrder(arr) {
  // Add your code below this line


  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
