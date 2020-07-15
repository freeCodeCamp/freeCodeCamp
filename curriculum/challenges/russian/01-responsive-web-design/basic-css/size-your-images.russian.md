---
id: bad87fee1348bd9acdf08812
title: Size Your Images
challengeType: 0
videoUrl: https://scrimba.com/c/cM9MmCP
forumTopicId: 18282
localeTitle: Управляйте размером ваших изображений
---

## Description
<section id='description'>
CSS имеет свойство под названием <code>width</code>, которое управляет шириной элемента. Как и в случае с шрифтами, мы будем использовать пиксели <code>px</code> (pixels), чтобы указать ширину изображения. Например, если мы хотим создать класс CSS с именем <code>larger-image</code>, который дал бы HTML-элементам ширину 500 пикселей, мы будем использовать: <blockquote> &lt;style&gt; <br> .larger-image { <br> width: 500px; <br> } <br> &lt;/ style&gt; </blockquote>
</section>

## Instructions
<section id='instructions'>
Создайте класс <code>smaller-image</code> и используйте его для изменения размера изображения, чтобы оно было всего 100 пикселей в ширину. <strong>Заметка</strong> <br> Из-за различий в реализации браузера, вам может потребоваться 100% масштабирование для прохождения тестов в этом задании.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> element should have the class <code>smaller-image</code>.
    testString: assert($("img[src='https://bit.ly/fcc-relaxing-cat']").attr('class') === "smaller-image");
  - text: Your image should be 100 pixels wide. Browser zoom should be at 100%.
    testString: assert($("img").width() === 100);

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

</section>
