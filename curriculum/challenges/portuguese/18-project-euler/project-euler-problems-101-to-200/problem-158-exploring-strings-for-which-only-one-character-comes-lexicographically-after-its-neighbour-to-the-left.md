---
id: 5900f40a1000cf542c50ff1d
title: >-
  Problema 158: Explorar strings para as quais apenas um caractere vem lexicograficamente após seu vizinho à esquerda
challengeType: 1
forumTopicId: 301789
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

Levando em conta três letras diferentes das 26 letras do alfabeto, strings de comprimento três podem ser formadas.

Exemplos são 'abc', 'hat' e 'zyx'.

Quando analisamos estes três exemplos, verificamos que, para "abc", dois caracteres vêm lexicograficamente depois do vizinho à esquerda.

Para "hat", há exatamente um caractere que vem lexicograficamente depois de seu vizinho à esquerda. Para "zyx", não há caracteres que venham lexicograficamente depois de seu vizinho à esquerda.

Ao todo, há 10.400 strings de tamanho 3 para as quais apenas um caractere vem lexicograficamente após seu vizinho à esquerda.

Consideremos agora strings de $n ≤ 26$ caracteres diferentes do alfabeto.

Para cada $n$, $p(n)$ é o número de strings de comprimento $n$ para as quais exatamente um caractere vem lexicograficamente depois de seu vizinho à esquerda.

Qual é o valor máximo de $p(n)$?

# --hints--

`lexicographicNeighbours()` deve retornar `409511334375`.

```js
assert.strictEqual(lexicographicNeighbours(), 409511334375);
```

# --seed--

## --seed-contents--

```js
function lexicographicNeighbours() {

  return true;
}

lexicographicNeighbours();
```

# --solutions--

```js
// solution required
```
