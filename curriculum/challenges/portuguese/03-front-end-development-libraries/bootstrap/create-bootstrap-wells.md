---
id: bad87fee1348bd9aec908848
title: Criar poços do Bootstrap
challengeType: 0
forumTopicId: 16825
dashedName: create-bootstrap-wells
---

# --description--

O Bootstrap tem uma classe chamada `well` que pode criar uma sensação visual de profundidade para suas colunas.

Aninhe um elemento `div` com a classe `well` dentro de cada um de seus elementos `col-xs-6` `div`.

# --hints--

Você deve adicionar um elemento `div` com a classe `well` dentro de cada um dos elementos `div` com a classe `col-xs-6`

```js
assert($('div.col-xs-6').not(':has(>div.well)').length < 1);
```

Ambos os elementos `div` com a classe `col-xs-6` devem estar aninhados dentro do elemento `div` com a classe `row`.

```js
assert($('div.row > div.col-xs-6').length > 1);
```

Todos os elementos `div` devem ter tags de fechamento.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```
