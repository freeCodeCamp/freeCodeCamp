---
id: 5900f4f81000cf542c51000b
title: 'Problema 396: Sequenza debole di Goodstein'
challengeType: 1
forumTopicId: 302061
dashedName: problem-396-weak-goodstein-sequence
---

# --description--

Per qualsiasi numero intero positivo $n$, la sequenza debole $n$-ma di Goodstein $\\{g1, g2, g3, \ldots\\}$ è definita come:

- $g_1 = n$
- per $k > 1$, $g_k$ si ottiene scrivendo $g_{k - 1}$ in base $k$, interpretandolo come un numero in base $k + 1$, e sottraendo 1.

La sequenza termina quando $g_k$ diventa 0.

Ad esempio, la sequenza $6$ di Goodstein debole è $\\{6, 11, 17, 25, \ldots\\}$:

- $g_1 = 6$.
- $g_2 = 11$ da $6 = 110_2$, $110_3 = 12$, and $12 - 1 = 11$.
- $g_3 = 17$ da $11 = 102_3$, $102_4 = 18$, e $18 - 1 = 17$.
- $g_4 = 25$ da $17 = 101_4$, $101_5 = 26$, e $26 - 1 = 25$.

e così via.

Si può dimostrare che ogni sequenza debole di Goodstein termina.

Sia $G(n)$ il numero di elementi diversi da zero nella sequenza $n$ di Goodstein debole.

Si può verificare che $G(2) = 3$, $G(4) = 21$ e $G(6) = 381$.

Può anche essere verificato che $\sum G(n) = 2517$ per $1 ≤ n &lt; 8$.

Trova le ultime 9 cifre di $\sum G(n)$ per $1 ≤ n &lt; 16$.

# --hints--

`weakGoodsteinSequence()` dovrebbe restituire `173214653`.

```js
assert.strictEqual(weakGoodsteinSequence(), 173214653);
```

# --seed--

## --seed-contents--

```js
function weakGoodsteinSequence() {

  return true;
}

weakGoodsteinSequence();
```

# --solutions--

```js
// solution required
```
