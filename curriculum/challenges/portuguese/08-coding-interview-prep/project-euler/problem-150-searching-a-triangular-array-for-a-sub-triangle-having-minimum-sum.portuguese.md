---
id: 5900f4031000cf542c50ff15
challengeType: 5
title: 'Problem 150: Searching a triangular array for a sub-triangle having minimum-sum'
videoUrl: ''
localeTitle: 'Problema 150: Procurando uma matriz triangular por um sub-triângulo com soma mínima'
---

## Description
<section id="description"> Em uma matriz triangular de inteiros positivos e negativos, desejamos encontrar um sub-triângulo de tal forma que a soma dos números que ele contém seja a menor possível. No exemplo abaixo, pode ser facilmente verificado que o triângulo marcado satisfaz essa condição tendo uma soma de -42. <p> Desejamos fazer um arranjo triangular com mil linhas, então geramos 500500 números pseudo-aleatórios sk no intervalo ± 219, usando um tipo de gerador de números aleatórios (conhecido como Gerador Congruencial Linear) como segue: t: = 0 </p><p> para k = 1 até k = 500500: </p><p> t: = (615949 * t + 797807) módulo 220 sk: = t − 219 Assim: s1 = 273519, s2 = −153582, s3 = 450905 etc Nossa matriz triangular é então formada usando os números pseudo-aleatórios assim: </p><p> s1 s2 s3 s4 s5 s6 </p><p> s7 s8 s9 s10 ... </p><p> Os sub-triângulos podem começar em qualquer elemento da matriz e se estender até onde quisermos (levar os dois elementos diretamente abaixo da próxima linha, os três elementos diretamente abaixo da linha depois disso, e assim por diante). </p><p> A &quot;soma de um sub-triângulo&quot; é definida como a soma de todos os elementos que contém. </p><p> Encontre a menor soma possível de sub-triângulo. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler150()</code> deve retornar -271248680.
    testString: 'assert.strictEqual(euler150(), -271248680, "<code>euler150()</code> should return -271248680.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler150() {
  // Good luck!
  return true;
}

euler150();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
