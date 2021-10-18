---
id: 587d7db9367417b2b2512ba5
title: Specificare il numero superiore e inferiore di corrispondenze
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

Ricorda che puoi usare il segno più `+` per cercare uno o più caratteri e l'asterisco `*` per cercare zero o più caratteri. Questi sono utili, ma a volte si desidera riconoscere una certa gamma di pattern.

È possibile specificare il numero inferiore e superiore di pattern con gli <dfn>specificatori di quantità</dfn>. Gli specificatori di quantità sono utilizzati con le parentesi graffe (`{` e `}`). Metterai due numeri tra le parentesi graffe - per il numero inferiore e superiore di pattern.

Ad esempio, per riconoscere solo la lettera `a` che appare tra `3` e `5` volte nella stringa `ah`, la tua espressione regolare sarà `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

La prima chiamata a `test` restituirà `true`, mentre la seconda restituirà `false`.

# --instructions--

Cambiare l'espressione regolare `ohRegex` in modo da riconoscere l'intera frase `Oh no` solo quando ha da `3` a `6` lettere `h`.

# --hints--

La tua espressione regolare dovrebbe usare le parentesi graffe.

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

La tua espressione regolare non dovrebbe riconoscere la stringa `Ohh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `Ohhh no`

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

La tua espressione regolare dovrebbe riconoscere la stringa `Ohhhh no`

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

La tua espressione regolare dovrebbe riconoscere la stringa `Ohhhhh no`

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

La tua espressione regolare dovrebbe riconoscere la stringa `Ohhhhhh no`

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

La tua espressione regolare non dovrebbe riconoscere la stringa `Ohhhhhhh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```
