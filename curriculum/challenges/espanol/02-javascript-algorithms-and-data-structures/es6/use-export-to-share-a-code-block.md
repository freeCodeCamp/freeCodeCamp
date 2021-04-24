---
id: 587d7b8c367417b2b2512b56
title: Utiliza la exportación para compartir un bloque de código
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

Imagina un archivo llamado `math_functions.js` que contiene varias funciones relacionadas con operaciones matemáticas. Uno de ellos se almacena en una variable, `add`, que toma dos números y devuelve su suma. Quieres utilizar esta función en varios archivos JavaScript diferentes. Para compartirlo con estos otros archivos, primero debes usar `export` (exportarlo).

```js
export const add = (x, y) => {
  return x + y;
}
```

Lo anterior es una forma común de exportar una sola función, pero puedes lograr lo mismo como esto:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

Cuando exportas una variable o función, puedes importarla en otro archivo y usarla sin tener que volver a escribir el código. Puedes exportar diferentes cosas al repartir el primer ejemplo para cada una de ellas si quieres exportar o al colocarlas en la declaración de exportación del segundo ejemplo. Por ejemplo:

```js
export { add, subtract };
```

# --instructions--

Hay dos funciones relacionadas con cadenas en el editor. Exporta ambos utilizando el método que elijas.

# --hints--

Debes exportar correctamente `uppercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

Debes exportar correctamente `lowercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
