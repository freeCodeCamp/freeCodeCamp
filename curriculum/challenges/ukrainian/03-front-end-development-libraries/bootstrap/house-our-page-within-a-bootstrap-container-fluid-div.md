---
id: bad87fee1348bd9aec908746
title: Розміщення сторінки всередині елементу Bootstrap container-fluid div
challengeType: 0
forumTopicId: 18198
dashedName: house-our-page-within-a-bootstrap-container-fluid-div
---

# --description--

Тепер переконайтеся, що весь вміст сторінки адаптований до мобільних пристроїв.

Вкладіть елемент `h3` у елемент `div` із класом `container-fluid`.

# --hints--

Елемент `div` повинен мати клас `container-fluid`.

```js
assert($('div').hasClass('container-fluid'));
```

Кожен із елементів `div` повинен містити кінцевий теґ.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

Елемент `h3` повинен бути вкладений у елемент `div`.

```js
assert($('div').children('h3').length > 0);
```

# --seed--

## --seed-contents--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

# --solutions--

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
</div>
```
