---
id: 587d7791367417b2b2512ab4
title: Adjust the Width of an Element Using the width Property
challengeType: 0
videoUrl: https://scrimba.com/c/cvVLPtN
forumTopicId: 301039
localeTitle: Настройка ширины элемента с помощью свойства width
---

## Description
<section id='description'>
Вы можете указать ширину элемента, используя свойство <code>width</code> в CSS. Значения могут быть указаны в единицах относительной длины (например, em), единицах абсолютной длины (например, px) или в процентах от содержащего его родительского элемента. Вот пример, который задаёт ширину изображения равной 220 пикселям: <blockquote> img { <br> width: 220px; <br> } </blockquote>
</section>

## Instructions
<section id="instructions">
Добавьте свойство <code>width</code> ко всей карточке и установите абсолютное значение 245px. Используйте класс <code>fullCard</code> чтобы выбрать элемент.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should change the <code>width</code> property of the card to 245 pixels by using the <code>fullCard</code> class selector.
    testString: assert($('.fullCard').css('width') === '245px' && /\.fullCard{\S*width:245px(;\S*}|})/.test($('style').text().replace(/\s/g ,'')));

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
