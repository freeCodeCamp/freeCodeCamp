---
id: 587d7b87367417b2b2512b43
title: Usa funciones flecha para escribir funciones anónimas de manera breve
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline (en línea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.

Para lograr esto, por lo general se usa la siguiente sintaxis:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 nos proporciona el azúcar sintáctico, para no tener que escribir funciones anónimas de este modo. En su lugar, puedes usar la **sintaxis de función flecha**:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

Cuando la función no posee cuerpo y sólo tiene un valor de retorno, la sintaxis de "función de flecha", te permite omitir la palabra clave `return`, así como los corchetes que rodean el código. Esto ayuda a simplificar las funciones más pequeñas en sentencias de una sola línea:

```js
const myFunc = () => "value";
```

Este código todavía devolverá la cadena `value` por defecto.

# --instructions--

Reescribe la función asignada a la variable `magic`, la cual devuelve una `new Date()`, utilizando la sintaxis de función flecha. Además, asegúrate de que nada esté definido usando la palabra clave `var`.

# --hints--

Debes reemplazar la palabra clave `var`.

```js
assert.notMatch(code, /var/g)
```

`magic` debe ser una variable constante (utilizando `const`).

```js
assert.match(code, /const\s+magic/g)
```

`magic` debe ser una función (`function`).

```js
assert(typeof magic === 'function');
```

`magic()` debe devolver la fecha correcta.

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

La palabra clave `function` no debe ser usada.

```js
assert.notMatch(code, /function/g)
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```
