---
id: 587d7db7367417b2b2512b9d
title: Riconoscere i pattern di inizio stringa
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

Le sfide precedenti hanno mostrato che le espressioni regolari possono essere usate per cercare un certo numero di corrispondenze. Sono anche utilizzati per cercare pattern in posizioni specifiche delle stringhe.

In una sfida precedente, hai usato il carattere del cursore (`^`) all'interno di un set di caratteri per creare un set di caratteri negati nella forma `[^thingsThatWillNotBeMatched]`. Al di fuori di un set di caratteri, il cursore viene usato per cercare pattern all'inizio delle stringhe.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

La prima chiamata a `test` restituirà `true`, mentre la seconda restituirà `false`.

# --instructions--

Usa il carattere cursore in un'espressione regolare per trovare `Cal` solo all'inizio della stringa `rickyAndCal`.

# --hints--

La tua espressione regolare dovrebbe cercare la stringa `Cal` con una lettera maiuscola.

```js
assert(calRegex.source == '^Cal');
```

La tua espressione regolare non dovrebbe usare alcun flag.

```js
assert(calRegex.flags == '');
```

La tua espressione regolare dovrebbe riconoscere `Cal` all'inizio della stringa.

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

La tua espressione regolare non dovrebbe riconoscere `Cal` nel mezzo di una stringa.

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
