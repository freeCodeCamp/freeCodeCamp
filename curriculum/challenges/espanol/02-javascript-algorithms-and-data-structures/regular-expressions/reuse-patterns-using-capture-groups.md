---
id: 587d7dbb367417b2b2512baa
title: Reutiliza patrones usando grupos de captura
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Digamos que quieres hacer coincidir una palabra que aparece varias veces como la siguiente.

```js
let repeatStr = "row row row your boat";
```

Podrías usar `/row row row/`, pero ¿qué pasa si no conoces la palabra específica que se repite? <dfn>Los grupos de captura</dfn> pueden utilizarse para encontrar subcadenas repetidas.

Los grupos de captura se construyen encerrando entre paréntesis el patrón de expresión regular a capturar. En este caso, el objetivo es capturar una palabra formada por caracteres alfanuméricos, por lo que el grupo de captura será `\w+` encerrado entre paréntesis: `/(\w+)/`.

La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede acceder dentro de la misma expresión regular utilizando una barra invertida y el número del grupo de captura (por ejemplo, `\1`). Los grupos de captura se numeran automáticamente por la posición de sus paréntesis de apertura (de izquierda a derecha), empezando por el 1.

El siguiente ejemplo encuentra cualquier palabra que aparezca tres veces separada por un espacio:

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

El uso del método `.match()` en una cadena devolverá un arreglo con la subcadena coincidente, junto con sus grupos capturados.


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
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

Tu expresión regular debe coincidir con la cadena `100 100 100`.

```js
reRegex.lastIndex = 0;
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
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

Tu expresión regular no debe coincidir con la cadena `1 2 3`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

Tu expresión regular debe coincidir con la cadena `10 10 10`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

Your regex should not match the string `42\t42\t42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42\t42\t42'));
```

Your regex should not match the string `42  42  42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42  42  42'));
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
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
```
