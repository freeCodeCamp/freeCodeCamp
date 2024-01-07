---
id: 5a94fe3669fb03452672e45f
title: Щоб не виконувати одну операцію кілька разів, використайте функцію повтору
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

Якщо ви використали `grid-template-columns` і `grid-template-rows`, щоб задати структуру таблиці, ви ввели значення для кожного створеного рядка або стовпця.

Скажімо, вам потрібна сітка зі 100 рядків однакової висоти. Вводити 100 окремих значень – не дуже зручно. На щастя, є кращий спосіб - використати `repeat`, щоб конкретизувати кількість потрібних стовпців або рядків, а потім додати кому і значення, яке ви хочете повторити.

Ось приклад створення 100 рядків сітки, кожен 50 пікселів заввишки.

```css
grid-template-rows: repeat(100, 50px);
```

Ви також можете повторювати декілька значень за допомогою цієї функції та вставляти функцію серед інших значень, коли задаєте структуру сітки. Ось як це виглядає:

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

Це перетворюється на:

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**Note:** двічі повторюється `1fr 50px`, а тоді додається 20px.

# --instructions--

Використовуйте `repeat`, щоб видалити повторення із властивості `grid-template-columns`.

# --hints--

Клас `container` повинен містити властивість `grid-template-columns`, яка має повторювати 3 колонки шириною `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */

    grid-template-columns: 1fr 1fr 1fr;

    /* Only change code above this line */
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
<style>.container {grid-template-columns: repeat(3, 1fr);}</style>
```
