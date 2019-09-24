---
id: 587d7faa367417b2b2512bd4
title: Add a Hover Effect to a D3 Element
challengeType: 6
forumTopicId: 301469
localeTitle: Добавить эффект наведения на элемент D3
---

## Description
<section id='description'>
Можно добавлять эффекты, выделяющие панель, когда пользователь наводил на нее курсор мыши. Пока что стиль для прямоугольников применяется со встроенными методами D3 и SVG, но вы также можете использовать CSS. Вы устанавливаете класс CSS в элементах SVG с помощью метода <code>attr()</code> . Затем псевдокласс класса <code>:hover</code> для вашего нового класса содержит правила стиля для любых эффектов зависания.
</section>

## Instructions
<section id='instructions'>
Используйте метод <code>attr()</code> чтобы добавить класс <code>bar</code> ко всем элементам <code>rect</code> . Это изменит цвет <code>fill</code> на коричневый, если вы нажмете на него.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>rect</code> elements should have a class of <code>bar</code>.
    testString: assert($('rect').attr('class') == "bar");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("fill", "navy")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

  </script>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("fill", "navy")
       // Add your code below this line
       .attr('class', 'bar')
       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);
  </script>
</body>
```

</section>
