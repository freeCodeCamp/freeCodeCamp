---
id: 587d7db5367417b2b2512b97
title: Haz coincidir los números y las letras del alfabeto
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

Usar el guión (`-`) para coincidir con un rango de caracteres no está limitado a letras. También funciona para hacer coincidir un rango de números.

Por ejemplo, `/[0-5]/` coincide con cualquier número entre `0` y `5`, incluyendo `0` y `5`.

Además, es posible combinar un rango de letras y números en un único conjunto de caracteres.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

Crea una sola expresión regular que coincida con un rango de letras entre `h` y `s`, y un rango de números entre `2` y `6`. Recuerda incluir las banderas apropiadas en la expresión regular.

# --hints--

Tu expresión regular `myRegex` debe coincidir con 17 elementos.

```js
assert(result.length == 17);
```

Tu expresión regular `myRegex` debe utilizar la bandera global.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

Tu expresión regular `myRegex` debe utilizar la bandera que no distingue entre mayúsculas y minúsculas.

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
