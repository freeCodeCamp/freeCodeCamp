---
id: 5a9036e138fddaf9a66b5d33
title: Додавання рядків за допомогою властивості grid-template-rows
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
dashedName: add-rows-with-grid-template-rows
---

# --description--

Створена в останньому завданні таблиця автоматично встановить кількість рядків. Щоб налаштувати рядки вручну, використовуйте властивість `grid-template-rows` так само, як ви використовували `grid-template-columns` у попередньому завданні.

# --instructions--

Додайте два рядки з висотою `50px` кожен до таблиці.

# --hints--

Клас `container` повинен містити властивість `grid-template-rows` з двома одиницями зі значенням `50px`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 100px 100px 100px;
    /* Only change code below this line */


    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-rows: 50px 50px;}</style>
```
