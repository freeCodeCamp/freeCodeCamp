---
id: 587d7fa7367417b2b2512bc8
title: Aggiungere classi con D3
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

Utilizzare un sacco di stili in linea su elementi HTML diventa difficile da gestire, anche per le applicazioni più piccole. È più facile aggiungere una classe agli elementi e stilizzare quella classe una sola volta usando le regole CSS. D3 ha il metodo `attr()` per aggiungere qualsiasi attributo HTML a un elemento, incluso un nome di classe.

Il metodo `attr()` funziona nello stesso modo di `style()`. Esso prende valori separati da virgola, e può usare una funzione di callback. Ecco un esempio per aggiungere una classe `container` a una selezione:

```js
selection.attr("class", "container");
```

Nota che il parametro `class` rimarrà lo stesso ogni volta che dovrai aggiungere una classe e solo il parametro `container` cambierà.

# --instructions--

Aggiungi il metodo `attr()` al codice nell'editor e applica una classe `bar` agli elementi `div`.

# --hints--

I tuoi elementi `div` dovrebbero avere una classe di `bar`.

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

Il tuo codice dovrebbe usare il metodo `attr()`.

```js
assert(code.match(/\.attr/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
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
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
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
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```
