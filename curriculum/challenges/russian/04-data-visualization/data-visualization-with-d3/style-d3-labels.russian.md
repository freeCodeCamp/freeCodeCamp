---
id: 587d7faa367417b2b2512bd3
title: Style D3 Labels
challengeType: 6
forumTopicId: 301492
localeTitle: Стильные этикетки D3
---

## Description
<section id='description'>
Методы D3 могут добавлять стили к ярлыкам бара. Атрибут <code>fill</code> устанавливает цвет текста для <code>text</code> узла. Метод <code>style()</code> устанавливает правила CSS для других стилей, таких как «font-family» или «font-size».
</section>

## Instructions
<section id='instructions'>
Установите <code>font-size</code> для <code>text</code> элементов на 25 пикселей, а цвет текста - красный.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The labels should all have a <code>fill</code> color of red.
    testString: assert($('text').css('fill') == 'rgb(255, 0, 0)');
  - text: The labels should all have a <code>font-size</code> of 25 pixels.
    testString: assert($('text').css('font-size') == '25px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       // Add your code below this line



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
