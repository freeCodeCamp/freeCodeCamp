---
id: 587d7db3367417b2b2512b8e
title: Usa el método "test"
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

Las expresiones regulares se utilizan en lenguajes de programación para coincidir con partes de cadenas. Creas patrones para ayudarte a hacer esa coincidencia.

Si quieres encontrar la palabra `the` en la cadena `The dog chased the cat`, puedes utilizar la siguiente expresión regular: `/the/`. Ten en cuenta que las comillas no son requeridas dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el método `.test()`. El método `.test()` toma la expresión regular, la aplica a una cadena (que se coloca dentro de los paréntesis), y devuelve `true` o `false` si tu patrón encuentra algo o no.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

El método `test` aquí devuelve `true`.

# --instructions--

Aplica la expresión regular `myRegex` en la cadena `myString` usando el método `.test()`.

# --hints--

Debes usar `.test()` para probar la expresión regular.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

Tu resultado debe devolver `true`.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
