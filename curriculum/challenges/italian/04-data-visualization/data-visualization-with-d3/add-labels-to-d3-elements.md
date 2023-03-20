---
id: 587d7faa367417b2b2512bd2
title: Aggiungere etichette agli elementi D3
challengeType: 6
forumTopicId: 301476
dashedName: add-labels-to-d3-elements
---

# --description--

D3 ti permette di etichettare un elemento grafico, come una barra, usando l'elemento SVG `text`.

Like the `rect` element, a `text` element needs to have `x` and `y` attributes, to place it on the SVG. Deve inoltre accedere ai dati per visualizzare tali valori.

D3 ti dà un alto livello di controllo su come etichettare le tue barre.

# --instructions--

Il codice nell'editor lega già i dati a ogni nuovo elemento `text`. Innanzitutto, aggiungi dei nodi `text` all'`svg`. Successivamente, aggiungi gli attributi per le coordinate `x` e `y`. Esse dovrebbero essere calcolate allo stesso modo di quelle per il `rect`, a parte il fatto che il valore `y` per il `text` dovrebbe posizionare l'etichetta tre unità più in altro rispetto alla barra. Infine, utilizza il metodo D3 `text()` per impostare l'etichetta uguale al valore del data point.

**Nota:** Per fare in modo che l'etichetta stia più in alto della barra, decidi se il valore `y` per il `text` dovrebbe essere maggiore o minore di 3 rispetto al valore `y` della barra.

# --hints--

Il primo elemento `text` dovrebbe avere un'etichetta di `12` e un valore `y` di `61`.

```js
assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
```

Il secondo elemento `text` dovrebbe avere un'etichetta di `31` e un valore `y` di `4`.

```js
assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
```

Il terzo elemento `text` dovrebbe avere un'etichetta di `22` e un valore `y` di `31`.

```js
assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
```

Il quarto elemento `text` dovrebbe avere un'etichetta di `17` e un valore `y` di `46`.

```js
assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
```

Il quinto elemento `text` dovrebbe avere un'etichetta di `25` e un valore `y` di `22`.

```js
assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
```

Il sesto elemento `text` dovrebbe avere un'etichetta di `18` e un valore `y` di `43`.

```js
assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
```

Il settimo elemento `text` dovrebbe avere un'etichetta di `29` e un valore `y` di `10`.

```js
assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
```

L'ottavo elemento `text` dovrebbe avere un'etichetta di `14` e un valore `y` di `55`.

```js
assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
```

Il nono elemento `text` dovrebbe avere un'etichetta di `9` e un valore `y` di `70`.

```js
assert($('text').eq(8).text() == '9' && $('text').eq(8).attr('y') == '70');
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
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .text((d) => d)
  </script>
<body>
```
