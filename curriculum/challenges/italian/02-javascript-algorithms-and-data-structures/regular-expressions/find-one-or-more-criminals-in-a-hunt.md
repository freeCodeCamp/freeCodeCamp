---
id: 587d7db7367417b2b2512b9c
title: Trovare uno o più criminali in una caccia
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

È ora di fare un po' di pausa e testare le tue nuove abilità di scrittura di espressioni regolari. Un gruppo di criminali è evaso dalla prigione ed è scappato via, ma non sai quanti sono. Tuttavia, sai che stanno vicini quando sono in mezzo ad altre persone. Tu sei responsabile della ricerca di tutti i criminali contemporaneamente.

Ecco un esempio per rivedere come farlo:

L'espressione regolare `/z+/` riconosce la lettera `z` quando appare una o più volte in una riga. Troverà corrispondenze in tutte le seguenti stringhe:

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

Ma non trova corrispondenze nelle seguenti stringhe poiché non ci sono caratteri `z`:

```js
""
"ABC"
"abcabc"
```

# --instructions--

Scrivi un'espressione regolare greedy che trovi uno o più criminali all'interno di un gruppo di altre persone. Un criminale è rappresentato dalla lettera maiuscola `C`.

# --hints--

La tua espressione regolare dovrebbe riconoscere un criminale (`C`) nella stringa `C`

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

La tua espressione regolare dovrebbe riconoscere due criminali (`CC`) nella stringa `CC`

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

La tua espressione regolare dovrebbe riconoscere tre criminali (`CCC`) nella stringa `P1P5P4CCCcP2P6P3`.

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

La tua espressione regolare dovrebbe riconoscere cinque criminali (`CCCCC`) nella stringa `P6P2P7P4P5CCCCCP3P1`

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

La tua espressione regolare non dovrebbe riconoscere nessun criminale nella stringa vuota `""`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

La tua espressione regolare non dovrebbe riconoscere nessun criminale nella stringa `P1P2P3`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

La tua espressione regolare dovrebbe riconoscere cinquanta criminali (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) nella stringa `P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`.

```js
assert(
  'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
    reCriminals
  ) &&
    'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
      reCriminals
    )[0] == 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
);
```

# --seed--

## --seed-contents--

```js
let reCriminals = /./; // Change this line
```

# --solutions--

```js
let reCriminals = /C+/; // Change this line
```
