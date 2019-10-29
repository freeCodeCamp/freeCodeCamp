---
id: 587d7fad367417b2b2512bdf
title: Add Axes to a Visualization
challengeType: 6
forumTopicId: 301472
localeTitle: Добавление осей к визуализации
---

## Description
<section id='description'>
Другой способ улучшить график рассеяния - добавить ось x и ось y. D3 имеет два метода <code>axisLeft()</code> и <code>axisBottom()</code> для визуализации осей y и x соответственно. (Оси - это множественная форма оси). Ниже приведен пример создания оси x на основе <code>xScale</code> в предыдущих задачах: <code>const xAxis = d3.axisBottom(xScale);</code> Следующий шаг - отобразить ось на холсте SVG. Для этого вы можете использовать общий компонент SVG, элемент <code>g</code> . Группа <code>g</code> обозначает группу. В отличие от <code>rect</code> , <code>circle</code> и <code>text</code> , ось является прямой линией, когда она отображается. Потому что это простая форма, используя <code>g</code> works. Последний шаг - применить атрибут <code>transform</code> для размещения оси на холсте SVG в нужном месте. В противном случае линия будет отображаться вдоль границы холста SVG и не будет видна. SVG поддерживает различные типы <code>transforms</code> , но позиционирование оси требует <code>translate</code> . Когда он применяется к элементу <code>g</code> , он перемещает всю группу за и на указанные суммы. Вот пример: <blockquote> const xAxis = d3.axisBottom (xScale); <br><br> svg.append ( &quot;г&quot;) <br> .attr (&quot;transform&quot;, &quot;translate (0,&quot; + (h - padding) + &quot;)&quot;) <br> .call (Xaxis); </blockquote> Вышеупомянутый код помещает ось x в нижнюю часть холста SVG. Затем он передается в качестве аргумента методу <code>call()</code> . Ось y работает одинаково, за исключением того, что аргумент <code>translate</code> имеет вид (x, 0). Поскольку <code>translate</code> является строкой в ​​методе <code>attr()</code> выше, вы можете использовать конкатенацию для включения значений переменных для своих аргументов.
</section>

## Instructions
<section id='instructions'>
График рассеяния теперь имеет ось х. Создайте ось y в переменной с именем <code>yAxis</code> используя метод <code>axisLeft()</code> . Затем визуализируйте ось с помощью элемента <code>g</code> . Не забудьте использовать атрибут <code>transform</code> для перевода оси на количество единиц заполнения справа и 0 единиц вниз. Не забудьте <code>call()</code> ось.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>axisLeft()</code> method with <code>yScale</code> passed as the argument.
    testString: assert(code.match(/\.axisLeft\(yScale\)/g));
  - text: The y-axis <code>g</code> element should have a <code>transform</code> attribute to translate the axis by (60, 0).
    testString: assert($('g').eq(10).attr('transform').match(/translate\(60\s*?,\s*?0\)/g));
  - text: Your code should call the <code>yAxis</code>.
    testString: assert(code.match(/\.call\(\s*yAxis\s*\)/g));

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
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
