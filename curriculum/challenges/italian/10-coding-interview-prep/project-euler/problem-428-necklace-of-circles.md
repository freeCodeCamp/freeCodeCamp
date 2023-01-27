---
id: 5900f5191000cf542c51002b
title: 'Problema 428: Collana di Cerchi'
challengeType: 1
forumTopicId: 302098
dashedName: problem-428-necklace-of-circles
---

# --description--

Siano $a$, $b$ e $c$ numeri positivi.

Siano $W$, $X$, $Y$, $Z$ quattro punti collineari dove $|WX| = a$, $|XY| = b$, $|YZ| = c$ and $|WZ| = a + b + c$.

Sia $C_{\text{in}}$ il cerchio con diametro $XY$.

Sia $C_{\text{out}}$ il cerchio con diametro $WZ$.

La tripletta ($a$, $b$, $c$) si chiama tripletta *collana* se puoi posizionare $k ≥ 3$ cerchi distinti $C_1, C_2, \ldots, C_k$ in modo che:

- $C_i$ non ha punti interni comuni con $C_j$ for $1 ≤ i$, $j ≤ k$ e $i ≠ j$,
- $C_i$ è tangente sia a $C_{\text{in}}$ che a $C_{\text{out}}$ per $1 ≤ i ≤ k$,
- $C_i$ è tangente a $C_{i + 1}$ per $1 ≤ i &lt; k$, e
- $C_k$ è tangente a $C_1$.

Ad esempio, (5, 5, 5) e (4, 3, 21) sono triplette collineari, mentre si può dimostrare che (2, 2, 5) non lo è.

<img class="img-responsive center-block" alt="una rappresentazione visiva di una tripletta collineare" src="https://cdn.freecodecamp.org/curriculum/project-euler/necklace-of-circles.png" style="background-color: white; padding: 10px;" />

Sia $T(n)$ il numero di triplette collineari $(a, b, c)$ tali che $a$ $b$ e $c$ sono numeri interi positivi, e $b ≤ n$. Per esempio, $T(1) = 9$, $T(20) = 732$ e $T(3\\,000) = 438\\,106$.

Trova $T(1\\,000\\,000\\,000)$.

# --hints--

`necklace(1000000000)` dovrebbe restituire `747215561862`.

```js
assert.strictEqual(necklace(1000000000), 747215561862);
```

# --seed--

## --seed-contents--

```js
function necklace(n) {

  return true;
}

necklace(1000000000)
```

# --solutions--

```js
// solution required
```
