---
id: 5900f4cf1000cf542c50ffe1
title: 'Problema 354: Distâncias em uma colmeia de abelhas'
challengeType: 1
forumTopicId: 302014
dashedName: problem-354-distances-in-a-bees-honeycomb
---

# --description--

Considere uma colmeia de abelhas onde cada célula é um hexágono regular perfeito com o comprimento de lado 1.

<img class="img-responsive center-block" alt="colmeia de hexágonos com comprimento de lado 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/distances-in-a-bees-honeycomb.png" style="background-color: white; padding: 10px;" />

Uma célula específica é ocupada pela abelha rainha. Para um número positivo real $L$, considere $B(L)$ como a contagem das células com distância $L$ da célula da abelha rainha (todas as distâncias são medidas do centro ao centro); você pode presumir que a colmeia é suficientemente grande para acomodar qualquer distância que queiramos considerar.

Por exemplo, $B(\sqrt{3}) = 6$, $B(\sqrt{21}) = 12$ e $B(111.111.111) = 54$.

Encontre o número de $L ≤ 5 \times {10}^{11}$, tal que $B(L) = 450$.

# --hints--

`distancesInHoneycomb()` deve retornar `58065134`.

```js
assert.strictEqual(distancesInHoneycomb(), 58065134);
```

# --seed--

## --seed-contents--

```js
function distancesInHoneycomb() {

  return true;
}

distancesInHoneycomb();
```

# --solutions--

```js
// solution required
```
