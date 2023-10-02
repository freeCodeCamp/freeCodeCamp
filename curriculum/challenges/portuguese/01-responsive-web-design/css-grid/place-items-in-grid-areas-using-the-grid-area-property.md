---
id: 5a94fe1369fb03452672e45d
title: Definir a posição dos itens usando a propriedade grid-area
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

Depois de criar um modelo de área para o seu grid container, como mostrado no desafio anterior, você pode definir a posição de um item em uma área referenciando o nome que você deu a ele. Para fazer isso, você deve usar a propriedade `grid-area` em um item:

```css
.item1 {
  grid-area: header;
}
```

Isso informa ao grid que você deseja que a classe `item1` vá para a área chamada `header`. Nesse caso, o item usará toda a linha superior porque essa linha inteira foi nomeada como a área de `header` (cabeçalho).

# --instructions--

Coloque o elemento com a classe `item5` na área `footer` usando a propriedade `grid-area`.

# --hints--

O elemento de classe `item5` deve ter a propriedade `grid-area` com o valor de `footer`.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi)
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

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
      "advert content content"
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

# --solutions--

```html
<style>.item5 {grid-area: footer;}</style>
```
