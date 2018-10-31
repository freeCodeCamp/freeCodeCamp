---
id: 5a90373638fddaf9a66b5d39
title: Use grid-row to Control Spacing
challengeType: 0
videoUrl: ''
localeTitle: استخدم grid-row إلى Control Spacing
---

## Description
<section id="description"> بالطبع ، يمكنك جعل العناصر تستهلك صفوفًا متعددة تمامًا كما تفعل مع الأعمدة. يمكنك تحديد الأسطر الأفقية التي تريد أن يبدأ عنصرها ثم يتوقف عند استخدام خاصية <code>grid-row</code> على عنصر شبكة. </section>

## Instructions
<section id="instructions"> جعل العنصر مع فئة <code>item5</code> تستهلك الصفوف الأخيرة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي فئة <code>item5</code> على خاصية <code>grid-row</code> لها قيمة <code>2 / 4</code> .
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-row\s*?:\s*?2\s*?\/\s*?4\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-row</code> property that has the value of <code>2 / 4</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
    /* add your code below this line */


    /* add your code above this line */
  }

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
