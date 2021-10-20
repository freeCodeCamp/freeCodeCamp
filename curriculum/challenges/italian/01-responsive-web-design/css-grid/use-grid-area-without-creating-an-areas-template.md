---
id: 5a94fe2669fb03452672e45e
title: Usare grid-area senza creare un modello di aree
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

La proprietà `grid-area` che hai appreso nell'ultima sfida può essere utilizzata in un altro modo. Se la griglia non ha un modello di aree a cui fare riferimento, è possibile creare un'area per posizionare un oggetto al volo in questo modo:

```css
item1 { grid-area: 1/1/2/4; }
```

Esso usa i numeri di riga che abbiamo visto in precedenza per definire dove sarà l'area di questo elemento. I numeri nell'esempio precedente rappresentano questi valori:

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

Quindi l'elemento nell'esempio occuperà le righe tra le linee 1 e 2 e le colonne tra le linee 1 e 4.

# --instructions--

Utilizzando la proprietà `grid-area`, posizionare l'elemento con la classe `item5` tra la terza e la quarta linea orizzontale e tra la prima e la quarta linea verticale.

# --hints--

La classe `item5` dovrebbe avere una proprietà `grid-area` che le faccia riempire l'intera area tra la terza e la quarta linea orizzontale, e tra la prima e la quarta linea verticale.

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
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
<style>.item5 {grid-area: 3/1/4/4;}</style>
```
