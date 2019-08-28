---
id: 587d7fa8367417b2b2512bca
title: Change the Presentation of a Bar Chart
challengeType: 6
forumTopicId: 301481
localeTitle: Изменение презентации диаграммы
---

## Description
<section id='description'>
Последняя задача создала гистограмму, но есть несколько изменений форматирования, которые могли бы ее улучшить: 1) добавьте пробел между каждым столбцом, чтобы визуально отделить их, что делается путем добавления поля к CSS для класса <code>bar</code> 2) Увеличить высота баров, чтобы лучше показать разницу в значениях, что делается путем умножения значения на число для масштабирования высоты
</section>

## Instructions
<section id='instructions'>
Во- первых, добавьте <code>margin</code> в 2px в <code>bar</code> класса в <code>style</code> тега. Затем измените функцию обратного вызова в методе <code>style()</code> чтобы она вернула значение в 10 раз по сравнению с исходным значением данных (плюс «px»). <strong>Заметка</strong> <br> Умножение каждой точки данных на <em>одну и</em> ту <em>же</em> константу только изменяет масштаб. Это похоже на масштабирование, и оно не меняет значения базовых данных.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>div</code> should have a <code>height</code> of 120 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(0).css('height') == '120px' && $('div').eq(0).css('margin-right') == '2px');
  - text: The second <code>div</code> should have a <code>height</code> of 310 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(1).css('height') == '310px' && $('div').eq(1).css('margin-right') == '2px');
  - text: The third <code>div</code> should have a <code>height</code> of 220 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(2).css('height') == '220px' && $('div').eq(2).css('margin-right') == '2px');
  - text: The fourth <code>div</code> should have a <code>height</code> of 170 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(3).css('height') == '170px' && $('div').eq(3).css('margin-right') == '2px');
  - text: The fifth <code>div</code> should have a <code>height</code> of 250 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(4).css('height') == '250px' && $('div').eq(4).css('margin-right') == '2px');
  - text: The sixth <code>div</code> should have a <code>height</code> of 180 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(5).css('height') == '180px' && $('div').eq(5).css('margin-right') == '2px');
  - text: The seventh <code>div</code> should have a <code>height</code> of 290 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(6).css('height') == '290px' && $('div').eq(6).css('margin-right') == '2px');
  - text: The eighth <code>div</code> should have a <code>height</code> of 140 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(7).css('height') == '140px' && $('div').eq(7).css('margin-right') == '2px');
  - text: The ninth <code>div</code> should have a <code>height</code> of 90 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(8).css('height') == '90px' && $('div').eq(8).css('margin-right') == '2px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */

    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (d) => (d + "px"))

      // Add your code above this line
  </script>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
