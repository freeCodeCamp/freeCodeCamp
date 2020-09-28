---
id: bad87dee1348bd9aede07836
title: Use an id Attribute to Style an Element
challengeType: 0
videoUrl: https://scrimba.com/c/cakyZfL
forumTopicId: 18339
localeTitle: Использовать атрибут id для стилирования элемента
---

## Description
<section id='description'>
Одной из замечательных особенностей атрибутов <code>id</code> является то, что, подобно классам, вы можете создавать их с помощью CSS. Однако <code>id</code> не может использоваться повторно и должен применяться только к одному элементу. <code>id</code> также имеет более высокую специфичность (важность), чем класс, поэтому, если оба применяются к одному и тому же элементу и имеют конфликтующие стили, применяются стили <code>id</code> . Вот пример того, как вы можете взять свой элемент с атрибутом <code>id</code> <code>cat-photo-element</code> и присвоить ему зеленый цвет фона. В вашем элементе <code>style</code> : <blockquote> # cat-photo-element { <br> фон-цвет: зеленый; <br> } </blockquote> Обратите внимание, что внутри вашего элемента <code>style</code> вы всегда ссылаетесь на классы, помещая a <code>.</code> перед их именами. Вы всегда ссылаетесь на идентификаторы, помещая <code>#</code> перед их именами.
</section>

## Instructions
<section id='instructions'>
Попробуйте дать свою форму, которая теперь имеет атрибут <code>id</code> <code>cat-photo-form</code> , зеленый фон.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Give your <code>form</code> element the id of <code>cat-photo-form</code>.
    testString: assert($("form").attr("id") === "cat-photo-form");
  - text: Your <code>form</code> element should have the <code>background-color</code> of green.
    testString: assert($("#cat-photo-form").css("background-color") === "rgb(0, 128, 0)");
  - text: Make sure your <code>form</code> element has an <code>id</code> attribute.
    testString: assert(code.match(/<form.*cat-photo-form.*>/gi) && code.match(/<form.*cat-photo-form.*>/gi).length > 0);
  - text: Do not give your <code>form</code> any <code>class</code> or <code>style</code> attributes.
    testString: assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi));

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

  #cat-photo-form {
    background-color: green;
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
