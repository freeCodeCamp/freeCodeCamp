---
id: 5900f4671000cf542c50ff7a
title: 'Problema 251: terne di Cardano'
challengeType: 1
forumTopicId: 301899
dashedName: problem-251-cardano-triplets
---

# --description--

Una terna di numeri interi positivi ($a$,$b$,$c$) è chiamata terna di Cardano se soddisfa la condizione:

$$\sqrt[3]{a + b \sqrt{c}} + \sqrt[3]{a - b \sqrt{c}} = 1$$

Per esempio, (2,1,5) è una terna di Cardano.

Esistono 149 terne di Cardano per cui $a + b + c ≤ 1000$.

Trova quante terne di Cardano esistono tali che $a + b + c ≤ 110\\,000\\,000$.

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
