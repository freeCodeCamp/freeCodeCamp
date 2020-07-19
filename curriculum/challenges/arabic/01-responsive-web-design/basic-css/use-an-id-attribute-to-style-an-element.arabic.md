---
id: bad87dee1348bd9aede07836
title: Use an id Attribute to Style an Element
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: امنح عنصر <code>form</code> الخاص بك معرف صورة <code>cat-photo-form</code> .
    testString: 'assert($("form").attr("id") === "cat-photo-form", "Give your <code>form</code> element the id of <code>cat-photo-form</code>.");'
  - text: يجب أن يحتوي عنصر <code>form</code> على <code>background-color</code> الأخضر.
    testString: 'assert($("#cat-photo-form").css("background-color") === "rgb(0, 128, 0)", "Your <code>form</code> element should have the <code>background-color</code> of green.");'
  - text: تأكد من أن عنصر <code>form</code> يحتوي على سمة <code>id</code> .
    testString: 'assert(code.match(/<form.*cat-photo-form.*>/gi) && code.match(/<form.*cat-photo-form.*>/gi).length > 0, "Make sure your <code>form</code> element has an <code>id</code> attribute.");'
  - text: لا تعطي <code>form</code> الخاص بك أي سمات <code>class</code> أو <code>style</code> .
    testString: 'assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi), "Do not give your <code>form</code> any <code>class</code> or <code>style</code> attributes.");'

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
