---
id: 587d7fab367417b2b2512bd8
title: Füge Attribute zu Kreiselementen hinzu
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

The last challenge created the `circle` elements for each point in the `dataset`, and appended them to the SVG. Aber D3 braucht noch mehr Informationen über die Position und Größe jedes `circle`, um sie korrekt anzuzeigen.

Ein `circle` in SVG hat drei Hauptattribute. Die `cx` und `cy` Attribute sind die Koordinaten. They tell D3 where to position the *center* of the shape on the SVG. Der Radius (`r`-Attribute) gibt die Größe des `circle`-Elements an.

Just like the `rect` `y` coordinate, the `cy` attribute for a `circle` is measured from the top of the SVG, not from the bottom.

Alle drei Attribute können mit einer Callback-Funktion ihre Werte dynamisch setzen. Denke daran, dass alle Methoden nach `data(dataset)` einmal pro Element in `dataset` ausgeführt werden. Der `d`-Parameter in der Callback-Funktion bezieht sich auf das aktuelle Element in `dataset`, welches ein Array für jeden Punkt ist. Du verwendest Klammern, wie `d[0]` um auf die Werte in diesem Array zugreifen zu können.

# --instructions--

Füge `cx`, `cy`, und `r`-Attribute zu deinen `circle`-Elementen hinzu. Der `cx`-Wert sollte die erste Zahl im Array für jedes Element im `dataset` sein. Der `cy`-Wert sollte sich auf die zweite Zahl im Array beziehen. Aber stelle sicher, dass das Diagramm rechts angezeigt wird und nicht umgedreht. Der `r`-Wert sollte `5` für alle Kreise sein.

# --hints--

Dein Code sollte 10 `circle`-Elemente haben.

```js
assert($('circle').length == 10);
```

Das erste `circle`-Element sollte einen `cx`-Wert von `34`, einen `cy`-Wert von `422`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

Das zweite `circle`-Element sollte einen `cx`-Wert von `109`, einen `cy`-Wert von `220`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

Das dritte `circle`-Element sollte einen `cx`-Wert von `310`, einen `cy`-Wert von `380`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

Das vierte `circle`-Element sollte einen `cx`-Wert von `79`, einen `cy`-Wert von `89`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

Das fünfte `circle`-Element sollte einen `cx`-Wert von `420`, einen `cy`-Wert von `280`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

Das sechste `circle`-Element sollte einen `cx`-Wert von `233`, einen `cy`-Wert von `355`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

Das siebte `circle`-Element sollte einen `cx`-Wert von `333`, einen `cy`-Wert von `404`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

Das achte `circle`-Element sollte einen `cx`-Wert von `222`, einen `cy`-Wert von `167`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

Das neunte `circle`-Element sollte einen `cx`-Wert von `78`, einen `cy`-Wert von `180`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

Das zehnte `circle`-Element sollte einen `cx`-Wert von `21`, einen `cy`-Wert von `377`, und einen `r`-Wert von `5` haben.

```js
assert(
  $('circle').eq(9).attr('cx') == '21' &&
    $('circle').eq(9).attr('cy') == '377' &&
    $('circle').eq(9).attr('r') == '5'
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
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)

  </script>
</body>
```
