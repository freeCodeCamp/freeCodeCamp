---
id: 5a94fe5469fb03452672e461
title: Create Flexible Layouts Using auto-fill
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cmzdycW
forumTopicId: 301126
localeTitle: Создание гибких макетов с использованием автозаполнения
---

## Description
<section id='description'>
Функция повтора поставляется с опцией, называемой <dfn>автозаполнением</dfn> . Это позволяет автоматически вставлять столько строк или столбцов требуемого размера, сколько возможно, в зависимости от размера контейнера. Вы можете создавать гибкие макеты при объединении <code>auto-fill</code> с <code>minmax</code> . В предварительном просмотре <code>grid-template-columns</code> установлены на <blockquote> repeat (автозаполнение, minmax (60px, 1fr)); </blockquote> Когда контейнер меняет размер, эта настройка сохраняет вставки столбцов 60px и растягивает их до тех пор, пока не сможет вставить другой. <strong>Заметка</strong> <br> Если ваш контейнер не может поместить все ваши предметы в одну строку, он переместит их на новый.
</section>

## Instructions
<section id='instructions'>
В первой сетке используйте <code>auto-fill</code> с <code>repeat</code> чтобы заполнить сетку столбцами, которые имеют минимальную ширину <code>60px</code> и максимум <code>1fr</code> . Затем измените размер предварительного просмотра, чтобы увидеть автоматическое заполнение в действии.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fill</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi));

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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* change the code below this line */
    
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    
    /* change the code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  
  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

</section>
