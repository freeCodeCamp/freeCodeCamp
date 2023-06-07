---
id: 5900f4831000cf542c50ff95
title: 'Problema 278: Combinazioni lineari di semiprimi'
challengeType: 1
forumTopicId: 301928
dashedName: problem-278-linear-combinations-of-semiprimes
---

# --description--

Dati i valori di numeri interi $1 &lt; a_1 &lt; a_2 &lt; \ldots &lt; a_n$, considera la combinazione lineare $q_1a_1 + q_2a_2 + \ldots + q_na_n = b$, utilizzando solo valori interi $q_k ≥ 0$.

Nota che per un dato set di $a_k$ potrebbe essere che non tutti i valori di $b$ siano possibili. Per esempio, se $a_1 = 5$ e $a_2 = 7$, non ci sono $q_1 ≥ 0$ e $q_2 ≥ 0$ tali che $b$ possa essere 1, 2, 3, 4, 6, 8, 9, 11, 13, 16, 18 o 23.

Infatti 23 è il più grande valore impossibile di $b$ per $a_1 = 5$ e $a_2 = 7$. Chiamiamo quindi $f(5, 7) = 23$. Allo stesso modo, si può dimostrare che $f(6, 10, 15)=29$ e $f(14, 22, 77) = 195$.

Trova $\sum f(pq,pr,qr)$, dove $p$, $q$ e $r$ sono numeri primi e $p &lt; q &lt; r &lt; 5000$.

# --hints--

`linearCombinationOfSemiprimes()` dovrebbe restituire `1228215747273908500`.

```js
assert.strictEqual(linearCombinationOfSemiprimes(), 1228215747273908500);
```

# --seed--

## --seed-contents--

```js
function linearCombinationOfSemiprimes() {

  return true;
}

linearCombinationOfSemiprimes();
```

# --solutions--

```js
// solution required
```
