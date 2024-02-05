---
id: 5900f4f81000cf542c51000b
title: 'Problem 396: Schwache Goodstein-Folge'
challengeType: 1
forumTopicId: 302061
dashedName: problem-396-weak-goodstein-sequence
---

# --description--

For any positive integer $n$, the $n$th weak Goodstein sequence $\\{g1, g2, g3, \ldots\\}$ is defined as:

- $g_1 = n$
- for $k > 1$, $g_k$ is obtained by writing $g_{k - 1}$ in base $k$, interpreting it as a base $k + 1$ number, and subtracting 1.

Die Sequenz endet wenn $g_k$ zu 0 wird.

Zum Beispiel ist die $6$-te schwache Goodstein-Folge $\\{6, 11, 17, 25, \ldots\\}$:

- $g_1 = 6$.
- $g_2 = 11$ since $6 = 110_2$, $110_3 = 12$, and $12 - 1 = 11$.
- $g_3 = 17$ since $11 = 102_3$, $102_4 = 18$, and $18 - 1 = 17$.
- $g_4 = 25$ since $17 = 101_4$, $101_5 = 26$, and $26 - 1 = 25$.

and so on.

Es kann nachgewiesen werden, dass jede schwache Goodstein-Folge endet.

Lass $G(n)$ die Anzahl der Nicht-Null-Elemente in der $n$-ten schwachen Goodstein-Folge sein.

Es kann nachgewiesen werden, dass $G(2) = 3$, $G(4) = 21$ und $G(6) = 381$.

Es kann auch nachgewiesen werden, dass $\sum G(n) = 2517$ für $1 ≤ n &lt; 8$.

Find the last 9 digits of $\sum G(n)$ for $1 ≤ n &lt; 16$.

# --hints--

`weakGoodsteinSequence()` should return `173214653`.

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
