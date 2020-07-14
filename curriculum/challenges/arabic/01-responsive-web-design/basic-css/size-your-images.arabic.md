---
id: bad87fee1348bd9acdf08812
title: Size Your Images
challengeType: 0
videoUrl: ''
localeTitle: حجم صورك
---

## Description
<section id="description"> يحتوي CSS على خاصية تسمى <code>width</code> الذي يتحكم في عرض العنصر. تمامًا مثل الخطوط ، سنستخدم <code>px</code> (بكسل) لتحديد عرض الصورة. على سبيل المثال ، إذا أردنا إنشاء فئة CSS تسمى <code>larger-image</code> تعطي عناصر HTML عرضًا يبلغ 500 بكسل ، فسنستخدم: <blockquote style=";text-align:right;direction:rtl"> &lt;نمط&gt; <br> .larger-image { <br> العرض: 500 بكسل ؛ <br> } <br> &lt;/ النمط&gt; </blockquote></section>

## Instructions
<section id="instructions"> قم بإنشاء فئة باسم <code>smaller-image</code> واستخدمها لتغيير حجم الصورة بحيث يكون عرضها 100 بكسل فقط. <strong>ملحوظة</strong> <br> نظرًا لاختلاف تنفيذ المتصفح ، قد تحتاج إلى التكبير بنسبة 100٪ لاجتياز الاختبارات على هذا التحدي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("img[src="https://bit.ly/fcc-relaxing-cat"]").attr("class") === "smaller-image", "Your <code>img</code> element should have the class <code>smaller-image</code>.");'
  - text: يجب أن تكون صورتك بعرض 100 بكسل. يجب أن يكون تكبير المتصفح بنسبة 100٪.
    testString: 'assert($("img").width() === 100, "Your image should be 100 pixels wide. Browser zoom should be at 100%.");'

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
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
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

  <form action="https://freecatphotoapp.com/submit-cat-photo">
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
