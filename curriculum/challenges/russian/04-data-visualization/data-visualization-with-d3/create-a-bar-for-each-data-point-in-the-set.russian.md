---
id: 587d7fa8367417b2b2512bcd
title: Create a Bar for Each Data Point in the Set
challengeType: 6
forumTopicId: 301482
localeTitle: Создайте панель для каждой точки данных в наборе
---

## Description
<section id='description'>
Последняя задача добавила только один прямоугольник в элемент <code>svg</code> для представления строки. Здесь вы объедините все, что вы узнали до сих пор, о формах <code>data()</code> , <code>enter()</code> и SVG для создания и добавления прямоугольника для каждой точки <code>dataset</code> в <code>dataset</code> . Предыдущий вызов показал формат создания и добавления <code>div</code> для каждого элемента в <code>dataset</code> : <blockquote> d3.select ( &quot;тело&quot;). SelectAll ( &quot;DIV&quot;) <br> .data (набор данных) <br> .войти() <br> .append ( &quot;DIV&quot;) </blockquote> Есть несколько отличий, которые работают с <code>rect</code> элементами вместо <code>divs</code> . <code>rects</code> должны быть добавлены к элементу <code>svg</code> , а не непосредственно к <code>body</code> . Кроме того, вам нужно указать D3, где разместить каждый <code>rect</code> в области <code>svg</code> . Размещение бар будет рассмотрено в следующей задаче.
</section>

## Instructions
<section id='instructions'>
Используйте методы <code>data()</code> , <code>enter()</code> и <code>append()</code> для создания и добавления <code>rect</code> для каждого элемента в <code>dataset</code> . Бары должны отображать все друг на друга, это будет исправлено в следующей задаче.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your document should have 9 <code>rect</code> elements.
    testString: assert($('rect').length == 9);
  - text: Your code should use the <code>data()</code> method.
    testString: assert(code.match(/\.data/g));
  - text: Your code should use the <code>enter()</code> method.
    testString: assert(code.match(/\.enter/g));
  - text: Your code should use the <code>append()</code> method.
    testString: assert(code.match(/\.append/g));

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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
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
