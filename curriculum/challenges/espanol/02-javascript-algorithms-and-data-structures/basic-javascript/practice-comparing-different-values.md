---
id: 599a789b454f2bbd91a3ff4d
title: Practica comparando diferentes valores
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

En los dos últimos desafíos, aprendimos sobre el operador de igualdad (`==`) y el operador de estricta igualdad (`===`). Vamos a hacer una rápida revisión y práctica utilizando estos operadores un poco más.

Si los valores que se comparan no son del mismo tipo, el operador de igualdad realizará una conversión de tipo y luego evaluará los valores. Sin embargo, el operador de estricta igualdad comparará tanto el tipo de datos como el valor tal como es, sin convertir un tipo a otro.

**Ejemplos**

`3 == '3'` devuelve `true` porque JavaScript realiza la conversión de tipo de cadena a número. `3 === '3'` devuelve `false` porque los tipos son diferentes y la conversión de tipo no se realiza.

**Nota:** En JavaScript, puedes determinar el tipo de una variable o un valor con el operador `typeof`, de la siguiente manera:

```js
typeof 3
typeof '3'
```

`typeof 3` devuelve la cadena `number` y `typeof '3'` devuelve la cadena `string`.

# --instructions--

La función `compareEquality` en el editor compara dos valores usando el operador de igualdad. Modifica la función para que devuelva la cadena `Equal` sólo cuando los valores son estrictamente iguales.

# --hints--

`compareEquality(10, "10")` debe devolver la cadena `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` debe devolver la cadena `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

Debes usar el operador `===`

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
