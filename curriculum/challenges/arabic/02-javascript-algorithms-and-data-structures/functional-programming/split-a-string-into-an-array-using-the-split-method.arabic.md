---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1
videoUrl: ''
localeTitle: تقسيم سلسلة في صفيف باستخدام طريقة الانقسام
---

## Description
<section id="description"> <code>split</code> طريقة الانقسام إلى سلسلة في صفيف من السلاسل. يتطلب الأمر حجة للمُحدد ، والتي يمكن أن تكون حرفًا تستخدم لتجزئة السلسلة أو التعبير العادي. على سبيل المثال ، إذا كان المحدد مساحة ، تحصل على صفيف من الكلمات ، وإذا كان المحدد عبارة عن سلسلة فارغة ، فستحصل على مصفوفة لكل حرف في السلسلة. في ما يلي مثالان يقومان بتقسيم سلسلة واحدة بمسافات ، ثم آخر بالأرقام باستخدام تعبير عادي: <blockquote style=";text-align:right;direction:rtl"> var str = &quot;Hello World&quot;؛ <br> var bySpace = str.split (&quot;&quot;)؛ <br> // Sets bySpace to [&quot;Hello&quot;، &quot;World&quot;] <br><br> var otherString = &quot;How9are7you2today&quot; ؛ <br> var byDigits = otherString.split (/ \ d /)؛ <br> // Sets byDigits to [&quot;How&quot;، &quot;are&quot;، &quot;you&quot;، &quot;today&quot;] </blockquote> بما أن الجمل غير قابلة للتغيير ، فإن طريقة <code>split</code> تجعل من السهل العمل معهم. </section>

## Instructions
<section id="instructions"> استخدم طريقة <code>split</code> داخل الدالة <code>splitify</code> لتقسيم <code>str</code> إلى صفيف من الكلمات. يجب أن ترجع الدالة الصفيف. لاحظ أنه لا يتم دائمًا فصل الكلمات عن مسافات ، ويجب ألا يحتوي الصفيف على علامات ترقيم. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك طريقة <code>split</code> .
    testString: 'assert(code.match(/\.split/g), "Your code should use the <code>split</code> method.");'
  - text: '<code>splitify(&quot;Hello World,I-am code&quot;)</code> يجب أن تعرض <code>[&quot;Hello&quot;, &quot;World&quot;, &quot;I&quot;, &quot;am&quot;, &quot;code&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("Hello World,I-am code")) === JSON.stringify(["Hello", "World", "I", "am", "code"]), "<code>splitify("Hello World,I-am code")</code> should return <code>["Hello", "World", "I", "am", "code"]</code>.");'
  - text: '<code>splitify(&quot;Earth-is-our home&quot;)</code> يجب أن تعود <code>[&quot;Earth&quot;, &quot;is&quot;, &quot;our&quot;, &quot;home&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("Earth-is-our home")) === JSON.stringify(["Earth", "is", "our", "home"]), "<code>splitify("Earth-is-our home")</code> should return <code>["Earth", "is", "our", "home"]</code>.");'
  - text: '<code>splitify(&quot;This.is.a-sentence&quot;)</code> يجب أن ترجع <code>[&quot;This&quot;, &quot;is&quot;, &quot;a&quot;, &quot;sentence&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("This.is.a-sentence")) === JSON.stringify(["This", "is", "a", "sentence"]), "<code>splitify("This.is.a-sentence")</code> should return <code>["This", "is", "a", "sentence"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function splitify(str) {
  // Add your code below this line


  // Add your code above this line
}
splitify("Hello World,I-am code");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
