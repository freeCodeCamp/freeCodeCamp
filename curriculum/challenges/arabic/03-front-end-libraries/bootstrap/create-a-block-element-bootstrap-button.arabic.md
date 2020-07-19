---
id: bad87fee1348cd8acef08812
title: Create a Block Element Bootstrap Button
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> عادةً ، تكون عناصر <code>button</code> الخاصة بك مع فئات <code>btn</code> و <code>btn-default</code> عريضة مثل النص الذي تحتوي عليه. على سبيل المثال: <code>&lt;button class=&quot;btn btn-default&quot;&gt;Submit&lt;/button&gt;</code> سيكون هذا الزر عريضًا مثل كلمة &quot;إرسال&quot;. <button class="btn btn-default">إرسال عن</button> طريق جعلها تحجب العناصر مع فئة إضافية من <code>btn-block</code> ، سوف يمتد الزر الخاص بك لملء المساحة الأفقية بالكامل لصفحتك وستتدفق أية عناصر تتبعها إلى &quot;سطر جديد&quot; أسفل الكتلة. <code>&lt;button class=&quot;btn btn-default btn-block&quot;&gt;Submit&lt;/button&gt;</code> سيشغل هذا الزر نسبة 100٪ من العرض المتاح. <button class="btn btn-default btn-block">إرسال</button> ملاحظة أن هذه الأزرار لا تزال بحاجة إلى فئة <code>btn</code> . إضافة فئة <code>btn-block</code> الخاص Bootstrap إلى الزر Bootstrap الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("button").hasClass("btn") && $("button").hasClass("btn-default"), "Your button should still have the <code>btn</code> and <code>btn-default</code> classes.");'
  - text: ''
    testString: 'assert($("button").hasClass("btn-block"), "Your button should have the class <code>btn-block</code>.");'
  - text: تأكد من أن جميع عناصر <code>button</code> لديك بها علامة إغلاق.
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure all your <code>button</code> elements have a closing tag.");'

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
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
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
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-default">Like</button>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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
