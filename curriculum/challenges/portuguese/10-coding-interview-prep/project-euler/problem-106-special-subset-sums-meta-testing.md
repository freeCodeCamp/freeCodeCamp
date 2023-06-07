---
id: 5900f3d71000cf542c50fee9
title: 'Problema 106: Somas especiais de subconjuntos: meta-testes'
challengeType: 1
forumTopicId: 301730
dashedName: problem-106-special-subset-sums-meta-testing
---

# --description--

Considere que $S(A)$ representa a soma dos elementos no conjunto A, de tamanho n. Vamos chamá-la de uma soma especial definida se, para dois subconjuntos disjuntos, B e C, as seguintes propriedades são verdadeiras:

1. $S(B) ≠ S(C)$; isto é, as somas de subconjuntos não podem ser iguais.
2. Se B contém mais elementos que C, $S(B) > S(C)$.

Para este problema, vamos supor que um determinado conjunto contém n elementos estritamente crescentes e já satisfaz a segunda regra.

Notavelmente, dos 25 pares de subconjuntos possíveis que podem ser obtidos a partir de um conjunto para o qual n = 4, apenas 1 destes pares precisa ser testado para a igualdade (primeira regra). Da mesma forma, quando n = 7, apenas 70 dos 966 pares de subconjunto precisam ser testados.

Para n = 12, quantos dos 261625 pares de subconjunto que podem ser obtidos precisam ser testados para a igualdade?

**Observação:** este problema está relacionado aos problemas 103 e 105.

# --hints--

`subsetSumsMetaTesting()` deve retornar `21384`.

```js
assert.strictEqual(subsetSumsMetaTesting(), 21384);
```

# --seed--

## --seed-contents--

```js
function subsetSumsMetaTesting() {

  return true;
}

subsetSumsMetaTesting();
```

# --solutions--

```js
// solution required
```
