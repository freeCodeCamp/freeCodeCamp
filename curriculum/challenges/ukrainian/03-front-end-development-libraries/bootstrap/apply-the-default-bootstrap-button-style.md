---
id: bad87fee1348bd9aec908850
title: Застосування стилю за замовчуванням кнопки Bootstrap
challengeType: 0
forumTopicId: 16657
dashedName: apply-the-default-bootstrap-button-style
---

# --description--

Bootstrap має ще один клас кнопок, що називається `btn-default`.

Застосуйте обидва класи `btn` та `btn-default` до кожного з елементів `button`.

# --hints--

Необхідно застосувати клас `btn` до кожного з елементів `button`.

```js
assert($('.btn').length > 5);
```

Необхідно застосувати клас `btn-default` до кожного з елементів `button`.

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
