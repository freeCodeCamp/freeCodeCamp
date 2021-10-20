---
id: 587d7faa367417b2b2512bd4
title: Aggiungere un effetto hover a un elemento D3
challengeType: 6
forumTopicId: 301469
dashedName: add-a-hover-effect-to-a-d3-element
---

# --description--

È possibile aggiungere effetti che evidenziano una barra quando l'utente le passa sopra con il mouse. Finora, lo stile per i rettangoli viene applicato con i metodi D3 e SVG integrati, ma è possibile utilizzare anche CSS.

Hai impostato la classe CSS sugli elementi SVG con il metodo `attr()`. Quindi la pseudo-classe `:hover` per la tua nuova classe contiene le regole di stile per qualsiasi effetto hover.

# --instructions--

Usa il metodo `attr()` per aggiungere una classe `bar` a tutti gli elementi `rect`. Questo cambia il colore di riempimento (`fill`) della barra in marrone quando le si passa sopra con il mouse.

# --hints--

I tuoi elementi `rect` dovrebbero essere di classe `bar`.

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
