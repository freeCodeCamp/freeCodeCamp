---
id: 5900f5241000cf542c510037
title: 'Problema 440: Máximo divisor comum e ladrilhamento'
challengeType: 1
forumTopicId: 302112
dashedName: problem-440-gcd-and-tiling
---

# --description--

Queremos preencher com ladrilhos um tabuleiro de comprimento $n$ e altura 1 completamente, com blocos de 1 × 2 ou 1 × 1 com um único algarismo decimal no topo:

<img class="img-responsive center-block" alt="dez blocos 1x1 com um único algarismo decimal no topo e um bloco 1x2" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-1.png" style="background-color: white; padding: 10px;" />

Por exemplo, aqui temos algumas maneiras de ladrilhar um tabuleiro de comprimento $n = 8$:

<img class="img-responsive center-block" alt="exemplos de maneiras de ladrilhar um tabuleiro de comprimento n = 8" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-2.png" style="background-color: white; padding: 10px;" />

Considere $T(n)$ como o número de maneiras de ladrilhar um tabuleiro de comprimento $n$, como descrito acima.

Por exemplo, $T(1) = 10$ e $T(2) = 101$.

Considere $S(L)$ como a soma tripla $\sum_{a, b, c} gcd(T(c^a), T(c^b))$ para $1 ≤ a, b, c ≤ L$.

Por exemplo:

$$\begin{align}   & S(2) = 10.444 \\\\
  & S(3) = 1.292.115.238.446.807.016.106.539.989 \\\\ & S(4)\bmod 987.898.789 = 670.616.280. \end{align}$$

Encontre $S(2000)\bmod 987.898.789$.

# --hints--

`gcdAndTiling()` deve retornar `970746056`.

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
