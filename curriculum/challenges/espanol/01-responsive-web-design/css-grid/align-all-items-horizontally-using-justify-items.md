---
id: 5a90376038fddaf9a66b5d3c
title: Alinea todos los elementos horizontalmente usando justify-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

Algunas veces querrás que todos los elementos en tu CSS Grid compartan el mismo alineamiento. Puedes usar las propiedades aprendidas anteriormente y alinearlos individualmente, o puedes alinear todos a la vez horizontalmente usando `justify-items` en el contenedor de tu grid. Esta propiedad acepta los mismos valores aprendidos en los dos desafíos previos, siendo la única diferencia que moverá **all** los elementos de la grid hacia el alineamiento deseado.

# --instructions--

Usa esta propiedad para centrar todos los elementos horizontalmente.

# --hints--

La clase `container` debe tener una propiedad `justify-items` que tenga como valor `center`.

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
