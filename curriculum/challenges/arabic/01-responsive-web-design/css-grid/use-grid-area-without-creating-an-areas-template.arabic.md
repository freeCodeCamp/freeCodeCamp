---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0
videoUrl: ''
localeTitle: استخدم مساحة الشبكة بدون إنشاء قالب مناطق
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن تحتوي فئة <code>item5</code> على خاصية <code>grid-area</code> بحيث تكون بين الخطين الأفقيين الثالث والرابع وبين الخطين الرأسيين الأول والرابع.'
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi), "يجب أن تحتوي فئة <code>item5</code> على خاصية <code>grid-area</code> بحيث تكون بين الخطين الأفقيين الثالث والرابع وبين الخطين الرأسيين الأول والرابع.");'

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
