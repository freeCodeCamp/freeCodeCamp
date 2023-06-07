---
id: 5900f3fd1000cf542c50ff10
title: 'Problema 145: Quantos números reversíveis há abaixo de um bilhão?'
challengeType: 1
forumTopicId: 301774
dashedName: problem-145-how-many-reversible-numbers-are-there-below-one-billion
---

# --description--

Alguns números inteiros positivos $n$ têm a propriedade de que a soma [ $n + reverse(n)$ ] consiste inteiramente de algarismos ímpares (decimais). Por exemplo, $36 + 63 = 99$ e $409 + 904 = 1313$. Chamaremos esses números de reversíveis. Portanto, 36, 63, 409 e 904 são reversíveis. Zeros à esquerda não são permitidos em $n$ ou em $reverse(n)$.

Há 120 números reversíveis abaixo de mil.

Quantos números reversíveis há abaixo de um bilhão (${10}^9$)?

# --hints--

`reversibleNumbers()` deve retornar `608720`.

```js
assert.strictEqual(reversibleNumbers(), 608720);
```

# --seed--

## --seed-contents--

```js
function reversibleNumbers() {

  return true;
}

reversibleNumbers();
```

# --solutions--

```js
// solution required
```
