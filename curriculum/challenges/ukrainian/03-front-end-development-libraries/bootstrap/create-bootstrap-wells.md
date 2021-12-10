---
id: bad87fee1348bd9aec908848
title: Створення Bootstrap Wells
challengeType: 0
forumTopicId: 16825
dashedName: create-bootstrap-wells
---

# --description--

Bootstrap має клас, що називається `well`, який може створювати візуальний ефект глибини для ваших стовпців.

Вкладіть один елемент `div` класу `well` у кожен із елементів `col-xs-6` `div`.

# --hints--

Необхідно додати елемент `div` класу `well` у середину кожного із елементів `div` класу `col-xs-6`

```js
assert($('div.col-xs-6').not(':has(>div.well)').length < 1);
```

Обидва елементи `div` класу `col-xs-6` повинні бути вкладені у елемент `div` із класом `row`.

```js
assert($('div.row > div.col-xs-6').length > 1);
```

Усі елементи `div` повинні містити кінцеві теґи.

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
