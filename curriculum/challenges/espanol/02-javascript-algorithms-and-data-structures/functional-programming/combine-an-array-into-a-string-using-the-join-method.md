---
id: 587d7daa367417b2b2512b6c
title: Combina un arreglo en una cadena utilizando el método "join"
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

El método `join` se utiliza para unir los elementos de un arreglo creando una cadena de texto. Se necesita un argumento para especificar el delimitador a utilizar para separar los elementos del arreglo en la cadena.

Aquí hay un ejemplo:

```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

`str` tendrá una cadena con valor `Hello World`.
# --instructions--

Utiliza el método `join` (entre otros) dentro de la función `sentensify` para hacer una oración a partir de las palabras en la cadena `str`. La función debe devolver una cadena. Por ejemplo, `I-like-Star-Wars` se convertiría en `I like Star Wars`. Para este desafío, no utilices el método `replace`.

# --hints--

Tu código debe usar el método `join`.

```js
assert(code.match(/\.join/g));
```

Tu código no debe utilizar el método `replace`.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` debe devolver una cadena.

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` debe devolver la cadena `May the force be with you`.

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` debe devolver la cadena `The force is strong with this one`.

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` debe devolver la cadena `There has been an awakening`.

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
```
