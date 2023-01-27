---
id: bad87fee1348bd9aec908850
title: Wende den Standard Bootstrap Button Style an
challengeType: 0
forumTopicId: 16657
dashedName: apply-the-default-bootstrap-button-style
---

# --description--

Bootstrap hat eine weitere Button-Klasse namens `btn-default`.

Wende sowohl die Klasse `btn` als auch `btn-default` für jedes deiner `button` Elemente an.

# --hints--

Du sollst die `btn` Klasse auf jedes deiner `button` Elemente anwenden.

```js
assert($('.btn').length > 5);
```

Du sollst die `btn-default` Klasse auf jedes deiner `button` Elemente anwenden.

```js
assert($('.btn-default').length > 5);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```
