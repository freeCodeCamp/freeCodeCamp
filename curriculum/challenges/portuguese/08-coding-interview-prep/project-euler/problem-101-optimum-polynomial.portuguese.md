---
id: 5900f3d21000cf542c50fee4
challengeType: 5
title: 'Problem 101: Optimum polynomial'
videoUrl: ''
localeTitle: 'Problema 101: Polinômio Ótimo'
---

## Description
<section id="description"> Se nos são apresentados os primeiros k termos de uma sequência, é impossível dizer com certeza o valor do próximo termo, pois existem infinitamente muitas funções polinomiais que podem modelar a sequência. Como exemplo, vamos considerar a seqüência de números de cubo. Isto é definido pela função geradora, un = n3: 1, 8, 27, 64, 125, 216, ... Suponha que nos deram apenas os dois primeiros termos desta seqüência. Trabalhando no princípio de que &quot;simples é melhor&quot;, devemos assumir um relacionamento linear e prever que o próximo prazo seja 15 (diferença comum 7). Mesmo se nos apresentassem os três primeiros termos, pelo mesmo princípio de simplicidade, um relacionamento quadrático deveria ser assumido. Definiremos OP (k, n) como o enésimo termo da função geradora polinomial ótima para os primeiros k termos de uma sequência. Deve ficar claro que OP (k, n) irá gerar com precisão os termos da sequência para n ≤ k, e potencialmente o primeiro termo incorreto (FIT) será OP (k, k + 1); em qual caso nós chamaremos isto de um mau OP (BOP). Como base, se nos fosse dado apenas o primeiro termo de seqüência, seria mais sensato assumir constância; isto é, para n ≥ 2, OP (1, n) = u1. Assim, obtemos os seguintes OPs para a seqüência cúbica: <p> OP (1, n) = 1 1, 1, 1, 1, ... OP (2, n) = 7n − 6 1, 8, 15, ... OP (3, n) = 6n2-11n + 6 1, 8, 27, 58, ... OP (4, n) = n3 1, 8, 27, 64, 125, ... </p><p> Claramente, não existem BOPs para k ≥ 4. Considerando a soma dos FITs gerados pelos BOPs (indicados em vermelho acima), obtemos 1 + 15 + 58 = 74. Considere a seguinte função geradora polinomial de décimo grau: un = 1 - n + n2 - n3 + n4 - n5 + n6 - n7 + n8 - n9 + n10 Encontre a soma dos FITs para os BOPs. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler101()</code> deve retornar 37076114526.
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
