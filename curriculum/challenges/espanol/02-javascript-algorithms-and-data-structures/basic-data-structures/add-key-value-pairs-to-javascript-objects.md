---
id: 587d7b7c367417b2b2512b18
title: Agrega pares clave-valor a objetos de JavaScript
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

En su aspecto más básico, los objetos no son más que colecciones de pares <dfn>clave-valor</dfn>. En otras palabras, son piezas de datos (<dfn>valores</dfn>) asignados a identificadores únicos llamados <dfn>propiedades</dfn> (<dfn>claves</dfn>). Mira un ejemplo:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

El código anterior define un objeto de un personaje del videojuego Tekken como `tekkenCharacter`. Tiene tres propiedades, cada una de las cuales se asigna un valor específico. Si se quiere agregar una propiedad adicional, como "origin" (origen), se puede hacer asignando `origin` al objeto:

```js
tekkenCharacter.origin = 'South Korea';
```

Esto usa la notación de puntos. Si observas el objeto `tekkenCharacter`, ahora incluirá la propiedad `origin`. Hwoarang también tenía el cabello naranja. Puedes agregar esta propiedad con la notación de corchetes:

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

La notación de corchetes es necesaria si tu propiedad tiene un espacio en ella o si se quiere utilizar una variable para nombrar la propiedad. En el caso anterior, la propiedad está entre comillas para denotar que es una cadena y se agregará exactamente como se muestra. Sin las comillas, se evaluará como una variable y el nombre de la propiedad será el valor que tenga la variable. He aquí un ejemplo con una variable:

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

Tras agregar todos los ejemplos, el objeto se verá así:

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

Se ha creado un objeto `foods` con tres entradas. Usando la sintaxis de tu elección, agrega tres entradas más: `bananas` con el valor de `13`, `grapes` con el valor de `35`, y `strawberries` con el valor de `27`.

# --hints--

`foods` debe ser un objeto.

```js
assert(typeof foods === 'object');
```

El objeto `foods` debe tener una clave `bananas` con el valor de `13`.

```js
assert(foods.bananas === 13);
```

El objeto `foods` debe tener una clave `grapes` con el valor de `35`.

```js
assert(foods.grapes === 35);
```

El objeto `foods` debe tener una clave `strawberries` con el valor de `27`.

```js
assert(foods.strawberries === 27);
```

Los pares clave-valor deben establecerse usando notación de puntos o de corchetes.

```js
assert(
  code.search(/bananas:/) === -1 &&
    code.search(/grapes:/) === -1 &&
    code.search(/strawberries:/) === -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```
