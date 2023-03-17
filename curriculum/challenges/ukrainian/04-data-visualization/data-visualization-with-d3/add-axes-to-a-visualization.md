---
id: 587d7fad367417b2b2512bdf
title: Додай вісь до візуалізації
challengeType: 6
forumTopicId: 301472
dashedName: add-axes-to-a-visualization
---

# --description--

Інший спосіб покращити точкову діаграму - додати x- значення та у- значення.

D3 має два методи, `axisLeft()` та `axisBottom()`, щоб зобразити вісь y та вісь x відповідно. Ось приклад для створення осі Х на основі `xScale` у попередніх завданнях:

```js
const xAxis = d3.axisBottom(xScale);
```

The next step is to render the axis on the SVG. Для цього можна використати загальний компонент SVG, елемент `g`. Стрічка `g` відповідає за групу. На відміну від  `rect`, `circle`, and `text` , вісь - це просто пряма лінія при відображенні. Оскільки це проста фігура, використовуючи `g` працює. The last step is to apply a `transform` attribute to position the axis on the SVG in the right place. Otherwise, the line would render along the border of the SVG and wouldn't be visible. SVG підтримує різні типи `transforms`, але позиціювання осей потрібно `translate`. Коли елемент застосований до елемента `g` , він пересуне всю групу на задані кількості. Ось приклад:

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

The above code places the x-axis at the bottom of the SVG. Тоді він переданий в якості аргументу `call()`. Вісь Y працює так само, за винятком `translate` аргументу у вигляді `(x, 0)`. Тому що `translate` є рядком в методі `attr()` вище, ви можете використовувати конкатенацію для включення змінних значень для їх аргументів.

# --instructions--

У точковому графіку тепер є вісь Х. Створіть вісь У в змінній `yAxis` використовуючи `axisLeft()` метод. Потім зобразіть вісь, використовуючи елемент `g`. Переконайтеся, що за допомогою `transform` атрибут для перекладу осі на кількість одиниць виконано вправо, та `0` одиниць вниз. Не забудьте встановити `call()` вісь.

# --hints--

Ваш код повинен використовувати метод `axisLeft()` з `yScale` в якості аргументу.

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

Елемент осі Y `g` повинен мати атрибут `transform` для перекладу осі на `(60, 0)`.

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

Ваш код повинен містити один теґ `audio`.

```js
assert(code.match(/\.call\(\s*yAxis\s*\)/g));
```

# --seed--

## --seed-contents--

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

# --solutions--

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

    const yAxis = d3.axisLeft(yScale);


    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)

  </script>
</body>
```
