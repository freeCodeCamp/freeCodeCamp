---
id: bad87fee1348bd9aec908847
title: Розділіть рядки у Bootstrap
challengeType: 0
forumTopicId: 18306
dashedName: split-your-bootstrap-row
---

# --description--

Тепер, коли ми маємо рядок Bootstrap, давайте розділимо його на дві колонки для того, шоб розмістити елементи.

Створіть два елементи у рядку `div`, обидва з класом `col-xs-6`.

# --hints--

Два елементи `div class="col-xs-6"` мають бути встановлені всередині вашого елементу `div class="row"`.

```js
assert($('div.row > div.col-xs-6').length > 1);
```

Всі елементи `div` повинні містити кінцеві теґи.

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


  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```
