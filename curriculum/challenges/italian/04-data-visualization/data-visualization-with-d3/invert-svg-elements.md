---
id: 587d7fa9367417b2b2512bd0
title: Invertire elementi SVG
challengeType: 6
forumTopicId: 301488
dashedName: invert-svg-elements
---

# --description--

Potresti aver notato che il grafico a barre è sotto soprra, o invertito. Questo è causato da come SVG usa le coordinate (x, y).

In SVG, il punto di origine per le coordinate è l'angolo in alto a sinistra. Una coordinata `x` di 0 posiziona la figura sul lato sinistro dell'area SVG. Una coordinata `y` di 0 posiziona la figura sul lato in alto dell'area SVG. Valori di `x` più alti spingono il rettangolo verso destra. Valori di `y` più alti spingono il rettangolo verso il basso.

Per fare le barre nella giusta direzione, devi cambiare come è calcolata la coordinata `y`. Bisogna considerare sia l'altezza della barra sia l'altezza totale dell'area SVG.

L'altezza dell'area SVG è 100. Se hai un valore di 0 nel tuo set, vuoi che la barra inizi al lato più in basso dell'area SVG (non in alto). Per fare ciò, la coordinata `y` deve avere un valore di 100. Se il valore fosse 1, inizieresti con una coordinata `y` di 100 per far iniziare la barra in basso. Poi avresti bisogno di considerare l'altezza della barra di 1, quindi la coordinata `y` finale sarebbe 99.

Una coordinata `y` calcolata come `y = heightOfSVG - heightOfBar` crea le barre nella direzione giusta.

# --instructions--

Cambia la funzione callback per l'attributo `y` per raddrizzare le barre. Ricorda che l'altezza (`height`) della barra è 3 volte il valore `d`.

**Nota:** In generale, la relazione è `y = h - m * d`, dove `m` è la costante che moltiplica i dati.

# --hints--

Il primo `rect` dovrebbe avere un valore `y` di `64`.

```js
assert($('rect').eq(0).attr('y') == h - dataset[0] * 3);
```

Il secondo `rect` dovrebbe avere un valore `y` di `7`.

```js
assert($('rect').eq(1).attr('y') == h - dataset[1] * 3);
```

Il terzo `rect` dovrebbe avere un valore `y` di `34`.

```js
assert($('rect').eq(2).attr('y') == h - dataset[2] * 3);
```

Il quarto `rect` dovrebbe avere un valore `y` di `49`.

```js
assert($('rect').eq(3).attr('y') == h - dataset[3] * 3);
```

Il quinto `rect` dovrebbe avere un valore `y` di `25`.

```js
assert($('rect').eq(4).attr('y') == h - dataset[4] * 3);
```

Il sesto `rect` dovrebbe avere un valore `y` di `46`.

```js
assert($('rect').eq(5).attr('y') == h - dataset[5] * 3);
```

Il settimo `rect` dovrebbe avere un valore `y` di `13`.

```js
assert($('rect').eq(6).attr('y') == h - dataset[6] * 3);
```

L'ottavo `rect` dovrebbe avere un valore `y` di `58`.

```js
assert($('rect').eq(7).attr('y') == h - dataset[7] * 3);
```

Il nono `rect` dovrebbe avere un valore `y` di `73`.

```js
assert($('rect').eq(8).attr('y') == h - dataset[8] * 3);
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
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
```
