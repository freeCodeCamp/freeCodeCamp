---
id: 5a9036d038fddaf9a66b5d32
title: Aggiungere colonne con grid-template-columns
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

Creando semplicemente un elemento griglia non arriverai molto lontano. Dovrai anche definire la struttura della griglia. Per aggiungere alcune colonne alla griglia, utilizza la proprietà `grid-template-columns` in un contenitore griglia come mostrato di seguito:

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

Questo darà alla tua griglia due colonne larghe 50px ciascuna. Il numero di parametri forniti alla proprietà `grid-template-columns` indica il numero di colonne nella griglia, e il valore di ciascun parametro indica la larghezza di ogni colonna.

# --instructions--

Assegna al contenitore della griglia tre colonne di larghezza `100px` ciascuna.

# --hints--

La classe `container` dovrebbe avere una proprietà `grid-template-columns` con tre unità di `100px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.container')?.gridTemplateColumns === '100px 100px 100px');
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
    display: grid;
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
<style>.container {grid-template-columns: 100px 100px 100px;}</style>
```
