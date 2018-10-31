---
id: 587d781c367417b2b2512abf
title: Decrease the Opacity of an Element
challengeType: 0
videoUrl: ''
localeTitle: تقليل تعتيم عنصر
---

## Description
<section id="description"> يتم استخدام خاصية <code>opacity</code> في CSS لضبط العتامة ، أو العكس ، شفافية العنصر. <blockquote style=";text-align:right;direction:rtl"> قيمة 1 معتمة ، وهي غير شفافة على الإطلاق. <br> القيمة 0.5 هي نصف شفاف. <br> القيمة 0 شفافة تمامًا. </blockquote> سيتم تطبيق القيمة المقدمة على العنصر بأكمله ، سواء كانت هذه الصورة مع بعض الشفافية ، أو ألوان المقدمة والخلفية لكتلة من النص. </section>

## Instructions
<section id="instructions"> اضبط <code>opacity</code> علامات الإرساء على 0.7 باستخدام فئة <code>links</code> لتحديدها. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تقوم التعليمة البرمجية بتعيين الخاصية <code>opacity</code> إلى 0.7 على علامات الربط عن طريق تحديد فئة <code>links</code> .
    testString: 'assert.approximately(parseFloat($(".links").css("opacity")), 0.7, 0.1, "Your code should set the <code>opacity</code> property to 0.7 on the anchor tags by selecting the class of <code>links</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;

  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
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
