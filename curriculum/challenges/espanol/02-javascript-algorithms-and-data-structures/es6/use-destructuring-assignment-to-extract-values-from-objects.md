---
id: 5cfa550e84205a357704ccb6
title: Usa sintaxis de desestructuración para extraer valores de objetos
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

La <dfn>sintaxis de desestructuración</dfn> es una sintaxis especial introducida en ES6, para asignar los valores directamente desde un objeto.

Considera el siguiente código ES5:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` tendría una cadena con valor `John Doe`, y `age` tendría el número `34`.

Aquí hay una sentencia de asignación equivalente usando la sintaxis de desestructuración de ES6:

```js
const { name, age } = user;
```

De nuevo, `name` tendrá una cadena con valor `John Doe`, y `age` tendrá el número `34`.

Aquí, las variables `name` y `age` serán creadas y se asignarán los valores respectivos a partir del objeto `user`. Puedes observar que esto es mucho más limpio.

Puedes extraer tantos o pocos valores del objeto como desees.

# --instructions--

Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables `today` y `tomorrow` con los valores de `today` y `tomorrow` del objeto `HIGH_TEMPERATURES`.

# --hints--

Debes eliminar la sintaxis de asignación ES5.

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

Debes usar desestructuración para crear la variable `today`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

Debes usar desestructuración para crear la variable `tomorrow`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` debe ser igual a `77` y `tomorrow` debe ser igual a `80`.

```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
