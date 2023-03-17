---
id: 587d7fac367417b2b2512bdd
title: Dynamische Skalen verwenden
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

Die D3-Methoden `min()` und `max()` erleichtern das Festlegen eines Maßstabs.

Bei komplexen Datensätzen ist die Festlegung eines passenden Maßstabs wichtig. Mit diesem wird die Visualisierung an die Breite und Höhe des SVG-Containers angepasst. You want all the data plotted inside the SVG so it's visible on the web page.

Im folgenden Beispiel wird die Skala der x-Achse für Streudiagrammdaten festgelegt. Die `domain()`-Methode übergibt der Skala Informationen zu den Rohwerten des Diagramms. Die `range()`-Methode gibt wiederum Auskunft über vorhandenen, tatsächlichen Platz für die Visualiserung auf der Webseite.

In diesem Beispiel wird für die Domain-Methode ein Wert zwischen 0 und dem Maximalwert im Datensatz verwendet. Sie verwendet die `max()`-Methode mit einer Callback-Funktion, die auf den x-Werten in den Arrays basiert. The range uses the SVG's width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG.

```js
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

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

Das Padding kann zunächst verwirrend sein. Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG). Durch die in der `range()`-Methode berücksichtigten Abstände wird das Diagramm gezwungen, an jener Linie mit 30 (statt 0) anzufangen und bei 470 (statt 500) zu enden.

# --instructions--

Verwende die `yScale`-Variable, um eine lineare y-Achsen-Skala zu erzeugen. Die Domain-Methode sollte bei null beginnen und beim `y`-Maximalwert im Datensatz enden. Die Range-Methode sollte die SVG-Höhe (`h`) nutzen und dabei Abstände berücksichtigen.

**Hinweis:** Achte darauf, dass das Diagramm richtig herum bleibt. Wenn du die Range-Methode für die y-Koordinaten einstellst, ist der höhere Wert (Höhe minus Abstand) das erste Argument, und das zweite Argument ist der niedrigere Wert.

# --hints--

Der Text im `h2` sollte `30` sein.

```js
assert(output == 30 && $('h2').text() == '30');
```

Die `domain()` der yScale sollte `[0, 411]` entsprechen.

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

Die `range()` der yScale sollte `[470, 30]` entsprechen.

```js
assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));
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

    // Padding between the SVG boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
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


    const padding = 30;

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);


    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);


    const output = yScale(411);
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
