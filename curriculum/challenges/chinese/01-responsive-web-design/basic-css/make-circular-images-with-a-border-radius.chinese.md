---
id: bad87fee1348bd9aedf08815
title: Make Circular Images with a border-radius
challengeType: 0
videoUrl: ''
localeTitle: 使用border-radius制作圆形图像
---

## Description
<section id="description">除像素外，您还可以使用百分比指定<code>border-radius</code> 。 </section>

## Instructions
<section id="instructions">给你的猫照片<code>border-radius</code>为<code>50%</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的图像应具有<code>50%</code>的边框半径，使其完美呈圆形。
    testString: 'assert(parseInt($("img").css("border-top-left-radius")) > 48, "Your image should have a border radius of <code>50%</code>, making it perfectly circular.");'
  - text: 请务必使用<code>50%</code>的百分比值。
    testString: 'assert(code.match(/50%/g), "Be sure to use a percentage value of <code>50%</code>.");'

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
    border-radius: 10px;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
