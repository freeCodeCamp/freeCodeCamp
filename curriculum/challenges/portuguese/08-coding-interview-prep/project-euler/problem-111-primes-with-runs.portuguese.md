---
id: 5900f3db1000cf542c50feee
challengeType: 5
title: 'Problem 111: Primes with runs'
videoUrl: ''
localeTitle: 'Problema 111: Primes com corridas'
---

## Description
<section id="description"> Considerando primos de 4 dígitos contendo dígitos repetidos, é claro que eles não podem ser todos iguais: 1111 é divisível por 11, 2222 é divisível por 22 e assim por diante. Mas há nove primos de 4 dígitos contendo três: 1117, 1151, 1171, 1181, 1511, 1811, 2111, 4111, 8111 Diremos que M (n, d) representa o número máximo de dígitos repetidos para um n- dígito principal onde d é o dígito repetido, N (n, d) representa o número de tais primos e S (n, d) representa a soma desses primos. Então M (4, 1) = 3 é o número máximo de dígitos repetidos para um primo de 4 dígitos onde um é o dígito repetido, existem N (4, 1) = 9 tais primos, e a soma desses primos é S (4, 1) = 22275. Acontece que, para d = 0, só é possível ter M (4, 0) = 2 dígitos repetidos, mas existem N (4, 0) = 13 casos desse tipo. Da mesma forma, obtemos os seguintes resultados para primes de 4 dígitos. <p> Dígito, d M (4, d) N (4, d) S (4, d) 0 2 13 67061 1 3 9 22275 2 3 1 2221 3 3 12 46214 4 3 2 8888 5 3 1 5557 6 3 1 6661 7 3 9 57863 8 3 1 8887 9 3 7 48073 </p><p> Para d = 0 a 9, a soma de todos os S (4, d) é 273700. Encontre a soma de todos os S (10, d). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler111()</code> deve retornar 612407567715.
    testString: 'assert.strictEqual(euler111(), 612407567715, "<code>euler111()</code> should return 612407567715.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler111() {
  // Good luck!
  return true;
}

euler111();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
