---
id: 5900f3a91000cf542c50febc
challengeType: 5
title: 'Problem 61: Cyclical figurate numbers'
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> Os números triângulo, quadrado, pentagonal, hexagonal, heptagonal e octogonal são todos números figurativos (poligonais) e são gerados pelas seguintes fórmulas: <p> P3, n = n (n + 1) / 2 </p><p> 1, 3, 6, 10, 15, ... Quadrado </p><p> P4, n = n2 </p><p> 1, 4, 9, 16, 25, ... Pentagonal </p><p> P5, n = n (3n − 1) / 2 </p><p> 1, 5, 12, 22, 35, ... Hexagonal </p><p> P6, n = n (2n − 1) </p><p> 1, 6, 15, 28, 45, ... Heptagonal </p><p> P7, n = n (5n − 3) / 2 </p><p> 1, 7, 18, 34, 55, ... Octagonal </p><p> P8, n = n (3n − 2) </p><p> 1, 8, 21, 40, 65, ... O conjunto ordenado de três números de 4 dígitos: 8128, 2882, 8281, possui três propriedades interessantes. O conjunto é cíclico, em que os dois últimos dígitos de cada número são os dois primeiros dígitos do próximo número (incluindo o último número com o primeiro). Cada tipo poligonal: triângulo (P3,127 = 8128), quadrado (P4,91 = 8281) e pentagonal (P5,44 = 2882), é representado por um número diferente no conjunto. Este é o único conjunto de números de 4 dígitos com esta propriedade. Encontre a soma do único conjunto ordenado de seis números cíclicos de 4 dígitos para os quais cada tipo poligonal: triângulo, quadrado, pentagonal, hexagonal, heptagonal e octogonal, é representado por um número diferente no conjunto. </p></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler61()</code> deve retornar 28684.
    testString: 'assert.strictEqual(euler61(), 28684, "<code>euler61()</code> should return 28684.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler61() {
  // Good luck!
  return true;
}

euler61();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
