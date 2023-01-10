---
id: 587d7fab367417b2b2512bd7
title: Erstelle ein Streudiagramm mit SVG-Kreisen
challengeType: 6
forumTopicId: 301484
dashedName: create-a-scatterplot-with-svg-circles
---

# --description--

Ein Streudiagramm ist eine andere Art der Visualisierung. Es verwendet in der Regel Kreise, um Datenpunkte zuzuordnen, die jeweils zwei Werte haben. Diese Werte sind an die Achsen `x` und `y` gebunden und werden verwendet, um den Kreis in der Visualisierung zu positionieren.

SVG hat ein `circle`-Tag um die Kreisform zu erstellen. Es funktioniert sehr ähnlich wie die `rect`-Elemente, die du für das Balkendiagramm verwendet hast.

# --instructions--

Verwende `data()`-, `enter()`- und `append()`-Methoden, um `dataset` an neue `circle`-Elemente zu binden, die dem SVG-Canvas hinzugefügt werden.

**Hinweis:** Die Kreise werden nicht sichtbar sein, weil wir ihre Attribute noch nicht gesetzt haben. Wir werden das bei der nächsten Aufgabe machen.

# --hints--

Dein Code sollte 10 `circle`-Elemente enthalten.

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
