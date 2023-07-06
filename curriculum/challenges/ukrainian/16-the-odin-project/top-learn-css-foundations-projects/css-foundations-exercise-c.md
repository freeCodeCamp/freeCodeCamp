---
id: 63ee3fe9381756f9716727f1
title: Основи CSS. Вправа C
challengeType: 14
dashedName: css-foundations-exercise-c
---

# --description--

Попрацюємо з попередньою вправою, у якій ви додали декілька класів до одного елемента, щоб застосувати до нього два різні правила.

1. Ви повинні бачити чорний фон та білий текст на першому елементі `button`.
1. Ви повинні бачити жовтий фон на другому елементі `button`.
1. Використайте селектор групування, щоб налаштувати розмір шрифту на `28px`.
1. Ви повинні мати список шрифтів, який містить `Helvetica` та `Times New Roman`, а також `sans-serif` як запасний.
1. Ви повинні бачити унікальну назву класу для кожного елемента.
1. Ви повинні мати селектор групування для стилів, які мають обидва елементи.

# --hints--

Перший елемент повинен мати фон зі значенням `black`.

```js
const classes = document.querySelectorAll('button')?.[0].classList;

const style = new __helpers.CSSHelp(document).getStyle(`.${classes[0]}`);

assert.equal(style?.backgroundColor, 'black');

```

Перший елемент повинен мати колір тексту зі значенням `white`.

```js

const classes = document.querySelectorAll('button')?.[0].classList;

const style = new __helpers.CSSHelp(document).getStyle(`.${classes[0]}`);

assert.equal(style?.color, 'white');

```

Використайте селектор групування, щоб налаштувати `font-size` обох елементів на `28px`.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}
assert.equal(eitherOr()?.fontSize, '28px');
```

Кожен елемент повинен мати унікальний клас.

```js
const elementOneClasses = document.querySelectorAll('button')?.[0].classList;
const elementTwoClasses = document.querySelectorAll('button')?.[1].classList;

for(let i = 0; i < elementOneClasses.length; i++){
    assert(![...elementTwoClasses].includes(elementOneClasses[i]));
}

```

Ви повинні мати селектор групування для стилів, які мають обидва елементи.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}
assert.exists(eitherOr());
```

Ви повинні мати список шрифтів, який містить `Helvetica` та `Times New Roman`, а також `sans-serif` як запасний.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}

assert.equal(eitherOr()?.fontFamily, 'Helvetica, "Times New Roman", sans-serif');
```

Кожен елемент повинен мати лише один клас.

```js
const elementOneClasses = document.querySelectorAll('button')?.[0].classList;
const elementTwoClasses = document.querySelectorAll('button')?.[1].classList;

assert(elementOneClasses.length === 1 && elementTwoClasses.length === 1);
```


# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Grouping Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <button>Click Me!</button>
    <button>No, Click Me!</button>
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
    <title>Grouping Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <button class="inverted">Click Me!</button>
    <button class="fancy">No, Click Me!</button>
  </body>
</html>
```

```css
.inverted,
.fancy {
  font-family: Helvetica, "Times New Roman", sans-serif;
  font-size: 28px;
}

.inverted {
  background-color: black;
  color: white;
}

.fancy {
  background-color: yellow;
}
```
