---
id: 63ee3fe4381756f9716727f0
title: CSS-Grundlagen Übung B
challengeType: 14
dashedName: css-foundations-exercise-b
---

# --description--

**Objective:** There are several elements in the HTML file provided, which you will have to add either class or ID attributes to. Danach musst du die Regeln in der CSS-Datei mit der richtigen Selektor-Syntax hinzufügen.

## User Stories

1. Du solltest einen `yellow` Hintergrund für alle ungerade nummerierten Elemente in der Liste sehen.

1. Du solltest einen `class`-Selektor haben, den du für alle ungerade nummerierten Elemente in der Liste verwendest.

1. Du solltest sehen, dass das zweite Element in der Liste einen `blue`-Text und eine `font-size` von `36px` hat.

1. Die `font-size` und die Textfarbe auf dem zweiten Element sollten durch ein `id`-Attribut festgelegt werden.

1. Du solltest sehen, dass das dritte Element in der Liste eine `font-size` von `24px` hat.

1. Die `font-size` auf dem dritten Element sollte unter Verwendung eines `class`-Attributs festgelegt werden.

1. Du solltest sehen, dass das vierte Element in der Liste einen `red` Hintergrund, eine `font-size` von `24px` und eine `font-weight` von `bold` hat.

1. Die `font-size` des vierten Elements sollte mit einem `class`-Attribut festgelegt werden. Die `font-weight` und die Farbe sollten mit einem `id`-Attribut festgelegt werden.

# --hints--

Jedes ungerade Element sollte ein `class`-Attribut haben.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPHasClass = p?.every((paragraph) => paragraph.classList.length > 0);

assert(everyPHasClass);
```

Deine ungeraden Elemente sollten eine `yellow` `background-color` haben.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPHasBackgroundColor = p?.every((paragraph) => {
  const style = getComputedStyle(paragraph);

  return style?.backgroundColor === 'rgb(255, 255, 0)';
})

assert.equal(everyPHasBackgroundColor, true);
```

Dein zweites Element sollte einen `blue` Text und eine `font-size` von `36px` haben.

```js
const secondElementId = document.querySelectorAll('div')?.[0]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${secondElementId}`);

assert.equal(style?.color, 'blue');
assert.equal(style?.fontSize, '36px');
```

Dein drittes Element sollte einen Text und eine `font-size` von `24px` haben.

```js
const thirdElement = document.querySelectorAll('p')?.[1];

assert(thirdElement?.innerText?.length > 0);

const thirdElementClasses = Array.from(thirdElement?.classList?.values());

assert(thirdElementClasses.some(thirdElementClass => {

  const style = new __helpers.CSSHelp(document).getStyle(`.${thirdElementClass}`);

  return style?.fontSize === '24px';

}))

```

Das vierte Element sollte eine `font-size` von `24px` haben.

```js
const fourthElementClass = document.querySelectorAll('div')?.[1]?.classList[0];

const style = new __helpers.CSSHelp(document).getStyle(`.${fourthElementClass}`);

assert(style?.fontSize === '24px');
```

Das vierte Element sollte eine `red` `background-color` haben.

```js
const fourthElement = document.querySelectorAll('div')?.[1]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${fourthElement}`);

assert(style?.backgroundColor === 'red');
```

Das vierte Element sollte eine `bold` `font-weight` haben.

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
