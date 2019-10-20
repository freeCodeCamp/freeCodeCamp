---
id: 5a90374338fddaf9a66b5d3a
title: Align an Item Horizontally using justify-self
challengeType: 0
videoUrl: ''
localeTitle: قم بمحاذاة عنصر أفقيًا باستخدام ضبط self-self
---

## Description
<section id="description"> في CSS Grid ، يقع محتوى كل عنصر في مربع يُشار إليه <dfn>بالخلية</dfn> . يمكنك محاذاة موضع المحتوى داخل خليتها أفقياً باستخدام الخاصية <code>justify-self</code> على عنصر شبكة. بشكل افتراضي ، تحتوي هذه الخاصية على قيمة <code>stretch</code> ، والتي ستجعل المحتوى يملأ عرض الخلية بالكامل. تقبل خاصية CSS Grands هذه القيم الأخرى أيضًا: <code>start</code> : محاذاة المحتوى على يمين الخلية ، <code>center</code> : محاذاة المحتوى في وسط الخلية ، <code>end</code> : محاذاة المحتوى على يمين الخلية. </section>

## Instructions
<section id="instructions"> استخدم خاصية <code>justify-self</code> لتوسيط العنصر مع <code>item2</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لفئة <code>item2</code> خاصية <code>justify-self</code> لها قيمة <code>center</code> .
    testString: 'assert(code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>item2</code> class should have a <code>justify-self</code> property that has the value of <code>center</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* add your code below this line */


    /* add your code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
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
