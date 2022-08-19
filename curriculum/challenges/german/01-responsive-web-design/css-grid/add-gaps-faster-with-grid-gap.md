---
id: 5a9036ee38fddaf9a66b5d37
title: Füge Abstände mit grid-gap schneller hinzu
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` ist eine Kurzform für `grid-row-gap` und `grid-column-gap` aus den beiden vorherigen Aufgaben, die einfacher zu verwenden ist. Wenn `grid-gap` einen Wert hat, wird ein Abstand zwischen allen Zeilen und Spalten erzeugt. Wenn es jedoch zwei Werte gibt, wird der erste Wert verwendet, um den Abstand zwischen den Zeilen festzulegen, und der zweite Wert für die Spalten.

# --instructions--

Verwende `grid-gap`, um einen `10px` Abstand zwischen den Zeilen und einen `20px` Abstand zwischen den Spalten einzufügen.

# --hints--

Die Klasse `container` sollte eine Eigenschaft `grid-gap` besitzen, die einen `10px` Abstand zwischen den Zeilen und einen `20px` Abstand zwischen den Spalten einfügt.

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
