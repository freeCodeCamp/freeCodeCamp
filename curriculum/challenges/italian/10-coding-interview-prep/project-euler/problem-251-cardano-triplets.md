---
id: 5900f4671000cf542c50ff7a
title: 'Problema 251: Triplette di Cardano'
challengeType: 1
forumTopicId: 301899
dashedName: problem-251-cardano-triplets
---

# --description--

Una tripletta di numeri interi positivi ($a$,$b$,$c$) è chiamata una tripletta di Cardano se soddisfa la condizione:

$$\sqrt[3]{a + b \sqrt{c}} + \sqrt[3]{a - b \sqrt{c}} = 1$$

Per esempio, (2,1,5) è una tripletta di Cardano.

Esistono 149 triplette di Cardano per le quali $a + b + c ≤ 1000$.

Trova quante Triplette di Cardano esistono in modo tale che $a + b + c ≤ 110\\,000\\,000$.

# --hints--

`cardanoTriplets()` dovrebbe restituire `18946051`.

```js
assert.strictEqual(cardanoTriplets(), 18946051);
```

# --seed--

## --seed-contents--

```js
function cardanoTriplets() {

  return true;
}

cardanoTriplets();
```

# --solutions--

```js
// solution required
```
