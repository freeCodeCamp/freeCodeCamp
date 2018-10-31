---
id: 5900f5241000cf542c510036
challengeType: 5
title: 'Problem 437: Fibonacci primitive roots'
videoUrl: ''
localeTitle: 'Problema 437: raízes primitivas de Fibonacci'
---

## Description
<section id="description"> Quando calculamos 8n módulo 11 para n = 0 a 9 temos: 1, 8, 9, 6, 4, 10, 3, 2, 5, 7. Como vemos todos os valores possíveis de 1 a 10 ocorrem. Então 8 é uma raiz primitiva de 11. Mas há mais: Se olharmos mais de perto, vemos: 1 + 8 = 9 8 + 9 = 17≡6 mod 11 9 + 6 = 15≡4 mod 11 6 + 4 = 10 4 + 10 = 14 3 mod 11 10 + 3 = 13 2 mod 11 3 + 2 = 5 2 + 5 = 7 5 + 7 = 12 1 mod 11. <p> Assim, os poderes de 8 mod 11 são cíclicos com o período 10 e 8n + 8n + 1 ≡ 8n + 2 (mod 11). 8 é chamado uma raiz primitiva de Fibonacci de 11. Nem todo primo tem uma raiz primitiva de Fibonacci. Existem 323 primos com menos de 10000 com uma ou mais raízes primitivas de Fibonacci e a soma desses primos é 1480491. Encontre a soma dos primos com menos de 100.000.000 com pelo menos uma raiz primitiva de Fibonacci. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler437()</code> deve retornar 74204709657207.
    testString: 'assert.strictEqual(euler437(), 74204709657207, "<code>euler437()</code> should return 74204709657207.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler437() {
  // Good luck!
  return true;
}

euler437();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
