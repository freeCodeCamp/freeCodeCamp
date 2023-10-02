---
id: bad87fee1348bd9aec908848
title: Створіть стіни Bootstrap
challengeType: 0
forumTopicId: 16825
dashedName: create-bootstrap-wells
---

# --description--

Bootstrap має клас під назвою `well`, який може створювати візуальний ефект глибини для стовпців.

Вкладіть один елемент `div` з класом `well` в межах кожного елемента `div` `col-xs-6`.

# --hints--

Додайте елемент `div` з класом `well` всередині кожного елемента `div` з класом `col-xs-6`

```js
assert($('div.col-xs-6').not(':has(>div.well)').length < 1);
```

Обидва елементи `div` з класом `col-xs-6` мають бути вкладеними в елементі `div` з класом `row`.

```js
assert($('div.row > div.col-xs-6').length > 1);
```

Усі елементи `div` повинні мати кінцеві теги.

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
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

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
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```
