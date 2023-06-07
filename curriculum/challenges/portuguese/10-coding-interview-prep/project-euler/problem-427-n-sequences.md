---
id: 5900f5181000cf542c51002a
title: 'Problema 427: Sequencias n'
challengeType: 1
forumTopicId: 302097
dashedName: problem-427-n-sequences
---

# --description--

Uma sequência de números inteiros $S = \\{s_i\\}$ é chamada de sequência $n$ se ela tem $n$ elementos e cada elemento $s_i$ satisfaz $1 ≤ s_i ≤ n$. Portanto, há $n^n$ sequências $n$ distintas no total.

Por exemplo, a sequência $S = \\{1, 5, 5, 10, 7, 7, 7, 2, 3, 7\\}$ é uma sequência de 10.

Para qualquer sequência $S$, considere $L(S)$ como o comprimento da subsequência contígua mais longa de $S$ com o mesmo valor. Por exemplo, para a sequência $S$ dada acima, $L(S) = 3$, por causa dos três 7 consecutivos.

Considere $f(n) = \sum L(S)$ para todas as $S$ sequências $n$.

Por exemplo, $f(3) = 45$, $f(7) = 1.403.689$ e $f(11) = 481.496.895.121$.

Encontre $f(7.500.000)\bmod 1.000.000.009$.

# --hints--

`nSequences()` deve retornar `97138867`.

```js
assert.strictEqual(nSequences(), 97138867);
```

# --seed--

## --seed-contents--

```js
function nSequences() {

  return true;
}

nSequences();
```

# --solutions--

```js
// solution required
```
