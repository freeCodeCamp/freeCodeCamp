---
id: 587d7db4367417b2b2512b91
title: Ignora la capitalización al coincidir
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

Hasta ahora, has visto expresiones regulares para hacer coincidir cadenas literales. Pero a veces, tal vez quieras hacer coincidir las diferencias de capitalización.

La capitalización (o también llamada capitalización de letra) es la diferencia entre mayúsculas y minúsculas. Ejemplos de mayúsculas son `A`, `B` y `C`. Ejemplos de minúsculas son `a`, `b` y `c`.

Puedes coincidir ambos casos utilizando algo llamado bandera. Existen otras banderas, pero aquí te centrarás en la que ignora la capitalización de las letras, la bandera `i`. Puedes usarla añadiéndola a la expresión regular. Un ejemplo de uso de esta bandera es `/ignorecase/i`. Esta expresión regular puede coincidir con las cadenas `ignorecase`, `igNoreCase` e `IgnoreCase`.

# --instructions--

Escribe una expresión regular `fccRegex` para que coincida con `freeCodeCamp` sin importar su capitalización. Tu expresión regular no debe coincidir con ninguna abreviatura o variación con espacios.

# --hints--

Tu expresión regular debe coincidir con la cadena `freeCodeCamp`

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

Tu expresión regular debe coincidir con la cadena `FreeCodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

Tu expresión regular debe coincidir con la cadena `FreecodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

Tu expresión regular debe coincidir con la cadena `FreeCodecamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

Tu expresión regular no debe coincidir con la cadena `Free Code Camp`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

Tu expresión regular debe coincidir con la cadena `FreeCOdeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

Tu expresión regular no debe coincidir con la cadena `FCC`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

Tu expresión regular debe coincidir con la cadena `FrEeCoDeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

Tu expresión regular debe coincidir con la cadena `FrEeCodECamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

Tu expresión regular debe coincidir con la cadena `FReeCodeCAmp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FReeCodeCAmp'));
```

# --seed--

## --seed-contents--

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

# --solutions--

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```
