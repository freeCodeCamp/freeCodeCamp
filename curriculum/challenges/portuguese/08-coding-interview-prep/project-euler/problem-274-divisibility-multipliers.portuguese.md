---
id: 5900f47f1000cf542c50ff91
challengeType: 5
title: 'Problem 274: Divisibility Multipliers'
videoUrl: ''
localeTitle: 'Problema 274: Multiplicadores de Divisibilidade'
---

## Description
<section id="description"> Para cada inteiro p&gt; 1 coprime para 10 existe um multiplicador de divisibilidade positivo m &lt;p que preserva a divisibilidade por p para a seguinte função em qualquer inteiro positivo, n: <p> f (n) = (todos menos o último dígito de n) + (o último dígito de n) * m </p><p> Isto é, se m é o multiplicador de divisibilidade para p, então f (n) é divisível por p se e somente se n é divisível por p. </p><p> (Quando n é muito maior que p, f (n) será menor que n e a aplicação repetida de f fornece um teste de divisibilidade multiplicativo para p.) </p><p> Por exemplo, o multiplicador de divisibilidade para 113 é 34. </p><p> f (76275) = 7627 + 5 <em>34 = 7797: 76275 e 7797 são ambos divisíveis por 113f (12345) = 1234 + 5</em> 34 = 1404: 12345 e 1404 não são divisíveis por 113 </p><p> A soma dos multiplicadores de divisibilidade para os primos que são coprime para 10 e menor que 1000 é 39517. Qual é a soma dos multiplicadores de divisibilidade para os primos que são coprime para 10 e menores que 107? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler274()</code> deve retornar 1601912348822.
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
