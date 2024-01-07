---
id: 5a94fe1369fb03452672e45d
title: Розмістіть елементи в області сітки, використовуючи властивості області сітки
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

Після створення шаблону області для контейнера сітки, як показано в попередньому завданні, ви можете розмістити предмет у власній області, посилаючись на надане вами ім'я. Щоб зробити це, використовуйте властивість `grid-area` на елементі, як цей:

```css
.item1 {
  grid-area: header;
}
```

Дана сітка повідомляє, що вам потрібен клас `1` для переходу в області з назвою `header`. В цьому випадку, елемент буде використовувати весь верхній рядок, тому що весь цей рядок називається областю `header`.

# --instructions--

Помістіть елемент з класу `item5` у область `footer` за допомогою значення `grid-area`.

# --hints--

Клас `item5` повинен мати властивості `grid-area`Ю що має значення `footer`.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi)
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
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
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
<style>.item5 {grid-area: footer;}</style>
```
