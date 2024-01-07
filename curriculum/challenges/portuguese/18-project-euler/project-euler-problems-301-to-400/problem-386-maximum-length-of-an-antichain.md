---
id: 5900f4ef1000cf542c510001
title: 'Problema 386: Comprimento máximo de uma anticadeia'
challengeType: 1
forumTopicId: 302050
dashedName: problem-386-maximum-length-of-an-antichain
---

# --description--

Considere $n$ como um número inteiro e $S(n)$ como o conjunto de fatores de $n$.

Um subconjunto $A$ de $S(n)$ é chamado de anticadeia de $S(n)$ se $A$ tiver apenas um elemento ou se nenhum dos elementos de $A$ divide qualquer um dos outros elementos de $A$.

Por exemplo: $S(30) = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$

$\\{2, 5, 6\\}$ não é uma anticadeia de $S(30)$.

$\\{2, 3, 5\\}$ é uma anticadeia de $S(30)$.

Considere $N(n)$ como o comprimento máximo de uma anticadeia de $S(n)$.

Encontre a $\sum N(n)$ para $1 ≤ n ≤ {10}^8$

# --hints--

`maximumLengthOfAntichain()` deve retornar `528755790`.

```js
assert.strictEqual(maximumLengthOfAntichain(), 528755790);
```

# --seed--

## --seed-contents--

```js
function maximumLengthOfAntichain() {

  return true;
}

maximumLengthOfAntichain();
```

# --solutions--

```js
// solution required
```
