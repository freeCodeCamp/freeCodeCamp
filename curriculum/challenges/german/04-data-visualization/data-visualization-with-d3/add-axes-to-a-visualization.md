---
id: 587d7fad367417b2b2512bdf
title: Füge Achsen zur Visualisierung hinzu
challengeType: 6
forumTopicId: 301472
dashedName: add-axes-to-a-visualization
---

# --description--

Eine weitere Möglichkeit, das Streudiagramm zu verbessern, ist eine x-und y-Achse hinzuzufügen.

D3 hat zwei Methoden, `axisLeft()` und `axisBottom()`, um jeweils die y-und x-Achse darzustellen. Hier ist ein Beispiel um die x-Achse, auf der Grundlage der `xScale` in der vorherigen Aufgabe, zu erstellen:

```js
const xAxis = d3.axisBottom(xScale);
```

The next step is to render the axis on the SVG. Dafür kannst du eine allgemeine SVG-Komponente, das `g` Element, verwenden. Das `g` steht für Gruppe. Anders als `rect`, `circle`, und `text`, ist eine Achse nur eine geradlinige Linie, wenn sie gerendert wird. Da sie eine einfache Form ist, funktioniert `g`. The last step is to apply a `transform` attribute to position the axis on the SVG in the right place. Otherwise, the line would render along the border of the SVG and wouldn't be visible. SVG unterstützt verschiedene Arten von `transforms`, aber die Positionierung einer Achse benötigt `translate`. Wenn es auf das `g`-Element angewandt wird, wird die gesamte Gruppe um die angegebenen Beträge nach oben und unten verschoben. Hier ist ein Beispiel:

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

The above code places the x-axis at the bottom of the SVG. Dann wird es als Argument an die `call()`-Methode übergeben. Die y-Achse funktioniert ähnlich, außer dass das `translate` Argument in der Form `(x, 0)` ist. Da `translate` ein String in der oben gennanten `attr()`- Methode ist, kannst du die Verkettung verwenden, um variable Werte für die Argumente einzuschließen.

# --instructions--

Das Streudiagramm hat jetzt eine x-Achse. Erstelle eine y-Achse namens `yAxis` mit Hilfe der `axisLeft()`-Methode. Anschließend stelle die Achse mit einem `g`-Element dar. Stelle sicher, dass du ein `transform` Attribut verwendest, um die Achse um die Anzahl der Padding-Einheiten nach rechts und `0` Einheiten nach unten zu versetzen. Vergiss nicht `call()` auf die Achse anzuwenden.

# --hints--

Dein Code sollte die `axisLeft()` Methode mit der `yScale` als Argument verwenden.

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

Das y-Achse `g`-Element sollte ein `transform`-Attribut besitzen, um die Achse nach `(60, 0)` zu versetzen.

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

Dein Code sollte die `yAxis` abrufen.

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
