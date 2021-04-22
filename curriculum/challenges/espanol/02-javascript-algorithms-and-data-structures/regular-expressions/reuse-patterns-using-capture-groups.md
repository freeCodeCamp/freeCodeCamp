---
id: 587d7dbb367417b2b2512baa
title: Reutiliza patrones usando grupos de captura
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Algunos patrones que busques aparecerán múltiples veces en una cadena. Es un desperdicio repetir manualmente esa expresión regular. Existe una mejor forma de especificar que tienes múltiples subcadenas repetidas en tu cadena.

Puedes buscar subcadenas repetidas utilizando <dfn>grupos de captura</dfn>. Los paréntesis, `(` y `)`, son usados para encontrar subcadenas repetidas. Introduces la expresión regular del patrón que se repetirá entre los paréntesis.

Para especificar donde aparecerá esa cadena repetida, utilizarás una barra invertida (`\`) y luego un número. Este número inicia en 1 e incrementa con cada grupo de captura adicional que utilices. Un ejemplo podría ser `\1` para coincidir con el primer grupo.

El siguiente ejemplo encuentra cualquier palabra que ocurra dos veces separada por un espacio:

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);
```

La llamada a la función `test` devolverá `true`, y la llamada a la función `match` devolverá `["regex regex", "regex"]`.

Utilizar el método `.match()` en una cadena devuelve un arreglo con la cadena que coincide, junto con su grupo de captura.

# --instructions--

Utiliza los grupos de captura en `reRegex` para que coincida con una cadena que conste sólo del mismo número repetido exactamente tres veces separado por espacios.

# --hints--

Tu expresión regular debe utilizar la clase de caracteres abreviada para los dígitos.

```js
assert(reRegex.source.match(/\\d/));
```

Tu expresión regular debe reutilizar un grupo de captura dos veces.

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

Tu expresión regular debe coincidir con la cadena `42 42 42`.

```js
assert(reRegex.test('42 42 42'));
```

Tu expresión regular debe coincidir con la cadena `100 100 100`.

```js
assert(reRegex.test('100 100 100'));
```

Tu expresión regular no debe coincidir con la cadena `42 42 42 42`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

Tu expresión regular no debe coincidir con la cadena `42 42`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

Tu expresión regular no debe coincidir con la cadena `101 102 103`.

```js
assert(!reRegex.test('101 102 103'));
```

Tu expresión regular no debe coincidir con la cadena `1 2 3`.

```js
assert(!reRegex.test('1 2 3'));
```

Tu expresión regular debe coincidir con la cadena `10 10 10`.

```js
assert(reRegex.test('10 10 10'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
