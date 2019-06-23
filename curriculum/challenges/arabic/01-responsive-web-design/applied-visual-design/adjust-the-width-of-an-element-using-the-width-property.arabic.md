---
id: 587d7791367417b2b2512ab4
title: Adjust the Width of an Element Using the width Property
challengeType: 0
videoUrl: ''
localeTitle: ضبط عرض عنصر باستخدام خاصية العرض
---

## Description
<section id="description">
  يمكنك تحديد عرض عنصر باستخدام خاصية <code>width</code> في CSS. يمكن إعطاء القيم في وحدات الطول النسبي (مثل em) ، أو وحدات الطول المطلقة (مثل px) ، أو كنسبة مئوية من عنصر الأصل الذي يحتوي عليه. في ما يلي مثال يغير عرض الصورة إلى 220 بكسل: <blockquote> img {<br>height: 220px;<br>} </blockquote>
</section>

## Instructions
<section id="instructions"> إضافة خاصية <code>width</code> للبطاقة بأكملها وتعيينها إلى قيمة مطلقة تبلغ 245 بكسل. استخدم فئة <code>fullCard</code> لتحديد العنصر. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تغيير التعليمات البرمجية الخاصة بك الخاصية <code>width</code> للبطاقة إلى 245 بكسل باستخدام محدد فئة <code>fullCard</code> .
    testString: 'assert(code.match(/.fullCard\s*{[\s\S][^}]*\n*^\s*width\s*:\s*245px\s*;/gm), "Your code should change the <code>width</code> property of the card to 245 pixels by using the <code>fullCard</code> class selector.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {

    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
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
