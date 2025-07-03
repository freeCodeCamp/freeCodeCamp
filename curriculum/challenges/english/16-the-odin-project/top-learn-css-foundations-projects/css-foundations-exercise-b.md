---
id: 63ee3fe4381756f9716727f0
title: CSS Foundations Exercise B
challengeType: 14
dashedName: css-foundations-exercise-b
---

# --description--

**Objective:** There are several elements in the HTML file provided, which you will have to add either class or ID attributes to. You will then have to add rules in the CSS file provided using the correct selector syntax.

## User Stories

1. You should see a `yellow` background for all odd numbered elements in the list.

1. You should have a `class` selector used for all odd numbered elements in the list.

1. You should see that the second element in the list has `blue` text and a `font-size` of `36px`.

1. The `font-size` and text color on the second element should be set by using an `id` attribute.

1. You should see that the third element in the list has a `font-size` of `24px`.

1. The `font-size` on the third element should be set by using a `class` attribute.

1. You should see that the fourth element in the list has a `red` background, a `font-size` of `24px`, and a `font-weight` of `bold`.

1. The `font-size` of the fourth element should be set with a `class` attribute. The `font-weight` and the color should be set with an `id` attribute.

# --hints--

Every odd element should have a `class` attribute.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPHasClass = p?.every((paragraph) => paragraph.classList.length > 0);

assert(everyPHasClass);
```

Your odd elements should have a `background-color` of `yellow`.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPHasBackgroundColor = p?.every((paragraph) => {
  const style = getComputedStyle(paragraph);
  
  return style?.backgroundColor === 'rgb(255, 255, 0)';
})

assert.equal(everyPHasBackgroundColor, true);
```

Your second element should have `blue` text and a `font-size` of `36px`.

```js
const secondElementId = document.querySelectorAll('div')?.[0]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${secondElementId}`);

assert.equal(style?.color, 'blue');
assert.equal(style?.fontSize, '36px');
```

Your third element should have text and a `font-size` of `24px`.

```js
const thirdElement = document.querySelectorAll('p')?.[1];

assert(thirdElement?.innerText?.length > 0);

const thirdElementClasses = Array.from(thirdElement?.classList?.values());

assert(thirdElementClasses.some(thirdElementClass => {

  const style = new __helpers.CSSHelp(document).getStyle(`.${thirdElementClass}`);

  return style?.fontSize === '24px';

}))

``` 

The fourth element should have a `font-size` of `24px`.

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

The fourth element should have a `font-weight` of `bold`.

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
  background-color: yellow;
  font-family: Verdana, "DejaVu Sans", sans-serif;
}

.adjust-font-size {
  font-size: 24px;
}

#two {
  color: blue;
  font-size: 36px;
}

#four {
  background-color: red;
  font-weight: bold;
}
```
