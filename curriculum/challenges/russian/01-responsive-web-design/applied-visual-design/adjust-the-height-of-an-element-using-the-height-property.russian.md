---
id: 587d7791367417b2b2512ab5
title: Adjust the Height of an Element Using the height Property
challengeType: 0
videoUrl: https://scrimba.com/c/cEDaDTN
forumTopicId: 301034
localeTitle: Отрегулируйте высоту элемента с помощью свойства height
---

## Description
<section id='description'>
Вы можете указать высоту элемента, используя свойство <code>height</code> в CSS, подобное свойству <code>width</code> . Вот пример, который изменяет высоту изображения на 20 пикселей: <blockquote> img { <br> height: 20 px; <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте свойство <code>height</code> в тег <code>h4</code> и установите его на 25 пикселей.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should change the <code>h4</code> <code>height</code> property to a value of 25 pixels.
    testString: assert($('h4').css('height') === '25px' && /h4{\S*height:25px(;\S*}|})/.test($('style').text().replace(/\s/g ,'')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;

  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</section>
