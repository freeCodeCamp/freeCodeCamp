---
id: 5900f4e41000cf542c50fff5
title: 'Problema 375: Minimo delle sottosequenze'
challengeType: 1
forumTopicId: 302037
dashedName: problem-375-minimum-of-subsequences
---

# --description--

Lascia che $S_n$ sia una sequenza intera prodotta con il seguente generatore di numeri pseudo-casuali:

$$\begin{align}         S_0 & = 290\\,797 \\\\
  S_{n + 1} & = {S_n}^2\bmod 50\\,515\\,093 \end{align}$$

Sia $A(i, j)$ il minimo dei numeri $S_i, S_{i + 1}, \ldots, S_j$ per $i ≤ j$. Sia $M(N) = \sum A(i, j)$ per $1 ≤ i ≤ j ≤ N$.

Possiamo verificare che $M(10) = 432\\,256\\,955$ e $M(10\\,000) = 3\\,264\\,567\\,774\\,119$.

Trova $M(2\\,000\\,000\\,000)$.

# --hints--

`minimumOfSubsequences()` dovrebbe restituire `7435327983715286000`.

```js
assert.strictEqual(minimumOfSubsequences(), 7435327983715286000);
```

# --seed--

## --seed-contents--

```js
function minimumOfSubsequences() {

  return true;
}

minimumOfSubsequences();
```

# --solutions--

```js
// solution required
```
