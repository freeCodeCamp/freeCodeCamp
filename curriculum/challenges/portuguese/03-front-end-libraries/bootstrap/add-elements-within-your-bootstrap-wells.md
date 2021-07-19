---
id: bad87fee1348bd9aec908849
title: Adicione elementos em seus Bootstrap Wells
challengeType: 0
forumTopicId: 16636
dashedName: add-elements-within-your-bootstrap-wells
---

# --description--

Agora estamos na profundidade de diversos elementos `div` em cada coluna da nossa linha. Isso é tão profundo quanto precisamos ir. Agora podemos adicionar nossos elementos `button`.

Aninhe três elementos `button` dentro de cada um de seus elementos `div` contendo o nome de classe `well`.

# --hints--

Três elementos `button` devem ser aninhados dentro de cada um de seus elementos `div` com a classe `well`.

```js
assert(
  $('div.well:eq(0)').children('button').length === 3 &&
    $('div.well:eq(1)').children('button').length === 3
);
```

Você deve ter o total de 6 elementos `button`.

```js
assert($('button') && $('button').length > 5);
```

Todos os seus elementos `button` deve conter tag de fechamento.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



      </div>
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
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</div>
```
