---
id: 5a9036d038fddaf9a66b5d32
title: Додавання стовпців за допомогою шаблонів сітки
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

Просто створивши таблицю ви не отримаєте значних результатів в роботі. Вам також потрібно визначити структуру таблиці. Для того, щоб додати кілька стовпців у таблицю, скористайтесь властивістю `grid-template-columns` на контейнер сітки так, як показано нижче:

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

Так ви додасте до своєї таблиці два стовпці, які будуть шириною у 50 пікселів. Кількість параметрів, заданих у властивості `grid-template-columns`, вказує на кількість стовпців у таблиці, і значення кожного параметра позначає ширину кожного стовпця.

# --instructions--

Надайте grid-контейнеру три стовпці, які матимуть в ширину по `100px`.

# --hints--

Клас `container` повинен містити властивість `grid-template-columns` з трьома одиницями зі значенням `100px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.container')?.gridTemplateColumns === '100px 100px 100px');
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
<style>.container {grid-template-columns: 100px 100px 100px;}</style>
```
