---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1
videoUrl: ''
localeTitle: دمج صفيف في سلسلة باستخدام طريقة الانضمام
---

## Description
<section id="description"> على <code>join</code> يستخدم طريقة للانضمام إلى عناصر من مجموعة معا لخلق سلسلة. يستغرق وسيطة عن المحدد الذي يتم استخدامه لفصل عناصر الصفيف في السلسلة. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> var arr = [&quot;Hello&quot;، &quot;World&quot;]؛ <br> var str = arr.join (&quot;&quot;)؛ <br> // يعين str إلى &quot;Hello World&quot; </blockquote></section>

## Instructions
<section id="instructions"> استخدم طريقة <code>join</code> (من بين آخرين) داخل الدالة <code>sentensify</code> لإنشاء جملة من الكلمات في <code>str</code> السلسلة. يجب على الدالة إرجاع سلسلة. على سبيل المثال ، سيتم تحويل &quot;I-like-Star-Wars&quot; إلى &quot;I like Star Wars&quot;. لهذا التحدي ، لا تستخدم طريقة <code>replace</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب استخدام التعليمات البرمجية لل <code>join</code> الأسلوب.
    testString: 'assert(code.match(/\.join/g), "Your code should use the <code>join</code> method.");'
  - text: يجب ألا تستخدم الشفرة طريقة <code>replace</code> .
    testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method.");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code> يجب إرجاع سلسلة.
    testString: 'assert(typeof sentensify("May-the-force-be-with-you") === "string", "<code>sentensify("May-the-force-be-with-you")</code> should return a string.");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code> يجب أن ترجع <code>&quot;May the force be with you&quot;</code> .
    testString: 'assert(sentensify("May-the-force-be-with-you") === "May the force be with you", "<code>sentensify("May-the-force-be-with-you")</code> should return <code>"May the force be with you"</code>.");'
  - text: <code>sentensify(&quot;The.force.is.strong.with.this.one&quot;)</code> يجب أن ترجع <code>&quot;The force is strong with this one&quot;</code> .
    testString: 'assert(sentensify("The.force.is.strong.with.this.one") === "The force is strong with this one", "<code>sentensify("The.force.is.strong.with.this.one")</code> should return <code>"The force is strong with this one"</code>.");'
  - text: '<code>sentensify(&quot;There,has,been,an,awakening&quot;)</code> يجب أن تعود <code>&quot;There has been an awakening&quot;</code> .'
    testString: 'assert(sentensify("There,has,been,an,awakening") === "There has been an awakening", "<code>sentensify("There,has,been,an,awakening")</code> should return <code>"There has been an awakening"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sentensify(str) {
  // Add your code below this line


  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
