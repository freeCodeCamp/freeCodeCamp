---
id: bad87fee1348bd9aec908853
title: Addicone Atributos id aos Elementos Bootstrap
challengeType: 0
forumTopicId: 16639
dashedName: add-id-attributes-to-bootstrap-elements
---

# --description--

Lembre que, além dos atributos de classe, você pode dar a cada um de seus elementos um atributo `id`.

Cada id precisa ser único para um elemento específico e utilizado apenas uma vez por página.

Vamos dar um id único para cada um de nossos elementos `div` com classe `well`.

Lembre-se que você pode dar um id a um elemento dessa forma:

```html
<div class="well" id="center-well">
```

Dê ao well a esquerda o id `left-well`. Dê ao well a direita o id `right-well`.

# --hints--

Seu `well` da esquerda deve ter o id `left-well`.

```js
assert(
  $('.col-xs-6').children('#left-well') &&
    $('.col-xs-6').children('#left-well').length > 0
);
```

Seu `well` da direita deve ter o id `right-well`.

```js
assert(
  $('.col-xs-6').children('#right-well') &&
    $('.col-xs-6').children('#right-well').length > 0
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
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
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
