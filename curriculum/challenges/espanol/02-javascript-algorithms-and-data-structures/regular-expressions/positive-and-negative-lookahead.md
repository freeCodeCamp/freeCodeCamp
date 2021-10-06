---
id: 587d7dba367417b2b2512ba9
title: Lookahead positivo y negativo
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

Los <dfn>lookaheads</dfn> son patrones que le indican a JavaScript que busque por anticipado en tu cadena para verificar patrones más adelante. Esto puede ser útil cuando deseas buscar varios patrones sobre la misma cadena.

Hay dos tipos de lookaheads: <dfn>lookahead positivo</dfn> y <dfn>lookahead negativo</dfn>.

Un lookahead positivo buscará para asegurarse de que el elemento en el patrón de búsqueda este allí, pero en realidad no lo coincidirá. Un lookahead positivo se usa como `(?=...)` donde el `...` es la parte requerida que no coincide.

Por otro lado, un lookahead negativo buscará para asegurarse de que el elemento en el patrón de búsqueda no este allí. Un lookahead negativo se usa como `(?!...)` donde el `...` es el patrón que no quieres que esté allí. El resto del patrón se devuelve si la parte de lookahead negativo no está presente.

Los lookaheads son un poco confusos, pero algunos ejemplos ayudarán.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

Ambas llamadas a `match` devolverán `["q"]`.

Un uso más práctico de lookaheads es comprobar dos o más patrones en una cadena. Aquí hay un verificador de contraseñas (ingenuamente) simple que busca entre 3 y 6 caracteres y al menos un número:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

Utiliza los lookaheads en el `pwRegex` para que coincida con las contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.

# --hints--

Tu expresión regular debe usar dos `lookaheads` positivos.

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

Tu expresión regular no debe coincidir con la cadena `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

Tu expresión regular no debe coincidir con la cadena `banan1`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

Tu expresión regular debe coincidir con la cadena `bana12`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

Tu expresión regular debe coincidir con la cadena `abc123`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

Tu expresión regular no debe coincidir con la cadena `12345`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

Tu expresión regular debe coincidir con la cadena `8pass99`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

Tu expresión regular no debe coincidir con la cadena `1a2bcde`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

Tu expresión regular debe coincidir con la cadena `astr1on11aut`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
