---
id: 587d7fa7367417b2b2512bc5
title: Lavorare con i dati dinamici in D3
challengeType: 6
forumTopicId: 301498
dashedName: work-with-dynamic-data-in-d3
---

# --description--

Le ultime due sfide riguardano le basi della visualizzazione dinamica dei dati con D3 tramite l'utilizzo dei metodi `data()` e `enter()`. Questi metodi prendono un set di dati e, insieme al metodo `append()`, creano un nuovo elemento DOM per ogni voce nel set di dati.

Nella sfida precedente, hai creato un nuovo elemento `h2` per ogni elemento nell'array `dataset`, ma tutti contenevano lo stesso testo, `New Title`. Questo perché non hai fatto uso dei dati che sono legati a ciascuno degli elementi `h2`.

Il metodo D3 `text()` può prendere una stringa o una funzione di callback come argomento:

```js
selection.text((d) => d)
```

Nell'esempio precedente, il parametro `d` si riferisce a una singola voce nel set di dati a cui è associata una selezione.

Utilizzando l'esempio attuale come contesto, il primo elemento `h2` è legato a 12, il secondo elemento `h2` è legato a 31, il terzo elemento `h2` è legato a 22, e così via.

# --instructions--

Modifica il metodo `text()` in modo che ogni elemento `h2` mostri il valore corrispondente dall'array `dataset` con uno spazio e la stringa `USD`. Ad esempio, la prima intestazione dovrebbe essere `12 USD`.

# --hints--

Il primo `h2` dovrebbe avere il testo `12 USD`.

```js
assert($('h2').eq(0).text() == '12 USD');
```

Il secondo `h2` dovrebbe avere il testo `31 USD`.

```js
assert($('h2').eq(1).text() == '31 USD');
```

Il terzo `h2` dovrebbe avere il testo `22 USD`.

```js
assert($('h2').eq(2).text() == '22 USD');
```

Il quarto `h2` dovrebbe avere il testo `17 USD`.

```js
assert($('h2').eq(3).text() == '17 USD');
```

Il quinto `h2` dovrebbe avere il testo `25 USD`.

```js
assert($('h2').eq(4).text() == '25 USD');
```

Il sesto `h2` dovrebbe avere il testo `18 USD`.

```js
assert($('h2').eq(5).text() == '18 USD');
```

Il settimo `h2` dovrebbe avere il testo `29 USD`.

```js
assert($('h2').eq(6).text() == '29 USD');
```

L'ottavo `h2` dovrebbe avere il testo `14 USD`.

```js
assert($('h2').eq(7).text() == '14 USD');
```

Il nono `h2` dovrebbe avere il testo `9 USD`.

```js
assert($('h2').eq(8).text() == '9 USD');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      // Add your code below this line

      .text("New Title");

      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => `${d} USD`);

  </script>
</body>
```
