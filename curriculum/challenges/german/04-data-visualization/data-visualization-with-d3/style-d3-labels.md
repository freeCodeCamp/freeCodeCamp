---
id: 587d7faa367417b2b2512bd3
title: D3-Label gestalten
challengeType: 6
forumTopicId: 301492
dashedName: style-d3-labels
---

# --description--

D3-Methoden können Balkenbeschriftungen gestalten. So legt das `fill`-Attribut die Farbe des Texts eines `text`-Knotens fest. Die `style()` Methode legt CSS-Regeln für andere Gestaltungen fest, wie `font-family` oder `font-size`.

# --instructions--

Setze die `font-size` der `text`-Elemente auf `25px` und die Textfarbe auf Rot.

# --hints--

Die `fill`-Farbe aller Beschriftungen sollte rot sein.

```js
assert($('text').css('fill') == 'rgb(255, 0, 0)');
```

Die `font-size` aller Beschriftungen sollte auf `25` Pixel gesetzt sein.

```js
assert($('text').css('font-size') == '25px');
```

# --seed--

## --seed-contents--

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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       // Add your code below this line



       // Add your code above this line
  </script>
</body>
```

# --solutions--

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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .style("font-size", 25)
       .attr("fill", "red")
  </script>
</body>
```
