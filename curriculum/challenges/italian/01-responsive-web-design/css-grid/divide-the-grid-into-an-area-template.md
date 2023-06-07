---
id: 5a94fe0569fb03452672e45c
title: Dividere la griglia in un template area
challengeType: 0
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

Puoi raggruppare le celle della griglia in un'<dfn>area</dfn> e dare un nome personalizzato all'area. Puoi farlo usando `grid-template-areas` sul contenitore in questo modo:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "advert footer footer";
```

Il codice qui sopra raggruppa le celle della griglia in quattro aree: `header`, `advert`, `content` e `footer`. Ogni parola rappresenta una cella e ogni coppia di virgolette rappresenta una riga.

# --instructions--

Cambia il template in modo che l'area `footer` copra l'intera riga inferiore. La definizione delle aree non avrà alcun effetto visivo in questo momento. Più tardi, farai usare un'area ad un oggetto per vedere come funziona.

# --hints--

La classe `container` dovrebbe avere una proprietà `grid-template-areas` simile all'esempio ma con con l'area `footer` che si espande attraverso tutta la riga più in basso.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "advert footer footer";
    /* Only change code above this line */
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
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

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
