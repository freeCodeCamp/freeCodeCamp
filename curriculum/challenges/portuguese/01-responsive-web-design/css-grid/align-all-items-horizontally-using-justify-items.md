---
id: 5a90376038fddaf9a66b5d3c
title: Alinhar todos os itens horizontalmente usando justify-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

Às vezes, você quer que todos os itens no seu grid possuam o mesmo alinhamento. Você pode usar as propriedades aprendidas anteriormente e alinhá-los individualmente ou pode alinhá-los todos de uma vez horizontalmente usando a propriedade `justify-items` em seu grid container. Essa propriedade aceita todos os mesmos valores que você aprendeu nos dois desafios anteriores. A diferença é que ela moverá **todos** os itens do grid para o alinhamento especificado.

# --instructions--

Use esta propriedade para centralizar horizontalmente todos itens.

# --hints--

O elemento de classe `container` deve ter a propriedade `justify-items` com o valor de `center`.

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
