---
id: bad87fee1348bd9acde08812
title: Make Images Mobile Responsive
challengeType: 0
videoUrl: ''
localeTitle: جعل الصور موبايل متجاوب
---

## Description
<section id="description"> أولاً ، أضف صورة جديدة أسفل الصورة الحالية. تعيين السمة <code>src</code> الخاصة به إلى <code>https://bit.ly/fcc-running-cats</code> . سيكون من الرائع أن تكون هذه الصورة بالضبط شاشة شاشة الهاتف الخاصة بنا. لحسن الحظ ، مع Bootstrap ، كل ما نحتاج إليه هو إضافة فئة <code>img-responsive</code> إلى صورتك. افعل ذلك ، ويجب أن تتناسب الصورة تمامًا مع عرض صفحتك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لديك ما مجموعه صورتين.
    testString: 'assert($("img").length === 2, "You should have a total of two images.");'
  - text: يجب أن تكون صورتك الجديدة أقل من صورتك القديمة وأن يكون لديك متفاعل <code>img-responsive</code> .
    testString: 'assert($("img:eq(1)").hasClass("img-responsive"), "Your new image should be below your old one and have the class <code>img-responsive</code>.");'
  - text: يجب ألا تحتوي صورتك الجديدة على صور <code>smaller-image</code> الفصل.
    testString: 'assert(!$("img:eq(1)").hasClass("smaller-image"), "Your new image should not have the class <code>smaller-image</code>.");'
  - text: 'يجب أن تحتوي صورتك الجديدة على <code>src</code> من <code>https://bit.ly/fcc-running-cats</code> .'
    testString: 'assert($("img:eq(1)").attr("src") === "https://bit.ly/fcc-running-cats", "Your new image should have a <code>src</code> of <code>https&#58;//bit.ly/fcc-running-cats</code>.");'
  - text: تأكد من أن عنصر <code>img</code> الجديد يحتوي على قوس زاوية إغلاق.
    testString: 'assert(code.match(/<img/g) && code.match(/<img[^<]*>/g).length === 2 && code.match(/<img/g).length === 2, "Make sure your new <code>img</code> element has a closing angle bracket.");'

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
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
