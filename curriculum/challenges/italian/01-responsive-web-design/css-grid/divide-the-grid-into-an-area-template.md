---
id: 5a94fe0569fb03452672e45c
title: Dividere la griglia in un template area
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cLLpGAy'
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

Puoi raggruppare le celle della griglia in un'<dfn>area</dfn> e dare un nome personalizzato all'area. Puoi farlo usando `grid-template-areas` sul contenitore in questo modo:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

Il codice qui sopra riunisce le tre celle superiori in un'area denominata `header`, le tre celle inferiori in un'area `footer`, e crea due aree nella riga intermedia; `advert` e `content`. **Nota:** Ogni parola nel codice rappresenta una cella e ogni coppia di virgolette rappresenta una riga. In aggiunta alle etichette personalizzate, puoi usare un punto (`.`) per designare una cella vuota nella griglia.

# --instructions--

Posiziona il template dell'area in modo che la cella etichettata `advert` diventi una cella vuota.

# --hints--

La classe `container` dovrebbe avere una proprietà `grid-template-areas` simile all'anteprima ma con `.` al posto dell'area `advert`.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
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
      "footer footer footer";
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
      ". content content"
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
