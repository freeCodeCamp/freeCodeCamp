---
id: 56533eb9ac21ba0edf2244c8
title: Accedere alle proprietà dell'oggetto con la notazione a parentesi
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

Il secondo modo di accedere alle proprietà di un oggetto è la notazione a parentesi (`[]`). Se la proprietà dell'oggetto a cui stai tentando di accedere ha uno spazio nel suo nome, è necessario utilizzare la notazione a parentesi.

Tuttavia, puoi ancora usare la notazione a parentesi sulle proprietà dell'oggetto senza spazi.

Ecco un esempio di come usare la notazione a parentesi per leggere la proprietà di un oggetto:

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

`myObj["Space Name"]` sarebbe la stringa `Kirk`, `myObj['More Space']` sarebbe la stringa `Spock`, e `myObj["NoSpace"]` sarebbe la stringa `USS Enterprise`.

Nota che i nomi delle proprietà che contengono spazi devono essere tra virgolette (singola o doppia).

# --instructions--

Leggi i valori delle proprietà `an entree` e `the drink` di `testObj` usando la notazione a parentesi e assegnali rispettivamente a `entreeValue` e `drinkValue`.

# --hints--

`entreeValue` dovrebbe essere una stringa

```js
assert(typeof entreeValue === 'string');
```

Il valore di `entreeValue` dovrebbe essere la stringa `hamburger`

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` dovrebbe essere una stringa

```js
assert(typeof drinkValue === 'string');
```

Il valore di `drinkValue` dovrebbe essere la stringa `water`

```js
assert(drinkValue === 'water');
```

Dovresti usare due volte la notazione a parentesi

```js
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj['the drink'];
```
