---
id: 5a9036d038fddaf9a66b5d32
title: Criar colunas com grid-template-columns
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

Só criar um elemento grid não faz muita coisa. Você também precisa definir a estrutura do grid. Para adicionar colunas ao grid, use a propriedade `grid-template-columns` em um grid container, como demonstrado abaixo:

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

Isso vai dar ao grid duas colunas, cada uma com 50px de largura. O número dos parâmetros dados à propriedade `grid-template-columns` indica o número de colunas no grid. O valor de cada parâmetro indica a largura de cada coluna.

# --instructions--

Dê ao grid container três colunas com `100px` de largura.

# --hints--

O elemento de classe `container` deve ter a propriedade `grid-template-columns` com três parâmetros de `100px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.container')?.gridTemplateColumns === '100px 100px 100px');
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
<style>.container {grid-template-columns: 100px 100px 100px;}</style>
```
