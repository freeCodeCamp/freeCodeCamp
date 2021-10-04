---
id: bad87fee1348bd9aec908847
title: Dividir sua linha do Bootstrap
challengeType: 0
forumTopicId: 18306
dashedName: split-your-bootstrap-row
---

# --description--

Agora que nós temos uma linha do Bootstrap, vamos dividi-la em duas colunas para hospedar nossos elementos.

Crie dois elementos `div` dentro da linha (row), ambos com a classe `col-xs-6`.

# --hints--

Dois elementos `div class="col-xs-6"` devem estar aninhados dentro do elemento `div class="row"`.

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


  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```
