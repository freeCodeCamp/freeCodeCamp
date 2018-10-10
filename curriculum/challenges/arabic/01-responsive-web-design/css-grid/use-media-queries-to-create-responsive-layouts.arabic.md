---
id: 5a94fe7769fb03452672e463
title: Use Media Queries to Create Responsive Layouts
challengeType: 0
videoUrl: ''
localeTitle: استخدم استعلامات الوسائط لإنشاء تخطيطات متجاوبة
---

## Description
<section id="description"> يمكن أن تكون CSS Grid طريقة سهلة لجعل موقعك أكثر استجابة من خلال استخدام استعلامات الوسائط لإعادة ترتيب مناطق الشبكة وتغيير أبعاد الشبكة وإعادة ترتيب موضع العناصر. في المعاينة ، عندما يكون عرض إطار العرض 300 بكسل أو أكثر ، يتغير عدد الأعمدة من 1 إلى 2. ثم تحتل مساحة الإعلان العمود الأيسر تمامًا. </section>

## Instructions
<section id="instructions"> عندما يكون عرض إطار العرض <code>400px</code> أو أكثر ، اجعل منطقة الرأس تشغل الصف العلوي تمامًا وتحتل منطقة التذييل الصف السفلي تمامًا. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: عندما يكون منفذ العرض <code>400px</code> أو أكثر ، يجب أن <code>container</code> فئة <code>container</code> على خاصية <code>grid-template-areas</code> التي تشغل فيها مناطق التذييل والرأس الصفوف العلوية والسفلية على التوالي ، ويشغل الإعلان والمحتوى العمودين الأيمن والأيسر للصف الأوسط.
    testString: 'assert(code.match(/@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi), "When the viewport is <code>400px</code> or more, <code>container</code> class should have a <code>grid-template-areas</code> property in which the footer and header areas occupy the top and bottom rows respectively and advert and content occupy the left and right columns of the middle row.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
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
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      /* change the code below this line */

      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";

    /* change the code above this line */
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
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
