---
id: 587d7fa8367417b2b2512bca
title: Darstellung eines Balkendiagramms ändern
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

Die letzte Aufgabe hat ein Balkendiagramm erstellt, aber es gibt noch einige Formatierungsänderungen, die es verbessern könnten:

1) Füge einen Abstand zwischen den einzelnen Balken hinzu, um sie optisch voneinander zu trennen. Dies wird erreicht, indem du einen Abstand in das CSS für die Klasse `bar` einfügst

2) Erhöhe die Höhe der Balken, um den Unterschied zwischen den Werten besser sichtbar zu machen, indem du den Wert mit einer Zahl multiplizierst, um die Höhe zu skalieren.

# --instructions--

Füge zuerst eine `margin` von `2px` zu der `bar`-Klasse im `style`-Tag hinzu. Ändere als nächstes die Callback-Funktion in der `style()`-Methode, so dass sie einen Wert von `10` Mal mehr der ursprünglichen Werte zurückgibt (plus `px`).

**Hinweis:** Das Multiplizieren jedes Datenpunktes um die *gleiche* Konstante verändert nur die Skala. Es ist wie ein Hineinzoomen und verändert nicht die Bedeutung der zugrunde liegenden Daten.

# --hints--

Das erste `div` sollte eine `height` von `120` Pixel und eine `margin` von `2` Pixel haben.

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

Das zweite `div` sollte eine `height` von `310` Pixel und eine `margin` von `2` Pixel haben.

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

Das dritte `div` sollte eine `height` von `220` Pixel und eine `margin` von `2` Pixel haben.

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

Das vierte `div` sollte eine `height` von `170` Pixel und eine `margin` von `2` Pixel haben.

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

Das fünfte `div` sollte eine `height` von `250` Pixel und eine `margin` von `2` Pixel haben.

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

Das sechste `div` sollte eine `height` von `180` Pixel und eine `margin` von `2` Pixel haben.

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

Das siebte `div` sollte eine `height` von `290` Pixel und eine `margin` von `2` Pixel haben.

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

Das achte `div` sollte eine `height` von `140` Pixel und eine `margin` von `2` Pixel haben.

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

Das neunte `div` sollte eine `height` von `90` Pixel und eine `margin` von `2` Pixel haben.

```js
assert(
  $('div').eq(8).css('height') == '90px' &&
    $('div').eq(8).css('margin-right') == '2px'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */


    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px")) // Change this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>
```
