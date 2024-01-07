---
id: 56533eb9ac21ba0edf2244c7
title: Accedere alle proprietà dell'oggetto con la notazione a punti
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

Esistono due modi per accedere alle proprietà di un oggetto: notazione a punti (`.`) e notazione a parentesi (`[]`), simile a un array.

La notazione a punti è quella che usi quando conosci già il nome della proprietà a cui stai tentando di accedere.

Di seguito è riportato un esempio di utilizzo della notazione a punti (`.`) per leggere la proprietà di un oggetto:

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` ha il valore della stringa `val1` e `prop2val` ha il avere un valore della stringa `val2`.

# --instructions--

Leggi i valori delle proprietà di `testObj` utilizzando la notazione a punti. Imposta la variabile `hatValue` in modo che sia uguale alla proprietà `hat` dell'oggetto, e imposta la variabile `shirtValue` in modo che sia uguale alla proprietà `shirt` dell'oggetto.

# --hints--

`hatValue` dovrebbe essere una stringa

```js
assert(typeof hatValue === 'string');
```

Il valore di `hatValue` dovrebbe essere la stringa `ballcap`

```js
assert(hatValue === 'ballcap');
```

`shirtValue` dovrebbe essere una stringa

```js
assert(typeof shirtValue === 'string');
```

Il valore di `shirtValue` dovrebbe essere la stringa `jersey`

```js
assert(shirtValue === 'jersey');
```

Dovresti usare due volte la notazione a punti

```js
assert(code.match(/testObj\.\w+/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
```
