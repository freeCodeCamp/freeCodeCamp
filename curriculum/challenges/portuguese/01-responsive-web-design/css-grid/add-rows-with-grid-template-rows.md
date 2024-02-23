---
id: 5a9036e138fddaf9a66b5d33
title: Criar linhas com grid-template-rows
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
dashedName: add-rows-with-grid-template-rows
---

# --description--

O grid que você criou no último desafio definirá o número de linhas automaticamente. Para ajustar as linhas manualmente, use a propriedade `grid-template-rows` da mesma maneira que você usou `grid-template-columns` no desafio anterior.

# --instructions--

Adicione duas linhas ao grid com `50px` de altura cada.

# --hints--

O elemento de classe `container` deve ter a propriedade `grid-template-rows` com dois valores de `50px`. Cada valor deve estar separado por um espaço.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi
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
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 100px 100px 100px;
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
<style>.container {grid-template-rows: 50px 50px;}</style>
```
