---
id: 5900f5241000cf542c510037
title: 'Problema 440: GCD y Mosaico'
challengeType: 1
forumTopicId: 302112
dashedName: problem-440-gcd-and-tiling
---

# --description--

We want to tile a board of length $n$ and height 1 completely, with either 1 × 2 blocks or 1 × 1 blocks with a single decimal digit on top:

<img class="img-responsive center-block" alt="diez bloques de 1x1 con un dígito decimal en la parte superior, y un bloque 1x2" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-1.png" style="background-color: white; padding: 10px;" />

Por ejemplo, aqui hay algunas maneras de embaldosar un tablero de longitud $n = 8$:

<img class="img-responsive center-block" alt="ejemplos de formas para embaldosar un tablero de longitud n = 8" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-2.png" style="background-color: white; padding: 10px;" />

Sea el número $T(n)$ número de formas para embaldosar un tablero de longitud $n$ como se describió anteriormente.

Por ejemplo, $T(1) = 10$ y $T(2) = 101$.

Sea $S(L)$ la suma triple $\sum_{a, b, c} gcd(T(c^a), T(c^b))$ para $1 ≤ a, b, c ≤ L$.

Por ejemplo:

$$\begin{align}   & S(2) = 10\\,444 \\\\
  & S(3) = 1\\,292\\,115\\,238\\,446\\,807\\,016\\,106\\,539\\,989 \\\\ & S(4)\bmod 987\\,898\\,789 = 670\\,616\\,280. \end{align}$$

Encuentra $S(2000)\bmod 987\\,898\\,789$.

# --hints--

`gcdAndTiling()` debería devolver `970746056`.

```js
assert.strictEqual(gcdAndTiling(), 970746056);
```

# --seed--

## --seed-contents--

```js
function gcdAndTiling() {

  return true;
}

gcdAndTiling();
```

# --solutions--

```js
// solution required
```
