---
id: 587d7fa7367417b2b2512bc6
title: Aggiungere stili in linea agli elementi
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3 consente di aggiungere stili CSS in linea sugli elementi dinamici con il metodo `style()`.

Il metodo `style()` prende come argomento una coppia chiave-valore separata da virgole. Ecco un esempio per impostare il colore del testo della selezione a blu:

```js
selection.style("color","blue");
```

# --instructions--

Aggiungi il metodo `style()` al codice nell'editor per fare in modo che tutto il testo visualizzato abbia una `font-family` `verdana`.

# --hints--

I tuoi elementi `h2` dovrebbero avere una `font-family` `verdana`.

```js
assert($('h2').css('font-family') == 'verdana');
```

Il tuo codice dovrebbe usare il metodo `style()`.

```js
assert(code.match(/\.style/g));
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
      .text((d) => (d + " USD"))
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

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("font-family", "verdana")

  </script>
</body>
```
