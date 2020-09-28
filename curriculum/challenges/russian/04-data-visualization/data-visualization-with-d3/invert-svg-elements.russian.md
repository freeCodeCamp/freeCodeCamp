---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
challengeType: 6
forumTopicId: 301488
localeTitle: Инвертировать элементы SVG
---

## Description
<section id='description'>
Возможно, вы заметили, что гистограмма выглядела как перевернутая или перевернутая. Это связано с тем, как SVG использует (x, y) координаты. В SVG начальная точка для координат находится в верхнем левом углу. Координата <code>x</code> из 0 помещает фигуру на левый край области SVG. Координата <code>y</code> из 0 устанавливает форму на верхнем краю области SVG. Более высокие значения <code>x</code> нажимают прямоугольник вправо. Более высокие значения <code>y</code> выталкивают прямоугольник вниз. Чтобы сделать панели правыми, вам нужно изменить способ вычисления <code>y</code> координаты. Он должен учитывать как высоту бара, так и общую высоту области SVG. Высота области SVG равна 100. Если у вас есть точка данных из 0 в наборе, вы хотите, чтобы панель начиналась в нижней части области SVG (а не сверху). Для этого координата <code>y</code> должна иметь значение 100. Если значение точки данных равно 1, вы должны начать с координаты <code>y</code> из 100, чтобы установить планку внизу. Затем вам нужно учитывать высоту полосы 1, поэтому конечная координата <code>y</code> будет равна 99. Координата <code>y</code> которая равна <code>y = heightOfSVG - heightOfBar</code> , поместит бары вправо-вверх.
</section>

## Instructions
<section id='instructions'>
Измените функцию обратного вызова для атрибута <code>y</code> чтобы установить бары вправо-вверх. Помните, что <code>height</code> бара в 3 раза превышает значение <code>d</code> . <strong>Заметка</strong> <br> В общем случае соотношение <code>y = h - m * d</code> , где <code>m</code> - постоянная, которая масштабирует точки данных.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>rect</code> should have a <code>y</code> value of 64.
    testString: assert($('rect').eq(0).attr('y') == h - (dataset[0] * 3));
  - text: The second <code>rect</code> should have a <code>y</code> value of 7.
    testString: assert($('rect').eq(1).attr('y') == h - (dataset[1] * 3));
  - text: The third <code>rect</code> should have a <code>y</code> value of 34.
    testString: assert($('rect').eq(2).attr('y') == h - (dataset[2] * 3));
  - text: The fourth <code>rect</code> should have a <code>y</code> value of 49.
    testString: assert($('rect').eq(3).attr('y') == h - (dataset[3] * 3));
  - text: The fifth <code>rect</code> should have a <code>y</code> value of 25.
    testString: assert($('rect').eq(4).attr('y') == h - (dataset[4] * 3));
  - text: The sixth <code>rect</code> should have a <code>y</code> value of 46.
    testString: assert($('rect').eq(5).attr('y') == h - (dataset[5] * 3));
  - text: The seventh <code>rect</code> should have a <code>y</code> value of 13.
    testString: assert($('rect').eq(6).attr('y') == h - (dataset[6] * 3));
  - text: The eighth <code>rect</code> should have a <code>y</code> value of 58.
    testString: assert($('rect').eq(7).attr('y') == h - (dataset[7] * 3));
  - text: The ninth <code>rect</code> should have a <code>y</code> value of 73.
    testString: assert($('rect').eq(8).attr('y') == h - (dataset[8] * 3));

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
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
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
