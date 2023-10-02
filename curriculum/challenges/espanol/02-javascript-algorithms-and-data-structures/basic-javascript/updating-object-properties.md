---
id: 56bbb991ad1ed5201cd392d1
title: Actualizando las propiedades de un objeto
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

Después de haber creado un objeto de JavaScript, puedes actualizar sus propiedades en cualquier momento tal y como actualizarías cualquier otra variable. Puedes utilizar tanto la notación de puntos como la notación de corchetes para actualizar.

Por ejemplo, veamos `ourDog`:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Puesto que es un perro particularmente feliz, vamos a cambiar su nombre por la cadena `Happy Camper`. Así es como actualizamos la propiedad del nombre del objeto: `ourDog.name = "Happy Camper";` o `ourDog["name"] = "Happy Camper";`. Ahora cuando evaluamos `ourDog.name`, en lugar de obtener `Camper`, vamos a obtener su nuevo nombre, `Happy Camper`.

# --instructions--

Actualiza la propiedad nombre del objeto `myDog`. Cambiemos su nombre de `Coder` a `Happy Coder`. Puedes utilizar tanto la notación de puntos como la notación de corchetes.

# --hints--

Debes actualizar la propiedad `name` de `myDog` para que sea igual a la cadena `Happy Coder`.

```js
assert(/happy coder/gi.test(myDog.name));
```

No debes editar la definición de `myDog`.

```js
assert(/"name": "Coder"/.test(code));
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
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```
