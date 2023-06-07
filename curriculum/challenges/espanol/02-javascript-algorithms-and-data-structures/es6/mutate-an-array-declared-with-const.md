---
id: 587d7b87367417b2b2512b42
title: Muta un arreglo declarado con const
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

Si no estás familiarizada con `const`, verifica <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword" target="_blank" rel="noopener noreferrer nofollow"> este desafío sobre la palabra clave <code>const</code></a>.

La declaración `const` tiene muchos casos de uso, en el JavaScript moderno.

Algunos desarrolladores prefieren asignar todas sus variables utilizando `const` por defecto, a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, utilizan `let`.

Sin embargo, es importante comprender que los objetos (incluyendo arreglos y funciones), asignados a una variable usando `const` siguen siendo mutables. Usar la declaración `const` solo previene la reasignación del identificador de una variable.

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` resultará en un error. Después de comentar esa línea, el `console.log` mostrará el valor `[5, 6, 45]`.

Como puedes ver, puedes mutar el objeto `[5, 6, 7]` en sí mismo y la variable `s` seguirá apuntado al arreglo alterado `[5, 6, 45]`. Como todos los arreglos, los elementos del arreglo en `s` son mutables, pero debido a que se utilizó `const`, no puedes utilizar el identificador de la variable `s` para apuntar a un arreglo diferente usando el operador de asignación.

# --instructions--

Un arreglo es declarado como `const s = [5, 7, 2]`. Cambia el arreglo a `[2, 5, 7]` utilizando varias asignaciones de elementos.

# --hints--

No debes reemplazar la palabra clave `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` debe ser una variable constante (utilizando `const`).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

No debes cambiar la declaración original del arreglo.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s` debe ser igual a `[2, 5, 7]`.

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
