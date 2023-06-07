---
id: 5900f4351000cf542c50ff47
title: >-
  Problema 200: Trova il 200° sqube a prova di primo contenente la sotto-stringa contigua "200"
challengeType: 1
forumTopicId: 301840
dashedName: >-
  problem-200-find-the-200th-prime-proof-sqube-containing-the-contiguous-sub-string-200
---

# --description--

Definiamo uno sqube come un numero nella forma ${p^2}{q^3}$, dove $p$ e $q$ sono primi distinti.

Ad esempio, $200 = {5^2}{2^3}$ o $120072949 = {{23}^2}{{61}^3}$.

I primi cinque sqube sono 72, 108, 200, 392 e 500.

È interessante notare che 200 è anche il primo numero per il quale non si può cambiare nessuna singola cifra ottenendo un primo; chiameremo tali numeri, "a prova di primo". Il prossimo sqube a prova di primo che contiene la sotto-stringa contigua `200` è 1992008.

Trova il 200mo sqube a prova di primo contenente la sotto-stringa contigua `200`.

# --hints--

`primeProofSqubeWithSubString()` dovrebbe restituire `229161792008`.

```js
assert.strictEqual(primeProofSqubeWithSubString(), 229161792008);
```

# --seed--

## --seed-contents--

```js
function primeProofSqubeWithSubString() {

  return true;
}

primeProofSqubeWithSubString();
```

# --solutions--

```js
// solution required
```
