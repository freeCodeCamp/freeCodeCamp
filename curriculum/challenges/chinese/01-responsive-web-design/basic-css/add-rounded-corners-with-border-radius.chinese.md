---
id: bad87fee1348bd9aedf08814
title: Add Rounded Corners with border-radius
challengeType: 0
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/add-rounded-corners-a-border-radius'
videoUrl: ''
localeTitle: 添加带有border-radius的圆角
---

## Description
<section id="description">你的猫照片目前有尖角。我们可以使用名为<code>border-radius</code>的CSS属性来舍入这些角。 </section>

## Instructions
<section id="instructions">您可以使用像素指定<code>border-radius</code> 。给你的猫照片<code>border-radius</code> <code>10px</code> 。注意：此挑战允许多种可能的解决方案。例如，您可以将<code>border-radius</code>添加到<code>.thick-green-border</code>类或<code>.smaller-image</code>类。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的图片元素应该具有“thick-green-border”类。
    testString: 'assert($("img").hasClass("thick-green-border"), "Your image element should have the class "thick-green-border".");'
  - text: 您的图像的边框半径应为<code>10px</code>
    testString: 'assert(parseInt($("img").css("border-top-left-radius")) > 8, "Your image should have a border radius of <code>10px</code>");'

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
