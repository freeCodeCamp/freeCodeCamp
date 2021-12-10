---
id: bad87fee1348bd9bec908846
title: Створення рядка Bootstrap
challengeType: 0
forumTopicId: 16813
dashedName: create-a-bootstrap-row
---

# --description--

Тепер створіть рядок Bootstrap для вбудованих елементів.

Створіть елемент `div` класу `row` під теґом `h3`.

# --hints--

Необхідно додати елемент `div` під елементом `h3`.

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

`row div` має бути вкладеним у середину `container-fluid div`

```js
assert($('div.container-fluid div.row').length > 0);
```

Елемент `div` повинен містити кінцевий теґ.

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
