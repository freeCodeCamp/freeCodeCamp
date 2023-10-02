---
id: bad87fee1348bd9aec908853
title: Додайте атрибути id до елементів Bootstrap
challengeType: 0
forumTopicId: 16639
dashedName: add-id-attributes-to-bootstrap-elements
---

# --description--

Пригадайте, що окрім атрибутів класу, кожному елементу можна надати атрибут `id`.

Кожен id має бути унікальним для певного елементу і використовуватись лише один раз на сторінці.

Надамо унікальний id кожному елементу `div` класу `well`.

Пам’ятайте, що id можна надати ось так:

```html
<div class="well" id="center-well">
```

Надайте `well` ліворуч id зі значенням `left-well`. Надайте `well` праворуч id зі значенням `right-well`.

# --hints--

`well` ліворуч повинен мати id зі значенням `left-well`.

```js
assert(
  $('.col-xs-6').children('#left-well') &&
    $('.col-xs-6').children('#left-well').length > 0
);
```

`well` праворуч повинен мати id зі значенням `right-well`.

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
