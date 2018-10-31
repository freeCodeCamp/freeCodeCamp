---
id: 587d7db2367417b2b2512b8b
title: Understand the Immediately Invoked Function Expression (IIFE)
challengeType: 1
videoUrl: ''
localeTitle: فهم تعبير الدالة المستحثة فوراً (IIFE)
---

## Description
<section id="description"> نمط شائع في JavaScript هو تنفيذ وظيفة بمجرد إعلانها: <blockquote style=";text-align:right;direction:rtl"> (وظيفة () { <br> console.log (&quot;Chirp، chirp!&quot;)؛ <br> }) ()؛ // هذا هو تعبير وظيفة مجهول ينفذ على الفور <br> // المخرجات &quot;غرد ، غرد!&quot; فورا </blockquote> لاحظ أن الدالة ليس لها اسم ولا يتم تخزينها في متغير. الأقواس () في نهاية تعبير الدالة تتسبب في تنفيذها أو استدعاءها على الفور. يُعرف هذا النمط باسم <code>immediately invoked function expression</code> <code>IIFE</code> أو <code>IIFE</code> . </section>

## Instructions
<section id="instructions"> <code>makeNest</code> كتابة الدالة <code>makeNest</code> وإزالة دعوتها ، لذا فهي عبارة <code>immediately invoked function expression</code> مجهول على <code>immediately invoked function expression</code> ( <code>IIFE</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون الوظيفة مجهولة.
    testString: 'assert(/\(\s*?function\s*?\(\s*?\)\s*?{/.test(code), "The function should be anonymous.");'
  - text: يجب أن تحتوي الدالة الخاصة بك على أقواس في نهاية التعبير للاتصال به على الفور.
    testString: 'assert(/}\s*?\)\s*?\(\s*?\)/.test(code), "Your function should have parentheses at the end of the expression to call it immediately.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
