---
id: bad87fee1348bd9aedf08814
title: Add Rounded Corners with border-radius
challengeType: 0
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-rounded-corners-a-border-radius'
videoUrl: ''
localeTitle: Добавление закругленных углов при помощи свойства border-radius
---

## Description
<section id="description"> Ваша фотография кошки в настоящее время имеет острые углы. Мы можем скруглить эти углы с помощью CSS-свойства, называемого <code>border-radius</code> . </section>

## Instructions
<section id="instructions"> Вы можете указать <code>border-radius</code> в пикселях. Задайте вашей фотографии кошки <code>border-radius</code> <code>10px</code> . Примечание: эта задача позволяет использовать несколько возможных решений. Например, вы можете добавить <code>border-radius</code> для <code>.thick-green-border</code> или класса <code>.smaller-image</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Элемент изображения должен иметь класс «thick-green-border».
    testString: 'assert($("img").hasClass("thick-green-border"), "Your image element should have the class "thick-green-border".");'
  - text: Ваше изображение должно иметь радиус границы <code>10px</code>
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
  <p class="red-text">Нажмите здесь, чтобы просмотреть больше <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="Симпатичная оранжевая кошка лежит на спине."></a>

  <div>
    <p>Вещи которые кошки любят:</p>
    <ul>
      <li>котовник</li>
      <li>лазерные указки</li>
      <li>лазанья</li>
    </ul>
    <p>Топ 3 вещи которые кошки ненавидят:</p>
    <ol>
      <li>лечение блох</li>
      <li>гром</li>
      <li>другие кошки</li>
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
