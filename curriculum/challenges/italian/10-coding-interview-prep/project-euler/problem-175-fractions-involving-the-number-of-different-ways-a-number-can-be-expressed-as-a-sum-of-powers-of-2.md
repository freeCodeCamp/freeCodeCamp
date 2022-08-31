---
id: 5900f41c1000cf542c50ff2e
title: >-
  Problema 175: Frazioni che implicano il numero di modi diversi in cui un numero può essere espresso come una somma di potenze di 2
challengeType: 1
forumTopicId: 301810
dashedName: >-
  problem-175-fractions-involving-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Definisci $f(0) = 1$ e $f(n)$ in modo che sia il numero di modi per scrivere $n$ come una somma di potenze di 2 nessuna delle quali si verifica più di due volte.

Per esempio, $f(10) = 5$ poiché ci sono cinque modi diversi per esprimere 10:

$$10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1$$

Si può dimostrare che per ogni frazione $\frac{p}{q}\\; (p>0, q>0)$ esiste almeno un numero intero $n$ tale che $\frac{f(n)}{f(n - 1)} = \frac{p}{q}$.

Per esempio, il più piccolo $n$ per il quale $\frac{f(n)}{f(n - 1)} = \frac{13}{17}$ è 241. L'espansione binaria di 241 è 11110001.

Leggendo questo numero binario dal bit più significativo al bit meno significativo ci sono 4 uno, 3 zero e 1 uno. Chiameremo la stringa 4,3,1 l'espansione binaria abbreviata di 241.

Trova l'espansione binaria abbreviata del più piccolo $n$ per cui

$$\frac{f(n)}{f(n - 1)} = \frac{123456789}{987654321}$$

Dai la tua risposta sotto forma di una stringa con interi separati da virgola, senza spazi bianchi.

# --hints--

`shortenedBinaryExpansionOfNumber()` dovrebbe restituire una stringa.

```js
assert(typeof shortenedBinaryExpansionOfNumber() === 'string');
```

`shortenedBinaryExpansionOfNumber()` dovrebbe restituire la stringa `1,13717420,8`.

```js
assert.strictEqual(shortenedBinaryExpansionOfNumber(), '1,13717420,8');
```

# --seed--

## --seed-contents--

```js
function shortenedBinaryExpansionOfNumber() {

  return true;
}

shortenedBinaryExpansionOfNumber();
```

# --solutions--

```js
// solution required
```
