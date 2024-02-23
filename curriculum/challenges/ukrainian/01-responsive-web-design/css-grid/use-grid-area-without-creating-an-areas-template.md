---
id: 5a94fe2669fb03452672e45e
title: Використовуйте зону сітки без створення шаблону
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

Властивість `grid-area`, яку ви вивчили в попередньому завданні, може бути використана по-іншому. Якщо ваша сітка не має шаблону зон для посилань, ви можете створити зону в процесі роботи, щоб елемент був розміщений наступним чином:

```css
item1 { grid-area: 1/1/2/4; }
```

Тут використовуються номери рядків, про які ви дізналися раніше щоб визначити, де буде місце для цього елементу. Числа в прикладі, наведеному вище, описують ці значення:

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

Таким чином, елемент в прикладі буде використовувати рядки між 1 і 2, а стовпці між 1 і 4.

# --instructions--

Використовуючи властивість `grid-area`, помістіть елемент з класу `item5` між третьою та четвертою горизонтальними лініями та між першою і четвертою вертикальними лініями.

# --hints--

Клас `item5` повинен мати властивість `grid-area` для заповнення всієї зони між третьою і четвертою горизонтальними лініями та першою і четвертою вертикальними лініями.

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
<style>.item5 {grid-area: 3/1/4/4;}</style>
```
