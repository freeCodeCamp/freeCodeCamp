---
id: bad87fee1348bd9bedf08813
title: Add Borders Around Your Elements
challengeType: 0
videoUrl: ''
localeTitle: أضف حدود حول عناصرك
---

## Description
<section id="description"> تحتوي حدود CSS على خصائص مثل <code>style</code> <code>color</code> <code>width</code> على سبيل المثال ، إذا أردنا إنشاء حد أحمر يبلغ 5 بيكسل حول عنصر HTML ، فيمكننا استخدام هذا الفصل الدراسي: <blockquote style=";text-align:right;direction:rtl"> &lt;نمط&gt; <br> .thin-red-border { <br> لون الحدود: أحمر. <br> border-width: 5px؛ <br> نمط الحدود: صلب ؛ <br> } <br> &lt;/ النمط&gt; </blockquote></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لعنصر <code>img</code> الخاص بك فئة <code>smaller-image</code> .
    testString: 'assert($("img").hasClass("smaller-image"), "Your <code>img</code> element should have the class <code>smaller-image</code>.");'
  - text: ''
    testString: 'assert($("img").hasClass("thick-green-border"), "Your <code>img</code> element should have the class <code>thick-green-border</code>.");'
  - text: امنح صورتك عرضًا بحدود 10 <code>10px</code> .
    testString: 'assert($("img").hasClass("thick-green-border") && parseInt($("img").css("border-top-width"), 10) >= 8 && parseInt($("img").css("border-top-width"), 10) <= 12, "Give your image a border width of <code>10px</code>.");'
  - text: امنح صورتك نمطًا حدوديًا <code>solid</code> .
    testString: 'assert($("img").css("border-right-style") === "solid", "Give your image a border style of <code>solid</code>.");'
  - text: ''
    testString: 'assert($("img").css("border-left-color") === "rgb(0, 128, 0)", "The border around your <code>img</code> element should be green.");'

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

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
