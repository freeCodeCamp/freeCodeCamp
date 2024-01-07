---
id: 587d7fa7367417b2b2512bc4
title: Lavorare con i dati in D3
challengeType: 6
forumTopicId: 301497
dashedName: work-with-data-in-d3
---

# --description--

La libreria D3 si concentra su un approccio basato sui dati. Quando si dispone di un insieme di dati, è possibile applicare i metodi D3 per visualizzarli sulla pagina. I dati sono disponibili in molti formati, ma questa sfida utilizza una semplice matrice di numeri.

Il primo passo è quello di rendere D3 consapevole dei dati. Il metodo `data()` è utilizzato su una selezione di elementi DOM per collegare i dati a questi elementi. Il set di dati viene passato come argomento al metodo.

Un comune metodo di lavoro è quello di creare un nuovo elemento nel documento per ogni elemento di dati nel set. A questo scopo D3 ha il metodo `enter()`.

Quando `enter()` viene combinato con il metodo `data()`, guarda gli elementi selezionati dalla pagina e li confronta con il numero di elementi di dati nel set. Se ci sono meno elementi rispetto ai dati, crea quelli mancanti.

Ecco un esempio che seleziona un elemento `ul` e crea un nuovo elemento lista in base al numero di voci nell'array:

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

Potrebbe sembrare confuso selezionare degli elementi che non esistono ancora. Questo dice a D3 di selezionare prima gli `ul` della pagina. Successivamente, seleziona tutti gli elementi dell'elenco, che restituisce una selezione vuota. Quindi il metodo `data()` esamina il set di dati ed esegue il codice successivo tre volte, una volta per ogni elemento nell'array. Il metodo `enter()` vede che non ci sono elementi `li` nella pagina, ma gliene servono tre (uno per ogni elemento di dati nel `dataset`). I nuovi elementi `li` sono aggiunti all'`ul` e contengono il testo `New item`.

# --instructions--

Seleziona il nodo `body`, dopodiché seleziona tutti gli elementi `h2`. Fai creare e aggiungere a D3 un tag `h2` per ogni elemento nell'array del `dataset`. Il testo nell'`h2` dovrebbe dire `New Title`. Il tuo codice dovrebbe utilizzare i metodi `data()` e `enter()`.

# --hints--

Il tuo documento dovrebbe avere 9 elementi `h2`.

```js
assert($('h2').length == 9);
```

Il testo nell'elemento `h2` dovrebbe dire `New Title`. Le maiuscole e la spaziatura dovrebbero corrispondere esattamente.

```js
assert(
  $('h2')
    .text()
    .match(/New Title/g).length == 9
);
```

Il tuo codice dovrebbe usare il metodo `data()`.

```js
assert(code.match(/\.data/g));
```

Il tuo codice dovrebbe utilizzare il metodo `enter()`.

```js
assert(code.match(/\.enter/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>
```
