---
id: bad87fee1348bd9acdf08812
title: Size Your Images
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MmCP'
---

## Description
<section id='description'>
CSS has a property called <code>width</code> that controls an element's width. Just like with fonts, we'll use <code>px</code> (pixels) to specify the image's width.
For example, if we wanted to create a CSS class called <code>larger-image</code> that gave HTML elements a width of 500 pixels, we'd use:
<blockquote>&#60;style&#62;<br>&nbsp;&nbsp;.larger-image {<br>&nbsp;&nbsp;&nbsp;&nbsp;width: 500px;<br>&nbsp;&nbsp;}<br>&#60;/style&#62;</blockquote>
</section>

## Instructions
<section id='instructions'>
Create a class called <code>smaller-image</code> and use it to resize the image so that it's only 100 pixels wide.
<strong>Note</strong><br>Due to browser implementation differences, you may need to be at 100% zoom to pass the tests on this challenge.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> element should have the class <code>smaller-image</code>.
    testString: assert($("img[src='https://bit.ly/fcc-relaxing-cat']").attr('class') === "smaller-image", 'Your <code>img</code> element should have the class <code>smaller-image</code>.');
  - text: Your image should be 100 pixels wide. Browser zoom should be at 100%.
    testString: assert($("img").width() === 100, 'Your image should be 100 pixels wide. Browser zoom should be at 100%.');

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

  <form action="/submit-cat-photo">
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
