---
id: 587d7db6367417b2b2512b99
title: Riconoscere i caratteri che compaiono una o più volte
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

A volte, è necessario riconoscere un carattere (o un gruppo di caratteri) che appare una o più volte in una riga. Questo significa che esso compare almeno una volta, e può essere ripetuto.

Puoi usare il carattere `+` per verificare se è così. Ricorda, il carattere o il pattern deve essere presente consecutivamente. Cioè, i caratteri ripetuti devono essere adiacenti.

Ad esempio, `/a+/g` troverà una corrispondenza in `abc` e restituirà `["a"]`. A causa del `+`, troverà anche una singola corrispondenza in `aabc` e restituirà `["aa"]`.

Se invece controllasse la stringa `abab`, troverebbe due corrispondenze e restituirebbe `["a", "a"]` perché i caratteri `a` non sono in fila - c'è una `b` tra di essi. Infine, dato che non c'è `a` nella stringa `bcd`, qui non troverà una corrispondenza.

# --instructions--

Desideri trovare le corrispondenze in cui la lettera `s` compare una o più volte in `Mississippi`. Scrivi un'espressione regolare che utilizza il segno `+`.

# --hints--

La tua espressione regolare `myRegex` dovrebbe utilizzare il segno `+` per riconoscere uno o più caratteri `s`.

```js
assert(/\+/.test(myRegex.source));
```

La tua espressione regolare `myRegex` dovrebbe riconoscere 2 elementi.

```js
assert(result.length == 2);
```

La variabile `result` dovrebbe essere un array con due corrispondenze di `ss`

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
