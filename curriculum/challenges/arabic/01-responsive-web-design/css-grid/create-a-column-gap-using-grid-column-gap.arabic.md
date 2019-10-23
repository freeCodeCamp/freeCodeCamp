---
id: 5a9036ee38fddaf9a66b5d35
title: Create a Column Gap Using grid-column-gap
challengeType: 0
videoUrl: ''
localeTitle: إنشاء فجوة عمود باستخدام الفجوة بين عمود الشبكة
---

## Description
<section id="description"> حتى الآن في الشبكات التي قمت بإنشائها ، كانت الأعمدة محصورة ضد بعضها البعض. في بعض الأحيان تريد فجوة بين الأعمدة. لإضافة فجوة بين الأعمدة ، استخدم خاصية <code>grid-column-gap</code> مثل هذا: <blockquote style=";text-align:right;direction:rtl"> الفجوة بين الأعمدة الشبكية: 10 بكسل ؛ </blockquote> هذا يخلق 10px من المساحة الفارغة بين جميع أعمدةنا. </section>

## Instructions
<section id="instructions"> امنح الأعمدة في الشبكة فجوة 20 <code>20px</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>container</code> فئة <code>container</code> <code>grid-column-gap</code> خاصية <code>grid-column-gap</code> قيمة 20 <code>20px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-column-gap</code> property that has the value of <code>20px</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* add your code below this line */


    /* add your code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
