---
id: 58c383d33e2e3259241f3076
title: Use Attribute Selectors to Style Elements
challengeType: 0
videoUrl: https://scrimba.com/c/cnpymfJ
forumTopicId: 301092
localeTitle: Используйте атрибуты селекторов для стилизации элементов
---

## Description
<section id='description'>
Вы <code>id</code> атрибуты <code>id</code> или <code>class</code> к элементам, которые вы хотите специально создать. Они известны как идентификаторы и селектора классов. Существуют и другие селектора CSS, которые вы можете использовать для выбора пользовательских групп элементов в стиле. Давайте снова рассмотрим CatPhotoApp, чтобы использовать CSS Selectors. Для этой задачи вы будете использовать селектор атрибутов <code>[attr=value]</code> , чтобы установить чекбоксы в CatPhotoApp. Этот селектор соответствует элементам стилей с определенным значением атрибута. Например, приведенный ниже код изменяет поля всех элементов с <code>type</code> атрибута и соответствующим значением <code>radio</code> : <blockquote> [type = &#39;radio&#39;] { <br> margin: 20px 0px 20px 0px; <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Используя селектор атрибутов <code>type</code>, присвойте чекбоксам в CatPhotoApp верхний марджин 10px и нижний марджин 15px.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>type</code> attribute selector should be used to select the checkboxes.
    testString: assert(code.match(/<style>[\s\S]*?\[type=("|')checkbox\1\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi));
  - text: The top margins of the checkboxes should be 10px.
    testString: assert((function() {var count=0; $("[type='checkbox']").each(function() { if($(this).css('marginTop') === '10px') {count++;}});return (count===3)}()));
  - text: The bottom margins of the checkboxes should be 15px.
    testString: assert((function() {var count=0; $("[type='checkbox']").each(function() { if($(this).css('marginBottom') === '15px') {count++;}});return (count===3)}()));

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
  [type='checkbox'] {
    margin-top: 10px;
    margin-bottom: 15px;
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

</section>
