---
id: 5900f3d21000cf542c50fee4
challengeType: 5
title: 'Problem 101: Optimum polynomial'
videoUrl: ''
localeTitle: 'Problema 101: polinomio óptimo'
---

## Description
<section id="description"> Si se nos presentan los primeros k términos de una secuencia, es imposible decir con certeza el valor del siguiente término, ya que hay infinitas funciones polinomiales que pueden modelar la secuencia. Como ejemplo, consideremos la secuencia de números elevados al cubo. Esto se define por la función de generación, un = n3: 1, 8, 27, 64, 125, 216, ... Supongamos que solo nos dieron los dos primeros términos de esta secuencia. Trabajando sobre el principio de que &quot;simple es lo mejor&quot;, deberíamos asumir una relación lineal y predecir que el próximo término sea 15 (diferencia común 7). Incluso si se nos presentaran los primeros tres términos, por el mismo principio de simplicidad, se debería asumir una relación cuadrática. Definiremos OP (k, n) como el enésimo término de la función de generación polinómica óptima para los primeros k términos de una secuencia. Debe quedar claro que OP (k, n) generará con precisión los términos de la secuencia para n ≤ k, y potencialmente el primer término incorrecto (FIT) será OP (k, k + 1); en cuyo caso lo llamaremos un mal OP (BOP). Como base, si solo nos dieran el primer término de secuencia, sería más sensato asumir la constancia; es decir, para n ≥ 2, OP (1, n) = u1. De ahí obtenemos los siguientes OPs para la secuencia cúbica: <p> OP (1, n) = 1 1, 1, 1, 1, ... OP (2, n) = 7n − 6 1, 8, 15, ... OP (3, n) = 6n2−11n + 6 1, 8, 27, 58, ... OP (4, n) = n3 1, 8, 27, 64, 125, ... </p><p> Claramente, no existen BOP para k ≥ 4. Al considerar la suma de FIT generados por los BOP (indicados en rojo arriba), obtenemos 1 + 15 + 58 = 74. Considere la siguiente función de generación polinómica de décimo grado: un = 1 - n + n2 - n3 + n4 - n5 + n6 - n7 + n8 - n9 + n10 Encuentra la suma de FIT para los BOP. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler101()</code> debe devolver 37076114526.
    testString: 'assert.strictEqual(euler101(), 37076114526, "<code>euler101()</code> should return 37076114526.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler101() {
  // Good luck!
  return true;
}

euler101();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
