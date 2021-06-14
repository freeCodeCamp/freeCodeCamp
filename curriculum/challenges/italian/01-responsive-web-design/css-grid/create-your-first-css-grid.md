---
id: 5a858944d96184f06fd60d61
title: Creare la tua prima griglia CSS
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

Trasforma qualsiasi elemento HTML in un contenitore griglia (grid) impostando la sua proprietà `display` sul valore `grid`. Questo ti dà la possibilità di utilizzare tutte le altre proprietà associate alla griglia CSS.

**Nota:** Nella Griglia CSS, l'elemento genitore è indicato come <dfn>container</dfn> e i suoi figli sono chiamati <dfn>items</dfn>.

# --instructions--

Cambia la visualizzazione del div con la classe `container` impostandola a `grid`.

# --hints--

La classe `container` dovrebbe avere una proprietà `display` con un valore di `grid`.

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
