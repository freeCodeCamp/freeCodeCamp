---
id: 587d7fab367417b2b2512bd7
title: Creare un diagramma a dispersione con cerchi SVG
challengeType: 6
forumTopicId: 301484
dashedName: create-a-scatterplot-with-svg-circles
---

# --description--

Un grafico a dispersione è un altro tipo di visualizzazione. Di solito usa i cerchi per mappare i punti dati, e ogni cerchio ha bisogno di due valori. Questi valori si legano agli assi `x` e `y`, e vengono utilizzati per posizionare il cerchio nella visualizzazione.

SVG ha un tag `circle` per creare la forma del cerchio. Funziona in modo simile agli elementi `rect` che hai usato per il grafico a barre.

# --instructions--

Use the `data()`, `enter()`, and `append()` methods to bind `dataset` to new `circle` elements that are appended to the SVG.

**Nota:** I cerchi non saranno visibili perché non abbiamo ancora impostato i loro attributi. Lo faremo nella prossima sfida.

# --hints--

Il tuo codice dovrebbe avere 10 elementi `circle`.

```js
assert($('circle').length == 10);
```

# --seed--

## --seed-contents--

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

  </script>
</body>
```
