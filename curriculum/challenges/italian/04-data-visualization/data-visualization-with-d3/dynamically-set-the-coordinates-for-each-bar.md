---
id: 587d7fa9367417b2b2512bce
title: Impostare dinamicamente le coordinate per ogni barra
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

L'ultima sfida ha creato e aggiunto un rettangolo all'elemento `svg` per rappresentare ogni punto del `dataset` con una barra. Sfortunatamente, sono stati tutti impilati l'uno sull'altro.

Il posizionamento di un rettangolo è gestito dagli attributi `x` e `y`. Essi dicono a D3 dove iniziare a disegnare la forma nell'area `svg`. L'ultima sfida li ha impostati tutti a 0, quindi ogni barra è stata posizionata nell'angolo in alto a sinistra.

Per un grafico a barre, tutte le barre dovrebbero posionarsi allo stesso livello verticale, ciò significa che il valore `y` rimane lo stesso (a 0) per tutte le barre. Il valore `x`, tuttavia, deve cambiare quando si aggiungono nuove barre. Ricorda che valori `x` più grandi spingono gli oggetti più a destra. Mentre passi attraverso gli elementi dell'array in `dataset`, il valore `x` dovrebbe aumentare.

Il metodo `attr()` in D3 accetta una funzione di callback per impostare dinamicamente quell'attributo. La funzione di callback richiede due argomenti: uno per il punto dati stesso (solitamente `d`) e uno per l'indice del punto dati nell'array. Il secondo argomento per l'indice è opzionale. Ecco il formato:

```js
selection.attr("property", (d, i) => {

})
```

È importante notare che NON è necessario scrivere un ciclo `for` o utilizzare `forEach()` per iterare sugli elementi del set di dati. Ricorda che il metodo `data()` analizza il set di dati, e qualsiasi metodo che viene concatenato dopo `data()` viene eseguito una volta per ciascun elemento del set di dati.

# --instructions--

Modifica la funzione di callback dell'attributo `x` in modo che restituisca l'indice moltiplicato per 30.

**Nota:** Ogni barra ha una larghezza di 25, quindi aumentare ogni valore `x` di 30 aggiunge dello spazio tra le barre. In questo esempio, qualsiasi valore superiore a 25 può andar bene.

# --hints--

Il primo `rect` dovrebbe avere un valore `x` di `0`.

```js
assert($('rect').eq(0).attr('x') == '0');
```

Il secondo `rect` dovrebbe avere un valore `x` di `30`.

```js
assert($('rect').eq(1).attr('x') == '30');
```

Il terzo `rect` dovrebbe avere un valore `x` di `60`.

```js
assert($('rect').eq(2).attr('x') == '60');
```

Il quarto `rect` dovrebbe avere un valore `x` di `90`.

```js
assert($('rect').eq(3).attr('x') == '90');
```

Il quinto `rect` dovrebbe avere un valore `x` di `120`.

```js
assert($('rect').eq(4).attr('x') == '120');
```

Il sesto `rect` dovrebbe avere un valore `x` di `150`.

```js
assert($('rect').eq(5).attr('x') == '150');
```

Il settimo `rect` dovrebbe avere un valore `x` di `180`.

```js
assert($('rect').eq(6).attr('x') == '180');
```

L’ottavo `rect` dovrebbe avere un valore `x` di `210`.

```js
assert($('rect').eq(7).attr('x') == '210');
```

Il nono `rect` dovrebbe avere un valore `x` di `240`.

```js
assert($('rect').eq(8).attr('x') == '240');
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
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
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
       .attr("x", (d, i) => {
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
