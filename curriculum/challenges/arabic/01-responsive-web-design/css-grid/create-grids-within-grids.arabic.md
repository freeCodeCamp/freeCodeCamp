---
id: 5a94fe8569fb03452672e464
title: Create Grids within Grids
challengeType: 0
videoUrl: ''
localeTitle: إنشاء شبكات داخل شبكات
---

## Description
<section id="description"> تحويل عنصر إلى شبكة يؤثر فقط على سلوك أحفادها مباشرة. لذا من خلال تحويل سليل مباشر إلى شبكة ، يكون لديك شبكة داخل الشبكة. على سبيل المثال ، من خلال تعيين خصائص <code>grid-template-columns</code> <code>display</code> <code>grid-template-columns</code> للعنصر مع فئة <code>item3</code> ، تقوم بإنشاء شبكة داخل الشبكة. </section>

## Instructions
<section id="instructions"> قم <code>item3</code> العنصر مع فئة <code>item3</code> إلى شبكة ذات عمودين مع عرض <code>auto</code> و <code>1fr</code> باستخدام <code>1fr</code> <code>display</code> <code>grid-template-columns</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي فئة <code>item3</code> <code>grid-template-columns</code> خاصية <code>grid-template-columns</code> مع <code>auto</code> و <code>1fr</code> كقيم.
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>grid-template-columns</code> property with <code>auto</code> and <code>1fr</code> as values.");'
  - text: يجب أن يكون فئة <code>item3</code> خاصية <code>display</code> بقيمة <code>grid</code> .
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>display</code> property with the value of <code>grid</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* enter your code below this line */


    /* enter your code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
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
