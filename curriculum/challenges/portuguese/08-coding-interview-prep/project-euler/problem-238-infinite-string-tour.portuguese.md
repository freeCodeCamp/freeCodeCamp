---
id: 5900f45b1000cf542c50ff6d
challengeType: 5
title: 'Problem 238: Infinite string tour'
videoUrl: ''
localeTitle: 'Problema 238: Tour de Cadeia Infinito'
---

## Description
<section id="description"> Crie uma sequência de números usando o gerador de números pseudo-aleatórios &quot;Blum Blum Shub&quot;: <p> s0 = 14025256 sn + 1 = sn2 mod 20300713 </p><p> Concatene estes números s0s1s2… para criar uma string w de comprimento infinito. Então, w = 14025256741014958470038053646… </p><p> Para um inteiro positivo k, se nenhuma substring de w existir com uma soma de dígitos igual a k, p (k) será definido como zero. Se pelo menos uma subseqüência de w existe com uma soma de dígitos igual a k, definimos p (k) = z, onde z é a posição inicial da primeira subseqüência. </p><p> Por exemplo: </p><p> As sub-bases 1, 14, 1402,… com respectivas somas de dígitos iguais a 1, 5, 7,… começam na posição 1, portanto p (1) = p (5) = p (7) =… = 1. </p><p> As subseqüências 4, 402, 4025,… com somas respectivas de dígitos iguais a 4, 6, 11,… começam na posição 2, portanto p (4) = p (6) = p (11) =… = 2. </p><p> As sub-bases 02, 0252,… com somas respectivas de dígitos iguais a 2, 9,… começam na posição 3, portanto p (2) = p (9) =… = 3. </p><p> Observe que a substring 025 começando na posição 3, tem uma soma de dígitos igual a 7, mas havia uma subseqüência anterior (começando na posição 1) com uma soma de dígitos igual a 7, portanto p (7) = 1, não 3. </p><p> Podemos verificar que, para 0 &lt;k ≤ 103, ∑ p (k) = 4742. </p><p> Encontre ∑ p (k), para 0 &lt;k ≤ 2 · 1015. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler238()</code> deve retornar 9922545104535660.
    testString: 'assert.strictEqual(euler238(), 9922545104535660, "<code>euler238()</code> should return 9922545104535660.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler238() {
  // Good luck!
  return true;
}

euler238();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
