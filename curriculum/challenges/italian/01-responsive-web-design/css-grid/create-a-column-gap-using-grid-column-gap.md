---
id: 5a9036ee38fddaf9a66b5d35
title: Creare uno spazio tra le colonne usando grid-column-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

Finora, nelle griglie che hai creato le colonne erano attaccate l'una contro l'altra. A volte potresti volere uno spazio tra le colonne. Per aggiungere uno spazio tra le colonne, utilizza la proprietà `grid-column-gap` in questo modo:

```css
grid-column-gap: 10px;
```

Questo crea 10px di spazio vuoto tra tutte le nostre colonne.

# --instructions--

Assegna alle colonne nella griglia una spaziatura di `20px`.

# --hints--

La classe `container` dovrebbe avere una proprietà `grid-column-gap` con il valore di `20px`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi
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
<style>.container {grid-column-gap: 20px;}</style>
```
