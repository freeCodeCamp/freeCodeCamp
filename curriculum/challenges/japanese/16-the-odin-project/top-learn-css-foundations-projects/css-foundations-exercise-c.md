---
id: 63ee3fe9381756f9716727f1
title: CSS Foundations Exercise C
challengeType: 14
dashedName: css-foundations-exercise-c
---

# --description--

Let's build a little off the previous exercise, in which you added multiple classes to a single element in order to apply two different rules to it.

1. You should see a black background and white text on the first `button` element.
1. You should see a yellow background on the second `button` element.
1. You should set a font size of `28px` using a grouping selector.
1. You should have a list of fonts containing `Helvetica` and `Times New Roman` with `sans-serif` as a fallback.
1. You should see a unique class name on each element.
1. You should have a grouping selector for styles that both elements share.

# --hints--

You should have a `black` background on the first element.

```js
const classes = document.querySelectorAll('button')?.[0].classList;

const style = new __helpers.CSSHelp(document).getStyle(`.${classes[0]}`);

assert.equal(style?.backgroundColor, 'black');

```

Your first element should have a text color of `white`.

```js

const classes = document.querySelectorAll('button')?.[0].classList;

const style = new __helpers.CSSHelp(document).getStyle(`.${classes[0]}`);

assert.equal(style?.color, 'white');

```

You should set the `font-size` for both elements to `28px` using a grouping selector.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}
assert.equal(eitherOr()?.fontSize, '28px');
```

You have a unique class name on each element.

```js
const elementOneClasses = document.querySelectorAll('button')?.[0].classList;
const elementTwoClasses = document.querySelectorAll('button')?.[1].classList;

for(let i = 0; i < elementOneClasses.length; i++){
    assert(![...elementTwoClasses].includes(elementOneClasses[i]));
}

```

You should have a grouping selector for styles that both elements share.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}
assert.exists(eitherOr());
```

You should have a list of fonts containing `Helvetica` and `Times New Roman` with `sans-serif` as a fallback.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}

assert.equal(eitherOr()?.fontFamily, 'Helvetica, "Times New Roman", sans-serif');
```

Each element should only have one class.

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
