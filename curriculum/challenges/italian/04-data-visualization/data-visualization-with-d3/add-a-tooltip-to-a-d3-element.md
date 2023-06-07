---
id: 587d7faa367417b2b2512bd6
title: Aggiungere un suggerimento a un elemento D3
challengeType: 6
forumTopicId: 301470
dashedName: add-a-tooltip-to-a-d3-element
---

# --description--

Un suggerimento (tooltip) mostra maggiori informazioni su un elemento in una pagina quando l'utente passa sopra di esso. Ci sono diversi modi per aggiungere un suggerimento a una visualizzazione. Questa sfida utilizza l'elemento SVG `title`.

`title` va in coppia con il metodo `text()` per aggiungere dinamicamente dati alle barre.

# --instructions--

Aggiungi un elemento `title` sotto ogni nodo `rect`. Quindi chiama il metodo `text()` con una funzione di callback in modo che il testo mostri il valore dei dati.

# --hints--

Il tuo codice dovrebbe avere 9 elementi `title`.

```js
assert($('title').length == 9);
```

Il primo elemento `title` dovrebbe avere un testo tooltip di `12`.

```js
assert($('title').eq(0).text() == '12');
```

Il secondo elemento `title` dovrebbe avere un testo tooltip di `31`.

```js
assert($('title').eq(1).text() == '31');
```

Il terzo elemento `title` dovrebbe avere un testo tooltip di `22`.

```js
assert($('title').eq(2).text() == '22');
```

Il quarto elemento `title` dovrebbe avere un testo tooltip di `17`.

```js
assert($('title').eq(3).text() == '17');
```

Il quinto elemento `title` dovrebbe avere un testo tooltip di `25`.

```js
assert($('title').eq(4).text() == '25');
```

Il sesto elemento `title` dovrebbe avere un testo tooltip di `18`.

```js
assert($('title').eq(5).text() == '18');
```

Il settimo elemento `title` dovrebbe avere un testo tooltip di `29`.

```js
assert($('title').eq(6).text() == '29');
```

L'ottavo elemento `title` dovrebbe avere un testo tooltip di `14`.

```js
assert($('title').eq(7).text() == '14');
```

Il nono elemento `title` dovrebbe avere un testo tooltip di `9`.

```js
assert($('title').eq(8).text() == '9');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```

# --solutions--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       .append("title")
       .text((d) => d)


    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```
