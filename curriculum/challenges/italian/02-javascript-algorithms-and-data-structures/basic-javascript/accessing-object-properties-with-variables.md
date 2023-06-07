---
id: 56533eb9ac21ba0edf2244c9
title: Accedere alle proprietà degli oggetti con le variabili
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

Un altro uso della notazione a parentesi con gli oggetti è quello di accedere a una proprietà memorizzata come valore di una variabile. Questo può essere molto utile per iterare sulle le proprietà di un oggetto o quando si accede a una tabella di ricerca.

Ecco un esempio di utilizzo di una variabile per accedere a una proprietà:

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```

La stringa `Doberman` sarà visualizzata nella console.

Nota che *non* usiamo virgolette attorno al nome della variabile quando la usiamo per accedere alla proprietà perché stiamo usando il *valore* della variabile, non il *nome*.

# --instructions--

Dai alla variabile `playerNumber` il valore di `16`. Quindi, utilizza la variabile per cercare il nome del giocatore e assegnarlo a `player`.

# --hints--

`playerNumber` dovrebbe essere un numero

```js
assert(typeof playerNumber === 'number');
```

La variabile `player` dovrebbe essere una stringa

```js
assert(typeof player === 'string');
```

Il valore di `player` dovrebbe essere la stringa `Montana`

```js
assert(player === 'Montana');
```

Dovresti usare la notazione a parentesi per accedere a `testObj`

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

Non dovresti assegnare direttamente il valore `Montana` alla variabile `player`.

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

Dovresti usare la variabile `playerNumber` nella notazione a parentesi

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line
```

# --solutions--

```js
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
```
