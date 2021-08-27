---
id: 5a94fe6269fb03452672e462
title: Criar layouts flexíveis usando auto-fit
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
dashedName: create-flexible-layouts-using-auto-fit
---

# --description--

`auto-fit` funciona quase de forma idêntica ao `auto-fill`. A única diferença é que, quando o tamanho do grid container for maior que a soma da largura de todos os grid items, o `auto-fill` continua inserindo linhas ou colunas vazias e empurra os grid items para o lado, enquanto o `auto-fit` estica os grid items para caber no tamanho do grid container.

**Observação:** se não for possível ajustar todos os itens em uma linha, eles serão movidos para uma nova linha.

# --instructions--

No segundo grid, use `auto-fit` com `repeat` para preencher o grid com colunas que tenham uma largura mínima de `60px` e máxima de `1fr`. Em seguida, redimensione a janela do navegador para ver o auto-fit em ação.

# --hints--

A classe `container2` deve ter a propriedade `grid-template-columns` com os valores `repeat` e `auto-fit` que devem preencher o grid com colunas de largura mínima de `60px` e máxima de `1fr`.

```js
assert(
  code.match(
    /.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}</style>
```
