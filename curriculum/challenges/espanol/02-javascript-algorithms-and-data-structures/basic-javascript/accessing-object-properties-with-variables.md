---
id: 56533eb9ac21ba0edf2244c9
title: Accede a propiedades de objetos con variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

Otro uso de la notación de corchetes en objetos es acceder a una propiedad que está almacenada como el valor de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o para acceder a una tabla de búsqueda.

Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:

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

La cadena `Doberman` se mostrará en la consola.

Ten en cuenta que *no* utilizamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la propiedad porque utilizamos el *valor* de la variable, no el *nombre*.

# --instructions--

Asigna la variable `playerNumber` a `16`. Luego, usa la variable para buscar el nombre del jugador y asignarlo a `player`.

# --hints--

`playerNumber` debe ser un número

```js
assert(typeof playerNumber === 'number');
```

La variable `player` debe ser una cadena

```js
assert(typeof player === 'string');
```

El valor de `player` debe ser la cadena `Montana`

```js
assert(player === 'Montana');
```

Debes usar la notación de corchetes para acceder a `testObj`

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

No debes asignar el valor de `Montana` a la variable `player` directamente.

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

Debes usar la variable `playerNumber` en tu notación de corchetes

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
