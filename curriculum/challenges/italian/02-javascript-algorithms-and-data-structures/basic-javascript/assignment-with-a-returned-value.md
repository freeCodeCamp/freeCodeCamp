---
id: 56533eb9ac21ba0edf2244c3
title: Assegnazione con un valore restituito
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

Se ricordi la nostra discussione su <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">Memorizzare valori con l'operatore di assegnazione</a>, l'espressione a destra del segno uguale viene risolta prima che il valore venga assegnato. Questo significa che possiamo prendere il valore restituito da una funzione e assegnarlo a una variabile.

Supponiamo di avere definito una funzione `sum` che somma due numeri.

```js
ourSum = sum(5, 12);
```

Chiamare la funzione `sum` con gli argomenti `5` e `12` produce un valore di ritorno di `17`. Questo valore di ritorno è assegnato alla variabile `ourSum`.

# --instructions--

Chiama la funzione `processArg` con un argomento di `7` e assegna il valore che restituisce alla variabile `processed`.

# --hints--

`b` dovrebbe avere un valore di `2`

```js
assert(processed === 2);
```

Dovresti assegnare `processArg` a `processed`

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```
