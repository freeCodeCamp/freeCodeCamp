---
id: 5a9036ee38fddaf9a66b5d37
title: Criar espaçamentos com grid-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` é uma propriedade abreviada para `grid-row-gap` e `grid-column-gap` dos dois últimos desafios, que é mais conveniente usar. Se `grid-gap` possui apenas um valor, ele vai criar um espaçamento entre todas as linhas e colunas. No entanto, se houver dois valores, o primeiro valor será usado para definir o espaçamento entre as linhas e o segundo para definir o espaçamento entre as colunas.

# --instructions--

Use a propriedade `grid-gap` para criar um espaçamento de `10px` entre as linhas e um espaçamento de `20px` entre as colunas.

# --hints--

O elemento de classe `container` deve ter a propriedade `grid-gap` que cria um espaçamento de `10px` entre as linhas e um espaçamento de `20px` entre as colunas.

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
