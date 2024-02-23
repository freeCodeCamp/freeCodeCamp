---
id: 56bbb991ad1ed5201cd392d3
title: Elimina propiedades en un objeto de JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

También podemos eliminar propiedades de objetos de esta forma:

```js
delete ourDog.bark;
```

Ejemplo:

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

Después de la última línea mostrada anteriormente, `ourDog` se ve así:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

Elimina la propiedad `tails` de `myDog`. Puedes usar tanto la notación de puntos como la notación de corchetes.

# --hints--

Debes eliminar la propiedad `tails` de `myDog`.

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

No debes modificar la disposición de `myDog`.

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
