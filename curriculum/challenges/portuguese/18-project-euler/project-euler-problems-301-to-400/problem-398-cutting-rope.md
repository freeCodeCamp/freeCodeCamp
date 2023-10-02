---
id: 5900f4fa1000cf542c51000d
title: 'Problema 398: Cortando cordas'
challengeType: 1
forumTopicId: 302063
dashedName: problem-398-cutting-rope
---

# --description--

Dentro de uma corda de comprimento $n$, $n - 1$ pontos são colocados com distância de 1 um do outro e das extremidades. Entre esses pontos, escolhemos $m - 1$ pontos aleatórios e cortamos as cordas nesses pontos para criar $m$ segmentos.

Considere $E(n, m)$ como o comprimento esperado do segundo segmento menor. Por exemplo, $E(3, 2) = 2$ e $E(8, 3) = \frac{16}{7}$. Observe que, se diversos segmentos tiverem o mesmo comprimento menor, o segundo segmento menor é definido como igual ao comprimento menor.

Encontre $E({10}^7, 100)$. Dê sua resposta arredondada para 5 casas depois da vírgula.

# --hints--

`cuttingRope()` deve retornar `2010.59096`.

```js
assert.strictEqual(cuttingRope(), 2010.59096);
```

# --seed--

## --seed-contents--

```js
function cuttingRope() {

  return true;
}

cuttingRope();
```

# --solutions--

```js
// solution required
```
