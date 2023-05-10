---
id: 63ee3fe4381756f9716727f0
title: Основи CSS. Вправа B
challengeType: 14
dashedName: css-foundations-exercise-b
---

# --description--

**Мета:** у файлі HTML надано декілька елементів, до яких потрібно додати атрибути класу чи ID. Потім вам потрібно додати правила до наданого файлу CSS, використовуючи правильний синтаксис селектора.

## Історія користувача

1. Ви повинні бачити фон `yellow` для всіх непарних елементів у списку.

1. Ви повинні мати селектор `class`, який використовується для всіх непарних елементів у списку.

1. Ви повинні бачити другий елемент списку із текстом `blue` та `font-size` зі значенням `36px`.

1. Використайте атрибут `id`, щоб налаштувати `font-size` та колір тексту другого елемента.

1. Ви повинні бачити третій елемент списку із `font-size` зі значенням `24px`.

1. Використайте атрибут `class`, щоб налаштувати `font-size` третього елемента.

1. Ви повинні бачити четвертий елемент списку із фоном `red`, `font-size` зі значенням `24px` та `font-weight` зі значенням `bold`.

1. The `font-size` of the fourth element should be set with a `class` attribute. The `font-weight` and the color should be set with an `id` attribute.

# --hints--

Кожен непарний елемент повинен мати атрибут `class`.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPHasClass = p?.every((paragraph) => paragraph.classList.length > 0);

assert(everyPHasClass);
```

Непарні елементи повинні мати `background-color` зі значенням `yellow`.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPhasBackgroundColor = p?.every((paragraph) => {

  const style = getComputedStyle(paragraph);

  return style?.backgroundColor === 'rgb(255, 255, 0)';
})
```

Your second element should have `blue` text and a `font-size` of `36px`.

```js
const secondElementId = document.querySelectorAll('div')?.[0]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${secondElementId}`);

assert.equal(style?.color, 'rgb(0, 0, 255)')
assert.equal(style?.fontSize, '36px');
```

Третій елемент повинен мати текст та `font-size` зі значенням `24px`.

```js
const thirdElement = document.querySelectorAll('p')?.[1];

assert(thirdElement?.innerText?.length > 0);

const thirdElementClasses = Array.from(thirdElement?.classList?.values());

assert(thirdElementClasses.some(thirdElementClass => {

  const style = new __helpers.CSSHelp(document).getStyle(`.${thirdElementClass}`);

  return style?.fontSize === '24px';

}))

```

Четвертий елемент повинен мати `font-size` зі значенням `24px`.

```js
const fourthElementClass = document.querySelectorAll('div')?.[1]?.classList[0];

const style = new __helpers.CSSHelp(document).getStyle(`.${fourthElementClass}`);

assert(style?.fontSize === '24px');
```

The fourth element should have a `red` `background-color`.

```js
const fourthElement = document.querySelectorAll('div')?.[1]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${fourthElement}`);

assert(style?.backgroundColor === 'red');
```

Четвертий елемент повинен мати `font-weight` зі значенням `bold`.

```js
const fourthElement = document.querySelectorAll('div')?.[1]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${fourthElement}`);

assert(style?.fontWeight === 'bold');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class and ID Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <p>Number 1 - I'm a class!</p>
    <div>Number 2 - I'm one ID.</div>
    <p>Number 3 - I'm a class, but cooler!</p>
    <div>Number 4 - I'm another ID.</div>
    <p>Number 5 - I'm a class!</p>
  </body>
</html>
```

```css

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class and ID Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <p class="odd">Number 1 - I'm a class!</p>
    <div id="two">Number 2 - I'm one ID.</div>
    <p class="odd adjust-font-size">Number 3 - I'm a class, but cooler!</p>
    <div id="four" class="adjust-font-size">Number 4 - I'm another ID.</div>
    <p class="odd">Number 5 - I'm a class!</p>
  </body>
</html>
```

```css
.odd {
  background-color: rgb(255, 167, 167);
  font-family: Verdana, "DejaVu Sans", sans-serif;
}

.adjust-font-size {
  font-size: 24px;
}

#two {
  color: #0000ff;
  font-size: 36px;
}

#four {
  background-color: red;
  font-weight: bold;
}
```
