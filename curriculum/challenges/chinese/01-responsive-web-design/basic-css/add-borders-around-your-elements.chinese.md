---
id: bad87fee1348bd9bedf08813
title: Add Borders Around Your Elements
challengeType: 0
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/add-borders-around-your-elements'
videoUrl: ''
localeTitle: 添加元素周围的边框
---

## Description
<section id="description"> CSS边框具有<code>style</code> ， <code>color</code>和<code>width</code>等属性。例如，如果我们想要在HTML元素周围创建一个红色的5像素边框，我们可以使用此类： <blockquote> &lt;风格&gt; <br> .thin-red-border { <br>边框颜色：红色; <br> border-width：5px; <br>边框式：坚固; <br> } <br> &lt;/样式&gt; </blockquote></section>

## Instructions
<section id="instructions">创建一个名为<code>thick-green-border</code> 。这个类应该在HTML元素周围添加一个10px的实心绿色边框。将课程应用于您的猫照片。请记住，您可以使用其<code>class</code>属性将多个类应用于元素，方法是使用空格分隔每个类名。例如： <code>&lt;img class=&quot;class1 class2&quot;&gt;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>img</code>元素应该具有<code>smaller-image</code>类。
    testString: 'assert($("img").hasClass("smaller-image"), "Your <code>img</code> element should have the class <code>smaller-image</code>.");'
  - text: 你的<code>img</code>元素应该有类<code>thick-green-border</code> 。
    testString: 'assert($("img").hasClass("thick-green-border"), "Your <code>img</code> element should have the class <code>thick-green-border</code>.");'
  - text: 为图像提供<code>10px</code>的边框宽度。
    testString: 'assert($("img").hasClass("thick-green-border") && parseInt($("img").css("border-top-width"), 10) >= 8 && parseInt($("img").css("border-top-width"), 10) <= 12, "Give your image a border width of <code>10px</code>.");'
  - text: 为您的图像提供<code>solid</code>的边框样式。
    testString: 'assert($("img").css("border-right-style") === "solid", "Give your image a border style of <code>solid</code>.");'
  - text: <code>img</code>元素周围的边框应为绿色。
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
