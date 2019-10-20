---
id: 5900f46d1000cf542c50ff7f
challengeType: 5
title: 'Problem 255: Rounded Square Roots'
videoUrl: ''
localeTitle: 'Problema 255: Raízes Quadradas Arredondadas'
---

## Description
<section id="description"> Definimos a raiz quadrada-arredondada de um inteiro positivo n como a raiz quadrada de n arredondada para o inteiro mais próximo. <p> O procedimento a seguir (essencialmente o método de Heron adaptado para a aritmética inteira) encontra a raiz quadrada-arredondada de n: Seja d o número de dígitos do número n. Se d for ímpar, ajuste x0 = 2 × 10 (d-1) ⁄2. Se d for par, ajuste x0 = 7 × 10 (d-2) ⁄2. Repetir: </p><p> até xk + 1 = xk. </p><p> Como exemplo, vamos encontrar a raiz quadrada arredondada de n = 4321.n tem 4 dígitos, então x0 = 7 × 10 (4-2) ⁄2 = 70. Como x2 = x1, paramos aqui. Então, depois de apenas duas iterações, descobrimos que a raiz quadrada arredondada de 4321 é 66 (a raiz quadrada é 65.7343137…). </p><p> O número de iterações necessárias ao usar esse método é surpreendentemente baixo. Por exemplo, podemos encontrar a raiz quadrada-arredondada de um inteiro de 5 dígitos (10.000 ≤ n ≤ 99.999) com uma média de 3.2102888889 iterações (o valor médio foi arredondado para 10 casas decimais). </p><p> Usando o procedimento descrito acima, qual é o número médio de iterações necessárias para encontrar a raiz quadrada-arredondada de um número de 14 dígitos (1013 ≤ n &lt;1014)? Dê sua resposta arredondada para 10 casas decimais. </p><p> Nota: Os símbolos ⌊x⌋ e ⌈x⌉ representam a função do chão e a função do teto, respectivamente. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler255()</code> deve retornar 4.447401118.
    testString: 'assert.strictEqual(euler255(), 4.447401118, "<code>euler255()</code> should return 4.447401118.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler255() {
  // Good luck!
  return true;
}

euler255();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
