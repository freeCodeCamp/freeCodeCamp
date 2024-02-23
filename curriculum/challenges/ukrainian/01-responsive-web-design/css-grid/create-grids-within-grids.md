---
id: 5a94fe8569fb03452672e464
title: Створюйте таблиці в таблицях
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

Перетворення елемента в сітку впливає лише на поводження прямих дочірніх об'єктів. Отже, перетворюючи прямий дочірній елемент в сітку, ви отримуєте таблицю в таблиці.

Наприклад, якщо задати властивості елемента `display` і `grid-template-columns` з класом `item3`, то всередині вашої таблиці буде ще одна.

# --instructions--

Перетворіть елемент з класом `item3` на таблицю з двома колонками шириною `auto` та `1fr`, використовуючи `display` та `grid-template-columns`.

# --hints--

Клас `item3` має містити властивість `grid-template-columns` зі значеннями `auto` та `1fr`.

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

Клас `item3` повинен містити властивість `display` зі значенням `grid`.

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>
```
