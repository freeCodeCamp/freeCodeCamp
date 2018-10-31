---
id: 5900f47f1000cf542c50ff91
challengeType: 5
title: 'Problem 274: Divisibility Multipliers'
videoUrl: ''
localeTitle: 'Problema 274: Multiplicadores de divisibilidad'
---

## Description
<section id="description"> Para cada entero p&gt; 1 coprime a 10 hay un multiplicador de divisibilidad positiva m &lt;p que preserva la divisibilidad por p para la siguiente función en cualquier entero positivo, n: <p> f (n) = (todos menos el último dígito de n) + (el último dígito de n) * m </p><p> Es decir, si m es el multiplicador de divisibilidad para p, entonces f (n) es divisible por p si y solo si n es divisible por p. </p><p> (Cuando n es mucho más grande que p, f (n) será menor que n y la aplicación repetida de f proporciona una prueba de divisibilidad multiplicativa para p). </p><p> Por ejemplo, el multiplicador de divisibilidad para 113 es 34. </p><p> f (76275) = 7627 + 5 <em>34 = 7797: 76275 y 7797 son divisibles por 113f (12345) = 1234 + 5</em> 34 = 1404: 12345 y 1404 no son divisibles por 113 </p><p> La suma de los multiplicadores de divisibilidad para los primos que son coprime a 10 y menos de 1000 es 39517. ¿Cuál es la suma de los multiplicadores de divisibilidad para los primos que son coprime a 10 y menos de 107? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler274()</code> debe devolver 1601912348822.
    testString: 'assert.strictEqual(euler274(), 1601912348822, "<code>euler274()</code> should return 1601912348822.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler274() {
  // Good luck!
  return true;
}

euler274();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
