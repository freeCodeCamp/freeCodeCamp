---
id: 587d7fa8367417b2b2512bcb
title: Informazioni su SVG in D3
challengeType: 6
forumTopicId: 301489
dashedName: learn-about-svg-in-d3
---

# --description--

<dfn>SVG</dfn> sta per <dfn>Scalable Vector Graphics</dfn>.

Qui "scalabile" significa che, se si ingrandisce o si rimpicciolisce un oggetto, questo non apparirà pixellato. Esso scala in base al sistema di visualizzazione, che si tratti di un piccolo schermo mobile o di un grande monitor TV.

SVG è usato per creare forme geometriche comuni. Dal momento che D3 mappa i dati in una rappresentazione visuale, utilizza SVG per creare le forme da visualizzare. Le forme SVG per una pagina web devono andare all'interno di un tag HTML `svg`.

CSS può essere scalabile quando gli stili usano unità relative (come `vh`, `vw`, o percentuali), ma usare SVG è più flessibile per creare visualizzazioni di dati.

# --instructions--

Aggiungi un nodo `svg` al `body` usando `append()`. Dagli un attributo `width` impostato alla costante `w` fornita e un attributo `height` impostato alla costante `h` fornita utilizzando i metodi `attr()` o `style()` per ciascuno. Lo vedrai nell'output perché c'è un `background-color` rosa applicato ad esso nel tag `style`.

**Nota:** Quando si utilizza `attr()` la larghezza e l'altezza degli attributi non hanno unità. Questo è la base del ridimensionamento - l'elemento avrà sempre un rapporto tra larghezza e altezza di 5:1, non importa quale sia il livello di zoom.

# --hints--

Il tuo documento dovrebbe avere un elemento `svg`.

```js
assert($('svg').length == 1);
```

L'elemento `svg` dovrebbe avere un attributo `width` impostato a `500` o dovrebbe essere stilizzato in modo da avere una larghezza di `500px`.

```js
assert($('svg').attr('width') == '500' || $('svg').css('width') == '500px');
```

L'elemento `svg` dovrebbe avere un attributo `height` impostato a `100` o dovrebbe essere stilizzato in modo da avere un'altezza di `100px`.

```js
assert($('svg').attr('height') == '100' || $('svg').css('height') == '100px');
```

# --seed--

## --seed-contents--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line



                  // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  svg {
    background-color: pink;
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
                  .attr("height", h)
  </script>
</body>
```
