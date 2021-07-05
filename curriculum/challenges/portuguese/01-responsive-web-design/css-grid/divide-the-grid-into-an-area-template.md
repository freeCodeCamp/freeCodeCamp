---
id: 5a94fe0569fb03452672e45c
title: Dividir o grid em áreas
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cLLpGAy'
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

Você pode agrupar as células do grid em uma <dfn>área</dfn> e dar a esta um nome personalizado. Faça isso usando a propriedade `grid-template-areas` no grid container:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

O código acima mescla as três células superiores em uma área chamada `header`, as três células inferiores em uma área chamada `footer` e faz duas áreas na linha do meio, `advert` e `content`. **Observação:** cada palavra no código representa uma célula e cada par de aspas representa uma linha. Além de nomes personalizados, você pode usar um ponto (`.`) para criar uma célula vazia no grid.

# --instructions--

Crie um modelo de área de forma que a célula com o nome `advert` se torne uma célula vazia.

# --hints--

O elemento de classe `container` deve ter a propriedade `grid-template-areas` semelhante ao do exemplo, mas com um `.` (ponto final) em vez do nome `advert`.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
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
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "footer footer footer";
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

    grid-template-areas:
      "header header header"
      ". content content"
      "footer footer footer";
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
