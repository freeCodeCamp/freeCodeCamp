---
id: 63ee3f71381756f9716727ef
title: Основи CSS. Вправа A
challengeType: 14
dashedName: css-foundations-exercise-a
---

# --description--

**Мета:** у цій вправі ви практикуватиметесь додавати CSS до файлу HTML, використовуючи всі три методи: зовнішній CSS, внутрішній CSS та вбудований CSS. У цій вправі ви повинні використовувати селектори типу лише під час додавання стилів зовнішнім та внутрішнім методами. Ви також повинні використовувати ключові слова для кольорів (наприклад, «blue»), а не значення `RGB` чи `HEX`.

## Історія користувача

- Ви повинні бачити елемент `div` з деяким текстом.
  - Він повинен мати червоний (`red`) фон, білий (`white`) текст, шрифт розміром `32px`, вирівняний за центром та жирний (`bold`).
  - Використайте селектор типу, щоб зовнішньо додати CSS для елемента `div`.
- Ви повинні бачити елемент `p` з деяким текстом.
  - Він повинен мати зелений (`green`) фон, білий (`white`) текст та шрифт розміром `18px`.
  - Використайте селектор типу, щоб внутрішньо додати CSS для елемента `p`.
- Ви повинні бачити елемент `button` з деяким текстом.
  - Він повинен мати оранжевий (`orange`) фон та шрифт розміром `18px`.
  - Використайте вбудовані стилі, щоб додати CSS для елемента `button`.

# --hints--

Ви повинні мати один елемент `div`, який містить текст.

```js
const divElement = document.querySelector('div');

assert.isNotNull(divElement);
assert.isAtLeast(divElement?.innerText.length, 1);
```

Ви повинні мати зовнішню таблицю стилів, яка містить стилі елемента `div`.

```js
const styleSheet = new __helpers.CSSHelp(document).getStyleSheet();
const isExternal = styleSheet?.ownerNode.classList.contains('fcc-injected-styles');
const divStyle = new __helpers.CSSHelp(document).getStyle('div');

assert.isTrue(isExternal);
assert.isNotNull(divStyle);
```

Не додавайте CSS до елемента `div`, використовуючи внутрішні або вбудовані стилі.

```js
const styleElement = document.querySelector('style:not([class])');

assert.isNotTrue(styleElement?.innerText.includes('div'));
assert.isNotTrue(document.querySelector('div')?.hasAttribute('style'));
```

Елемент `div` повинен мати `background-color` зі значенням `red` та `color` зі значенням `white`.

```js
const divStyle = new __helpers.CSSHelp(document).getStyle('div');
const divBGColor = divStyle?.getPropertyValue('background-color');
const divColor = divStyle?.getPropertyValue('color');

assert.equal(divBGColor, 'red');
assert.equal(divColor, 'white');
```

Елемент `div` повинен мати `font-weight` зі значенням `bold`, `font-size` зі значенням `32px` та `text-align` зі значенням `center`.

```js
const divStyle = new __helpers.CSSHelp(document).getStyle('div');
const textAlign = divStyle?.getPropertyValue('text-align');
const fontSize = divStyle?.getPropertyValue('font-size');
const fontWeight = divStyle?.getPropertyValue('font-weight');

assert.equal(textAlign, 'center');
assert.equal(fontSize, '32px');
assert.equal(fontWeight,'bold');
```

Ви повинні мати один елемент `p`, який містить текст.

```js
const pElement = document.querySelector('p');

assert.isNotNull(pElement);
assert.isAtLeast(pElement?.innerText.length, 1)
```

Додайте стилі до елемента `p` внутрішньо, використавши елемент `style`.

```js
const styleElement = document.querySelector('style:not([class])');
const rules = styleElement?.sheet?.cssRules?.[0] || styleElement?.sheet?.rules?.[0];
let isStyled = false;

if (rules && rules.selectorText === 'p') {
  isStyled = true;
}

assert.isTrue(isStyled);
```

Елемент `p` повинен мати `font-size` зі значенням `18px` та `color` зі значенням `white`.

```js
const styleElement = document.querySelector('style:not([class])');
const rules = styleElement?.sheet?.cssRules?.[0] || styleElement?.sheet?.rules?.[0];
let fontSize, color;

if (rules && rules.selectorText === 'p') {
  fontSize = rules.style.fontSize;
  color = rules.style.color;
}

assert.equal(fontSize, "18px");
assert.equal(color, 'white');
```

Ви повинні мати один елемент `button`, який містить текст.

```js
const btnElement = document.querySelector('button');

assert.isNotNull(btnElement);
assert.isAtLeast(btnElement?.innerText.length, 1);
```

Елемент `button` повинен мати вбудований стиль.

```js
assert.isTrue(document.querySelector('button')?.hasAttribute('style'));
```

Елемент `button` повинен мати `background-color` зі значенням `orange`.

```js
assert.equal(document.querySelector('button')?.style.backgroundColor, 'orange')
```

Елемент `button` повинен мати `font-size` зі значенням `18px`.

```js
assert.equal(document.querySelector('button')?.style.fontSize, '18px')
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exercise A</title>
  </head>
  <body>

  </body>
</html>
```

```css
/* styles.css */
```

# --solutions--

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Styling Example</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <style>
    p {
      background-color: green;
      color: white;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div>Hello World!</div>
  <p>This is a paragraph.</p>
  <button style="background-color: orange; font-size: 18px;">Click Me</button>
</body>
</html>
```

```css
div {
  background-color: red;
  color: white;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}
```
