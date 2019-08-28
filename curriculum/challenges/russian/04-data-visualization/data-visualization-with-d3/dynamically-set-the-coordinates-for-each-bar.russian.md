---
id: 587d7fa9367417b2b2512bce
title: Dynamically Set the Coordinates for Each Bar
challengeType: 6
forumTopicId: 301487
localeTitle: Динамически устанавливать координаты для каждого бара
---

## Description
<section id='description'>
Последняя задача создала и добавила прямоугольник к элементу <code>svg</code> для каждой точки в <code>dataset</code> для представления строки. К сожалению, все они были сложены друг на друга. Размещение прямоугольника обрабатывается атрибутами <code>x</code> и <code>y</code> . Они сообщают D3, где начать рисовать фигуру в области <code>svg</code> . Последний вызов задал каждому из них значение 0, поэтому каждый бар был помещен в верхний левый угол. Для гистограммы все бары должны находиться на одном и том же вертикальном уровне, что означает, что значение <code>y</code> остается неизменным (в 0) для всех баров. Однако значение <code>x</code> должно изменяться при добавлении новых баров. Помните, что большие значения <code>x</code> перемещают элементы дальше вправо. По мере прохождения элементов массива в <code>dataset</code> значение x должно увеличиваться. Метод <code>attr()</code> в D3 принимает функцию обратного вызова, чтобы динамически установить этот атрибут. Функция обратного вызова принимает два аргумента: один для самой точки данных (обычно <code>d</code> ) и один для индекса точки данных в массиве. Второй аргумент для индекса является необязательным. Вот формат: <blockquote> selection.attr (&quot;свойство&quot;, (d, i) =&gt; { <br> / * <br> * d - значение точки данных <br> * i - индекс точки данных в массиве <br> * / <br> }) </blockquote> Важно отметить, что вам не нужно писать цикл <code>for</code> или использовать <code>forEach()</code> для перебора элементов в наборе данных. Напомним, что метод <code>data()</code> анализирует набор данных, и любой метод, который привязан после того, как <code>data()</code> запускается один раз для каждого элемента в наборе данных.
</section>

## Instructions
<section id='instructions'>
Измените функцию обратного вызова атрибута <code>x</code> чтобы он возвращал значение индекса 30. <strong>Примечание.</strong> <br> Каждый бар имеет ширину 25, поэтому увеличение каждого значения <code>x</code> на 30 добавляет некоторое пространство между столбцами. Любое значение, большее 25, будет работать в этом примере.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>rect</code> should have an <code>x</code> value of 0.
    testString: assert($('rect').eq(0).attr('x') == '0');
  - text: The second <code>rect</code> should have an <code>x</code> value of 30.
    testString: assert($('rect').eq(1).attr('x') == '30');
  - text: The third <code>rect</code> should have an <code>x</code> value of 60.
    testString: assert($('rect').eq(2).attr('x') == '60');
  - text: The fourth <code>rect</code> should have an <code>x</code> value of 90.
    testString: assert($('rect').eq(3).attr('x') == '90');
  - text: The fifth <code>rect</code> should have an <code>x</code> value of 120.
    testString: assert($('rect').eq(4).attr('x') == '120');
  - text: The sixth <code>rect</code> should have an <code>x</code> value of 150.
    testString: assert($('rect').eq(5).attr('x') == '150');
  - text: The seventh <code>rect</code> should have an <code>x</code> value of 180.
    testString: assert($('rect').eq(6).attr('x') == '180');
  - text: The eighth <code>rect</code> should have an <code>x</code> value of 210.
    testString: assert($('rect').eq(7).attr('x') == '210');
  - text: The ninth <code>rect</code> should have an <code>x</code> value of 240.
    testString: assert($('rect').eq(8).attr('x') == '240');

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
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
