---
id: 587d781b367417b2b2512abc
title: Adjust the background-color Property of Text
challengeType: 0
videoUrl: ''
localeTitle: ضبط لون الخلفية خاصية النص
---

## Description
<section id="description"> بدلاً من ضبط الخلفية العامة أو لون النص لجعل المقدمة قابلة للقراءة بسهولة ، يمكنك إضافة <code>background-color</code> لعنصر يحمل النص الذي تريد التأكيد عليه. يستخدم هذا التحدي <code>rgba()</code> بدلاً من رموز <code>hex</code> أو <code>rgb()</code> العادي <code>rgb()</code> . <blockquote style=";text-align:right;direction:rtl"> rgba لتقف على: <br> ص = أحمر <br> g = أخضر <br> ب = أزرق <br> a = alpha / level of opacity </blockquote> يمكن أن تتراوح قيم RGB من 0 إلى 255. يمكن أن تتراوح قيمة alpha من 1 ، وهو معتم تمامًا أو بلون خالص ، إلى 0 ، وهو شفاف تمامًا أو واضح. <code>rgba()</code> رائع لاستخدامه في هذه الحالة ، لأنه يسمح لك بضبط العتامة. هذا يعني أنك لست مضطرًا لحجب الخلفية تمامًا. ستستخدم <code>background-color: rgba(45, 45, 45, 0.1)</code> لهذا التحدي. ينتج لون رمادي غامق يكاد يكون شفافًا نظرًا لقيمة عتامة منخفضة تبلغ 0.1. </section>

## Instructions
<section id="instructions"> لجعل النص أكثر وضوحًا ، قم بضبط <code>background-color</code> لعنصر <code>h4</code> إلى قيمة <code>rgba()</code> . بالنسبة إلى <code>h4</code> أيضًا ، أزل خاصية <code>height</code> وأضف <code>padding</code> قدرها 10 بكسل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن تضيف التعليمات البرمجية الخاصة بك خاصية <code>background-color</code> إلى عنصر <code>h4</code> لتعيين <code>rgba(45, 45, 45, 0.1)</code> .'
    testString: 'assert(code.match(/background-color:\s*?rgba\(\s*?45\s*?,\s*?45\s*?,\s*?45\s*?,\s*?0?\.1\s*?\)/gi), "Your code should add a <code>background-color</code> property to the <code>h4</code> element set to <code>rgba(45, 45, 45, 0.1)</code>.");'
  - text: يجب أن تضيف التعليمات البرمجية الخاصة بك خاصية <code>padding</code> إلى عنصر <code>h4</code> وتعيينها إلى 10 بكسل.
    testString: 'assert($("h4").css("padding-top") == "10px" && $("h4").css("padding-right") == "10px" && $("h4").css("padding-bottom") == "10px" && $("h4").css("padding-left") == "10px", "Your code should add a <code>padding</code> property to the <code>h4</code> element and set it to 10 pixels.");'
  - text: يجب إزالة خاصية <code>height</code> على عنصر <code>h4</code> .
    testString: 'assert(!($("h4").css("height") == "25px"), "The <code>height</code> property on the <code>h4</code> element should be removed.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
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
<div class="fullCard">
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
