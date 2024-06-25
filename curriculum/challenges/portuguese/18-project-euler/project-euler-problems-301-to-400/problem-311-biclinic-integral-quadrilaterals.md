---
id: 5900f4a31000cf542c50ffb6
title: 'Problema 311: Quadriláteros inteiros biclínicos'
challengeType: 1
forumTopicId: 301967
dashedName: problem-311-biclinic-integral-quadrilaterals
---

# --description--

$ABCD$ é um quadrilátero de lados expressos em números inteiros e convexo, com $1 ≤ AB &lt; BC &lt; CD &lt; AD$.

$BD$ tem comprimento inteiro. $O$ é o ponto central de $BD$. $AO$ tem comprimento inteiro.

Vamos chamar $ABCD$ de um quadrilátero integral biclínico se $AO = CO ≤ BO = DO$.

Por exemplo, o quadrilátero a seguir é um quadrilátero integral biclínico: $AB = 19$, $BC = 29$, $CD = 37$, $AD = 43$, $BD = 48$ e $AO = CO = 23$.

<img class="img-responsive center-block" alt="quadrilátero ABCD, com ponto O, um ponto médio de BD" src="https://cdn.freecodecamp.org/curriculum/project-euler/biclinic-integral-quadrilaterals.gif" style="background-color: white; padding: 10px;" />

Considere $B(N)$ como o número de quadriláteros integrais biclínicos distintos $ABCD$ que satisfazem ${AB}^2 + {BC}^2 + {CD}^2 + {AD}^2 ≤ N$. Podemos verificar que $B(10.000) = 49$ e $B(1.000.000) = 38239$.

Encontre $B(10.000.000.000)$.

# --hints--

`biclinicIntegralQuadrilaterals()` deve retornar `2466018557`.

```js
assert.strictEqual(biclinicIntegralQuadrilaterals(), 2466018557);
```

# --seed--

## --seed-contents--

```js
function biclinicIntegralQuadrilaterals() {

  return true;
}

biclinicIntegralQuadrilaterals();
```

# --solutions--

```js
// solution required
```
