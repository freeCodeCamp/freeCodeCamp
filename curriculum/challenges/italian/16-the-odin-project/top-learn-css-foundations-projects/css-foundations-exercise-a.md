---
id: 63ee3f71381756f9716727ef
title: Fondamenti di CSS Esercizio A
challengeType: 14
dashedName: css-foundations-exercise-a
---

# --description--

**Obiettivo:** in questo esercizio, farai pratica con l'aggiunta di CSS a un file HTML utilizzando tutti e tre i metodi: CSS esterno, CSS interno e CSS in linea. Dovresti usare i selettori di tipo in questo esercizio solo per aggiungere stili tramite i metodi esterno e interno. Dovresti anche usare parole chiave per i colori (ad esempio "blue") invece di usare i valori `RGB` o `HEX`.

## User story

1. Dovresti vedere un elemento `div` con uno sfondo `red`, testo `white`, dimensione del testo di `32px`, centrato e `bold`.

1. Il CSS dell'elemento `div` dovrebbe essere aggiunto esternamente utilizzando un selettore di tipo.

1. Dovresti vedere un elemento `p` con sfondo `green`, testo `white` e dimensione del testo di `18px`.

1. Il CSS dell'elemento `p` dovrebbe essere aggiunto internamente utilizzando un selettore di tipo.

1. You should see a `button` element with an orange background and a font size of `18px`.

1. Il CSS dell'elemento `button` dovrebbe avere uno stile in linea.

# --hints--

There should be one `div` element and should contains some text and be aligned in the center.

```js
const aligned = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('text-align');

assert(aligned === 'center');
assert(document.getElementsByTagName('DIV')?.length == 1);
assert(document.getElementsByTagName('DIV')?.[0]?.innerText.length > 0)
```

L'elemento `div` dovrebbe avere un `background-color` con il valore `red` e il testo di colore `white`.

```js

const bgc = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('background-color');

const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(bgc === 'red');
assert(color === 'white');
```

The `div` element should have a `font-weight` of bold and a `font-size` of `32px`.

```js
const fontSize = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-size');
const fontWeight = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-weight');

assert(fontSize === '32px');
assert(fontWeight === 'bold');
```

L'elemento `div` dovrebbe avere il CSS aggiunto esternamente.

```js
assert(!document.getElementsByTagName('style')?.[0]?.innerText.includes('div'));
assert(!document.getElementsByTagName('div')?.[0]?.hasAttribute('style'));
```

Dovrebbe esserci un elemento `p` e dovrebbe contenere del testo.

```js
assert(document.getElementsByTagName('P')?.length == 1);
assert(document.getElementsByTagName('P')?.[0]?.innerText.length > 0)
```

L'elemento `p` dovrebbe avere `color` impostato su `white`.

```js
const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(color == 'white');
```

L'elemento `p` dovrebbe avere `font-size` con il valore `18px`.

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

L'elemento `p` dovrebbe avere lo stile aggiunto internamente.

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

L'elemento `button` dovrebbe avere `background-color` impostato su `orange`.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.backgroundColor === 'orange')
```

L'elemento `button` dovrebbe avere `font-size` con il valore `18px`.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.fontSize === '18px')
```

L'elemento `button` dovrebbe avere uno stile in linea.

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
