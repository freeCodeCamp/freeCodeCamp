---
id: bad87fee1348bd9aede08718
title: Usare valori RGB per colorare gli elementi
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

Un altro modo per rappresentare i colori in CSS è quello di usare i valori `RGB`.

Il valore `RGB` per il nero appare così:

```css
rgb(0, 0, 0)
```

Il valore `RGB` per il bianco è questo:

```css
rgb(255, 255, 255)
```

Invece di usare sei cifre esadecimali come si fa con il codice esadecimale, con `RGB` specifichi la luminosità di ogni colore con un numero compreso tra 0 e 255.

Se fai il calcolo, le due cifre di un colore equivalgono a 16 volte 16, che ci dà 256 valori totali. Quindi `RGB`, che inizia a contare da zero, ha esattamente lo stesso numero di valori possibili del codice esadecimale.

Ecco un esempio di come puoi cambiare lo sfondo del `body` in arancione usando il suo codice RGB.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

Sostituiamo il codice esadecimale nel colore di sfondo dell'elemento `body` con il valore RGB per il nero: `rgb(0, 0, 0)`

# --hints--

Il tuo elemento `body` dovrebbe avere uno sfondo nero.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Dovresti usare `rgb` per dare al tuo elemento `body` uno sfondo nero.

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```
