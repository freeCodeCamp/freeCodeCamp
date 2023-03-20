---
id: 587d7fab367417b2b2512bd9
title: Aggiungere etichette ai grafici a dispersione
challengeType: 6
forumTopicId: 301477
dashedName: add-labels-to-scatter-plot-circles
---

# --description--

È possibile aggiungere del testo per creare etichette per i punti in un grafico a dispersione.

L'obiettivo è quello di visualizzare i valori separati da virgole per il primo campo (`x`) e il secondo campo (`y`) di ogni elemento nel `dataset`.

The `text` nodes need `x` and `y` attributes to position it on the SVG. In questa sfida, il valore `y` (che determina l'altezza) può usare lo stesso valore che il `circle` utilizza per il suo attributo `cy`. Il valore `x` può essere leggermente più grande del valore `cx` del `circle`, in modo che l'etichetta sia visibile. Questo sposterà l'etichetta a destra del punto tracciato.

# --instructions--

Etichetta ogni punto sul grafico a dispersione utilizzando gli elementi `text`. Il testo dell'etichetta dovrebbe essere composto dai due valori separati da una virgola e uno spazio. Ad esempio, l'etichetta per il primo punto è `34, 78`. Imposta l'attributo `x` in modo che sia `5` unità più grande del valore che hai usato per l'attributo `cx` sul `circle`. Imposta l'attributo `y` come già fatto per il valore `cy` sul `circle`.

# --hints--

Il tuo codice dovrebbe avere 10 elementi `text`.

```js
assert($('text').length == 10);
```

La prima etichetta dovrebbe avere il testo di `34, 78`, un valore `x` di `39`, e un valore `y` di `422`.

```js
assert(
  $('text').eq(0).text() == '34, 78' &&
    $('text').eq(0).attr('x') == '39' &&
    $('text').eq(0).attr('y') == '422'
);
```

La seconda etichetta dovrebbe avere il testo di `109, 280`, un valore `x` di `114`, e un valore `y` di `220`.

```js
assert(
  $('text').eq(1).text() == '109, 280' &&
    $('text').eq(1).attr('x') == '114' &&
    $('text').eq(1).attr('y') == '220'
);
```

La terza etichetta dovrebbe avere il testo di `310, 120`, un valore `x` di `315`, e un valore `y` di `380`.

```js
assert(
  $('text').eq(2).text() == '310, 120' &&
    $('text').eq(2).attr('x') == '315' &&
    $('text').eq(2).attr('y') == '380'
);
```

La quarta etichetta dovrebbe avere il testo di `79, 411`, un valore `x` di `84`, e un valore `y` di `89`.

```js
assert(
  $('text').eq(3).text() == '79, 411' &&
    $('text').eq(3).attr('x') == '84' &&
    $('text').eq(3).attr('y') == '89'
);
```

La quinta etichetta dovrebbe avere il testo di `420, 220`, un valore `x` di `425`, e un valore `y` di `280`.

```js
assert(
  $('text').eq(4).text() == '420, 220' &&
    $('text').eq(4).attr('x') == '425' &&
    $('text').eq(4).attr('y') == '280'
);
```

La sesta etichetta dovrebbe avere il testo di `233, 145`, un valore `x` di `238`, e un valore `y` di `355`.

```js
assert(
  $('text').eq(5).text() == '233, 145' &&
    $('text').eq(5).attr('x') == '238' &&
    $('text').eq(5).attr('y') == '355'
);
```

La settima etichetta dovrebbe avere il testo di `333, 96`, un valore `x` di `338`, e un valore `y` di `404`.

```js
assert(
  $('text').eq(6).text() == '333, 96' &&
    $('text').eq(6).attr('x') == '338' &&
    $('text').eq(6).attr('y') == '404'
);
```

L'ottava etichetta dovrebbe avere il testo di `222, 333`, un valore `x` di `227`, e un valore `y` di `167`.

```js
assert(
  $('text').eq(7).text() == '222, 333' &&
    $('text').eq(7).attr('x') == '227' &&
    $('text').eq(7).attr('y') == '167'
);
```

La nona etichetta dovrebbe avere il testo di `78, 320`, un valore `x` di `83`, e un valore `y` di `180`.

```js
assert(
  $('text').eq(8).text() == '78, 320' &&
    $('text').eq(8).attr('x') == '83' &&
    $('text').eq(8).attr('y') == '180'
);
```

La decima etichetta dovrebbe avere il testo di `21, 123`, un valore `x` di `26`, e un valore `y` di `377`.

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
