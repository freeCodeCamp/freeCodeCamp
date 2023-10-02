---
id: 587d7fad367417b2b2512bdf
title: Додайте осі до візуалізації
challengeType: 6
forumTopicId: 301472
dashedName: add-axes-to-a-visualization
---

# --description--

Інший спосіб покращити точкову діаграму — додати осі x та у.

D3 має два методи: `axisLeft()` та `axisBottom()`, щоб відтворити вісь y та вісь x відповідно. Ось приклад, щоб створити вісь х на основі `xScale` з попередніх завдань:

```js
const xAxis = d3.axisBottom(xScale);
```

Наступний крок — відтворити вісь на SVG. Для цього можна використати загальний компонент SVG: елемент `g`. `g` означає «group» (з англ. група). На відміну від `rect`, `circle` та `text`, вісь — це звичайна пряма лінія при відтворенні. Оскільки це проста фігура, використання `g` працює. Останній крок — застосувати атрибут `transform`, щоб розмістити вісь на SVG в потрібному місці. В іншому випадку лінія відтвориться вздовж кордону SVG та не буде видимою. SVG підтримує різні типи `transforms`, але позиціювання осей вимагає `translate`. Коли він застосований до елемента `g`, то він пересуне всю групу на задану кількість. Ось приклад:

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

Наведений вище код розміщує вісь х внизу SVG. Потім її передано як аргумент до методу `call()`. Вісь y працює так само, але аргумент `translate` має вигляд `(x, 0)`. Оскільки `translate` є рядком в методі `attr()` вище, ви можете використати конкатенацію, щоб включити значення змінних для аргументів.

# --instructions--

Тепер точкова діаграма має вісь х. Створіть вісь y в змінній `yAxis` за допомогою метода `axisLeft()`. Потім відтворіть вісь, використовуючи елемент `g`. Переконайтесь, що використали атрибут `transform`, щоб перемістити вісь на кількість одиниць відступу праворуч та `0` одиниць вниз. Не забудьте викликати вісь (`call()`).

# --hints--

Код має використати метод `axisLeft()` разом із `yScale`, переданим як аргумент.

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

Елемент `g` осі y повинен мати атрибут `transform`, який переміщує вісь на `(60, 0)`.

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

Код має викликати `yAxis`.

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
