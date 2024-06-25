---
id: 5900f51a1000cf542c51002d
title: 'Problema 430: Viradas em intervalo'
challengeType: 1
forumTopicId: 302101
dashedName: problem-430-range-flips
---

# --description--

$N$ discos são colocados em uma linha, indexados de 1 a $N$, da esquerda para a direita.

Cada disco tem um lado preto e um lado branco. Inicialmente, todos os discos mostram seu lado branco.

A cada movimento, dois, não necessariamente distintos, números inteiros $A$ e $B$ entre 1 e $N$ (inclusive) são escolhidos uniformemente e aleatoriamente. Todos os discos com um índice de $A$ a $B$ (inclusive) são virados.

O exemplo a seguir mostra o caso de $N = 8$. No primeiro movimento, $A = 5$ e $B = 2$. No segundo movimento, $A = 4$ e $B = 6$.

<img class="img-responsive center-block" alt="exemplo para N = 8, com o primeiro movimento A = 5 e B = 2 e o segundo movimento A = 4 e B = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/range-flips.gif" style="background-color: white; padding: 10px;" />

Considere $E(N, M)$ como o número de discos esperado mostrando seu lado branco após $M$ movimentos. Podemos verificar que $E(3, 1) = \frac{10}{9}$, $E(3, 2) = \frac{5}{3}$, $E(10, 4) ≈ 5.157$ e $E(100, 10) ≈ 51.893$.

Encontre $E({10}^{10}, 4000)$. Dê sua resposta arredondada para 2 casas depois da vírgula.

# --hints--

`rangeFlips()` deve retornar `5000624921.38`.

```js
assert.strictEqual(rangeFlips(), 5000624921.38);
```

# --seed--

## --seed-contents--

```js
function rangeFlips() {

  return true;
}

rangeFlips();
```

# --solutions--

```js
// solution required
```
