---
id: 587d7fa5367417b2b2512bbd
title: Розширюйте набір СSS стилів в інший елемент
challengeType: 0
forumTopicId: 301456
dashedName: extend-one-set-of-css-styles-to-another-element
---

# --description--

Sass має елемент з назвою `extend` (розширити), який дозволяє запозичити СSS правила у одного елемента та опиратися на них в іншому.

Наприклад, наведений нижче блок СSS правил стилізує клас `.panel`. Він включає `background-color` (колір фону),`height` (висота) та `border` (рамки).

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Тепер вам потрібна ще інша панель з назвою`.big-panel`. Вона має ті ж основні властивості, що і `.panel`, але також потребує `width` (ширина) і `font-size` (розмір шрифту). Можливо скопіювати та вставити початкові правила CSS з `.panel`, але код повторюється, якщо додаєте більше видів панелей. Директива `extend` спрощує повторне використання правил, написаних для одного елемента, і додавання нових для іншого:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

Поруч з новими стилями, клас `.big-panel` матиме ті ж властивості, що й клас `.panel`.

# --instructions--

Створіть клас `.info-important`, що розширює `.info`, і оберіть колір фуксії (маджента) для фону `background-color`.

# --hints--

Оберіть `magenta` як колір фону `background-color` для вашого класу `info-important`.

```js
assert(
  code.match(
    /\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi
  )
);
```

Ваш клас `info-important` повинен мати директиву `@extend`, щоб перейняти дизайн класу `info`.

```js
assert(
  code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi)
);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```
