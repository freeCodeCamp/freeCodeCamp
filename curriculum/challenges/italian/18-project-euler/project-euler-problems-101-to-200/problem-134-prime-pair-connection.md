---
id: 5900f3f21000cf542c50ff05
title: 'Problema 134: connessioni di coppie di numeri primi'
challengeType: 1
forumTopicId: 301762
dashedName: problem-134-prime-pair-connection
---

# --description--

Considera i primi consecutivi $p_1 = 19$ e $p_2 = 23$. Si può verificare che 1219 è il numero più piccolo per cui le ultime cifre sono formate da $p_1$ essendo anche divisibile da $p_2$.

Infatti, con l'eccezione di $p_1 = 3$ e $p_2 = 5$, per ogni coppia di numeri primi consecutivi, $p_2 > p_1$, esiste un valore di $n$ per cui le ultime cifre sono formate da $p_1$ e $n$ è divisibile per $p_2$. Sia $S$ il più piccolo di questi valori di $n$.

Trova $\sum{S}$ per ogni coppia di numeri primi consecutivi con $5 ≤ p_1 ≤ 1000000$.

# --hints--

`primePairConnection()` dovrebbe restituire `18613426663617120`.

```js
assert.strictEqual(primePairConnection(), 18613426663617120);
```

# --seed--

## --seed-contents--

```js
function primePairConnection() {

  return true;
}

primePairConnection();
```

# --solutions--

```js
// solution required
```
