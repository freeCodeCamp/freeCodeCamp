---
id: 587d7db4367417b2b2512b91
title: Ignorare le maiuscole nelle corrispondenze
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

Fino ad ora, hai guardato alle espressioni regolari per fare dei riconoscimenti letterali di stringhe. Ma a volte, potresti voler trovare corrispondenze senza tener conto delle differenze tra maiuscole e minuscole.

In inglese "case" (o a volte "letter case") è la differenza tra lettere maiuscole e lettere minuscole. Esempi di maiuscole sono `A`, `B`e `C`. Esempi di minuscole sono `a`, `b`e `c`.

È possibile riconoscere entrambi i casi utilizzando quello che è chiamato un flag. Ci sono altri flag, ma qui ti concentrerai sul flag che ignora la differenza tra maiuscole e minuscole - il flag `i`. Puoi usarlo aggiungendolo all'espressione regolare. Un esempio di utilizzo di questo flag è `/ignorecase/i`. Questa espressione regolare può riconoscere le stringhe `ignorecase`, `igNoreCase`, e `IgnoreCase`.

# --instructions--

Scrivi un'espressione regolare `fccRegex` per riconoscere `freeCodeCamp`, indipendentemente dalle maiuscole. La tua espressione regolare non dovrebbe riconoscere alcuna abbreviazione o variazione con gli spazi.

# --hints--

La tua espressione regolare dovrebbe riconoscere la stringa `freeCodeCamp`

```js
assert(fccRegex.test('freeCodeCamp'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `FreeCodeCamp`

```js
assert(fccRegex.test('FreeCodeCamp'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `FreecodeCamp`

```js
assert(fccRegex.test('FreecodeCamp'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `FreeCodecamp`

```js
assert(fccRegex.test('FreeCodecamp'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `Free Code Camp`

```js
assert(!fccRegex.test('Free Code Camp'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `FreeCOdeCamp`

```js
assert(fccRegex.test('FreeCOdeCamp'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `FCC`

```js
assert(!fccRegex.test('FCC'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `FrEeCoDeCamp`

```js
assert(fccRegex.test('FrEeCoDeCamp'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `FrEeCodECamp`

```js
assert(fccRegex.test('FrEeCodECamp'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `FReeCodeCAmp`

```js
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
