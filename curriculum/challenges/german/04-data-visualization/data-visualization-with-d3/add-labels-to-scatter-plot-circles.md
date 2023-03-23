---
id: 587d7fab367417b2b2512bd9
title: Füge Streudiagramm-Kreisen Beschriftungen hinzu
challengeType: 6
forumTopicId: 301477
dashedName: add-labels-to-scatter-plot-circles
---

# --description--

Du kannst durch das Hinzufügen von Text, Beschriftungen für die Punkte eines Streudiagramms erstellen.

Ziel ist es, die kommaseparierten Werte des ersten (`x`)- und zweiten (`y`)-Felds eines jeden Elements im `dataset` darzustellen.

The `text` nodes need `x` and `y` attributes to position it on the SVG. In dieser Aufgabe kann der `y`-Wert (der die Höhe bestimmt) denselben Wert verwenden, den der `circle`-Wert für sein `cy`-Attribut verwendet. Der `x`-Wert kann etwas größer sein als der `cx`-Wert des `circle`, damit die Bezeichnungen sichtbar ist. Dadurch wird die Beschriftung nach rechts vom dargestellten Punkt verschoben.

# --instructions--

Beschrifte jeden Punkt im Streudiagramm mithilfe der `text`-Elemente. Der Text der Bezeichnung sollte aus den beiden Werten bestehen, die durch ein Komma und ein Leerzeichen getrennt sind. Die Bezeichnung des ersten Punktes ist zum Beispiel `34, 78`. Setze den Wert des `x`-Attributs so, dass dieser `5` Einheiten über den Wert liegt, den du für das `cx`-Attribut des `circle` verwendet hast. Setze das `y`-Attribut auf den gleichen Wert, der für `cy` des `circle` verwendet wird.

# --hints--

Dein Code sollte 10 `text`-Elemente enthalten.

```js
assert($('text').length == 10);
```

Die erste Beschriftung sollte aus dem Text `34, 78` bestehen sowie über einen `x`-Wert von `39` und einen `y`-Wert von `422` verfügen.

```js
assert(
  $('text').eq(0).text() == '34, 78' &&
    $('text').eq(0).attr('x') == '39' &&
    $('text').eq(0).attr('y') == '422'
);
```

Die zweite Beschriftung sollte aus dem Text `109, 280` bestehen sowie über einen `x`-Wert von `114` und einen `y`-Wert von `220` verfügen.

```js
assert(
  $('text').eq(1).text() == '109, 280' &&
    $('text').eq(1).attr('x') == '114' &&
    $('text').eq(1).attr('y') == '220'
);
```

Die dritte Beschriftung sollte aus dem Text `310, 120` bestehen sowie über einen `x`-Wert von `315` und einen `y`-Wert von `380` verfügen.

```js
assert(
  $('text').eq(2).text() == '310, 120' &&
    $('text').eq(2).attr('x') == '315' &&
    $('text').eq(2).attr('y') == '380'
);
```

Die vierte Beschriftung sollte aus dem Text `79, 411` bestehen sowie über einen `x`-Wert von `84` und einen `y`-Wert von `89` verfügen.

```js
assert(
  $('text').eq(3).text() == '79, 411' &&
    $('text').eq(3).attr('x') == '84' &&
    $('text').eq(3).attr('y') == '89'
);
```

Die fünfte Beschriftung sollte aus dem Text `420, 220` bestehen sowie über einen `x`-Wert von `425` und einen `y`-Wert von `280` verfügen.

```js
assert(
  $('text').eq(4).text() == '420, 220' &&
    $('text').eq(4).attr('x') == '425' &&
    $('text').eq(4).attr('y') == '280'
);
```

Die sechste Beschriftung sollte aus dem Text `233, 145` bestehen sowie über einen `x`-Wert von `238` und einen `y`-Wert von `355` verfügen.

```js
assert(
  $('text').eq(5).text() == '233, 145' &&
    $('text').eq(5).attr('x') == '238' &&
    $('text').eq(5).attr('y') == '355'
);
```

Die siebte Beschriftung sollte aus dem Text `333, 96` bestehen sowie über einen `x`-Wert von `338` und einen `y`-Wert von `404` verfügen.

```js
assert(
  $('text').eq(6).text() == '333, 96' &&
    $('text').eq(6).attr('x') == '338' &&
    $('text').eq(6).attr('y') == '404'
);
```

Die achte Beschriftung sollte aus dem Text `222, 333` bestehen sowie über einen `x`-Wert von `227` und einen `y`-Wert von `167` verfügen.

```js
assert(
  $('text').eq(7).text() == '222, 333' &&
    $('text').eq(7).attr('x') == '227' &&
    $('text').eq(7).attr('y') == '167'
);
```

Die neunte Beschriftung sollte aus dem Text `78, 320` bestehen sowie über einen `x`-Wert von `83` und einen `y`-Wert von `180` verfügen.

```js
assert(
  $('text').eq(8).text() == '78, 320' &&
    $('text').eq(8).attr('x') == '83' &&
    $('text').eq(8).attr('y') == '180'
);
```

Die zehnte Beschriftung sollte aus dem Text `21, 123` bestehen sowie über einen `x`-Wert von `26` und einen `y`-Wert von `377` verfügen.

```js
assert(
  $('text').eq(9).text() == '21, 123' &&
    $('text').eq(9).attr('x') == '26' &&
    $('text').eq(9).attr('y') == '377'
);
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
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))

  </script>
</body>
```
