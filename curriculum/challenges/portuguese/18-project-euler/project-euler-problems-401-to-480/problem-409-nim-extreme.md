---
id: 5900f5061000cf542c510017
title: 'Problema 409: Nim extremos'
challengeType: 1
forumTopicId: 302077
dashedName: problem-409-nim-extreme
---

# --description--

Considere $n$ um inteiro positivo. Considere as posições nim onde:

- Não existam $n$ pilhas não vazias.
- Cada pilha tenha um tamanho inferior a $2^n$.
- Não haja duas pilhas com o mesmo tamanho.

Considere $W(n)$ como o número de posições nim vencedoras que satisfazem as condições acima (uma posição é vencedora se o primeiro jogador tiver uma estratégia vencedora).

Por exemplo, $W(1) = 1$, $W(2) = 6$, $W(3) = 168$, $W(5) = 19.764.360$ e $W(100)\bmod 1.000.000.007 = 384.777.056$.

Encontre $W(10.000.000)\bmod 1.000.000.007$.

# --hints--

`nimExtreme()` deve retornar `253223948`.

```js
assert.strictEqual(nimExtreme(), 253223948);
```

# --seed--

## --seed-contents--

```js
function nimExtreme() {

  return true;
}

nimExtreme();
```

# --solutions--

```js
// solution required
```
