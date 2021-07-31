---
id: bad87fee1348bd9aec908854
title: Dar um label aos poços do Bootstrap
challengeType: 0
forumTopicId: 18223
dashedName: label-bootstrap-wells
---

# --description--

Para deixar claro, vamos rotular nossos dois poços com seus ids.

Acima do poço da esquerda, dentro do elemento `col-xs-6` `div`, adicione um elemento `h4` com o texto `#left-well`.

Acima do poço da direita, dentro do elemento `col-xs-6` `div`, adicione um elemento `h4` com o texto `#right-well`.

# --hints--

Você deve adicionar um elemento `h4` para cada um dos elementos `<div class="col-xs-6">`.

```js
assert(
  $('.col-xs-6').children('h4') && $('.col-xs-6').children('h4').length > 1
);
```

Um elemento `h4` deve ter o texto `#left-well`.

```js
assert(new RegExp('#left-well', 'gi').test($('h4').text()));
```

Um elemento `h4` deve ter o texto `#right-well`.

```js
assert(new RegExp('#right-well', 'gi').test($('h4').text()));
```

Todos os elementos `h4` devem ter tags de fechamento.

```js
assert(
  code.match(/<\/h4>/g) &&
    code.match(/<h4/g) &&
    code.match(/<\/h4>/g).length === code.match(/<h4/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
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
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```
