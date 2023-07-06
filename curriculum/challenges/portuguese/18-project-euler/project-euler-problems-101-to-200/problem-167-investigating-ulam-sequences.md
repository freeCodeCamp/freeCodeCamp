---
id: 5900f4141000cf542c50ff26
title: 'Problema 167: Investigação de sequências de Ulam'
challengeType: 1
forumTopicId: 301801
dashedName: problem-167-investigating-ulam-sequences
---

# --description--

Para dois números inteiros positivos, $a$ e $b$, a sequência de Ulam $U(a,b)$ é definida por ${U{(a,b)}\_1} = a$, ${U{(a,b)}\_2} = b$ e por $k > 2$. ${U{(a,b)}\_k}$ é o menor número inteiro maior que ${U{(a,b)}\_{(k-1)}}$ que pode ser escrito exatamente de um modo como a soma dos dois membros distintos anteriores de $U(a,b)$.

Por exemplo, a sequência $U(1,2)$ começa com

$$1, 2, 3 = 1 + 2, 4 = 1 + 3, 6 = 2 + 4, 8 = 2 + 6, 11 = 3 + 8$$

5 não pertence a ela porque $5 = 1 + 4 = 2 + 3$ tem duas representações como a soma de dois membros anteriores. Da mesma forma, $7 = 1 + 6 = 3 + 4$.

Encontre a $\sum {U(2, 2n + 1)_k}$ para $2 ≤ n ≤ 10$, onde $k = {10}^{11}$.

# --hints--

`ulamSequences()` deve retornar `3916160068885`.

```js
assert.strictEqual(ulamSequences(), 3916160068885);
```

# --seed--

## --seed-contents--

```js
function ulamSequences() {

  return true;
}

ulamSequences();
```

# --solutions--

```js
// solution required
```
