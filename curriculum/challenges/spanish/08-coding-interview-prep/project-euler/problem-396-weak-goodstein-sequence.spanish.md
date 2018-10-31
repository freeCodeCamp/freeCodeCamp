---
id: 5900f4f81000cf542c51000b
challengeType: 5
title: 'Problem 396: Weak Goodstein sequence'
videoUrl: ''
localeTitle: 'Problema 396: secuencia de Goodstein débil'
---

## Description
<section id="description"> Para cualquier entero positivo n, la enésima secuencia de Goodstein débil {g1, g2, g3, ...} se define como: g1 = n para k&gt; 1, gk se obtiene al escribir gk-1 en la base k, interpretándolo como un base k + 1 número, y restando 1. <p> La secuencia termina cuando gk se convierte en 0. </p><p> Por ejemplo, la sexta secuencia de Goodstein débil es {6, 11, 17, 25, ...}: g1 = 6. g2 = 11 desde 6 = 1102, 1103 = 12, y 12 - 1 = 11. g3 = 17 desde 11 = 1023, 1024 = 18 y 18 - 1 = 17. g4 = 25 ya que 17 = 1014, 1015 = 26, y 26 - 1 = 25. </p><p> y así. </p><p> Se puede mostrar que cada secuencia de Goodstein débil termina. </p><p> Sea G (n) el número de elementos distintos de cero en la enésima secuencia de Goodstein débil. Se puede verificar que G (2) = 3, G (4) = 21 y G (6) = 381. También se puede verificar que ΣG (n) = 2517 para 1 ≤ n &lt;8. </p><p> Encuentre los últimos 9 dígitos de ΣG (n) para 1 ≤ n &lt;16. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler396()</code> debe devolver 173214653.
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
