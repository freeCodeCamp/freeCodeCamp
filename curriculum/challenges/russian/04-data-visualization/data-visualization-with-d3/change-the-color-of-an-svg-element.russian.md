---
id: 587d7fa9367417b2b2512bd1
title: Change the Color of an SVG Element
challengeType: 6
forumTopicId: 301480
localeTitle: Изменение цвета элемента SVG
---

## Description
<section id='description'>
Бары находятся в правильном положении, но все они имеют черный цвет. SVG имеет способ изменить цвет баров. В SVG <code>rect</code> форма окрашена с атрибутом <code>fill</code> . Он поддерживает шестнадцатеричные коды, имена цветов и значения rgb, а также более сложные параметры, такие как градиенты и прозрачность.
</section>

## Instructions
<section id='instructions'>
Добавьте метод <code>attr()</code> чтобы установить «заливку» всех баров на цвет «флот».
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The bars should all have a <code>fill</code> color of navy.
    testString: assert($('rect').css('fill') == "rgb(0, 0, 128)");

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
       .attr("height", (d, i) => 3 * d)
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
