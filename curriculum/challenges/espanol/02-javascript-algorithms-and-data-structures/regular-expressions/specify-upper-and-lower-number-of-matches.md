---
id: 587d7db9367417b2b2512ba5
title: Especifica el menor y mayor número de coincidencias
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

Recuerda que se utiliza el signo más `+` para buscar uno o más caracteres y el asterisco `*` para buscar cero o más caracteres. Esto es conveniente, pero a veces quieres coincidir con cierta gama de patrones.

Puedes especificar el número inferior y superior de patrones utilizando <dfn>especificadores de cantidad</dfn>. Para los especificadores de cantidad utilizamos llaves (`{` y `}`). Pon dos números entre las llaves - para el número inferior y superior de patrones.

Por ejemplo, para que coincida con la letra `a` si aparece entre `3` y `5` veces en la cadena `ah`, la expresión regular debe ser `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

La primera llamada a `test` devuelve `true`, mientras que la segunda devuelve `false`.

# --instructions--

Modifica la expresión regular `ohRegex` para que coincida con toda la frase `Oh no` solo cuando tenga de `3` a `6` letras `h`.

# --hints--

La expresión regular debe utilizar llaves.

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

La expresión regular no debe coincidir con la cadena `Ohh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

La expresión regular debe coincidir con la cadena `Ohhh no`

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

La expresión regular no debe coincidir con la cadena `Ohhhh no`

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

La expresión regular debe coincidir con la cadena `Ohhhhh no`

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

La expresión regular debe coincidir con la cadena `Ohhhhhh no`

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

La expresión regular no debe coincidir con la cadena `Ohhhhhhh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```
