---
id: 5a90376038fddaf9a66b5d3c
title: Вирівняти всі елементи горизонтально за допомогою властивості justify-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

Іноді ви хочете, щоб всі елементи у вашій таблиці CSS були одинаково вирівняні. Ви можете використати раніше вивчені властивості та вирівняти їх окремо, або ви можете вирівняти горизонтально всіх їх одночасно, використовуючи `justify-items` у вашому grid-контейнері. Ця властивість може прийняти всі ті ж значення, про які ви дізналися у попередніх двох завданнях, різниця в тому, що вона буде переміщати **всі** елементи в нашій таблиці до потрібного вирівнювання.

# --instructions--

Використовуйте цю властивість, щоб розмістити по центру всі наші елементи горизонтально.

# --hints--

Клас `container` повинен містити властивість `justify-items` зі значенням `center`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */


    /* Only change code above this line */
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
<style>.container {justify-items: center;}</style>
```
