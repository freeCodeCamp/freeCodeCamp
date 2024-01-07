---
id: 587d7db9367417b2b2512ba7
title: Specificare il numero esatto di corrispondenze
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

È possibile specificare un numero inferiore e superiore di pattern con gli specificatori di quantità utilizzando le parentesi graffe. A volte vuoi che ci sia un numero specifico di corrispondenze.

Per specificare un certo numero di pattern, basta mettere quel numero tra le parentesi graffe.

Ad esempio, per riconoscere solo la parola `hah` con la lettera `a` `3` volte, la tua espressione regolare sarebbe `/ha{3}h/`.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

Nell'ordine, le tre chiamate a `test` restituiranno `false`, `true`, e `false`.

# --instructions--

Cambia l'espressione regolare `timRegex` per riconoscere la parola `Timber` solo quando ha quattro lettere `m`.

# --hints--

L'espressione regolare dovrebbe usare parentesi graffe.

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

La tua espressione regolare non dovrebbe riconoscere la stringa `Timber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `Timmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `Timmmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `Timmmmber`

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `Timber` con 30 `m` in essa.

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```
