---
id: 5900f3db1000cf542c50feee
challengeType: 5
title: 'Problem 111: Primes with runs'
videoUrl: ''
localeTitle: 'Problema 111: Primes con carreras'
---

## Description
<section id="description"> Considerando los números primos de 4 dígitos que contienen dígitos repetidos, está claro que no pueden ser todos iguales: 1111 es divisible por 11, 2222 es divisible por 22, y así sucesivamente. Pero hay nueve números primos de 4 dígitos que contienen tres: 1117, 1151, 1171, 1181, 1511, 1811, 2111, 4111, 8111 Diremos que M (n, d) representa el número máximo de dígitos repetidos para un n- primo de dígitos donde d es el dígito repetido, N (n, d) representa el número de dichos primos y S (n, d) representa la suma de estos primos. Entonces M (4, 1) = 3 es el número máximo de dígitos repetidos para un primo de 4 dígitos donde uno es el dígito repetido, hay N (4, 1) = 9 primos de este tipo, y la suma de estos primos es S (4, 1) = 22275. Resulta que para d = 0, solo es posible tener M (4, 0) = 2 dígitos repetidos, pero hay N (4, 0) = 13 de estos casos. De la misma manera obtenemos los siguientes resultados para números primos de 4 dígitos. <p> Dígito, d M (4, d) N (4, d) S (4, d) 0 2 13 67061 1 3 9 22275 2 3 1 2221 3 3 12 46214 4 3 2 8888 5 3 1 5557 6 3 1 6661 7 3 9 57863 8 3 1 8887 9 3 7 48073 </p><p> Para d = 0 a 9, la suma de todos los S (4, d) es 273700. Encuentre la suma de todos los S (10, d). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler111()</code> debe devolver 612407567715.
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
