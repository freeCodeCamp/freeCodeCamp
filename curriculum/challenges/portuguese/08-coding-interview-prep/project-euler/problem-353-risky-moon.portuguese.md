---
id: 5900f4cd1000cf542c50ffe0
challengeType: 5
title: 'Problem 353: Risky moon'
videoUrl: ''
localeTitle: 'Problema 353: Lua Arriscada'
---

## Description
<section id="description"> Uma lua poderia ser descrita pela esfera C (r) com centro (0,0,0) e raio r. <p> Há estações na lua nos pontos da superfície de C (r) com coordenadas inteiras. A estação em (0,0, r) é chamada de estação North Pole, a estação em (0,0, -r) é chamada de estação South Pole. </p><p> Todas as estações estão conectadas umas com as outras através da via mais curta no grande arco através das estações. Uma viagem entre duas estações é arriscada. Se d é o comprimento da estrada entre duas estações, (d / (π r)) 2 é uma medida para o risco da viagem (vamos chamar-lhe o risco da estrada). Se a viagem incluir mais de duas estações, o risco da viagem é a soma dos riscos das estradas usadas. </p><p> Uma viagem direta da estação do Pólo Norte para a estação do Pólo Sul tem o comprimento πr e o risco 1. A jornada da estação do Pólo Norte para a estação do Pólo Sul via (0, r, 0) tem o mesmo comprimento, mas um risco menor (½πr / (πr)) 2+ (½πr / (πr)) 2 = 0,5. </p><p> O risco mínimo de uma viagem da estação do Pólo Norte para a estação do Pólo Sul em C (r) é M (r). </p><p> Você é dado que M (7) = 0.1784943998 arredondado para 10 dígitos atrás do ponto decimal. </p><p> Encontre ∑M (2n-1) para 1≤n≤15. </p><p> Dê sua resposta arredondada para 10 dígitos atrás do ponto decimal no formulário a.bcdefghijk. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler353()</code> deve retornar 1.2759860331.
    testString: 'assert.strictEqual(euler353(), 1.2759860331, "<code>euler353()</code> should return 1.2759860331.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler353() {
  // Good luck!
  return true;
}

euler353();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
