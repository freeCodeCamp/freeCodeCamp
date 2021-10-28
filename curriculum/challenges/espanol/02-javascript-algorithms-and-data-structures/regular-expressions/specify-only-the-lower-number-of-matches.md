---
id: 587d7db9367417b2b2512ba6
title: Especifica solo el menor número de coincidencias
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

Puedes especificar el número inferior y superior de patrones mediante especificadores de cantidad utilizando llaves. A veces sólo se quiere especificar el número inferior de patrones sin tener un límite superior.

Para especificar sólo el número inferior de patrones, mantén el primer número seguido de una coma.

Por ejemplo, para hacer coincidir solo con la cadena `hah` cuando la letra `a` aparezca al menos `3` veces, la expresión regular sería `/ha{3,}h/`.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

En orden, las tres llamadas a `test` devuelven `true`, `false` y `true`.

# --instructions--

Modifica la expresión regular `haRegex` para coincidir con la palabra `Hazzah` solo cuando ésta tiene cuatro o más letras `z`.

# --hints--

La expresión regular debe utilizar llaves.

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

La expresión regular no debe coincidir con la cadena `Hazzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

La expresión regular no debe coincidir con la cadena `Hazzzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

La expresión regular debe coincidir con la cadena `Hazzzzah`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

La expresión regular debe coincidir con la cadena `Hazzzzzah`

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

La expresión regular debe coincidir con la cadena `Hazzzzzzah`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

La expresión regular debe coincidir con la cadena `Hazzah` con 30 `z`'s.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
