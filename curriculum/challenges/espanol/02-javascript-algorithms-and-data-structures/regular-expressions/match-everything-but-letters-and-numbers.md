---
id: 587d7db8367417b2b2512ba0
title: Haz coincidir todo menos letras y números
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

Has aprendido que puedes usar un atajo para emparejar alfanuméricos `[A-Za-z0-9_]` usando `\w`. Un patrón natural que tal vez quieras buscar es lo contrario a la alfanumérica.

Puedes buscar lo contrario de `\w` con `\W`. Ten en cuenta, el patrón contrario usa letra mayúscula. Este atajo es lo mismo que `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

El primer `match` devuelve el valor `["%"]` y el segundo devuelve `["!"]`.

# --instructions--

Usa la clase de caracteres abreviados `\W` para contar el número de caracteres no alfanuméricos en varias comillas y cadenas.

# --hints--

Tu expresión regular debe usar la bandera global.

```js
assert(nonAlphabetRegex.global);
```

Tu expresión regular debe encontrar 6 caracteres no alfanuméricos en la cadena `The five boxing wizards jump quickly.`.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

Tu expresión regular debe utilizar el carácter abreviado para coincidir con los caracteres no alfanuméricos.

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

Tu expresión regular debe encontrar 8 caracteres no alfanuméricos en la cadena `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

Tu expresión regular debe encontrar 6 caracteres no alfanuméricos en la cadena `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

Tu expresión regular debe encontrar 12 caracteres no alfanuméricos en la cadena `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
