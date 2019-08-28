---
id: 5a94fe6269fb03452672e462
title: Create Flexible Layouts Using auto-fit
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/c3dPph8
forumTopicId: 301127
localeTitle: Создание гибких макетов с использованием автоматической подгонки
---

## Description
<section id='description'>
<code>auto-fit</code> работает почти идентично <code>auto-fill</code> . Единственное различие заключается в том, что, когда размер контейнера превышает размер всех объединенных элементов, <code>auto-fill</code> сохраняет вставки пустых строк или столбцов и толкает ваши элементы в сторону, в то время как <code>auto-fit</code> сворачивает эти пустые строки или столбцы и растягивает ваши элементы до установите размер контейнера. <strong>Заметка</strong> <br> Если ваш контейнер не может поместить все ваши предметы в одну строку, он переместит их на новый.
</section>

## Instructions
<section id='instructions'>
Во второй сетке используйте <code>auto-fit</code> с <code>repeat</code> чтобы заполнить сетку столбцами, которые имеют минимальную ширину <code>60px</code> и максимум <code>1fr</code> . Затем измените размер предварительного просмотра, чтобы увидеть разницу.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container2</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fit</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi));

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
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
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
var code = ".container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}"
```

</section>
