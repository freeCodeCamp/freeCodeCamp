---
id: 5900f4111000cf542c50ff24
challengeType: 5
title: 'Problem 165: Intersections'
videoUrl: ''
localeTitle: 'Problema 165: Interseções'
---

## Description
<section id="description"> Um segmento é definido exclusivamente por seus dois pontos finais. Ao considerar dois segmentos de linha na geometria plana, há três possibilidades: os segmentos possuem zero pontos, um ponto ou infinitamente muitos pontos em comum. Além disso, quando dois segmentos têm exatamente um ponto em comum, pode ser que esse ponto comum seja um ponto final de um dos segmentos ou de ambos. Se um ponto comum de dois segmentos não for um ponto final de nenhum dos segmentos, será um ponto interior de ambos os segmentos. Vamos chamar um ponto comum T de dois segmentos L1 e L2, um verdadeiro ponto de intersecção de L1 e L2, se T for o único ponto comum de L1 e L2 e T for um ponto interior de ambos os segmentos. <p> Considere os três segmentos L1, L2 e L3: L1: (27, 44) a (12, 32) L2: (46, 53) a (17, 62) L3: (46, 70) a (22, 40) Pode ser verificado que os segmentos de linha L2 e L3 têm um verdadeiro ponto de intersecção. Notamos que como o um dos pontos finais de L3: (22,40) está em L1, este não é considerado um verdadeiro ponto de intersecção. L1 e L2 não têm um ponto comum. Assim, entre os três segmentos de linha, encontramos um verdadeiro ponto de intersecção. Agora vamos fazer o mesmo para 5000 segmentos de linha. Para isso, geramos 20000 números usando o chamado gerador de números pseudo-aleatórios &quot;Blum Blum Shub&quot;. s0 = 290797 sn + 1 = sn × sn (módulo 50515093) tn = sn (módulo 500) Para criar cada segmento de linha, usamos quatro números consecutivos tn. Ou seja, o segmento de primeira linha é dado por: (t1, t2) a (t3, t4) Os quatro primeiros números computados de acordo com o gerador acima devem ser: 27, 144, 12 e 232. O primeiro segmento seria ( 27,144) para (12,232). Quantos pontos de interseção verdadeiros são encontrados entre os 5000 segmentos de linha? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler165()</code> deve retornar 2868868.
    testString: 'assert.strictEqual(euler165(), 2868868, "<code>euler165()</code> should return 2868868.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler165() {
  // Good luck!
  return true;
}

euler165();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
