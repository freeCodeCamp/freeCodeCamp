---
id: 63ee3fe9381756f9716727f1
title: Fondamenti di CSS Esercizio C
challengeType: 14
dashedName: css-foundations-exercise-c
---

# --description--

Partiamo dall'esercizio precedente, in cui hai aggiunto più classi a un singolo elemento per applicargli due regole diverse.

1. Dovresti vedere uno sfondo nero con del testo bianco nel primo elemento `button`.
1. Dovresti vedere uno sfondo giallo nel secondo elemento `button`.
1. Dovresti impostare la dimensione del carattere a `28px` usando un selettore di raggruppamento.
1. Dovresti vedere una lista di caratteri contenente `Helvetica` e `Times New Roman` con `sans-serif` come valore di ripiego.
1. Dovresti vedere un nome di classe unico per ogni elemento.
1. Dovresti avere un selettore di raggruppamento per gli stili condivisi da entrambi gli elementi.

# --hints--

Dovresti avere uno sfondo di colore `black` per il primo elemento.

```js
const classes = document.querySelectorAll('button')?.[0].classList;

const style = new __helpers.CSSHelp(document).getStyle(`.${classes[0]}`);

assert.equal(style?.backgroundColor, 'black');

```

Il primo elemento dovrebbe avere il testo di colore `white`.

```js

const classes = document.querySelectorAll('button')?.[0].classList;

const style = new __helpers.CSSHelp(document).getStyle(`.${classes[0]}`);

assert.equal(style?.color, 'white');

```

Dovresti impostare `font-size` per entrambi gli elementi su `28px` usando un selettore di raggruppamento.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}
assert.equal(eitherOr()?.fontSize, '28px');
```

Dovresti avere un nome di classe univoco per ogni elemento.

```js
const elementOneClasses = document.querySelectorAll('button')?.[0].classList;
const elementTwoClasses = document.querySelectorAll('button')?.[1].classList;

for(let i = 0; i < elementOneClasses.length; i++){
    assert(![...elementTwoClasses].includes(elementOneClasses[i]));
}

```

Dovresti avere un selettore di raggruppamento per gli stili condivisi da entrambi gli elementi.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}
assert.exists(eitherOr());
```

Dovresti vedere una lista di caratteri contenente `Helvetica` e `Times New Roman` con `sans-serif` come valore di ripiego.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}

assert.equal(eitherOr()?.fontFamily, 'Helvetica, "Times New Roman", sans-serif');
```

Ogni elemento dovrebbe avere solo una classe.

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
