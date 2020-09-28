---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/c6N7VhK
forumTopicId: 301135
localeTitle: Использование сетки без создания шаблона областей
---

## Description
<section id='description'>
Свойство <code>grid-area</code> вы узнали в последней задаче, можно использовать по-другому. Если в вашей сетке нет шаблона областей для ссылки, вы можете создать область «на лету» для элемента, который будет размещен следующим образом: <blockquote> item1 {сетка: 1/1/2/4; } </blockquote> Это использует номера строк, которые вы узнали ранее, чтобы определить, где будет область для этого элемента. Цифры в приведенном выше примере представляют эти значения: <blockquote> grid-area: горизонтальная линия для начала / вертикальной линии для начала / горизонтальной линии до конца на / вертикальной линии до конца; </blockquote> Таким образом, элемент в примере будет потреблять строки между строками 1 и 2 и столбцы между строками 1 и 4.
</section>

## Instructions
<section id='instructions'>
Используя свойство <code>grid-area</code> , поместите элемент с классом <code>item5</code> между третьей и четвертой горизонтальными линиями и между первой и четвертой вертикальными линиями.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code> class should have a <code>grid-area</code> property such that it is between the third and fourth horizontal lines and between the first and fourth vertical lines.
    testString: assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi));

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

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
var code = ".item5 {grid-area: 3/1/4/4;}"
```

</section>
