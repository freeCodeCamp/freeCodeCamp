---
id: 5900f4d41000cf542c50ffe7
title: 'Problema 360: Esfera assustadora'
challengeType: 1
forumTopicId: 302021
dashedName: problem-360-scary-sphere
---

# --description--

Dados dois pontos, ($x_1$, $y_1$, $z_1$) e ($x_2$, $y_2$, $z_2$), em um espaço tridimensional, a distância de Manhattan entre esses pontos está definida como $|x_1 - x_2| + |y_1 - y_2| + |z_1 - z_2|$.

Considere $C(r)$ como uma esfera com o raio $r$ e o centro na origem $O(0, 0, 0)$.

Considere $I(r)$ como o conjunto de todos os pontos com coordenadas em números inteiros na superfície de $C(r)$.

Considere $S(r)$ como a soma das distâncias de Manhattan de todos os elementos de $I(r)$ até a origem $O$.

Ex: $S(45)=34518$.

Encontre $S({10}^{10})$.

# --hints--

`scarySphere()` deve retornar `878825614395267100`.

```js
assert.strictEqual(scarySphere(), 878825614395267100);
```

# --seed--

## --seed-contents--

```js
function scarySphere() {

  return true;
}

scarySphere();
```

# --solutions--

```js
// solution required
```
