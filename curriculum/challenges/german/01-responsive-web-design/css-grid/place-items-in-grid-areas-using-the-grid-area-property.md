---
id: 5a94fe1369fb03452672e45d
title: Platziere Elemente in Rasterbereichen mit der Eigenschaft grid-area
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

Nachdem du eine Bereichsvorlage für deinen Grid-Container erstellt hast, wie in der vorherigen Aufgabe gezeigt, kannst du ein Element in deinem benutzerdefinierten Bereich platzieren, indem du auf den Namen verweist, den du ihm gegeben hast. Dazu verwendest du die Eigenschaft `grid-area` für ein Element wie dieses:

```css
.item1 {
  grid-area: header;
}
```

Dadurch weiß das Raster, dass die Klasse `item1` in den Bereich `header` gehört. In diesem Fall wird das Element die gesamte obere Zeile verwenden, da die gesamte Zeile als `header`-Bereich benannt ist.

# --instructions--

Platziere ein Element mit der Klasse `item5` im `footer` mit der Eigenschaft `grid-area`.

# --hints--

Die Klasse `item5` sollte eine Eigenschaft `grid-area` besitzen, die den Wert `footer` hat.

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
