---
id: 5a90374338fddaf9a66b5d3a
title: Allineare un elemento orizzontalmente usando justify-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

Nella griglia CSS, il contenuto di ogni elemento si trova in un riquadro denominato <dfn>cella</dfn>. Puoi allineare orizzontalmente la posizione del contenuto all'interno della sua cella utilizzando la proprietà `justify-self` su un elemento della griglia. Per impostazione predefinita, questa proprietà ha un valore di `stretch`, che farà sì che il contenuto riempia l'intera larghezza della cella. Questa proprietà della griglia CSS accetta anche altri valori:

`start`: allinea il contenuto alla sinistra della cella,

`center`: allinea il contenuto al centro della cella,

`end`: allinea il contenuto alla destra della cella.

# --instructions--

Utilizza la proprietà `justify-self` per centrare l'elemento di classe `item2`.

# --hints--

La classe `item2` dovrebbe avere una proprietà `justify-self` con il valore `center`.

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
<style>.item2 {justify-self: center;}</style>
```
