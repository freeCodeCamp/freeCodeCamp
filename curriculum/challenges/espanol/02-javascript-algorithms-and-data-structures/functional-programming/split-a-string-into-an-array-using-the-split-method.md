---
id: 587d7daa367417b2b2512b6b
title: Divide una cadena en un arreglo utilizando el método "split"
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

El método `split` divide una cadena en un arreglo de cadenas. Se necesita un argumento para el delimitador, el cual puede ser un carácter para separar la cadena o una expresión regular. Por ejemplo, si el delimitador es un espacio, se obtiene un arreglo de palabras y si el delimitador es una cadena vacía, se obtiene un arreglo de cada carácter en la cadena.

Aquí hay dos ejemplos que dividen una cadena por espacios, luego otra por dígitos utilizando una expresión regular:

```js
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
```

`bySpace` tendrá el valor `["Hello", "World"]` y `byDigits` tendrá el valor `["How", "are", "you", "today"]`.

Dado que las cadenas son inmutables, el método `split` facilita el trabajo con ellas.

# --instructions--

Utiliza el método `split` dentro de la función `splitify` para dividir `str` en un arreglo de palabras. La función debe devolver un arreglo. Ten en cuenta que las palabras no siempre están separadas por espacios y que el arreglo no debe contener signos de puntuación.

# --hints--

Tu código debe usar el método `split`.

```js
assert(code.match(/\.split/g));
```

`splitify("Hello World,I-am code")` debe devolver `["Hello", "World", "I", "am", "code"]`.

```js
assert(
  JSON.stringify(splitify('Hello World,I-am code')) ===
    JSON.stringify(['Hello', 'World', 'I', 'am', 'code'])
);
```

`splitify("Earth-is-our home")` debe devolver `["Earth", "is", "our", "home"]`.

```js
assert(
  JSON.stringify(splitify('Earth-is-our home')) ===
    JSON.stringify(['Earth', 'is', 'our', 'home'])
);
```

`splitify("This.is.a-sentence")` debe devolver `["This", "is", "a", "sentence"]`.

```js
assert(
  JSON.stringify(splitify('This.is.a-sentence')) ===
    JSON.stringify(['This', 'is', 'a', 'sentence'])
);
```

# --seed--

## --seed-contents--

```js
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}

splitify("Hello World,I-am code");
```

# --solutions--

```js
function splitify(str) {
  return str.split(/\W/);
}
```
