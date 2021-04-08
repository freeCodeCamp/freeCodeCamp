---
id: 56bbb991ad1ed5201cd392d2
title: Añade nuevas propiedades a un objeto de JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

Puedes añadir nuevas propiedades a los objetos de JavaScript existentes de la misma manera que los modificarías.

Así es como podríamos agregar una propiedad `bark` a nuestro objeto `ourDog`:

```js
ourDog.bark = "bow-wow";
```

o

```js
ourDog["bark"] = "bow-wow";
```

Ahora cuando evaluemos `ourDog.bark`, obtendremos su ladrido, `bow-wow`.

Por ejemplo:

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

Añade una propiedad `bark` a `myDog` y establécela a un sonido de perro, como "woof". Puedes usar tanto la notación de puntos como la notación de corchetes.

# --hints--

Debes agregar la propiedad `bark` a `myDog`.

```js
assert(myDog.bark !== undefined);
```

No debes agregar `bark` a la sección de configuración.

```js
assert(!/bark[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
```

# --solutions--

```js
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```
