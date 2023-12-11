---
id: bad87fee1348bd9aec908850
title: Застосуйте стиль кнопки Bootstrap за замовчуванням
challengeType: 0
forumTopicId: 16657
dashedName: apply-the-default-bootstrap-button-style
---

# --description--

Bootstrap має ще один клас кнопок під назвою `btn-default`.

Застосуйте класи `btn` та `btn-default` до кожного елемента `button`.

# --hints--

Застосуйте клас `btn` до кожного елемента `button`.

```js
assert($('.btn').length > 5);
```

Застосуйте клас `btn-default` до кожного елемента `button`.

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
