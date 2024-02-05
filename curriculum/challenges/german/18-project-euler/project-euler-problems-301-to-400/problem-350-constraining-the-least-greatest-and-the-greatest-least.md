---
id: 5900f4cb1000cf542c50ffdd
title: 'Problem 350: Einschränkung des kleinsten Größten und des größten Kleinsten'
challengeType: 1
forumTopicId: 302010
dashedName: problem-350-constraining-the-least-greatest-and-the-greatest-least
---

# --description--

A list of size $n$ is a sequence of $n$ natural numbers. Examples are (2, 4, 6), (2, 6, 4), (10, 6, 15, 6), and (11).

Der größte gemeinsame Teiler oder $gcd$ einer Liste ist die größte natürliche Zahl, die alle Einträge der Liste teilt. Examples: $gcd(2, 6, 4) = 2$, $gcd(10, 6, 15, 6) = 1$ and $gcd(11) = 11$.

Das kleinste gemeinsame Vielfache ($lcm$) einer Liste ist die kleinste natürliche Zahl, die durch jeden Eintrag der Liste teilbar ist. Examples: $lcm(2, 6, 4) = 12$, $lcm(10, 6, 15, 6) = 30$ and $lcm(11) = 11$.

Lasse $f(G, L, N)$ die Anzahl der Listen der Größe $N$ mit $gcd ≥ G$ und $lcm ≤ L$ sein. For example:

$$\begin{align}   & f(10, 100, 1) = 91 \\\\
  & f(10, 100, 2) = 327 \\\\   & f(10, 100, 3) = 1135 \\\\
  & f(10, 100, 1000)\bmod {101}^4 = 3\\,286\\,053 \end{align}$$

Find $f({10}^6, {10}^{12}, {10}^{18})\bmod {101}^4$.

# --hints--

`leastGreatestAndGreatestLeast()` should return `84664213`.

```js
assert.strictEqual(leastGreatestAndGreatestLeast(), 84664213);
```

# --seed--

## --seed-contents--

```js
function leastGreatestAndGreatestLeast() {

  return true;
}

leastGreatestAndGreatestLeast();
```

# --solutions--

```js
// solution required
```
