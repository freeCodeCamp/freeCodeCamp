---
id: 5900f4141000cf542c50ff26
title: 'Problema 167: Indagare le sequenze di Ulam'
challengeType: 1
forumTopicId: 301801
dashedName: problem-167-investigating-ulam-sequences
---

# --description--

Per due interi positivi $a$ e $b$, la successione di Ulam $U(a,b)$ è definita da ${U{(a,b)}\_1} = a$, ${U{(a,b)}\_2} = b$ e per $k > 2$, ${U{(a,b)}\_k}$ è il più piccolo numero intero maggiore di ${U{(a,b)}\_{(k-1)}}$ che può essere scritto esattamente in un modo come la somma di due membri precedenti distinti di $U(a,b)$.

Ad esempio, la successione $U(1,2)$ inizia con

$$1, 2, 3 = 1 + 2, 4 = 1 + 3, 6 = 2 + 4, 8 = 2 + 6, 11 = 3 + 8$$

5 non appartiene ad esso perché $5 = 1 + 4 = 2 + 3$ ha due rappresentazioni come la somma di due membri precedenti, così come $7 = 1 + 6 = 3 + 4$.

Trova $\sum {U(2, 2n + 1)_k}$ per $2 ≤ n ≤ 10$, dove $k = {10}^{11}$.

# --hints--

`ulamSequences()` dovrebbe restituire `3916160068885`.

```js
assert.strictEqual(ulamSequences(), 3916160068885);
```

# --seed--

## --seed-contents--

```js
function ulamSequences() {

  return true;
}

ulamSequences();
```

# --solutions--

```js
// solution required
```
