---
id: 5a94fe4469fb03452672e460
title: Limit Item Size Using the minmax Function
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cD97RTv
forumTopicId: 301131
localeTitle: Предельный размер элемента Использование функции minmax
---

## Description
<section id='description'>
Существует еще одна встроенная функция для использования с <code>grid-template-columns</code> и <code>grid-template-rows</code> называемыми <code>minmax</code> . Он используется для ограничения размера элементов, когда контейнер сетки меняет размер. Для этого вам нужно указать допустимый диапазон размеров для вашего товара. Вот пример: <blockquote> grid-template-columns: 100px minmax (50px, 200px); </blockquote> В приведенном выше коде <code>grid-template-columns</code> установлены для создания двух столбцов; первая ширина 100px, а вторая имеет минимальную ширину 50px и максимальную ширину 200px.
</section>

## Instructions
<section id='instructions'>
Используя <code>minmax</code> функции, замените <code>1fr</code> в <code>repeat</code> функции с размером столбца , который имеет минимальную ширину <code>90px</code> и максимальную ширину <code>1fr</code> , и изменить размер панели предварительного просмотра , чтобы увидеть эффект.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the minimum width of <code>90px</code> and maximum width of <code>1fr</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi));

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
    /* change the code below this line */

    grid-template-columns: repeat(3, 1fr);

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

```

</div>

</section>

## Solution
<section id='solution'>

```html
var code = ".container {grid-template-columns: repeat(3, minmax(90px, 1fr));}"
```

</section>
