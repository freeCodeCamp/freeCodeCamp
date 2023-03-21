---
id: 587d7fab367417b2b2512bd8
title: Aggiungere attributi agli elementi cerchio
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

The last challenge created the `circle` elements for each point in the `dataset`, and appended them to the SVG. Ma D3 ha bisogno di ulteriori informazioni sulla posizione e la dimensione di ogni `circle` per visualizzarli correttamente.

Un `circle` in SVG ha tre attributi principali. Gli attributi `cx` e `cy` sono le coordinate. They tell D3 where to position the *center* of the shape on the SVG. Il raggio (attributo`r`) dà la dimensione del `circle`.

Just like the `rect` `y` coordinate, the `cy` attribute for a `circle` is measured from the top of the SVG, not from the bottom.

Tutti e tre gli attributi possono usare una funzione callback per impostare dinamicamente i loro valori. Ricorda che tutti i metodi concatenati dopo `data(dataset)` vengono eseguiti una volta per ogni elemento del `dataset`. Il parametro `d` nella funzione callback si riferisce all'elemento corrente del `dataset`, che è un array per ogni punto. Si utilizza la notazione parentesi, come `d[0]`, per accedere ai valori in quell'array.

# --instructions--

Aggiungi gli attributi `cx`, `cy`e `r` agli elementi `circle`. Il valore `cx` dovrebbe essere il primo numero nell'array per ogni elemento del `dataset`. Il valore `cy` dovrebbe essere basato sul secondo numero nell'array, ma assicurati di mostrare il grafico a destra e non invertito. Il valore `r` dovrebbe essere `5` per tutti i cerchi.

# --hints--

Il tuo codice dovrebbe avere 10 elementi `circle`.

```js
assert($('circle').length == 10);
```

Il primo elemento `circle` dovrebbe avere un valore `cx` di `34`, un valore `cy` di `422`, e un valore `r` di `5`.

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

Il secondo elemento `circle` dovrebbe avere un valore `cx` di `109`, un valore `cy` di `220`, e un valore `r` di `5`.

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

Il terzo elemento `circle` dovrebbe avere un valore `cx` di `310`, un valore `cy` di `380`, e un valore `r` di `5`.

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

Il quarto elemento `circle` dovrebbe avere un valore `cx` di `79`, un valore `cy` di `89`, e un valore `r` di `5`.

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

Il quinto elemento `circle` dovrebbe avere un valore `cx` di `420`, un valore `cy` di `280`, e un valore `r` di `5`.

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

Il sesto elemento `circle` dovrebbe avere un valore `cx` di `233`, un valore `cy` di `355`, e un valore `r` di `5`.

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

Il settimo elemento `circle` dovrebbe avere un valore `cx` di `333`, un valore `cy` di `404`, e un valore `r` di `5`.

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

L'ottavo elemento `circle` dovrebbe avere un valore `cx` di `222`, un valore `cy` di `167`, e un valore `r` di `5`.

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

Il nono elemento `circle` dovrebbe avere un valore `cx` di `78`, un valore `cy` di `180`, e un valore `r` di `5`.

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

Il decimo elemento `circle` dovrebbe avere un valore `cx` di `21`, un valore `cy` di `377`, e un valore `r` di `5`.

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
