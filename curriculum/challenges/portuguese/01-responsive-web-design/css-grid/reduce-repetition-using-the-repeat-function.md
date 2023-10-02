---
id: 5a94fe3669fb03452672e45f
title: Reduzir repetição usando a função repeat
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

Ao usar `grid-template-columns` e `grid-template-rows` para definir a estrutura de um grid, você inseriu um valor para cada linha ou coluna criada.

Digamos que você queira um grid com 100 linhas da mesma altura. Não é muito prático inserir 100 valores manualmente. Felizmente, existe uma maneira melhor - usando a função `repeat` para especificar o número de vezes que você deseja que sua coluna ou linha seja repetida, seguida por uma vírgula e o valor que deseja repetir.

Um exemplo que criaria um grid de 100 linhas, cada linha com 50px de altura:

```css
grid-template-rows: repeat(100, 50px);
```

Você também pode repetir vários valores com a função repeat e inserir a função entre outros valores ao definir a estrutura de um grid. Exemplo:

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

Também pode ser lido assim:

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**Observação:** os valores `1fr 50px` são repetidos duas vezes seguido por 20px.

# --instructions--

Use a função `repeat` para remover a repetição de valores na propriedade `grid-template-columns`.

# --hints--

O elemento de classe `container` deve ter a propriedade `grid-template-columns` configurada para criar 3 colunas com a largura de `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
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

    grid-template-columns: 1fr 1fr 1fr;

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
<style>.container {grid-template-columns: repeat(3, 1fr);}</style>
```
