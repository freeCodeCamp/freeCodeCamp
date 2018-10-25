---
id: bad87fee1348bd9acdf08812
title: Size Your Images
challengeType: 0
videoUrl: ''
localeTitle: 调整图像大小
---

## Description
<section id="description"> CSS有一个名为<code>width</code>的属性，用于控制元素的宽度。就像字体一样，我们将使用<code>px</code> （像素）来指定图像的宽度。例如，如果我们想要创建一个名为<code>larger-image</code>的CSS类，它给HTML元素的宽度为500像素，我们将使用： <blockquote> &lt;风格&gt; <br> .larger-image { <br>宽度：500px; <br> } <br> &lt;/样式&gt; </blockquote></section>

## Instructions
<section id="instructions">创建一个名为<code>smaller-image</code>的类，并使用它来调整图像大小，使其只有100像素宽。 <strong>注意</strong> <br>由于浏览器实现的差异，您可能需要100％缩放才能通过此挑战的测试。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>img</code>元素应该具有<code>smaller-image</code>类。
    testString: 'assert($("img[src="https://bit.ly/fcc-relaxing-cat"]").attr("class") === "smaller-image", "Your <code>img</code> element should have the class <code>smaller-image</code>.");'
  - text: 您的图片应为100像素宽。浏览器缩放应为100％。
    testString: 'assert($("img").width() === 100, "Your image should be 100 pixels wide. Browser zoom should be at 100%.");'

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
</section>
