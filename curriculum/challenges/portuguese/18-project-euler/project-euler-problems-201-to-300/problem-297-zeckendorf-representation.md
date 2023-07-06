---
id: 5900f4951000cf542c50ffa8
title: 'Problema 297: Representação de Zeckendorf'
challengeType: 1
forumTopicId: 301949
dashedName: problem-297-zeckendorf-representation
---

# --description--

Cada novo número na sequência de Fibonacci é gerado pela soma dos dois números anteriores.

Começando com 1 e 2, os primeiros 10 termos serão: 1, 2, 3, 5, 8, 13, 21, 34, 55 e 89.

Cada número inteiro positivo pode ser escrito exclusivamente como uma soma de termos não consecutivos da sequência de Fibonacci. Por exemplo, 100 = 3 + 8 + 89.

Tal soma se chama a representação de Zeckendorf do número.

Para qualquer número inteiro $n>0$, considere $z(n)$ como o número de termos na representação de Zeckendorf de $n$.

Assim, $z(5) = 1$, $z(14) = 2$, $z(100) = 3$ etc.

Além disso, para $0 &lt; n &lt; {10}^6$, $\sum z(n) = 7.894.453$.

Encontre $\sum z(n)$ para $0 &lt; n &lt; {10}^{17}$.

# --hints--

`zeckendorfRepresentation()` deve retornar `2252639041804718000`.

```js
assert.strictEqual(zeckendorfRepresentation(), 2252639041804718000);
```

# --seed--

## --seed-contents--

```js
function zeckendorfRepresentation() {

  return true;
}

zeckendorfRepresentation();
```

# --solutions--

```js
// solution required
```
