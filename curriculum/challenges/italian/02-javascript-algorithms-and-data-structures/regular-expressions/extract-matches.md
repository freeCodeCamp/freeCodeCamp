---
id: 587d7db4367417b2b2512b92
title: Estrarre le corrispondenze
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

Finora, hai solo verificato se un pattern esiste o meno all'interno di una stringa. Puoi anche estrarre le corrispondenze che hai trovato con il metodo `.match()`.

Per usare il metodo `.match()`, applica il metodo su una stringa e passa l'espressione regolare tra parentesi.

Ecco un esempio:

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

Qui la prima corrispondenza (`match`) restituirà `["Hello"]` e la seconda restituirà `["expressions"]`.

Nota che la sintassi di `.match` è il "contrario" del metodo `.test` che hai utilizzato finora:

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

Applica il metodo `.match()` per estrarre la stringa `coding`.

# --hints--

Il risultato (`result`) dovrebbe contenere la stringa `coding`

```js
assert(result.join() === 'coding');
```

La tua espressione regolare `codingRegex` dovrebbe cercare la stringa `coding`

```js
assert(codingRegex.source === 'coding');
```

Dovresti usare il metodo `.match()`.

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

# --solutions--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```
