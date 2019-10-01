---
id: 587d7fab367417b2b2512bd8
title: Add Attributes to the Circle Elements
challengeType: 6
forumTopicId: 301471
localeTitle: Добавить атрибуты элементов круга
---

## Description
<section id='description'>
Последняя задача создала элементы <code>circle</code> для каждой точки <code>dataset</code> и добавила их в холст SVG. Но D3 нуждается в дополнительной информации о положении и размере каждого <code>circle</code> чтобы отображать их правильно. <code>circle</code> в SVG имеет три основных атрибута. Атрибуты <code>cx</code> и <code>cy</code> - это координаты. Они сообщают D3, где можно расположить <em>центр</em> фигуры на холсте SVG. Радиус (атрибут <code>r</code> ) задает размер <code>circle</code> . Как и <code>rect</code> координата <code>y</code> , атрибут <code>cy</code> для <code>circle</code> измеряется от вершины холста SVG, а не снизу. Все три атрибута могут использовать функцию обратного вызова для динамического определения их значений. Помните, что все методы, закодированные после того, как <code>data(dataset)</code> запускаются один раз для каждого элемента в <code>dataset</code> . Параметр <code>d</code> в функции обратного вызова относится к текущему элементу в <code>dataset</code> , который является массивом для каждой точки. Для доступа к значениям в этом массиве вы используете запись в виде скобок, например <code>d[0]</code> .
</section>

## Instructions
<section id='instructions'>
Добавьте атрибуты <code>cx</code> , <code>cy</code> и <code>r</code> в элементы <code>circle</code> . Значение <code>cx</code> должно быть первым числом в массиве для каждого элемента в <code>dataset</code> . Значение <code>cy</code> должно основываться на втором номере в массиве, но обязательно показывать диаграмму с правой стороны и не инвертировать. Значение <code>r</code> должно быть 5 для всех кругов.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have 10 <code>circle</code> elements.
    testString: assert($('circle').length == 10);
  - text: The first <code>circle</code> element should have a <code>cx</code> value of 34, a <code>cy</code> value of 422, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(0).attr('cx') == '34' && $('circle').eq(0).attr('cy') == '422' && $('circle').eq(0).attr('r') == '5');
  - text: The second <code>circle</code> element should have a <code>cx</code> value of 109, a <code>cy</code> value of 220, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(1).attr('cx') == '109' && $('circle').eq(1).attr('cy') == '220' && $('circle').eq(1).attr('r') == '5');
  - text: The third <code>circle</code> element should have a <code>cx</code> value of 310, a <code>cy</code> value of 380, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(2).attr('cx') == '310' && $('circle').eq(2).attr('cy') == '380' && $('circle').eq(2).attr('r') == '5');
  - text: The fourth <code>circle</code> element should have a <code>cx</code> value of 79, a <code>cy</code> value of 89, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(3).attr('cx') == '79' && $('circle').eq(3).attr('cy') == '89' && $('circle').eq(3).attr('r') == '5');
  - text: The fifth <code>circle</code> element should have a <code>cx</code> value of 420, a <code>cy</code> value of 280, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(4).attr('cx') == '420' && $('circle').eq(4).attr('cy') == '280' && $('circle').eq(4).attr('r') == '5');
  - text: The sixth <code>circle</code> element should have a <code>cx</code> value of 233, a <code>cy</code> value of 355, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(5).attr('cx') == '233' && $('circle').eq(5).attr('cy') == '355' && $('circle').eq(5).attr('r') == '5');
  - text: The seventh <code>circle</code> element should have a <code>cx</code> value of 333, a <code>cy</code> value of 404, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(6).attr('cx') == '333' && $('circle').eq(6).attr('cy') == '404' && $('circle').eq(6).attr('r') == '5');
  - text: The eighth <code>circle</code> element should have a <code>cx</code> value of 222, a <code>cy</code> value of 167, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(7).attr('cx') == '222' && $('circle').eq(7).attr('cy') == '167' && $('circle').eq(7).attr('r') == '5');
  - text: The ninth <code>circle</code> element should have a <code>cx</code> value of 78, a <code>cy</code> value of 180, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(8).attr('cx') == '78' && $('circle').eq(8).attr('cy') == '180' && $('circle').eq(8).attr('r') == '5');
  - text: The tenth <code>circle</code> element should have a <code>cx</code> value of 21, a <code>cy</code> value of 377, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(9).attr('cx') == '21' && $('circle').eq(9).attr('cy') == '377' && $('circle').eq(9).attr('r') == '5');

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
       .data(dataset)
       .enter()
       .append("circle")
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
