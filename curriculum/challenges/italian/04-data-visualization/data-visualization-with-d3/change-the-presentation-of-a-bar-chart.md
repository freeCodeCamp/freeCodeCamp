---
id: 587d7fa8367417b2b2512bca
title: Cambiare la presentazione di un grafico a barre
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

L'ultima sfida ha creato un grafico a barre, ma ci sono un paio di tocchi nella formattazione che potrebbero migliorarlo:

1) Aggiungere spazio tra ogni barra per separarle visivamente, cosa che viene fatta aggiungendo un margine al CSS della classe `bar`

2) Aumentare l'altezza delle barre per mostrare meglio la differenza tra i valori: questo si può fare moltiplicando il valore per un numero in modo da scalare l'altezza

# --instructions--

Innanzitutto, aggiungi un `margin` di `2px` alla classe `bar` nel tag `style`. Successivamente, cambia la funzione callback nel metodo `style()` in modo che restituisca un valore `10` volte il valore originale dei dati (più `px`).

**Nota:** Moltiplicare ogni punto dati per la *stessa* costante modifica solo la scala. È come fare lo zoom, e non cambia il significato dei dati sottostanti.

# --hints--

Il primo `div` dovrebbe avere un'`height` di `120` pixel e un `margin` di `2` pixel.

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

Il secondo `div` dovrebbe avere un'`height` di `310` pixel e un `margin` di `2` pixel.

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

Il terzo `div` dovrebbe avere un'`height` di `220` pixel e un `margin` di `2` pixel.

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

Il quarto `div` dovrebbe avere un'`height` di `170` pixel e un `margin` di `2` pixel.

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

Il quinto `div` dovrebbe avere un'`height` di `250` pixel e un `margin` di `2` pixel.

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

Il sesto `div` dovrebbe avere un'`height` di `180` pixel e un `margin` di `2` pixel.

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

Il settimo `div` dovrebbe avere un'`height` di `290` pixel e un `margin` di `2` pixel.

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

L'ottavo `div` dovrebbe avere un'`height` di `140` pixel e un `margin` di `2` pixel.

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

Il nono `div` dovrebbe avere un'`height` di `90` pixel e un `margin` di `2` pixel.

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
