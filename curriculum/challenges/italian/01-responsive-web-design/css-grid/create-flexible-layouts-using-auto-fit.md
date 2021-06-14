---
id: 5a94fe6269fb03452672e462
title: Creare layout flessibili utilizzando auto-fit
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
dashedName: create-flexible-layouts-using-auto-fit
---

# --description--

`auto-fit` funziona in modo quasi identico ad `auto-fill`. L'unica differenza è che quando la dimensione del contenitore supera la dimensione di tutti gli elementi combinati, `auto-fill` continua a inserire righe o colonne vuote e spinge gli elementi di lato, mentre `auto-fit` comprime quelle righe o colonne vuote e allunga gli elementi per adattarli alle dimensioni del contenitore.

**Nota:** se il tuo contenitore non riesce a contenere tutti gli elementi su una riga, li sposterà in una nuova riga.

# --instructions--

Nella seconda griglia, utilizza `auto-fit` con `repeat` per riempire la griglia con colonne che abbiano una larghezza minima di `60px` e massima di `1fr`. Ridimensiona quindi l'anteprima per vedere la differenza.

# --hints--

La classe `container2` dovrebbe avere una proprietà `grid-template-columns` con `repeat` e `auto-fit` che riempiranno la griglia con colonne che hanno una larghezza minima di `60px` e massima di `1fr`.

```js
assert(
  code.match(
    /.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}</style>
```
