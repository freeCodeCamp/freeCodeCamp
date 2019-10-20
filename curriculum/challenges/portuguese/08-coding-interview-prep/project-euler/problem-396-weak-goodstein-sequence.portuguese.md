---
id: 5900f4f81000cf542c51000b
challengeType: 5
title: 'Problem 396: Weak Goodstein sequence'
videoUrl: ''
localeTitle: 'Problema 396: Sequência Fraca de Goodstein'
---

## Description
<section id="description"> Para qualquer inteiro positivo n, a enésima seqüência fraca de Goodstein {g1, g2, g3, ...} é definida como: g1 = n para k&gt; 1, gk é obtido escrevendo gk-1 na base k, interpretando-a como um base k + 1 number e subtraindo 1. <p> A sequência termina quando gk se torna 0. </p><p> Por exemplo, a sexta seqüência fraca de Goodstein é {6, 11, 17, 25, ...}: g1 = 6. g2 = 11 desde 6 = 1102, 1103 = 12 e 12 - 1 = 11. g3 = 17 desde 11 = 1023, 1024 = 18 e 18 - 1 = 17. G4 = 25 desde 17 = 1014, 1015 = 26 e 26 - 1 = 25. </p><p> e assim por diante. </p><p> Pode ser mostrado que cada seqüência fraca de Goodstein termina. </p><p> Seja G (n) o número de elementos diferentes de zero na enésima seqüência fraca de Goodstein. Pode-se verificar que G (2) = 3, G (4) = 21 e G (6) = 381. Pode-se verificar também que ΣG (n) = 2517 para 1 ≤ n &lt;8. </p><p> Encontre os últimos 9 dígitos de ΣG (n) para 1 ≤ n &lt;16. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler396()</code> deve retornar 173214653.
    testString: 'assert.strictEqual(euler396(), 173214653, "<code>euler396()</code> should return 173214653.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler396() {
  // Good luck!
  return true;
}

euler396();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
