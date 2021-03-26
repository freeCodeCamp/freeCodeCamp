---
id: 587d7db7367417b2b2512b9f
title: Coincide todas las letras y números
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

Usando clases de caracteres, pudiste buscar todas las letras del alfabeto con `[a-z]`. Este tipo de clase de caracteres es tan común que existe un atajo para él, aunque también incluye algunos caracteres adicionales.

La clase de caracteres más cercana en JavaScript para coincidir con el alfabeto es `\w`. Este atajo equivale a `[A-Za-z0-9_]`. Esta clase de caracteres coincide con letras mayúsculas y minúsculas más números. Ten en cuenta que esta clase de caracteres también incluye el carácter de guión bajo (`_`).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

Las cuatro llamadas a `test` devolverán `true`.

Estos atajos de clases de caracteres también son conocidos como <dfn>clases de caracteres abreviados</dfn>.

# --instructions--

Utiliza la clase de caracteres abreviada `\w` para contar el número de caracteres alfanuméricos en varias citas y cadenas.

# --hints--

Tu expresión regular debe usar la bandera global.

```js
assert(alphabetRegexV2.global);
```

Tu expresión regular debe usar el carácter abreviado `\w` para coincidir con todos los caracteres alfanuméricos.

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

Tu expresión regular debe encontrar 31 caracteres alfanuméricos en la cadena `The five boxing wizards jump quickly.`

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

Tu expresión regular debe encontrar 32 caracteres alfanuméricos en la cadena `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

Tu expresión regular debe encontrar 30 caracteres alfanuméricos en la cadena `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

Tu expresión regular debe encontrar 36 caracteres alfanuméricos en la cadena `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2)
    .length === 36
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```
