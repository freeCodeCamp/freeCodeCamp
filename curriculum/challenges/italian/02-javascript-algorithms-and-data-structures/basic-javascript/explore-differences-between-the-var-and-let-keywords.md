---
id: 587d7b87367417b2b2512b3f
title: Esplorare le differenze tra le parole chiave var e let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

Uno dei maggiori problemi quando si dichiarano delle variabili con la parola chiave `var` è che è possibile sovrascrivere facilmente le dichiarazioni delle variabili:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

Nel codice qui sopra, la variabile `camper` è originariamente dichiarata come `James` per poi essere sovrascritta con `David`. La console poi mostra la stringa `David`.

In una piccola applicazione, potresti non incorrere in questo tipo di problema. Ma man mano che il tuo codebase diventa più grande potresti accidentalmente sovrascrivere una variabile che non intendevi sovrascrivere. Poiché questo comportamento non da errore, cercare e sistemare bug diventa più difficile.

Una parola chiave chiamata `let` è stata introdotta in ES6, un aggiornamento importante a JavaScript, per risolvere questo potenziale problema con la parola chiave `var`. Imparerai altre caratteristiche di ES6 in sfide future.

Se sostituisci `var` con `let` nel codice qua sopra, risulta in un errore:

```js
let camper = "James";
let camper = "David";
```

L'errore può essere visto nella console del browser.

Quindi a differenza di `var`, wuando usi `let`, una variabile con lo stesso nome può essere dichiarata una sola volta.

# --instructions--

Aggiorna il codice in modo che utilizzi solo la parola chiave `let`.

# --hints--

`var` non dovrebbe esistere nel codice.

```js
assert.notMatch(code, /var/g);
```

`catName` dovrebbe essere uguale alla stringa `Oliver`.

```js
assert.equal(catName, 'Oliver');
```

`catSound` dovrebbe essere uguale alla stringa `Meow!`

```js
assert.equal(catSound, 'Meow!');
```

# --seed--

## --seed-contents--

```js
var catName = "Oliver";
var catSound = "Meow!";
```

# --solutions--

```js
let catName = "Oliver";
let catSound = "Meow!";
```
