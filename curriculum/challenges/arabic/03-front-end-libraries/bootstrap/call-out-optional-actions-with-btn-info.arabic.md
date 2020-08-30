---
id: bad87fee1348cd8acef08813
title: Call out Optional Actions with btn-info
challengeType: 0
videoUrl: ''
localeTitle: استدعاء الإجراءات الاختيارية مع btn-info
---

## Description
<section id="description"> يأتي Bootstrap مع العديد من الألوان المحددة مسبقًا للأزرار. يتم استخدام فئة <code>btn-info</code> للفت الانتباه إلى الإجراءات الاختيارية التي يمكن للمستخدم اتخاذها. قم بإنشاء زر Bootstrap جديد على مستوى الكتلة أسفل الزر &quot;أعجبني&quot; مع النص &quot;Info&quot; ، وأضف تصنيفات <code>btn-info</code> و <code>btn-block</code> إلى Bootstrap. لاحظ أن هذه الأزرار لا تزال بحاجة إلى فئات <code>btn</code> و <code>btn-block</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: إنشاء عنصر <code>button</code> جديد مع النص &quot;معلومات&quot;.
    testString: 'assert(new RegExp("info","gi").test($("button").text()), "Create a new <code>button</code> element with the text "Info".");'
  - text: ''
    testString: 'assert($("button.btn-block.btn").length > 1, "Both of your Bootstrap buttons should have the <code>btn</code> and <code>btn-block</code> classes.");'
  - text: ''
    testString: 'assert($("button").hasClass("btn-info"), "Your new button should have the class <code>btn-info</code>.");'
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
  <button class="btn btn-block btn-primary">Like</button>
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
