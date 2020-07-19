---
id: bad87fee1348bd9aedf08808
title: Specify How Fonts Should Degrade
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
  - text: يجب أن يستخدم عنصر h2 الخط <code>Lobster</code> .
    testString: 'assert($("h2").css("font-family").match(/^"?lobster/i), "Your h2 element should use the font <code>Lobster</code>.");'
  - text: يجب أن يتحلل عنصر h2 إلى <code>monospace</code> للخط عندما لا يكون <code>Lobster</code> متاحًا.
    testString: 'assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?,\s*monospace\s*;\s*\}/gi.test(code), "Your h2 element should degrade to the font <code>monospace</code> when <code>Lobster</code> is not available.");'
  - text: ''
    testString: 'assert(new RegExp("<!--[^fc]", "gi").test(code), "Comment out your call to Google for the <code>Lobster</code> font by putting <code>&#60!--</code> in front of it.");'
  - text: ''
    testString: 'assert(new RegExp("[^fc]-->", "gi").test(code), "Be sure to close your comment by adding <code>--&#62;</code>.");'

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
    font-family: Lobster;
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
