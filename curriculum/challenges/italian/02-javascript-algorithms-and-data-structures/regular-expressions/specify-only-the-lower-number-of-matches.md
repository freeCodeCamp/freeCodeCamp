---
id: 587d7db9367417b2b2512ba6
title: Specificare solo il numero inferiore di corrispondenze
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

È possibile specificare il numero inferiore e superiore di corrispondenze con gli specificatori di quantità utilizzando le parentesi graffe. A volte si desidera specificare solo il numero inferiore di pattern senza un limite superiore.

Per specificare solo il numero inferiore di pattern, manteni il primo numero seguito da una virgola.

Ad esempio, per abbinare solo la stringa `hah` con la lettera `a` che appare almeno `3` volte, la tua espressione regolare sarebbe `/ha{3,}h/`.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

In ordine, le tre chiamate a `test` restituiranno `true`, `false`e `true`.

# --instructions--

Cambia l'espressione regolare `haRegex` per riconoscere la parola `Hazzah` solo quando ha quattro o più lettere `z`.

# --hints--

L'espressione regolare dovrebbe usare parentesi graffe.

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

La tua espressione regolare non dovrebbe riconoscere la stringa `Hazzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `Hazzzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `Hazzzzah`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

La tua espressione regolare dovrebbe riconoscere la stringa `Hazzzzzah`

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

La tua espressione regolare dovrebbe riconoscere la stringa `Hazzzzzzah`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

La tua espressione regolare dovrebbe riconoscere la stringa `Hazzah` con 30 `z` in essa.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
