---
id: a0b5010f579e69b815e7c5d6
title: Busca y reemplaza
challengeType: 1
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

**Note:** Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo, si quieres reemplazar la palabra `Book` por la palabra `dog`, debe ser reemplazada como `Dog`

# --hints--

`myReplace("Let us go to the store", "store", "mall")` debe devolver la cadena `Let us go to the mall`.

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` debe devolver la cadena `He is Sitting on the couch`.

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` debe devolver la cadena `I think we should look down there`.

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` debe devolver la cadena `This has a spelling error`.

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` debe devolver la cadena `His name is John`.

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` debe devolver la cadena `Let us get back to more Algorithms`.

```js
assert.deepEqual(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms'),
  'Let us get back to more Algorithms'
);
```

# --seed--

## --seed-contents--

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

# --solutions--

```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```
