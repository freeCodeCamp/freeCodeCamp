---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
videoUrl: ''
localeTitle: استخدم Dot Notation للوصول إلى خصائص كائن
---

## Description
<section id="description"> خلق التحدي الأخير <code>object</code> به <code>properties</code> ، والآن سترى كيفية الوصول إلى قيم تلك <code>properties</code> . إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> دع بطة = { <br> الاسم: &quot;Aflac&quot; ، <br> numLegs: 2 <br> }؛ <br> console.log (duck.name)؛ <br> // هذا يطبع &quot;Aflac&quot; إلى وحدة التحكم </blockquote> يتم استخدام الترقيم النقطي على اسم <code>object</code> ، <code>duck</code> ، متبوعًا باسم <code>property</code> ، <code>name</code> ، للوصول إلى قيمة &quot;Aflac&quot;. </section>

## Instructions
<section id="instructions"> طباعة كلا <code>properties</code> كائن <code>dog</code> أدناه لوحدة التحكم الخاصة بك. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب عليك استخدام <code>console.log</code> لطباعة القيمة لخاصية <code>name</code> كائن <code>dog</code> .
    testString: 'assert(/console.log\(.*dog\.name.*\)/g.test(code), "Your should use <code>console.log</code> to print the value for the <code>name</code> property of the <code>dog</code> object.");'
  - text: يجب استخدامك <code>console.log</code> لطباعة القيمة لخاصية <code>numLegs</code> للكائن <code>dog</code> .
    testString: 'assert(/console.log\(.*dog\.numLegs.*\)/g.test(code), "Your should use <code>console.log</code> to print the value for the <code>numLegs</code> property of the <code>dog</code> object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
