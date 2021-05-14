---
id: 5a9036ee38fddaf9a66b5d37
title: Aggiungere la spaziatura più velocemente con grid-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` è un'abbreviazione per `grid-row-gap` e `grid-column-gap` visti nelle due sfide precedenti, che è più conveniente da usare. Se `grid-gap` ha un valore, creerà uno spazio tra tutte le righe e le colonne. Se sono presenti due valori invece utilizzerà il primo per impostare lo spazio tra le righe e il secondo per le colonne.

# --instructions--

Utilizza `grid-gap` per introdurre uno spazio di `10px` tra le righe e uno spazio di `20px` tra le colonne.

# --hints--

La classe `container` dovrebbe avere una proprietà `grid-gap` che introduce uno spazio di `10px` tra le righe e uno spazio di `20px` tra le colonne.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
  )
);
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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
<style>.container {grid-gap: 10px 20px;}</style>
```
