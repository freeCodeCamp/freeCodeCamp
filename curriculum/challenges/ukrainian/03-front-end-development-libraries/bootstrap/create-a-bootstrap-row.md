---
id: bad87fee1348bd9bec908846
title: Створіть ряд Bootstrap
challengeType: 0
forumTopicId: 16813
dashedName: create-a-bootstrap-row
---

# --description--

Тепер створимо ряд Bootstrap для вбудованих елементів.

Створіть елемент `div` з класом `row` під тегом `h3`.

# --hints--

Додайте елемент `div` під елементом `h3`.

```js
assert(
  $('div').length > 1 &&
    $('div.row h3.text-primary').length == 0 &&
    $('div.row + h3.text-primary').length == 0 &&
    $('h3.text-primary + div.row').length > 0
);
```

Елемент `div` повинен мати клас `row`

```js
assert($('div').hasClass('row'));
```

`row div` має бути вкладеним всередині `container-fluid div`

```js
assert($('div.container-fluid div.row').length > 0);
```

Елемент `div` повинен мати кінцевий тег.

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

</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row"></div>
</div>
```
