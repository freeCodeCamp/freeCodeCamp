---
id: 587d7db5367417b2b2512b94
title: Riconoscere qualunque cosa con la wildcard punto
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

A volte non conoscerai (o non ne avrai bisogno) i caratteri esatti nei tuoi pattern. Pensare a tutte le parole che riconoscono - diciamo - un errore di ortografia, richiederebbe molto tempo. Per fortuna, puoi risparmiare tempo usando il carattere jolly: `.`

Il carattere jolly `.` riconoscerà qualsiasi carattere. Il carattere jolly è anche chiamato `dot` e `period`. È possibile utilizzare il carattere jolly proprio come qualsiasi altro carattere nell'espressione regolare. Ad esempio, se volessi riconoscere `hug`, `huh`, `hut`, e `hum`, potresti utilizzare l'espressione regolare `/hu./` per far corrispondere tutte e quattro le parole.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

Entrambe queste chiamate a `test` restituiranno `true`.

# --instructions--

Completa l'espressione regolare `unRegex` in modo che corrisponda alle stringhe `run`, `sun`, `fun`, `pun`, `nun`e `bun`. La tua espressione regolare dovrebbe usare il carattere jolly.

# --hints--

Dovresti usare il metodo `.test()`.

```js
assert(code.match(/\.test\(.*\)/));
```

Dovresti usare il carattere jolly nella tua espressione regolare `unRegex`

```js
assert(/\./.test(unRegex.source));
```

La tua espressione regolare `unRegex` dovrebbe riconoscere `run` nella stringa `Let us go on a run.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

La tua espressione regolare `unRegex` dovrebbe riconoscere `sun` nella stringa `The sun is out today.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

La tua espressione regolare `unRegex` dovrebbe riconoscere `fun` nella stringa `Coding is a lot of fun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

La tua espressione regolare `unRegex` dovrebbe riconoscere `pun` nella stringa `Seven days without a pun makes one weak.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

La tua espressione regolare `unRegex` dovrebbe riconoscere `nun` nella stringa `One takes a vow to be a nun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

La tua espressione regolare `unRegex` dovrebbe riconoscere `bun` nella stringa `She got fired from the hot dog stand for putting her hair in a bun.`

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

La tua espressione regolare `unRegex` non dovrebbe riconoscere la stringa `There is a bug in my code.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

La tua espressione regolare `unRegex` non dovrebbe riconoscere la stringa `Catch me if you can.`

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
