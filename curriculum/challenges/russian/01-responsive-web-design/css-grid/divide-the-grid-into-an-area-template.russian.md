---
id: 5a94fe0569fb03452672e45c
title: Divide the Grid Into an Area Template
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cLLpGAy
forumTopicId: 301130
localeTitle: Разделите сетку в шаблон области
---

## Description
<section id='description'>
Вы можете группировать ячейки вашей сетки вместе в <dfn>область</dfn> и присваивать области свое имя. Сделайте это, используя области <code>grid-template-areas</code> в контейнере следующим образом: <blockquote> Сетка-шаблон-направления: <br> &quot;заголовок заголовка заголовка&quot; <br> «контент содержания рекламы» <br> «нижний колонтитул нижнего колонтитула»; </blockquote> Приведенный выше код объединяет три верхние ячейки вместе в <code>header</code> , нижние три ячейки в область нижнего <code>footer</code> , и он делает две области в средней строке; <code>advert</code> и <code>content</code> . <strong>Заметка</strong> <br> Каждое слово в коде представляет собой ячейку, и каждая пара кавычек представляет собой строку. В дополнение к пользовательским ярлыкам вы можете использовать период ( <code>.</code> ) Для обозначения пустой ячейки в сетке.
</section>

## Instructions
<section id='instructions'>
Поместите шаблон области так, чтобы ячейка, помеченная <code>advert</code> стала пустой ячейкой.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-areas</code> property similar to the preview but has <code>.</code> instead of the <code>advert</code> area.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* change code below this line */

    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
    /* change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

    grid-template-areas:
      "header header header"
      ". content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

</section>
