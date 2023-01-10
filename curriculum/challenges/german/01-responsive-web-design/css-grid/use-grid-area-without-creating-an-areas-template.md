---
id: 5a94fe2669fb03452672e45e
title: Verwende grid-area ohne eine Bereichsvorlage zu erstellen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

Die Eigenschaft `grid-area`, die du in der letzten Aufgabe kennengelernt hast, kann auf eine andere Weise verwendet werden. Wenn dein Raster keine Bereichsvorlage hat, kannst du einen Bereich für ein Element erstellen, das wie folgt platziert werden soll:

```css
item1 { grid-area: 1/1/2/4; }
```

Hier werden die Zeilennummern verwendet, die du bereits kennengelernt hast, um zu bestimmen, wo der Bereich für dieses Element liegen soll. Die Zahlen im obigen Beispiel stellen diese Werte dar:

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

Das Element im Beispiel wird also die Zeilen zwischen den Zeilen 1 und 2 und die Spalten zwischen den Zeilen 1 und 4 verbrauchen.

# --instructions--

Platziere das Element mit der Klasse `item5` mithilfe der Eigenschaft `grid-area` zwischen der dritten und vierten horizontalen Linie und zwischen der ersten und vierten vertikalen Linie.

# --hints--

Die Klasse `item5` sollte eine Eigenschaft von `grid-area` haben, um die gesamte Fläche zwischen der dritten und vierten horizontalen Linie zu füllen und erste und vierte vertikale Linien.

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
