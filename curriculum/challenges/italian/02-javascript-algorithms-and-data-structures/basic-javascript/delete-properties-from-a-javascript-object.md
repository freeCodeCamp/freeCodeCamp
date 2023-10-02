---
id: 56bbb991ad1ed5201cd392d3
title: Cancellare le proprietà da un oggetto in JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

Possiamo anche cancellare proprietà dagli oggetti in questo modo:

```js
delete ourDog.bark;
```

Esempio:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

Dopo l'ultima riga mostrata sopra, `ourDog` apparirà così:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

Cancella la proprietà `tails` da `myDog`. È possibile utilizzare sia la notazione a punti che quella a parentesi.

# --hints--

Dovresti eliminare la proprietà `tails` da `myDog`.

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

Non dovresti modificare il setup di `myDog`.

```js
assert(code.match(/"tails": 1/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```
