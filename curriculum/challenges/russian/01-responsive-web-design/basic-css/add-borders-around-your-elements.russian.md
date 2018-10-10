---
id: bad87fee1348bd9bedf08813
title: Add Borders Around Your Elements
challengeType: 0
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-borders-around-your-elements'
videoUrl: ''
localeTitle: Добавить границы вокруг ваших элементов
---

## Description
<section id="description"> Границы CSS имеют такие свойства, как <code>style</code> , <code>color</code> и <code>width</code> Например, если бы мы хотели создать красную границу с 5 пикселями вокруг элемента HTML, мы могли бы использовать этот класс: <blockquote> &lt;Стиль&gt; <br> .thin-red-border { <br> border-color: red; <br> border-width: 5px; <br> border-style: solid; <br> } <br> &lt;/ Стиль&gt; </blockquote></section>

## Instructions
<section id="instructions"> Создайте класс под названием « <code>thick-green-border</code> . Этот класс должен добавить 10px, сплошную зеленую рамку вокруг элемента HTML. Примените класс к фотографии вашего кота. Помните, что вы можете применять несколько классов к элементу с помощью его атрибута <code>class</code> , разделив каждое имя класса на пробел. Например: <code>&lt;img class=&quot;class1 class2&quot;&gt;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("img").hasClass("smaller-image"), "Your <code>img</code> element should have the class <code>smaller-image</code>.");'
  - text: Ваш элемент <code>img</code> должен обладать классом <code>thick-green-border</code> .
    testString: 'assert($("img").hasClass("thick-green-border"), "Your <code>img</code> element should have the class <code>thick-green-border</code>.");'
  - text: Дайте вашему изображению ширину границы 10 <code>10px</code> .
    testString: 'assert($("img").hasClass("thick-green-border") && parseInt($("img").css("border-top-width"), 10) >= 8 && parseInt($("img").css("border-top-width"), 10) <= 12, "Give your image a border width of <code>10px</code>.");'
  - text: Дайте вашему изображению стиль границы <code>solid</code> .
    testString: 'assert($("img").css("border-right-style") === "solid", "Give your image a border style of <code>solid</code>.");'
  - text: Граница вокруг вашего элемента <code>img</code> должна быть зеленой.
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
