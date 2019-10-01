---
id: 587d7fa9367417b2b2512bcf
title: Dynamically Change the Height of Each Bar
challengeType: 6
forumTopicId: 301486
localeTitle: Динамическое изменение высоты каждой панели
---

## Description
<section id='description'>
Высота каждой панели может быть установлена ​​на значение точки данных в массиве, подобно тому, как значение <code>x</code> было задано динамически. <blockquote> selection.attr (&quot;свойство&quot;, (d, i) =&gt; { <br> / * <br> * d - значение точки данных <br> * i - индекс точки данных в массиве <br> * / <br> }) </blockquote>
</section>

## Instructions
<section id='instructions'>
Измените функцию обратного вызова для атрибута <code>height</code> чтобы вернуть значение времени данных 3. <strong>Примечание.</strong> <br> Помните, что умножение всех точек данных на одну и ту же константу масштабирует данные (например, масштабирование). Это помогает увидеть различия между значениями бар в этом примере.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>rect</code> should have a <code>height</code> of 36.
    testString: assert($('rect').eq(0).attr('height') == '36');
  - text: The second <code>rect</code> should have a <code>height</code> of 93.
    testString: assert($('rect').eq(1).attr('height') == '93');
  - text: The third <code>rect</code> should have a <code>height</code> of 66.
    testString: assert($('rect').eq(2).attr('height') == '66');
  - text: The fourth <code>rect</code> should have a <code>height</code> of 51.
    testString: assert($('rect').eq(3).attr('height') == '51');
  - text: The fifth <code>rect</code> should have a <code>height</code> of 75.
    testString: assert($('rect').eq(4).attr('height') == '75');
  - text: The sixth <code>rect</code> should have a <code>height</code> of 54.
    testString: assert($('rect').eq(5).attr('height') == '54');
  - text: The seventh <code>rect</code> should have a <code>height</code> of 87.
    testString: assert($('rect').eq(6).attr('height') == '87');
  - text: The eighth <code>rect</code> should have a <code>height</code> of 42.
    testString: assert($('rect').eq(7).attr('height') == '42');
  - text: The ninth <code>rect</code> should have a <code>height</code> of 27.
    testString: assert($('rect').eq(8).attr('height') == '27');

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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
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
