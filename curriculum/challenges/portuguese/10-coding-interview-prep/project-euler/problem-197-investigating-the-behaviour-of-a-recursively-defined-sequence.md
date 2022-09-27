---
id: 5900f4311000cf542c50ff44
title: 'Problema 197: Investigação do comportamento de uma sequência definida recursivamente'
challengeType: 1
forumTopicId: 301835
dashedName: problem-197-investigating-the-behaviour-of-a-recursively-defined-sequence
---

# --description--

Dada a função $f(x) = ⌊{2}^{30.403243784 - x^2}⌋ × {10}^{-9}$ (onde ⌊ ⌋ é a função piso), a sequência $u_n$ é definida por $u_0 = -1$ e $u_{n + 1} = f(u_n)$.

Encontre $u_n + u_{n + 1}$ para $n = {10}^{12}$. Dê sua resposta com 9 algarismos após o ponto (9 casas depois da vírgula).

# --hints--

`recursivelyDefinedSequence()` deve retornar `1.710637717`.

```js
assert.strictEqual(recursivelyDefinedSequence(), 1.710637717);
```

# --seed--

## --seed-contents--

```js
function recursivelyDefinedSequence() {

  return true;
}

recursivelyDefinedSequence();
```

# --solutions--

```js
// solution required
```
