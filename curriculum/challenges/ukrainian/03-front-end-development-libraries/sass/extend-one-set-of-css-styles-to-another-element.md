---
id: 587d7fa5367417b2b2512bbd
title: Поширте набір стилів СSS з іншим елементом
challengeType: 0
forumTopicId: 301456
dashedName: extend-one-set-of-css-styles-to-another-element
---

# --description--

Sass має функцію під назвою `extend`, яка дозволяє позичити правила CSS з одного елемента та застосувати їх в іншому.

Наприклад, наведений нижче блок правил СSS стилізує клас `.panel`. Він має `background-color`, `height` та `border`.

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Тепер вам потрібно ще одне табло під назвою `.big-panel`. Воно має ті самі властивості, що й `.panel`, але також потребує `width` та `font-size`. Ви можете скопіювати та вставити початкові правила CSS з `.panel`, але код стане повторюваним, якщо ви додасте більше видів табло. Директива `extend` спрощує повторне використання правил, написаних для одного елемента, і додавання нових правил до іншого елемента:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

Табло `.big-panel` матиме ті ж самі властивості, що й `.panel`, а також декілька нових.

# --instructions--

Створіть клас `.info-important`, який поширює `.info` та має `background-color` зі значенням `magenta`.

# --hints--

Клас `info-important` повинен мати `background-color` зі значенням `magenta`.

```js
assert(
  code.match(
    /\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi
  )
);
```

Клас `info-important` має використати `@extend`, щоб успадкувати стилізацію від класу `info`.

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
