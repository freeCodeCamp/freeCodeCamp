---
id: 587d7791367417b2b2512ab5
title: Adjust the Height of an Element Using the height Property
challengeType: 0
videoUrl: ''
localeTitle: ضبط ارتفاع عنصر باستخدام خاصية الارتفاع
---

## Description
<section id="description">
يمكنك تحديد ارتفاع عنصر باستخدام خاصية <code>height</code> في CSS، على غرار خاصية <code>width</code>. في ما يلي مثال يغير ارتفاع الصورة إلى 20 بكسل: <blockquote>img {<br>&nbsp;&nbsp;height: 20px;<br>}</blockquote></section>

## Instructions
<section id="instructions"> إضافة خاصية <code>height</code> إلى علامة <code>h4</code> وتعيينها إلى 25 بكسل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تغيير التعليمات البرمجية الخاصة بك الخاصية <code>height</code> <code>h4</code> إلى قيمة 25 بكسل.
    testString: 'assert($("h4").css("height") == "25px", "Your code should change the <code>h4</code> <code>height</code> property to a value of 25 pixels.");'

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
    width: 245px;
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
