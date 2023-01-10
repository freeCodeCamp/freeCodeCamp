---
id: 5a858944d96184f06fd60d61
title: Erstelle dein erstes CSS-Raster (Grid)
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

Verwandle jedes HTML-Element in einen Grid-Container, indem du seine `display`-Eigenschaft auf `grid` setzt. Dies gibt dir die Möglichkeit, alle anderen Eigenschaften zu nutzen, die mit CSS Grid verbunden sind.

**Hinweis:** Im CSS-Raster wird das übergeordnete Element als <dfn>Container</dfn> bezeichnet und seine Kinder heißen <dfn>Elemente</dfn>.

# --instructions--

Ändere die Anzeige des Div mit der Klasse `container` auf `grid`.

# --hints--

Die Klasse `container` sollte eine Eigenschaft `display` mit dem Wert `grid` besitzen.

```js
assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    /* Only change code below this line */


    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {display: grid;}</style>
```
