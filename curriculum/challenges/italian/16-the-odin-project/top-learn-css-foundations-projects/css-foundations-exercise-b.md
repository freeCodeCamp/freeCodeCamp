---
id: 63ee3fe4381756f9716727f0
title: Fondamenti di CSS Esercizio B
challengeType: 14
dashedName: css-foundations-exercise-b
---

# --description--

**Obiettivo:** ci sono diversi elementi nel file HTML fornito a cui dovrai aggiungere attributi di classe o ID. Quindi dovrai aggiungere regole al file CSS fornito usando la corretta sintassi dei selettori.

## User story

1. Dovresti vedere uno sfondo `yellow` per tutti gli elementi della lista con numeri dispari.

1. Dovresti avere un selettore di `class` usato per tutti gli elementi dispari della lista.

1. Dovresti vedere che il secondo elemento nella lista ha il testo di colore `blue` e `font-size` con valore `36px`.

1. `font-size` e il colore del testo del secondo elemento dovrebbero essere impostati utilizzando un attributo `id`.

1. Dovresti vedere che il terzo elemento nella lista ha `font-size` con valore `24px`.

1. Per il terzo elemento, `font-size` dovrebbe essere impostato usando l'attributo `class`.

1. Dovresti vedere che il quarto elemento della lista ha uno sfondo `red`, `font-size` con valore `24px` e `font-weight` con valore `bold`.

1. The `font-size` of the fourth element should be set with a `class` attribute the `font-weight`  and the color should be set with an `id` attribute.

# --hints--

Ogni elemento dispari dovrebbe avere un attributo `class`.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPHasClass = p?.every((paragraph) => paragraph.classList.length > 0);

assert(everyPHasClass);
```

Gli elementi dispari dovrebbero avere `background-color` con valore `yellow`.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPhasBackgroundColor = p?.every((paragraph) => {

  const style = getComputedStyle(paragraph);

  return style?.backgroundColor === 'rgb(255, 255, 0)';
})
```

Your second element should have blue text and a `font-size` of `36px`.

```js
const secondElementId = document.querySelectorAll('div')?.[0]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${secondElementId}`);

assert.equal(style?.color, 'rgb(0, 0, 255)')
assert.equal(style?.fontSize, '36px');
```

Your third element should have text and a `font-size` of `24px`.

```js
const thirdElement = document.querySelectorAll('p')?.[1]?.classList;

```

Il quarto elemento dovrebbe avere `font-size` con valore `24px`.

```js
const fourthElementClass = document.querySelectorAll('div')?.[1]?.classList[0];

const style = new __helpers.CSSHelp(document).getStyle(`.${fourthElementClass}`);

assert(style?.fontSize === '24px');
```

The fourth element should have a red `background-color`.

```js
const fourthElement = document.querySelectorAll('div')?.[1]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${fourthElement}`);

assert(style?.backgroundColor === 'red');
```

Il quarto elemento dovrebbe avere `font-weight` con valore `bold`.

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
