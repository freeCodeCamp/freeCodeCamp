---
id: 587d7fac367417b2b2512bde
title: Verwende eine vordefinierte Skala um Elemente zu platzieren
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

Nachdem die Skalen festgelegt wurden, können nun erneut Daten in das Streudiagramm eingetragen werden. The scales are like processing functions that turn the `x` and `y` raw data into values that fit and render correctly on the SVG. Sie halten die Daten innerhalb des Bildschirm-Darstellungsbereichs.

Die Koordinaten-Attributwerte einer SVG-Form setzt du mithilfe der Skalierungsfunktion. Damit sind sowohl `x`- und `y`-Attribute für `rect`- bzw. `text`-Elemente als auch `cx`- und `cy`-Attribute für `circles` gemeint. Hier ein Beispiel:

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

Scales set shape coordinate attributes to place the data points onto the SVG. Die Anwendung von Skalen ist nicht notwendig, wenn du den eigentlichen Datenwert wiedergibst, wie beispielsweise in den `text()`-Methoden für Kurzinformationen oder Beschriftungen.

# --instructions--

Use `xScale` and `yScale` to position both the `circle` and `text` shapes onto the SVG. Wende für `circles`-Skalen zur Festlegung der `cx`- und `cy`-Attribute an. Gib ihnen auch einen Radius von `5` Einheiten.

Wende für `text`-Elemente Skalen zur Festlegung der `x`- und `y`-Attribute an. Die Beschriftungen sollten rechts neben den Punkten angezeigt werden. Erhöhe den `x`-Datenwert um `10` Einheiten, bevor du diesen an `xScale` übergibst, um das zu erreichen.

# --hints--

Dein Code sollte 10 `circle`-Elemente enthalten.

```js
assert($('circle').length == 10);
```

Das erste `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `91` und einen `cy`-Wert von etwa `368` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

Das zweite `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `159` und einen `cy`-Wert von etwa `181` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

Das dritte `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `340` und einen `cy`-Wert von etwa `329` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

Das vierte `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `131` und einen `cy`-Wert von etwa `60` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

Das fünfte `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `440` und einen `cy`-Wert von etwa `237` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

Das sechste `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `271` und einen `cy`-Wert von etwa `306` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

Das siebte `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `361` und einen `cy`-Wert von etwa `351` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

Das achte `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `261` und einen `cy`-Wert von etwa `132` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

Das neunte `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `131` und einen `cy`-Wert von etwa `144` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

Das zehnte `circle`-Element sollte – nach Anwendung der Skalen – über einen `cx`-Wert von ungefähr `79` und einen `cy`-Wert von etwa `326` verfügen. Zudem sollte sein `r`-Wert auf `5` gesetzt sein.

```js
assert(
  Math.round($('circle').eq(9).attr('cx')) == '79' &&
    Math.round($('circle').eq(9).attr('cy')) == '326' &&
    $('circle').eq(9).attr('r') == '5'
);
```

Dein Code sollte 10 `text`-Elemente enthalten.

```js
assert($('text').length == 10);
```

Die erste Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `100` und einen `y`-Wert von etwa `368` verfügen.

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

Die zweite Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `168` und einen `y`-Wert von etwa `181` verfügen.

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

Die dritte Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `350` und einen `y`-Wert von etwa `329` verfügen.

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

Die vierte Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `141` und einen `y`-Wert von etwa `60` verfügen.

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

Die fünfte Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `449` und einen `y`-Wert von etwa `237` verfügen.

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

Die sechste Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `280` und einen `y`-Wert von etwa `306` verfügen.

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

Die siebte Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `370` und einen `y`-Wert von etwa `351` verfügen.

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

Die achte Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `270` und einen `y`-Wert von etwa `132` verfügen.

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

Die neunte Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `140` und einen `y`-Wert von etwa `144` verfügen.

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

Die zehnte Beschriftung sollte – nach Anwendung der Skalen – über einen `x`-Wert von ungefähr `88` und einen `y`-Wert von etwa `326` verfügen.

```js
assert(
  Math.round($('text').eq(9).attr('x')) == '88' &&
    Math.round($('text').eq(9).attr('y')) == '326'
);
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
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
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
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5)

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
  </script>
</body>
```
