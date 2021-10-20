---
id: 587d7db9367417b2b2512ba7
title: Especifica el número exacto de coincidencias
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

Puedes especificar el número inferior y superior de patrones mediante especificadores de cantidad utilizando llaves. A veces solo quieres un número específico de coincidencias.

Para especificar un cierto número de patrones, simplemente pon ese número entre corchetes.

Por ejemplo, para que coincida con la palabra `hah` solo con la letra `a` `3` veces, tu expresión regular sera `/ha{3}h/`.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

En orden, las tres llamadas a `test` devuelven `false`, `true` y `false`.

# --instructions--

Modifica la expresión regular `timRegex` para hacer coincidir con la palabra `Timber` solo cuando esta tiene cuatro letras `m`.

# --hints--

La expresión regular debe utilizar corchetes.

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

La expresión regular no debe coincidir con la cadena `Timber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

La expresión regular no debe coincidir con la cadena `Timmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

La expresión regular no debe coincidir con la cadena `Timmmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

La expresión regular debe coincidir con la cadena `Timmmmber`

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

La expresión regular no debe coincidir con la cadena `Timber` con 30 `m`.

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```
