---
id: 5900f50e1000cf542c510020
title: 'Problema 416: A viagem de um sapo'
challengeType: 1
forumTopicId: 302085
dashedName: problem-416-a-frogs-trip
---

# --description--

Uma fileira de $n$ quadrados contém um sapo no quadrado mais à esquerda. Em sucessivos pulos, o sapo vai para o quadrado mais à direita e depois volta para o quadrado mais à esquerda. Na viagem de ida, ele pula um, dois ou três quadrados para a direita. Na viagem de volta para casa, ele pula para a esquerda de uma maneira parecida. Ele não pode pular fora dos quadrados. Ele repete a viagem de ida e volta $m$ vezes.

Considere que $F(m, n)$ é o número de maneiras pelas quais o sapo pode viajar, sendo que, no máximo, um quadrado pode permanecer sem ser visitado.

Por exemplo, $F(1, 3) = 4$, $F(1, 4) = 15$, $F(1, 5) = 46$, $F(2, 3) = 16$ e $F(2, 100)\bmod {10}^9 = 429.619.151$.

Encontre os últimos 9 algarismos de $F(10, {10}^{12})$.

# --hints--

`frogsTrip()` deve retornar `898082747`.

```js
assert.strictEqual(frogsTrip(), 898082747);
```

# --seed--

## --seed-contents--

```js
function frogsTrip() {

  return true;
}

frogsTrip();
```

# --solutions--

```js
// solution required
```
