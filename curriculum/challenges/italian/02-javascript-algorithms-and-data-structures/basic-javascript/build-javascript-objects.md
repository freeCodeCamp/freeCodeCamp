---
id: 56bbb991ad1ed5201cd392d0
title: Costruire oggetti in JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

Potresti aver già sentito il termine oggetto (`object`).

Gli oggetti sono simili agli `array`, tranne per il fatto che invece di utilizzare gli indici per accedere e modificare i loro dati, accedi ad essi tramite le cosiddette proprietà (`properties`).

Gli oggetti sono utili per archiviare i dati in modo strutturato e possono rappresentare oggetti del mondo reale, come un gatto.

Ecco un esempio di oggetto gatto (cat):

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

In questo esempio, tutte le proprietà sono memorizzate come stringhe, come `name`, `legs`e `tails`. Per le proprietà puoi anche usare i numeri. Puoi anche omettere le virgolette per le proprietà di tipo stringa di una sola parola, come segue:

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

Tuttavia, se il tuo oggetto ha proprietà non stringa, JavaScript le convertirà automaticamente in stringhe.

# --instructions--

Crea un oggetto che rappresenti un cane chiamato `myDog` che contenga le proprietà `name` (una stringa), `legs`, `tails` e `friends`.

Puoi impostare queste proprietà dell'oggetto sui valori che desideri, purché `name` sia una stringa, `legs` e `tails` siano numeri e `friends` sia un array.

# --hints--

`myDog` dovrebbe contenere la proprietà `name` ed essa dovrebbe essere una `string`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` dovrebbe contenere la proprietà `legs` ed essa dovrebbe essere un `number`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` dovrebbe contenere la proprietà `tails` ed essa dovrebbe essere un `number`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` dovrebbe contenere la proprietà `friends` ed essa dovrebbe essere un `array`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` dovrebbe contenere solo tutte le proprietà indicate.

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
```

# --solutions--

```js
const myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
