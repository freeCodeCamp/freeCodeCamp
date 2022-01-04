---
id: bad87fee1348bd9aec908852
title: Створення класу для використання із селекторами jQuery
challengeType: 0
forumTopicId: 16815
dashedName: create-a-class-to-target-with-jquery-selectors
---

# --description--

Не кожен клас повинен мати відповідний йому CSS. Іноді класи створюють лише з метою полегшення вибору цих елементів за допомогою jQuery.

Надайте кожному з елементів `button` клас `target`.

# --hints--

Необхідно застосувати клас `target` до кожного з елементів `button`.

```js
assert($('.target').length > 5);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```
