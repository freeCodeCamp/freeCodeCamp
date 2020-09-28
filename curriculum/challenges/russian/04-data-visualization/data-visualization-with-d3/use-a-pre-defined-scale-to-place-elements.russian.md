---
id: 587d7fac367417b2b2512bde
title: Use a Pre-Defined Scale to Place Elements
challengeType: 6
forumTopicId: 301494
localeTitle: Используйте предварительно заданную шкалу для размещения элементов
---

## Description
<section id='description'>
С установленными весами пришло время снова отобразить график рассеяния. Масштабы похожи на функции обработки, которые превращают исходные данные x и y в значения, которые соответствуют и визуализируются правильно на холсте SVG. Они хранят данные в области построения экрана. Вы устанавливаете значения атрибута координат для формы SVG с помощью функции масштабирования. Сюда входят атрибуты <code>x</code> и <code>y</code> для <code>rect</code> или <code>text</code> элементов, или <code>cx</code> и <code>cy</code> для <code>circles</code> . Вот пример: <blockquote> форма <br> .attr (&quot;x&quot;, (d) =&gt; xScale (d [0])) </blockquote> Масштабы устанавливают атрибуты координат формы, чтобы поместить точки данных на холст SVG. Вам не нужно применять шкалы, когда вы показываете фактическое значение данных, например, в методе <code>text()</code> для всплывающей подсказки или метки.
</section>

## Instructions
<section id='instructions'>
Используйте <code>xScale</code> и <code>yScale</code> чтобы <code>yScale</code> <code>circle</code> и <code>text</code> фигуры на холст SVG. Для <code>circles</code> применяйте шкалы для установки атрибутов <code>cx</code> и <code>cy</code> . Дайте им радиус 5 единиц. Для <code>text</code> элементов примените шкалы для установки атрибутов <code>x</code> и <code>y</code> . Этикетки должны быть смещены справа от точек. Для этого добавьте 10 единиц к значению данных x, прежде чем передавать его в <code>xScale</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have 10 <code>circle</code> elements.
    testString: assert($('circle').length == 10);
  - text: The first <code>circle</code> element should have a <code>cx</code> value of approximately 91 and a <code>cy</code> value of approximately 368 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(0).attr('cx')) == '91' && Math.round($('circle').eq(0).attr('cy')) == '368' && $('circle').eq(0).attr('r') == '5');
  - text: The second <code>circle</code> element should have a <code>cx</code> value of approximately 159 and a <code>cy</code> value of approximately 181 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(1).attr('cx')) == '159' && Math.round($('circle').eq(1).attr('cy')) == '181' && $('circle').eq(1).attr('r') == '5');
  - text: The third <code>circle</code> element should have a <code>cx</code> value of approximately 340 and a <code>cy</code> value of approximately 329 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(2).attr('cx')) == '340' && Math.round($('circle').eq(2).attr('cy')) == '329' && $('circle').eq(2).attr('r') == '5');
  - text: The fourth <code>circle</code> element should have a <code>cx</code> value of approximately 131 and a <code>cy</code> value of approximately 60 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(3).attr('cx')) == '131' && Math.round($('circle').eq(3).attr('cy')) == '60' && $('circle').eq(3).attr('r') == '5');
  - text: The fifth <code>circle</code> element should have a <code>cx</code> value of approximately 440 and a <code>cy</code> value of approximately 237 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(4).attr('cx')) == '440' && Math.round($('circle').eq(4).attr('cy')) == '237' && $('circle').eq(4).attr('r') == '5');
  - text: The sixth <code>circle</code> element should have a <code>cx</code> value of approximately 271 and a <code>cy</code> value of approximately 306 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(5).attr('cx')) == '271' && Math.round($('circle').eq(5).attr('cy')) == '306' && $('circle').eq(5).attr('r') == '5');
  - text: The seventh <code>circle</code> element should have a <code>cx</code> value of approximately 361 and a <code>cy</code> value of approximately 351 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(6).attr('cx')) == '361' && Math.round($('circle').eq(6).attr('cy')) == '351' && $('circle').eq(6).attr('r') == '5');
  - text: The eighth <code>circle</code> element should have a <code>cx</code> value of approximately 261 and a <code>cy</code> value of approximately 132 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(7).attr('cx')) == '261' && Math.round($('circle').eq(7).attr('cy')) == '132' && $('circle').eq(7).attr('r') == '5');
  - text: The ninth <code>circle</code> element should have a <code>cx</code> value of approximately 131 and a <code>cy</code> value of approximately 144 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(8).attr('cx')) == '131' && Math.round($('circle').eq(8).attr('cy')) == '144' && $('circle').eq(8).attr('r') == '5');
  - text: The tenth <code>circle</code> element should have a <code>cx</code> value of approximately 79 and a <code>cy</code> value of approximately 326 after applying the scales. It should also have an <code>r</code> value of 5.
    testString: assert(Math.round($('circle').eq(9).attr('cx')) == '79' && Math.round($('circle').eq(9).attr('cy')) == '326' && $('circle').eq(9).attr('r') == '5');
  - text: Your code should have 10 <code>text</code> elements.
    testString: assert($('text').length == 10);
  - text: The first label should have an <code>x</code> value of approximately 100 and a <code>y</code> value of approximately 368 after applying the scales.
    testString: assert(Math.round($('text').eq(0).attr('x')) == '100' && Math.round($('text').eq(0).attr('y')) == '368');
  - text: The second label should have an <code>x</code> value of approximately 168 and a <code>y</code> value of approximately 181 after applying the scales.
    testString: assert(Math.round($('text').eq(1).attr('x')) == '168' && Math.round($('text').eq(1).attr('y')) == '181');
  - text: The third label should have an <code>x</code> value of approximately 350 and a <code>y</code> value of approximately 329 after applying the scales.
    testString: assert(Math.round($('text').eq(2).attr('x')) == '350' && Math.round($('text').eq(2).attr('y')) == '329');
  - text: The fourth label should have an <code>x</code> value of approximately 141 and a <code>y</code> value of approximately 60 after applying the scales.
    testString: assert(Math.round($('text').eq(3).attr('x')) == '141' && Math.round($('text').eq(3).attr('y')) == '60');
  - text: The fifth label should have an <code>x</code> value of approximately 449 and a <code>y</code> value of approximately 237 after applying the scales.
    testString: assert(Math.round($('text').eq(4).attr('x')) == '449' && Math.round($('text').eq(4).attr('y')) == '237');
  - text: The sixth label should have an <code>x</code> value of approximately 280 and a <code>y</code> value of approximately 306 after applying the scales.
    testString: assert(Math.round($('text').eq(5).attr('x')) == '280' && Math.round($('text').eq(5).attr('y')) == '306');
  - text: The seventh label should have an <code>x</code> value of approximately 370 and a <code>y</code> value of approximately 351 after applying the scales.
    testString: assert(Math.round($('text').eq(6).attr('x')) == '370' && Math.round($('text').eq(6).attr('y')) == '351');
  - text: The eighth label should have an <code>x</code> value of approximately 270 and a <code>y</code> value of approximately 132 after applying the scales.
    testString: assert(Math.round($('text').eq(7).attr('x')) == '270' && Math.round($('text').eq(7).attr('y')) == '132');
  - text: The ninth label should have an <code>x</code> value of approximately 140 and a <code>y</code> value of approximately 144 after applying the scales.
    testString: assert(Math.round($('text').eq(8).attr('x')) == '140' && Math.round($('text').eq(8).attr('y')) == '144');
  - text: The tenth label should have an <code>x</code> value of approximately 88 and a <code>y</code> value of approximately 326 after applying the scales.
    testString: assert(Math.round($('text').eq(9).attr('x')) == '88' && Math.round($('text').eq(9).attr('y')) == '326');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
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
