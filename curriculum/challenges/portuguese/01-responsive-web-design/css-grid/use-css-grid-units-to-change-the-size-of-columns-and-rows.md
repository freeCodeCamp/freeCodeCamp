---
id: 5a9036ee38fddaf9a66b5d34
title: Usar unidades específicas de grid para alterar o tamanho de colunas e linhas
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

Você pode usar unidades absolutas e relativas como `px` e `em` no CSS Grid para definir o tamanho das linhas e colunas. Você também pode usar estas:

`fr`: define a coluna ou linha para uma fração do espaço disponível,

`auto`: define a coluna ou linha para a largura ou altura de seu conteúdo automaticamente,

`%`: ajusta a coluna ou linha para a largura percentual de seu contêiner.

Este é o código que gera o resultado na visualização a seguir:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

Este código cria cinco colunas. A primeira coluna tem a largura de seu conteúdo, a segunda coluna tem 50px, a terceira coluna tem 10% de seu contêiner e nas duas últimas colunas o espaço restante é dividido em três seções, duas são alocadas para a quarta coluna e uma para a quinta.

# --instructions--

Faça um grid com três colunas cujas larguras possuam as seguintes medidas, respectivamente: 1fr, 100px e 2fr.

# --hints--

A classe `container` deve ter a propriedade `grid-template-columns` de modo a criar 3 colunas com as seguintes larguras: `1fr`, `100px` e `2fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
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
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
