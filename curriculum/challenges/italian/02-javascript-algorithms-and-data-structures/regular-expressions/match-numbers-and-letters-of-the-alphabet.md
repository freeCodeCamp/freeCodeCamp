---
id: 587d7db5367417b2b2512b97
title: Riconoscere numeri e lettere dell'alfabeto
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

L'uso del trattino (`-`) per riconoscere un intervallo di caratteri non è limitato alle lettere. Funziona anche per riconoscere un intervallo di numeri.

Ad esempio, `/[0-5]/` corrisponde a qualsiasi numero tra `0` e `5`, inclusi `0` e `5`.

Inoltre, è possibile combinare un intervallo di lettere e numeri in un unico set di caratteri.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

Crea una singola espressione regolare che riconosca un intervallo di lettere tra `h` e `s`, e un intervallo di numeri tra `2` e `6`. Ricordati di includere i flag appropriati nell'espressione regolare.

# --hints--

La tua espressione regolare `myRegex` dovrebbe riconoscere 17 elementi.

```js
assert(result.length == 17);
```

La tua espressione regolare `myRegex` dovrebbe usare il flag global.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

La tua espressione regolare `myRegex` dovrebbe usare il flag insensibile alle maiuscole e minuscole.

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
