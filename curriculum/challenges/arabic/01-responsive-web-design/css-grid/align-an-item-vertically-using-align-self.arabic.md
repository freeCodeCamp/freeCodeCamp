---
id: 5a90375238fddaf9a66b5d3b
title: Align an Item Vertically using align-self
challengeType: 0
videoUrl: ''
localeTitle: محاذاة عنصر عموديًا باستخدام محاذاة ذاتية
---

## Description
<section id="description"> كما يمكنك محاذاة عنصر أفقيًا ، توجد طريقة لمحاذاة عنصر بشكل عمودي أيضًا. للقيام بذلك ، يمكنك استخدام الخاصية <code>align-self</code> على عنصر. تقبل هذه الخاصية جميع القيم نفسها مثل <code>justify-self</code> من التحدي الأخير. </section>

## Instructions
<section id="instructions"> قم بمحاذاة العنصر مع item <code>item3</code> عمودي في <code>end</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي فئة <code>item3</code> على خاصية <code>align-self</code> لديها قيمة <code>end</code> .
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>align-self</code> property that has the value of <code>end</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}

  .item3 {
    background: PaleTurquoise;
    /* add your code below this line */


    /* add your code above this line */
  }

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
