---
id: bad87fee1348bd9aec908853
title: Füge Id-Attribute zu Bootstrap Elementen hinzu
challengeType: 0
forumTopicId: 16639
dashedName: add-id-attributes-to-bootstrap-elements
---

# --description--

Erinnere dich daran, dass du zusätzlich zu den Klassenattributen jedem deiner Elemente ein `id`-Attribut geben kannst.

Jede Id muss einzigartig für ein bestimmtes Element sein und kann nur einmal pro Seite verwendet werden.

Wir werden jedem unserer `div` Elemente der Klasse `well` eine eindeutige Id geben.

Denke daran, dass du einem Element eine Id wie folgt geben kannst:

```html
<div class="well" id="center-well">
```

Gib dem Well auf der linken Seite die Id `left-well`. Gib dem Well auf der rechten Seite die Id `right-well`.

# --hints--

Dein linker `well` sollte die Id `left-well` haben.

```js
assert(
  $('.col-xs-6').children('#left-well') &&
    $('.col-xs-6').children('#left-well').length > 0
);
```

Dein rechter `well` sollte die Id `right-well` haben.

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
