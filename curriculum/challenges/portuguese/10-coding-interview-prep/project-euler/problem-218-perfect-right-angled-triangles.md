---
id: 5900f4461000cf542c50ff59
title: 'Problema 218: Triângulos retos perfeitos'
challengeType: 1
forumTopicId: 301860
dashedName: problem-218-perfect-right-angled-triangles
---

# --description--

Considere o triângulo reto com lados $a=7$, $b=24$ e $c=25$.

A área deste triângulo é 84, que é divisível pelos números perfeitos 6 e 28.

Além disso, ele é um triângulo reto primitivo, já que tem os maiores divisores comuns $gcd(a,b) = 1$ e $gcd(b,c) = 1$.

Por fim, $c$ é um quadrado perfeito.

Chamaremos um triângulo de triângulo reto perfeito se:

- for um triângulo reto primitivo
- sua hipotenusa for um quadrado perfeito

Chamaremos um triângulo de triângulo reto superperfeito se:

- for um triângulo reto perfeito
- sua área for um múltiplo dos números perfeitos 6 e 28.

Quantos triângulos retos perfeitos com $c ≤ {10}^{16}$ existem que não são superperfeitos?

# --hints--

`perfectRightAngledTriangles()` deve retornar `0`.

```js
assert.strictEqual(perfectRightAngledTriangles(), 0);
```

# --seed--

## --seed-contents--

```js
function perfectRightAngledTriangles() {

  return true;
}

perfectRightAngledTriangles();
```

# --solutions--

```js
// solution required
```
