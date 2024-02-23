---
id: 587d7dba367417b2b2512ba8
title: Comprueba todos o ninguno
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

A veces los patrones que quieres buscar pueden tener partes que pueden o no existir. Sin embargo, podría ser importante buscarlos de todos maneras.

Puedes especificar la posible existencia de un elemento con un signo de interrogación, `?`. Esto comprueba cero o uno de los elementos precedentes. Puedes pensar que este símbolo dice que el elemento anterior es opcional.

Por ejemplo, hay ligeras diferencias en inglés americano y británico y puedes usar el signo de interrogación para coincidir con ambas ortografías.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

Ambos usos del método `test` devolverán `true`.

# --instructions--

Cambia la expresión regular `favRegex` para que coincida tanto la versión del inglés americano (`favorite`) como la versión del inglés británico de la palabra (`favourite`).

# --hints--

Tu expresión regular debe usar el símbolo opcional, `?`.

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

Tu expresión regular debe coincidir con la cadena `favorite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

Tu expresión regular debe coincidir con la cadena `favourite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

Tu expresión regular no debe coincidir con la cadena `fav`

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
