---
id: 587d7db5367417b2b2512b94
title: Haz coincidir cualquier cosa con el comodín punto
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

A veces no conoces (o no necesitas conocer) los caracteres exactos en tus patrones. Pensar en todas las palabras que coincidan, digamos, con una ortografía errónea llevaría mucho tiempo. Afortunadamente, puedes ahorrar tiempo utilizando el carácter de comodín: `.`

El carácter de comodín `.` coincidirá con cualquier carácter único. El comodín también es llamado `dot` y `period`. Puedes utilizar el carácter de comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si quieres hacer coincidir `hug`, `huh`, `hut`, y `hum`, puedes usar la la expresión regular `/hu./` para que coincida con las cuatro palabras.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

Ambas llamadas a `test` devolverán `true`.

# --instructions--

Completa la expresión regular `unRegex` para que coincida con las cadenas `run`, `sun`, `fun`, `pun`, `nun`, y `bun`. Tu expresión regular debe usar el carácter de comodín.

# --hints--

Debes usar el método `.test()`.

```js
assert(code.match(/\.test\(.*\)/));
```

Debes usar el carácter de comodín en tu expresión regular `unRegex`

```js
assert(/\./.test(unRegex.source));
```

Tu expresión regular `unRegex` debe coincidir con `run` en la cadena `Let us go on a run.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

Tu expresión regular `unRegex` debe coincidir con `sun` en la cadena `The sun is out today.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

Tu expresión regular `unRegex` debe coincidir con `fun` en la cadena `Coding is a lot of fun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

Tu expresión regular `unRegex` debe coincidir con `pun` en la cadena `Seven days without a pun makes one weak.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

Tu expresión regular `unRegex` debe coincidir con `nun` en la cadena `One takes a vow to be a nun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

Tu expresión regular `unRegex` debe coincidir con `bun` en la cadena `She got fired from the hot dog stand for putting her hair in a bun.`

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

Tu expresión regular `unRegex` no debe coincidir con la cadena `There is a bug in my code.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

Tu expresión regular `unRegex` no debe coincidir con la cadena `Catch me if you can.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
