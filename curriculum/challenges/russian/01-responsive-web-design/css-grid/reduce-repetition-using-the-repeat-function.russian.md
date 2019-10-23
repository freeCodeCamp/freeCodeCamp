---
id: 5a94fe3669fb03452672e45f
title: Reduce Repetition Using the repeat Function
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cQvqyHR
forumTopicId: 301133
localeTitle: Уменьшить повторение с помощью функции повтора
---

## Description
<section id='description'>
Когда вы использовали <code>grid-template-columns</code> и <code>grid-template-rows</code> для определения структуры сетки, вы ввели значение для каждой строки или столбца, который вы создали. Допустим, вам нужна сетка со 100 рядами одинаковой высоты. Внести 100 значений по отдельности не очень удобно. К счастью, есть лучший способ - с помощью функции <code>repeat</code> указать количество раз, когда вы хотите <code>repeat</code> свой столбец или строку, а затем запятую и значение, которое вы хотите повторить. Вот пример, который создавал бы сетку из 100 строк, каждая строка была бы высотой 50 пикселей. <blockquote> grid-template-rows: repeat (100, 50px); </blockquote> Вы также можете повторить несколько значений с помощью функции повтора и вставить функцию среди других значений при определении структуры сетки. Вот что я имею в виду: <blockquote> grid-template-columns: repeat (2, 1fr 50px) 20px; </blockquote> Это означает: <blockquote> grid-template-columns: 1fr 50px 1fr 50px 20px; </blockquote> <strong>Заметка</strong> <br> <code>1fr 50px</code> повторяется дважды, затем 20px.
</section>

## Instructions
<section id='instructions'>
Используйте <code>repeat</code> чтобы удалить повторение из свойства <code>grid-template-columns</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the width of <code>1fr</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi));

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

    grid-template-columns: 1fr 1fr 1fr;

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
var code = ".container {grid-template-columns: repeat(3, 1fr);}"
```

</section>
