---
id: 5900f4931000cf542c50ffa4
title: 'Problema 293: Pseudonúmeros da sorte'
challengeType: 1
forumTopicId: 301945
dashedName: problem-293-pseudo-fortunate-numbers
---

# --description--

Um número inteiro positivo e par $N$ será chamado de admissível se for uma potência de 2 ou seus fatores primos distintos forem número primos consecutivos.

Os primeiros doze números admissíveis são 2, 4, 6, 8, 12, 16, 18, 24, 30, 32, 36 e 48.

Se $N$ for admissível, o menor inteiro $M > 1$ tal que $N + M$ é um número primo, será chamado de pseudonúmero da sorte para $N$.

Por exemplo, $N = 630$ é admissível, pois é par e seus fatores primos distintos são os números primos consecutivos 2, 3, 5 e 7. O próximo número primo depois de 631 é 641; portanto, o pseudonúmero da sorte para 630 é $M = 11$. Também se pode ver que o pseudonúmero da sorte para 16 é 3.

Encontre a soma de todos os pseudonúmeros da sorte distintos para números admissíveis $N$ inferiores a ${10}^9$.

# --hints--

`pseudoFortunateNumbers()` deve retornar `2209`.

```js
assert.strictEqual(pseudoFortunateNumbers(), 2209);
```

# --seed--

## --seed-contents--

```js
function pseudoFortunateNumbers() {

  return true;
}

pseudoFortunateNumbers();
```

# --solutions--

```js
// solution required
```
