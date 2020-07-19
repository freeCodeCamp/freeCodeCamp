---
id: bad87fee1347bd9aedf08845
title: Ditch Custom CSS for Bootstrap
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> يمكننا تنظيف الكود الخاص بنا وجعل تطبيق Cat Photo App يبدو أكثر تقليدية باستخدام الأنماط المضمنة في Bootstrap بدلاً من الأنماط المخصصة التي أنشأناها سابقًا. لا تقلق - سيكون هناك متسع من الوقت لتخصيص CSS في وقت لاحق. قم بحذف <code>.red-text</code> و <code>p</code> و <code>.smaller-image</code> من عنصر <code>style</code> الخاص بك بحيث تكون التصريحات الوحيدة المتبقية في عنصر <code>style</code> الخاص بك هي <code>h2</code> <code>thick-green-border</code> . ثم احذف العنصر <code>p</code> الذي يحتوي على رابط خامد. ثم قم بإزالة فئة <code>red-text</code> من عنصر <code>h2</code> واستبدله بفئة Bootstrap <code>text-primary</code> . أخيرًا ، أزل فئة &quot;الصورة الأصغر&quot; من عنصر <code>img</code> الأول <code>img</code> بفئة <code>img-responsive</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب ألا يحتوي عنصر h2 <code>red-text</code> للفئة.
    testString: 'assert(!$("h2").hasClass("red-text"), "Your h2 element should no longer have the class <code>red-text</code>.");'
  - text: يجب أن يكون عنصر h2 الخاص بك يحتوي الآن على <code>text-primary</code> .
    testString: 'assert($("h2").hasClass("text-primary"), "Your h2 element should now have the class <code>text-primary</code>.");'
  - text: لم يعد يجب استخدام عناصر الفقرة الخط <code>Monospace</code> .
    testString: 'assert(!$("p").css("font-family").match(/monospace/i), "Your paragraph elements should no longer use the font <code>Monospace</code>.");'
  - text: أزل فئة <code>smaller-image</code> من صورتك العلوية.
    testString: 'assert(!$("img").hasClass("smaller-image"), "Remove the <code>smaller-image</code> class from your top image.");'
  - text: أضف فئة <code>img-responsive</code> إلى أعلى صورة.
    testString: 'assert($(".img-responsive").length > 1, "Add the <code>img-responsive</code> class to your top image.");'

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
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
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
