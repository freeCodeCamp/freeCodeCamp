---
id: bad88fee1348ce8acef08815
title: Use the Bootstrap Grid to Put Elements Side By Side
challengeType: 0
videoUrl: ''
localeTitle: استخدم شبكة Bootstrap لوضع عناصر جنبًا إلى جنب
---

## Description
<section id="description"> يستخدم Bootstrap نظام شبكة متجاوزة من 12 عمودًا ، مما يجعل من السهل وضع العناصر في صفوف وتحديد العرض النسبي لكل عنصر. يمكن تطبيق معظم طبقات Bootstrap على عنصر <code>div</code> . يحتوي Bootstrap على خصائص عرض العمود المختلفة التي يستخدمها بناءً على مدى اتساع شاشة المستخدم. على سبيل المثال ، تشتمل الهواتف على شاشات ضيقة ، كما تحتوي أجهزة الكمبيوتر المحمولة على شاشات أوسع. خذ على سبيل المثال الطبقة <code>col-md-*</code> في Bootstrap. هنا ، <code>md</code> تعني medium ، و <code>*</code> هو رقم يحدد عدد الأعمدة التي يجب أن يكون العنصر فيها. في هذه الحالة ، يتم تحديد عرض العمود لعنصر على شاشة متوسطة الحجم ، مثل الكمبيوتر المحمول. في تطبيق Cat Photo الذي نقوم ببنائه ، سنستخدم <code>col-xs-*</code> ، حيث <code>xs</code> تعني مساحة صغيرة جدًا (مثل شاشة الهاتف المحمول الصغيرة جدًا) ، و <code>*</code> هو عدد الأعمدة التي تحدد عدد الأعمدة على نطاق واسع يجب أن يكون العنصر. ضع زري <code>Like</code> و  <code>Info</code> و  <code>Delete</code> جنبًا إلى جنب من خلال تضمين كل ثلاثة منهم في عنصر واحد <code>&lt;div class=&quot;row&quot;&gt;</code> ، ثم كل واحد منهم داخل عنصر <code>&lt;div class=&quot;col-xs-4&quot;&gt;</code> . يتم تطبيق فئة <code>row</code> على <code>div</code> ، ويمكن أن تتداخل الأزرار نفسها داخلها. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("div.row:has(button)").length > 0, "Your buttons should all be nested within the same <code>div</code> element with the class <code>row</code>.");'
  - text: يجب أن يكون كل زر من أزرار Bootstrap متداخلًا داخل عنصر <code>div</code> الخاص به باستخدام الفئة <code>col-xs-4</code> .
    testString: 'assert($("div.col-xs-4:has(button)").length > 2, "Each of your Bootstrap buttons should be nested within its own <code>div</code> element with the class <code>col-xs-4</code>.");'
  - text: ''
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure each of your <code>button</code> elements has a closing tag.");'
  - text: ''
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure each of your <code>div</code> elements has a closing tag.");'

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
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Delete</button>
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
