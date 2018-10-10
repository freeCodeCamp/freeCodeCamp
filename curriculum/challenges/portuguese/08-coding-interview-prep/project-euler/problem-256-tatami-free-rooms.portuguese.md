---
id: 5900f46c1000cf542c50ff7e
challengeType: 5
title: 'Problem 256: Tatami-Free Rooms'
videoUrl: ''
localeTitle: 'Problema 256: Salas sem Tatami'
---

## Description
<section id="description"> Tatami são esteiras retangulares, usadas para cobrir completamente o chão de uma sala, sem sobreposição. <p> Assumindo que o único tipo de tatami disponível tenha dimensões 1 × 2, há obviamente algumas limitações para a forma e tamanho das salas que podem ser cobertas. </p><p> Para este problema, consideramos apenas salas retangulares com dimensões inteiras a, be tamanho s = a · b. Usamos o termo &#39;tamanho&#39; para denotar a área de superfície do piso da sala e - sem perda de generalidade - adicionamos a condição a ≤ b. </p><p> Há uma regra a seguir quando se coloca o tatami: não deve haver pontos onde os cantos de quatro esteiras diferentes se encontrem. Por exemplo, considere os dois arranjos abaixo para uma sala de 4 × 4: </p><p> O arranjo à esquerda é aceitável, enquanto o da direita não é: um &quot;X&quot; vermelho no meio marca o ponto em que quatro tatames se encontram. </p><p> Devido a essa regra, certos quartos de tamanho uniforme não podem ser cobertos com tatame: nós os chamamos de quartos sem tatami. Além disso, definimos T (s) como o número de salas sem tatami de tamanho s. </p><p> O menor quarto sem tatame tem tamanho s = 70 e dimensões 7 × 10. Todas as outras salas de tamanho s = 70 podem ser cobertas com tatame; São eles: 1 × 70, 2 × 35 e 5 × 14. Por isso, T (70) = 1. </p><p> Da mesma forma, podemos verificar que T (1320) = 5, porque há exatamente 5 salas sem tatame de tamanho s = 1320: 20 × 66, 22 × 60, 24 × 55, 30 × 44 e 33 × 40. De fato, s = 1320 é o menor tamanho do quarto s para o qual T (s) = 5. </p><p> Encontre os menores tamanhos de tamanho de sala para os quais T (s) = 200. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler256()</code> deve retornar 85765680.
    testString: 'assert.strictEqual(euler256(), 85765680, "<code>euler256()</code> should return 85765680.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler256() {
  // Good luck!
  return true;
}

euler256();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
