---
id: 5a90376038fddaf9a66b5d3c
title: Alle Elemente horizontal ausrichten mit justify-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

Manchmal möchtest du, dass alle Elemente in deinem CSS-Raster die gleiche Ausrichtung besitzen. Du kannst die zuvor gelernten Eigenschaften verwenden und sie einzeln ausrichten oder du kannst sie alle auf einmal horizontal ausrichten, indem du `justify-items` auf deinem Gittercontainer verwendest. Diese Eigenschaft kann die gleichen Werte annehmen, die du in den beiden vorherigen Aufgaben kennengelernt hast. Der Unterschied ist, dass sie **alle** Elemente in unserem Raster in die gewünschte Ausrichtung verschiebt.

# --instructions--

Verwende diese Eigenschaft, um alle unsere Elemente horizontal zu zentrieren.

# --hints--

Die Klasse `container` sollte eine Eigenschaft `justify-items` besitzen, die den Wert `center` hat.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */


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
<style>.container {justify-items: center;}</style>
```
