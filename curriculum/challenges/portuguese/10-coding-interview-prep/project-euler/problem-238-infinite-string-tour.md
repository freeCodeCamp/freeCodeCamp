---
id: 5900f45b1000cf542c50ff6d
title: 'Problema 238: Passeio por uma string infinita'
challengeType: 1
forumTopicId: 301883
dashedName: problem-238-infinite-string-tour
---

# --description--

Crie uma sequência de números usando o gerador de números pseudoaleatório "Blum Blum Shub":

$$ s_0 = 14025256 \\\\
s_{n + 1} = {s_n}^2 \\; mod \\; 20.300.713 $$

Concatene esses números $s_0s_1s_2\ldots$ para criar uma string $w$ de comprimento infinito. Assim, $w = 14025256741014958470038053646\ldots$

Para um número inteiro positivo $k$, se não existir nenhuma substring de $w$ com uma soma dos algarismos igual a $k$, $p(k)$ é definido como zero. Se pelo menos uma substring de $w$ existir com a soma dos algarismos igual a $k$, nós definimos $p(k) = z$, onde $z$ é a posição de início da primeira substring desse tipo.

Por exemplo:

As substrings 1, 14, 1402, … com as respectivas somas de algarismos iguais a 1, 5, 7, … começam na posição 1, e daí $p(1) = p(5) = p(7) = \ldots = 1$.

As substrings 4, 402, 4025, … com as respectivas somas de algarismos iguais a 4, 6, 11, … começam na posição 2, e daí $p(4) = p(6) = p(11) = \ldots = 2$.

As substrings 02, 0252, … com as respectivas somas de algarismos iguais a 2, 9, … começam na posição 3, e daí $p(2) = p(9) = \ldots = 3$.

Observe que a substring 025, começando na posição 3, tem uma soma de algarismos igual a 7, mas havia uma substring anterior (começando na posição 1) com uma soma de algarismos igual a 7, então $p(7) = 1$, não 3.

Podemos verificar que, para $0 &lt; k ≤ {10}^3$, $\sum p(k) = 4742$.

Encontre $\sum p(k)$, por $0 &lt; k ≤ 2 \times {10}^{15}$.

# --hints--

`infiniteStringTour()` deve retornar `9922545104535660`.

```js
assert.strictEqual(infiniteStringTour(), 9922545104535660);
```

# --seed--

## --seed-contents--

```js
function infiniteStringTour() {

  return true;
}

infiniteStringTour();
```

# --solutions--

```js
// solution required
```
