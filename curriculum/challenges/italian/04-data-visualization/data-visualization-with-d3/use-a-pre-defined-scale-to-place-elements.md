---
id: 587d7fac367417b2b2512bde
title: Usare una scala predefinita per posizionare gli elementi
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

Con le scale impostate, è il momento di mappare nuovamente il grafico a dispersione. The scales are like processing functions that turn the `x` and `y` raw data into values that fit and render correctly on the SVG. Esse mantengono i dati all'interno dell'area di disegno dello schermo.

I valori degli attributi coordinate di una forma SVG si impostano con la funzione di ridimensionamento. Questo include gli attributi `x` e `y` per gli elementi `rect` o `text`, oppure `cx` e `cy` per i `circles`. Ecco un esempio:

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

Scales set shape coordinate attributes to place the data points onto the SVG. Non è necessario applicare le scale quando si visualizza il valore effettivo dei dati, per esempio, nel metodo `text()` per un suggerimento o un'etichetta.

# --instructions--

Use `xScale` and `yScale` to position both the `circle` and `text` shapes onto the SVG. Per i `circles`, applica le scale per impostare gli attributi `cx` e `cy`. Dai loro anche un raggio di `5` unità.

Per gli elementi `text`, applica le scale per impostare gli attributi `x` e `y`. Le etichette devono essere spostate a destra dei punti. Per fare questo, aggiungi `10` unità al valore di dati `x` prima di passarlo a `xScale`.

# --hints--

Il tuo codice dovrebbe avere 10 elementi `circle`.

```js
assert($('circle').length == 10);
```

Il primo elemento `circle` dovrebbe avere un valore `cx` di circa `91` e un valore `cy` di circa `368` dopo aver applicato le scale. Dovrebbe anche avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

Il secondo elemento `circle` dovrebbe avere un valore `cx` di circa `159` e un valore `cy` di circa `181` dopo aver applicato le scale. Dovrebbe inoltre avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

Il terzo elemento `circle` dovrebbe avere un valore `cx` di circa `340` e un valore `cy` di circa `329` dopo aver applicato le scale. Dovrebbe inoltre avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

Il quarto elemento `circle` dovrebbe avere un valore `cx` di circa `131` e un valore `cy` di circa `60` dopo aver applicato le scale. Dovrebbe inoltre avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

Il quinto elemento `circle` dovrebbe avere un valore `cx` di circa `440` e un valore `cy` di circa `237` dopo aver applicato le scale. Dovrebbe anche avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

Il sesto elemento `circle` dovrebbe avere un valore `cx` di circa `271` e un valore `cy` di circa `306` dopo aver applicato le scale. Dovrebbe inoltre avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

Il settimo elemento `circle` dovrebbe avere un valore `cx` di circa `361` e un valore `cy` di circa `351` dopo aver applicato le scale. Dovrebbe inoltre avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

L'ottavo elemento `circle` dovrebbe avere un valore `cx` di circa `261` e un valore `cy` di circa `132` dopo aver applicato le scale. Dovrebbe inoltre avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

Il nono elemento `circle` dovrebbe avere un valore `cx` di circa `131` e un valore `cy` di circa `144` dopo aver applicato le scale. Dovrebbe inoltre avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

Il decimo elemento `circle` dovrebbe avere un valore `cx` di circa `79` e un valore `cy` di circa `326` dopo aver applicato le scale. Dovrebbe anche avere un valore `r` di `5`.

```js
assert(
  Math.round($('circle').eq(9).attr('cx')) == '79' &&
    Math.round($('circle').eq(9).attr('cy')) == '326' &&
    $('circle').eq(9).attr('r') == '5'
);
```

Il tuo codice dovrebbe avere 10 elementi `text`.

```js
assert($('text').length == 10);
```

La prima etichetta dovrebbe avere un valore `x` di circa `100` e un valore `y` di circa `368` dopo aver applicato le scale.

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

La seconda etichetta dovrebbe avere un valore `x` di circa `168` e un valore `y` di circa `181` dopo aver applicato le scale.

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

La terza etichetta dovrebbe avere un valore `x` di circa `350` e un valore `y` di circa `329` dopo aver applicato le scale.

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

La quarta etichetta dovrebbe avere un valore `x` di circa `141` e un valore `y` di circa `60` dopo aver applicato le scale.

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

La quinta etichetta dovrebbe avere un valore `x` di circa `449` e un valore `y` di circa `237` dopo aver applicato le scale.

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

La sesta etichetta dovrebbe avere un valore `x` di circa `280` e un valore `y` di circa `306` dopo aver applicato le scale.

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

La settima etichetta dovrebbe avere un valore `x` di circa `370` e un valore `y` di circa `351` dopo aver applicato le scale.

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

L'ottava etichetta dovrebbe avere un valore `x` di circa `270` e un valore `y` di circa `132` dopo aver applicato le scale.

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

La nona etichetta dovrebbe avere un valore `x` di circa `140` e un valore `y` di circa `144` dopo aver applicato le scale.

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

La decima etichetta dovrebbe avere un valore `x` di circa `88` e un valore `y` di circa `326` dopo aver applicato le scale.

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
