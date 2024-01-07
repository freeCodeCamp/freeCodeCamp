---
id: bad87fee1348bd9aec908847
title: Розділіть ряд Bootstrap
challengeType: 0
forumTopicId: 18306
dashedName: split-your-bootstrap-row
---

# --description--

Ми маємо ряд Bootstrap. Розділимо його на два стовпці, щоб розмістити елементи.

Створіть два елементи `div` в межах ряду, обидва з класами `col-xs-6`.

# --hints--

Два елементи `div class="col-xs-6"` мають бути вкладеними в межах елемента `div class="row"`.

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
