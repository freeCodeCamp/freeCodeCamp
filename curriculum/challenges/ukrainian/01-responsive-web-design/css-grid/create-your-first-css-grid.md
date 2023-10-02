---
id: 5a858944d96184f06fd60d61
title: Створіть свою першу CSS-сітку
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

Перетворіть будь-який елемент HTML у grid-контейнер, задавши властивість `display` для `grid`. Це дозволить вам використати усі властивості, що пов'язані з CSS Grid.

**Примітка:** у CSS Grid, батьківський елемент називається <dfn>container</dfn> а його дочірні елементи — <dfn>items</dfn>.

# --instructions--

Змініть відображення div за допомогою класу `container` на `grid`.

# --hints--

Клас `container` повинен містити властивість `display` зі значенням `grid`.

```js
assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
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
<style>.container {display: grid;}</style>
```
