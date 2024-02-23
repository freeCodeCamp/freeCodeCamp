---
id: 587d7faa367417b2b2512bd4
title: Füge einem D3-Element einen Hover-Effekt hinzu
challengeType: 6
forumTopicId: 301469
dashedName: add-a-hover-effect-to-a-d3-element
---

# --description--

Es ist möglich, Effekte hinzuzufügen, die einen Balken markieren, wenn der User mit der Maus darüber fährt. Bisher wird das Styling für die Recktecke mit den eingebauten D3 und SVG Methoden angewandt, aber du kannst auch CSS verwenden.

Du kannst die CSS Klasse auf SVG-Elemente mit der `attr()`-Methode setzen. Dann erhält die `:hover` Pseudoklasse für deine neue Klasse die Stilregeln für beliebige Hover-Effekte.

# --instructions--

Benutze die `attr()` Methode um eine Klasse von `bar` zu allen `rect`-Elementen hinzuzufügen. Das ändert die `fill`-Farbe (Füllfarbe) des Balkens in braun, wenn du mit der Maus über sie fährst.

# --hints--

Deine `rect`-Elemente sollten eine Klasse von `bar` haben.

```js
assert($('rect').attr('class').trim().split(/\s+/g).includes('bar'));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

  </script>
</body>
```

# --solutions--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line
       .attr('class', 'bar')
       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);
  </script>
</body>
```
