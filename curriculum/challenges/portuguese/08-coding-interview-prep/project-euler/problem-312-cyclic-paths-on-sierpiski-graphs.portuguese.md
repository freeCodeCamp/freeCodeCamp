---
id: 5900f4a51000cf542c50ffb7
challengeType: 5
title: 'Problem 312: Cyclic paths on Sierpiński graphs'
videoUrl: ''
localeTitle: 'Problema 312: Caminhos cíclicos nos gráficos de Sierpiński'
---

## Description
<section id="description"> - Um gráfico de Sierpiński da ordem 1 (S1) é um triângulo equilátero. - Sn + 1 é obtido de Sn posicionando três cópias de Sn para que cada par de cópias tenha um canto comum. <p> Seja C (n) o número de ciclos que passam exatamente uma vez através de todos os vértices de Sn. Por exemplo, C (3) = 8 porque oito desses ciclos podem ser desenhados em S3, como mostrado abaixo: </p><p> Pode-se verificar também que: C (1) = C (2) = 1 C (5) = 71328803586048 C (10.000) mod 108 = 37652224 C (10.000) mod 138 = 617720485 </p><p> Encontre C (C (C (10.000))) mod 138. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler312()</code> deve retornar 324681947.
    testString: 'assert.strictEqual(euler312(), 324681947, "<code>euler312()</code> should return 324681947.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler312() {
  // Good luck!
  return true;
}

euler312();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
