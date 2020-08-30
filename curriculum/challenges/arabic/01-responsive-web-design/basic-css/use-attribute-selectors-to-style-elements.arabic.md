---
id: 58c383d33e2e3259241f3076
title: Use Attribute Selectors to Style Elements
challengeType: 0
videoUrl: ''
localeTitle: استخدم محددات السمات لعناصر النمط
---

## Description
<section id="description"> لقد كنت تعطي سمات <code>id</code> أو <code>class</code> إلى العناصر التي ترغب في تحديد أسلوبها. تُعرف هذه المعرّفات باسم محددات الهوية والفئة. هناك محددات CSS أخرى يمكنك استخدامها لتحديد مجموعات مخصصة من العناصر إلى النمط. دعونا نخرج CatPhotoApp مرة أخرى لممارسة استخدام CSS Selectors. بالنسبة لهذا التحدي ، ستستخدم محدد السمة <code>[attr=value]</code> لتمييز مربعات الاختيار في CatPhotoApp. يتطابق هذا المحدد وعناصر الأنماط مع قيمة سمة محددة. على سبيل المثال ، يؤدي التعليمة البرمجية أدناه إلى تغيير هوامش جميع العناصر <code>type</code> السمة وقيمة مماثلة <code>radio</code> : <blockquote style=";text-align:right;direction:rtl"> [type = &#39;radio&#39;] { <br> الهامش: 20px 0px 20px 0px؛ <br> } </blockquote></section>

## Instructions
<section id="instructions"> باستخدام محدد السمة <code>type</code> ، حاول إعطاء مربعات الاختيار في CatPhotoApp هامشًا أعلى من 10 بكسل وهامشًا سفليًا يبلغ 15 بكسل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب استخدام محدد السمة <code>type</code> لتحديد مربعات الاختيار.
    testString: 'assert(code.match(/<style>[\s\S]*?\[type=("|")checkbox\1\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi),"The <code>type</code> attribute selector should be used to select the checkboxes.");'
  - text: يجب أن تكون الهوامش العلوية لمربعات الاختيار 10 بكسل.
    testString: 'assert((function() {var count=0; $("[type="checkbox"]").each(function() { if($(this).css("marginTop") === "10px") {count++;}});return (count===3)}()),"The top margins of the checkboxes should be 10px.");'
  - text: يجب أن تكون الهوامش السفلية لمربعات الاختيار 15 بكسل.
    testString: 'assert((function() {var count=0; $("[type="checkbox"]").each(function() { if($(this).css("marginBottom") === "15px") {count++;}});return (count===3)}()),"The bottom margins of the checkboxes should be 15px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
