---
id: 5900f54c1000cf542c51005e
challengeType: 5
title: 'Problem 478: Mixtures'
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> Vamos considerar misturas de três substâncias: A, B e C. Uma mistura pode ser descrita pela razão das quantidades de A, B e C, ie, (a: b: c). Por exemplo, uma mistura descrita pela razão (2: 3: 5) contém 20% A, 30% B e 50% C. <p> Para os propósitos deste problema, não podemos separar os componentes individuais de uma mistura. No entanto, podemos combinar diferentes quantidades de diferentes misturas para formar misturas com novas proporções. </p><p> Por exemplo, digamos que temos três misturas com proporções (3: 0: 2), (3: 6: 11) e (3: 3: 4). Misturando 10 unidades do primeiro, 20 unidades do segundo e 30 unidades do terceiro, obtemos uma nova mistura com relação (6: 5: 9), pois: (10 · 3/5 + 20 · 3/20 + 30,3 / 10: 10 · 0/5 + 20 · 6/20 + 30 · 3/10: 10 · 2/5 + 20 · 11/20 + 30 · 4/10) = (18: 15: 27) = (6: 5: 9) </p><p> No entanto, com as mesmas três misturas, é impossível formar a razão (3: 2: 1), uma vez que a quantidade de B é sempre menor que a quantidade de C. </p><p> Seja n um inteiro positivo. Suponha que para cada triplo de inteiros (a, b, c) com 0 ≤ a, b, c ≤ n e mdc (a, b, c) = 1, temos uma mistura com proporção (a: b: c). Seja M (n) o conjunto de todas essas misturas. </p><p> Por exemplo, M (2) contém as 19 misturas com as seguintes proporções: {(0: 0: 1), (0: ​​1: 0), (0: ​​1: 1), (0: ​​1: 2), ( 0: 2: 1), (1: 0: 0), (1: 0: 1), (1: 0: 2), (1: 1: 0), (1: 1: 1), (1: 1: 2), (1: 2: 0), (1: 2: 1), (1: 2: 2), (2: 0: 1), (2: 1: 0), (2: 1: 1), (2: 1: 2), (2: 2: 1)}. </p><p> Seja E (n) o número de subconjuntos de M (n) que podem produzir a mistura com relação (1: 1: 1), isto é, a mistura com partes iguais A, B e C. Podemos verificar que E (1 ) = 103, E (2) = 520447, E (10) mod 118 = 82608406 e E (500) mod 118 = 13801403. Encontre E (10 000 000) mod 118. </p></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler478()</code> deve retornar 59510340.
    testString: 'assert.strictEqual(euler478(), 59510340, "<code>euler478()</code> should return 59510340.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler478() {
  // Good luck!
  return true;
}

euler478();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
