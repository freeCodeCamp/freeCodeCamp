---
id: 5a90374338fddaf9a66b5d3a
title: Alinhar um item horizontalmente usando justify-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

No CSS Grid, o conteúdo de cada item está localizado em uma caixa que chamamos de <dfn>célula</dfn>. Você pode alinhar a posição do conteúdo dentro da célula horizontalmente usando a propriedade `justify-self` em um grid item. Por padrão, esta propriedade possui um valor de `stretch`, que fará com que o conteúdo preencha toda a largura da célula. Esta propriedade do CSS Grid também aceita outros valores:

`start`: alinha o conteúdo à esquerda da célula,

`center`: alinha o conteúdo no centro da célula,

`end`: alinha o conteúdo à direita da célula.

# --instructions--

Use a propriedade `justify-self` para centralizar o item que possui a classe `item2`.

# --hints--

O elemento de classe `item2` deve ter a propriedade `justify-self` com o valor de `center`.

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
