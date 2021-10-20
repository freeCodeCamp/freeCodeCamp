---
id: 587d7fa9367417b2b2512bcf
title: Cambiare dinamicamente l'altezza di ogni barra
challengeType: 6
forumTopicId: 301486
dashedName: dynamically-change-the-height-of-each-bar
---

# --description--

L'altezza di ogni barra può essere impostata al valore del punto dati nell'array, in modo simile a come il valore `x` è stato impostato dinamicamente.

```js
selection.attr("property", (d, i) => {

})
```

Qui `d` sarebbe il valore del punto dati, e `i` sarebbe l'indice del punto di dati nell'array.

# --instructions--

Modifica la funzione di callback per l'attributo altezza `height` in modo che restituisca i valori dei dati moltiplicati per 3.

**Nota:** Ricorda che moltiplicando tutti i punti dati per la stessa costante riscala i dati (come nel fare uno zoom). In questo esempio aiuta a vedere le differenze tra i valori della barra.

# --hints--

Il primo `rect` dovrebbe avere un'altezza `height` di `36`.

```js
assert($('rect').eq(0).attr('height') == '36');
```

Il secondo `rect` dovrebbe avere un'altezza `height` di `93`.

```js
assert($('rect').eq(1).attr('height') == '93');
```

Il terzo `rect` dovrebbe avere un'altezza `height` di `66`.

```js
assert($('rect').eq(2).attr('height') == '66');
```

Il quarto `rect` dovrebbe avere un'altezza `height` di `51`.

```js
assert($('rect').eq(3).attr('height') == '51');
```

Il quinto `rect` dovrebbe avere un'altezza `height` di `75`.

```js
assert($('rect').eq(4).attr('height') == '75');
```

Il sesto`rect` dovrebbe avere un'altezza `height` di `54`.

```js
assert($('rect').eq(5).attr('height') == '54');
```

Il settimo `rect` dovrebbe avere un'altezza `height` di `87`.

```js
assert($('rect').eq(6).attr('height') == '87');
```

L'ottavo `rect` dovrebbe avere un'altezza `height` di `42`.

```js
assert($('rect').eq(7).attr('height') == '42');
```

Il nono `rect` dovrebbe avere un'altezza `height` di `27`.

```js
assert($('rect').eq(8).attr('height') == '27');
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
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
       .attr("x", (d, i) => i * 30)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         return d * 3
       });
  </script>
</body>
```
