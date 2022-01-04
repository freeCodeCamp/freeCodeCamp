---
id: 5a90374338fddaf9a66b5d3a
title: Вирівняти елемент горизонтально за допомогою властивості justify-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

У CSS Grid вміст кожного елементу розміщений у рамці, яка називається <dfn>cell</dfn>. Ви можете вирівняти розміщення у межах клітини горизонтально, використовуючи властивість `justify-self` для елемента таблиці. За замовчуванням, цей параметр має значення `stretch`, і таким чином вміст заповнює всю ширину клітини. Ця властивість CSS Grid також приймає інші значення:

`start`: вирівнює вміст по лівому краю клітини,

`center`: вирівнює вміст по центру клітини,

`end`: вирівнює вміст по правому краю клітини.

# --instructions--

Використайте властивість `justify-self` щоб розмістити елемент по центру з класом `item2`.

# --hints--

Клас `item2` повинен містити властивість `justify-self` зі значенням `center`.

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.item2 {justify-self: center;}</style>
```
