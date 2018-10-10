---
id: 5a9036ee38fddaf9a66b5d34
title: Use CSS Grid units to Change the Size of Columns and Rows
challengeType: 0
videoUrl: ''
localeTitle: Используйте элементы сетки CSS для изменения размера столбцов и строк.
---

## Description
<section id="description"> Вы можете использовать абсолютные и относительные единицы, такие как <code>px</code> и <code>em</code> в CSS Grid, чтобы определить размер строк и столбцов. Вы также можете использовать их: <code>fr</code> : устанавливает столбец или строку на долю доступного пространства, <code>auto</code> : <code>auto</code> устанавливает столбец или строку в ширину или высоту своего содержимого, <code>%</code> : настраивает столбец или строку на процентную ширину его контейнера. Вот код, который генерирует вывод в предварительном просмотре: <blockquote> grid-template-columns: auto 50px 10% 2fr 1fr; </blockquote> Этот фрагмент создает пять столбцов. Первый столбец такой же широкий, как и его содержимое, второй столбец - 50 пикселей, третий столбец - 10% его контейнера и для последних двух столбцов; оставшееся пространство делится на три секции, два - на четвертый столбец, а второй - на пятый. </section>

## Instructions
<section id="instructions"> Создайте сетку с тремя столбцами, ширина которых будет следующей: 1fr, 100px и 2fr. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'класс <code>container</code> должен иметь свойство <code>grid-template-columns</code> которое имеет три столбца со следующими ширинами: <code>1fr, 100px, and 2fr</code> .'
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that has three columns with the following widths: <code>1fr, 100px, and 2fr</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* modify the code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* modify the code above this line */
    grid-template-rows: 50px 50px;
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
