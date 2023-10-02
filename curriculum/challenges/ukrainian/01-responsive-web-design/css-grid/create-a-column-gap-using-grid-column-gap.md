---
id: 5a9036ee38fddaf9a66b5d35
title: Створення розриву між стовпцями, використовуючи властивість grid-column-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

У таблицях, що ви уже створили, усі колонки були приєднані одна до одної. Але іноді вам потрібен проміжок між колонками. Щоб додати проміжок між колонками, використовуйте властивість `grid-column-gap` як показано тут:

```css
grid-column-gap: 10px;
```

Таким чином, це створює 10 пікселів пустого простору між усіма нашими колонками.

# --instructions--

Надайте колонкам у таблиці проміжок шириною `20px`.

# --hints--

Клас `container` повинен містити властивість `grid-column-gap` зі значенням `20px`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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
<style>.container {grid-column-gap: 20px;}</style>
```
