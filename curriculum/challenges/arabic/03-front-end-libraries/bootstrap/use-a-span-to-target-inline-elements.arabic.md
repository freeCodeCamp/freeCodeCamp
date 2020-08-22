---
id: bad87fee1348bd9aedf08845
title: Use a span to Target Inline Elements
challengeType: 0
videoUrl: ''
localeTitle: استخدم مسافة للعناصر المضمنة الهدف
---

## Description
<section id="description"> يمكنك استخدام الامتدادات لإنشاء عناصر مضمنة. أتذكر عندما استخدمنا فئة <code>btn-block</code> لجعل الزر يملأ الصف بأكمله؟ <button class="btn" style="background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);">الزر العادي</button> <button class="btn btn-block" style="background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);">btn-block button الذي</button> يوضح الفرق بين عنصر &quot;inline&quot; وعنصر &quot;block&quot;. باستخدام عنصر <code>span</code> المضمن ، يمكنك وضع العديد من العناصر على نفس السطر ، وحتى وضع أجزاء مختلفة من نفس السطر بشكل مختلف. عش كلمة &quot;love&quot; في عنصر &quot;Things cats love&quot; الخاص بك أدناه داخل عنصر <code>span</code> . ثم إعطاء التي <code>span</code> الطبقة <code>text-danger</code> لجعل أحمر النص. في ما يلي كيفية القيام بذلك باستخدام عنصر &quot;أهم ثلاثة أشياء للقطط التي تكره&quot;: <code>&lt;p&gt;Top 3 things cats &lt;span class=&quot;text-danger&quot;&gt;hate:&lt;/span&gt;&lt;/p&gt;</code> </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("p span") && $("p span").length > 0, "Your <code>span</code> element should be inside your <code>p</code> element.");'
  - text: يجب أن يحتوي عنصر <code>span</code> الخاص بك على نص <code>love</code> فقط.
    testString: 'assert($("p span") && $("p span").text().match(/love/i) && !$("p span").text().match(/Things cats/i), "Your <code>span</code> element should have just the text <code>love</code>.");'
  - text: ''
    testString: 'assert($("span").hasClass("text-danger"), "Your <code>span</code> element should have class <code>text-danger</code>.");'
  - text: ''
    testString: 'assert(code.match(/<\/span>/g) && code.match(/<span/g) && code.match(/<\/span>/g).length === code.match(/<span/g).length, "Make sure your <code>span</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
