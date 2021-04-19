---
id: 587d7b7b367417b2b2512b17
title: Combina arreglos con el operador de propagación
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

Otra gran ventaja del operador de <dfn>propagación</dfn> es la capacidad de combinar arreglos, o de insertar todos los elementos de un arreglo en otro, en cualquier índice. Con sintaxis más tradicionales, podemos concatenar arreglos, pero esto sólo nos permite combinar arreglos al final de uno, y al principio de otro. La sintaxis de propagación hace la siguiente operación extremadamente simple:

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

`thatArray` tendrá el valor `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']`.

Usando la sintaxis de propagación, acabamos de lograr una operación que habría sido más compleja y verbosa si hubiéramos usado métodos tradicionales.

# --instructions--

Hemos definido una función `spreadOut` que devuelve la variable `sentence`. Modifica la función usando el operador de <dfn>propagación</dfn> para que devuelva el arreglo `['learning', 'to', 'code', 'is', 'fun']`.

# --hints--

`spreadOut` debe devolver `["learning", "to", "code", "is", "fun"]`

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

La función `spreadOut` debe utilizar la sintaxis de propagación

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
```

# --solutions--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```
