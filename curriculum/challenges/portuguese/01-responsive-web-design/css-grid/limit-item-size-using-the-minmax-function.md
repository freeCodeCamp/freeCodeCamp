---
id: 5a94fe4469fb03452672e460
title: Limitar o tamanho do item usando a função minmax
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

Existe uma outra função que pode ser usada com as propriedades `grid-template-columns` e `grid-template-rows` chamada `minmax`. Ela é usada para limitar o tamanho dos grid items quando o grid container muda de tamanho. Para fazer isso, você precisa especificar um limite de tamanho aceitável para o seu grid item. Exemplo:

```css
grid-template-columns: 100px minmax(50px, 200px);
```

No código acima, `grid-template-columns` é definido para criar duas colunas; a primeira tem 100px de largura e a segunda tem a largura mínima de 50px e a largura máxima de 200px.

# --instructions--

Usando a função `minmax`, substitua `1fr` na função `repeat` por um tamanho de coluna que tenha a largura mínima de `90px` e a largura máxima de `1fr`, e redimensione a janela do navegador para ver o efeito.

# --hints--

O elemento de classe `container` deve ter a propriedade `grid-template-columns` configurada para repetir 3 colunas com largura mínima de `90px` e largura máxima de `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

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
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>
```
