---
id: 587d7fab367417b2b2512bd7
title: Create a Scatterplot with SVG Circles
challengeType: 6
forumTopicId: 301484
localeTitle: Создайте Scatterplot с кругами SVG
---

## Description
<section id='description'>
График рассеяния - это еще один вид визуализации. Он обычно использует круги для сопоставления точек данных, каждая из которых имеет по два значения. Эти значения привязываются к осям <code>x</code> и <code>y</code> и используются для позиционирования круга при визуализации. SVG имеет <code>circle</code> тег для создания формы круга. Он очень похож на элементы <code>rect</code> которые вы использовали для гистограммы.
</section>

## Instructions
<section id='instructions'>
Используйте методы <code>data()</code> , <code>enter()</code> и <code>append()</code> для привязки <code>dataset</code> к новым элементам <code>circle</code> , которые добавляются к холсту SVG. <strong>Заметка</strong> <br> Круги не будут видны, потому что мы еще не установили их атрибуты. Мы сделаем это в следующей задаче.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have 10 <code>circle</code> elements.
    testString: assert($('circle').length == 10);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
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
