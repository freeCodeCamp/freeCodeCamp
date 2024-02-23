---
id: 5a9036ee38fddaf9a66b5d34
title: Використовуйте CSS Grid для зміни розміру стовпців і рядків
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

В CSS Grid можна використовувати абсолютні і відносні одиниці, такі як `px` і `em`, щоб задати розмір рядків і стовпців. Також можна використати ці:

`fr` - встановлює стовпець або рядок на частину доступного простору,

`auto` - встановлює стовпець або рядок автоматично на ширину чи висоту його вмісту,

`%`- коригує колонку чи рядок на певний відсоток ширини контейнера.

Ось код, що генерує результат у попередньому перегляді:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

Цей фрагмент коду створює п'ять колонок. Перша колонка розтягується на величину свого вмісту, друга колонка - на 50 пікселів, третя колонка - на 10% від контейнера і ще дві колонки; місце, що залишилось, розділене на три частини, дві з яких виділені для четвертої колонки і одна для п'ятої.

# --instructions--

Створіть сітку з трьома колонками шириною 1fr, 100px і 2fr відповідно.

# --hints--

Ваш клас `container` повинен мати властивість `grid-template-columns`, яка має три стовпці шириною `1fr`, `100px` та `2fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
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
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
