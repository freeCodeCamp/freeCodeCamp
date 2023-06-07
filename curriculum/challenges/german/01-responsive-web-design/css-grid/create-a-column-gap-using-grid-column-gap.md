---
id: 5a9036ee38fddaf9a66b5d35
title: Erstelle einen Spaltenabstand mit grid-column-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

In den Rastern, die du bisher erstellt hast, sind die Spalten alle eng aneinander gerückt. Manchmal möchtest du einen Abstand zwischen den Spalten haben. Um einen Abstand zwischen den Spalten einzufügen, verwende die Eigenschaft `grid-column-gap` wie folgt:

```css
grid-column-gap: 10px;
```

Dies schafft 10px Leerraum zwischen allen unseren Spalten.

# --instructions--

Gib den Spalten des Rasters einen Abstand von `20px`.

# --hints--

Die Klasse `container` sollte eine Eigenschaft `grid-column-gap` besitzen, die den Wert `20px` hat.

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
