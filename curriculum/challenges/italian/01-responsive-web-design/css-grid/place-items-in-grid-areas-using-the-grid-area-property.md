---
id: 5a94fe1369fb03452672e45d
title: Posizionare gli oggetti nelle aree della griglia utilizzando la proprietà grid-area
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

Dopo aver creato un modello di area per il contenitore griglia, come mostrato nella sfida precedente, puoi posizionare un oggetto nella tua area personalizzata facendo riferimento al nome che le hai dato. Per fare questo, si utilizza la proprietà `grid-area` su un oggetto come questo:

```css
.item1 {
  grid-area: header;
}
```

Questo consente alla griglia di sapere che vuoi che la classe `item1` vada nell'area denominata `header`. In questo caso, l'elemento userà l'intera riga in alto perché essa è definita come area `header`.

# --instructions--

Posiziona un elemento con la classe `item5` nell'area `footer` usando la proprietà `grid-area`.

# --hints--

La classe `item5` dovrebbe avere una proprietà `grid-area` con il valore di `footer`.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi)
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

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.item5 {grid-area: footer;}</style>
```
