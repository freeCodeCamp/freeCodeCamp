---
id: 5900f4151000cf542c50ff28
title: >-
  Problema 169: Explorar o número de maneiras diferentes pelas quais um número pode ser expresso como uma soma de potências de 2
challengeType: 1
forumTopicId: 301803
dashedName: >-
  problem-169-exploring-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Defina $f(0)=1$ e $f(n)$ como o número de diferentes maneiras pelas quais $n$ pode ser expresso como uma soma de potências inteiras de 2 usando cada potência não mais que duas vezes.

Por exemplo, $f(10)=5$ já que há cinco maneiras diferentes de expressar 10:

$$\begin{align}   & 1 + 1 + 8 \\\\
  & 1 + 1 + 4 + 4 \\\\   & 1 + 1 + 2 + 2 + 4 \\\\
  & 2 + 4 + 4 \\\\ & 2 + 8 \end{align}$$

Qual é $f({10}^{25})$?

# --hints--

`numberOfWaysToExpress()` deve retornar `178653872807`.

```js
assert.strictEqual(numberOfWaysToExpress(), 178653872807);
```

# --seed--

## --seed-contents--

```js
function numberOfWaysToExpress() {

  return true;
}

numberOfWaysToExpress();
```

# --solutions--

```js
// solution required
```
