---
id: 5900f5141000cf542c510027
title: 'Problema 423: Lanci di dadi consecutivi'
challengeType: 1
forumTopicId: 302093
dashedName: problem-423-consecutive-die-throws
---

# --description--

Sia $n$ un numero intero positivo.

Un dado a 6 lati viene lanciato $n$ volte. Sia $c$ il numero di coppie di lanci consecutivi che danno lo stesso valore.

Ad esempio, se $n = 7$ e i valori dei lanci sono (1, 1, 5, 6, 6, 6, 3), allora le seguenti coppie di lanci consecutivi danno lo stesso valore:

$$\begin{align}   & (\underline{1}, \underline{1}, 5, 6, 6, 6, 3) \\\\
  & (1, 1, 5, \underline{6}, \underline{6}, 6, 3) \\\\ & (1, 1, 5, 6, \underline{6}, \underline{6}, 3) \end{align}$$

Pertanto, $c = 3$ per (1, 1, 5, 6, 6, 6, 3).

Definisci $C(n)$ come il numero di risultati del lancio di un dado a 6 facce per $n$ volte tali che $c$ non superi $π(n)$.<sup>1</sup>

Per esempio, $C(3) = 216$, $C(4) = 1290$, $C(11) = 361\\,912\\,500$ e $C(24) = 4\\,727\\,547\\,363\\,281\\,250\\,000$.

Definisci $S(L)$ come $\sum C(n)$ per $1 ≤ n ≤ L$.

Per esempio, $S(50)\bmod 1\\,000\\,000\\,007 = 832\\,833\\,871$.

Trova $S(50\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

<sup>1</sup> $π$ indica la funzione di conteggio dei primi, cioè $π(n)$ è il numero di primi $≤ n$.

# --hints--

`consecutiveDieThrows()` dovrebbe restituire `653972374`.

```js
assert.strictEqual(consecutiveDieThrows(), 653972374);
```

# --seed--

## --seed-contents--

```js
function consecutiveDieThrows() {

  return true;
}

consecutiveDieThrows();
```

# --solutions--

```js
// solution required
```
