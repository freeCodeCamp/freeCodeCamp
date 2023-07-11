---
id: 5900f5001000cf542c510013
title: 'Problema 403: Pontos da rede contidos por uma parábola e linha'
challengeType: 1
forumTopicId: 302071
dashedName: problem-403-lattice-points-enclosed-by-parabola-and-line
---

# --description--

Para os números inteiros $a$ e $b$, definimos $D(a, b)$ como o domínio cercado pela parábola $y = x^2$ e pela linha $y = ax + b: D(a, b) = \\{ (x, y) | x^2 ≤ y ≤ ax + b \\}$.

$L(a, b)$ é definido como o número de pontos da rede contidos em $D(a, b)$. Por exemplo, $L(1, 2) = 8$ e $L(2, -1) = 1$.

Também definimos $S(N)$ como a soma de $L(a, b)$ para todos os pares ($a$, $b$), tal que a área de $D(a, b)$ é um número racional e $|a|,|b| ≤ N$.

Podemos verificar que $S(5) = 344$ e que $S(100) = 26.709.528$.

Encontre $S({10}^{12})$. Dê sua resposta $\bmod {10}^8$.

# --hints--

`latticePoints()` deve retornar `18224771`.

```js
assert.strictEqual(latticePoints(), 18224771);
```

# --seed--

## --seed-contents--

```js
function latticePoints() {

  return true;
}

latticePoints();
```

# --solutions--

```js
// solution required
```
