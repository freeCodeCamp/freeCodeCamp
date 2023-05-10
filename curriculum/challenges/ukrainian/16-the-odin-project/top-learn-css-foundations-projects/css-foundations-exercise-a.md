---
id: 63ee3f71381756f9716727ef
title: Основи CSS. Вправа A
challengeType: 14
dashedName: css-foundations-exercise-a
---

# --description--

**Мета:** у цій вправі ви практикуватиметесь додавати CSS до файлу HTML, використовуючи всі три методи: зовнішній CSS, внутрішній CSS та вбудований CSS. У цій вправі ви повинні використовувати селектори типу лише під час додавання стилів зовнішнім та внутрішнім методами. Ви також повинні використовувати ключові слова для кольорів (наприклад, «blue»), а не значення `RGB` чи `HEX`.

## Історія користувача

1. Ви повинні бачити елемент `div` із фоном `red`, текстом `white`, розміром шрифту `32px`, вирівняним за центром та `bold`.

1. Використайте селектор типу, щоб зовнішньо додати CSS елемента `div`.

1. Ви повинні бачити елемент `p` із фоном `green`, текстом `white` та розміром шрифту `18px`.

1. Використайте селектор типу, щоб внутрішньо додати CSS елемента `p`.

1. You should see a `button` element with an `orange` background and a font size of `18px`.

1. CSS елемента `button` повинен мати вбудований стиль.

# --hints--

There should be one `div` element. It should contain some text and be aligned in the center.

```js
const aligned = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('text-align');

assert(aligned === 'center');
assert(document.getElementsByTagName('DIV')?.length == 1);
assert(document.getElementsByTagName('DIV')?.[0]?.innerText.length > 0)
```

Елемент `div` повинен мати `background-color` зі значенням `red` та колір тексту зі значенням `white`.

```js

const bgc = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('background-color');

const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(bgc === 'red');
assert(color === 'white');
```

The `div` element should have a `font-weight` of `bold` and a `font-size` of `32px`.

```js
const fontSize = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-size');
const fontWeight = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-weight');

assert(fontSize === '32px');
assert(fontWeight === 'bold');
```

CSS елемента `div` потрібно додати зовнішньо.

```js
assert(!document.getElementsByTagName('style')?.[0]?.innerText.includes('div'));
assert(!document.getElementsByTagName('div')?.[0]?.hasAttribute('style'));
```

Ви повинні мати один елемент `p`, який містить текст.

```js
assert(document.getElementsByTagName('P')?.length == 1);
assert(document.getElementsByTagName('P')?.[0]?.innerText.length > 0)
```

Елемент `p` повинен мати `color` зі значенням `white`.

```js
const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(color == 'white');
```

Елемент `p` повинен мати `font-size` зі значенням `18px`.

```js
const styleTag = document.getElementsByTagName('style')?.[0];
let pHasFontSize18 = false;

const rules = styleTag?.sheet?.cssRules || styleTag?.sheet?.rules;
if (rules) {
  for (let j = 0; j < rules.length; j++) {
    const rule = rules[j];
    if (rule.selectorText === 'p' && rule.style.fontSize === '18px') {
      pHasFontSize18 = true;
      break;
    }
  }
}

assert(pHasFontSize18);
```

Стиль елемента `p` потрібно додати внутрішньо.

```js

const styleTag = document.getElementsByTagName('style')?.[0];
let pIsStyled = false;


const rules = styleTag?.sheet?.cssRules || styleTag?.sheet?.rules;
if (rules) {
  for (let j = 0; j < rules.length; j++) {
    const rule = rules[j];
    if (rule.selectorText === 'p') {
      pIsStyled = true;
      break;
    }
  }
}

assert(pIsStyled);
```

Елемент `button` повинен мати `background-color` зі значенням `orange`.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.backgroundColor === 'orange')
```

Елемент `button` повинен мати `font-size` зі значенням `18px`.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.fontSize === '18px')
```

Елемент `button` повинен мати вбудований стиль.

```js
assert(document.getElementsByTagName('button')?.[0]?.hasAttribute('style'));
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
/* style.css */
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
