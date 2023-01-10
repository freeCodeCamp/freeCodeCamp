---
id: 587d7fa8367417b2b2512bcd
title: Erstelle einen Balken für jeden Datenpunkt im Set
challengeType: 6
forumTopicId: 301482
dashedName: create-a-bar-for-each-data-point-in-the-set
---

# --description--

Bei der letzten Aufgabe wurde dem `svg`-Element nur ein Rechteck hinzugefügt, um einen Balken darzustellen. Hier wirst du das kombinieren, was du bereits über `data()`, `enter()`, und SVG-Formen gelernt hast, um ein Rechteck für jeden Datenpunkt im `dataset` hinzuzufügen.

Eine frühere Aufgabe zeigte das Format zum Erstellen und Einfügen eines `div` für jedes Element im `dataset`:

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

Es gibt einige Unterschiede, die beim Arbeiten mit `rect`-Elementen, anstelle von `div`-Elementen beachtet werden müssen. Die `rect`-Elemente müssen an ein `svg`-Element beigefügt werden und nicht direkt in den `body`. Außerdem musst du D3 befehlen, wo es das `rect`-Element innerhalb des `svg`-Bereichs platzieren soll. Die Balkenplatzierung wird in der nächsten Aufgabe behandelt.

# --instructions--

Benutze die `data()`, `enter()`, und `append()`-Methoden, um ein `rect`-Element für jedes Element im `dataset` zu erstellen. Die Balken sollten alle übereinander angezeigt werden; dies wird in der nächsten Aufgabe verbessert.

# --hints--

Dein Dokument sollte 9 `rect`-Elemente besitzen.

```js
assert($('rect').length == 9);
```

Dein Code sollte die `data()`-Methode verwenden.

```js
assert(code.match(/\.data/g));
```

Dein Code sollte die `enter()`-Methode verwenden.

```js
assert(code.match(/\.enter/g));
```

Dein Code sollte die `append()`-Methode verwenden.

```js
assert(code.match(/\.append/g));
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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
