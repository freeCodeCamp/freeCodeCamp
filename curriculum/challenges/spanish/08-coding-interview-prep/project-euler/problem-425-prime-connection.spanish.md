---
id: 5900f5151000cf542c510028
challengeType: 5
title: 'Problem 425: Prime connection'
videoUrl: ''
localeTitle: 'Problema 425: cebar la conexión'
---

## Description
<section id="description"> Se dice que dos números positivos A y B están conectados (denotado por &quot;A ↔ B&quot;) si se cumple una de estas condiciones: (1) A y B tienen la misma longitud y difieren exactamente en un dígito; por ejemplo, 123 ↔ 173. (2) Agregar un dígito a la izquierda de A (o B) hace que B (o A); por ejemplo, 23 ↔ 223 y 123 ↔ 23. <p> Llamamos a un primo P a 2 relativo si existe una cadena de números primos conectados entre 2 y P y ningún primo en la cadena excede a P. </p><p> Por ejemplo, 127 es un pariente de 2. Una de las posibles cadenas se muestra a continuación: 2 ↔ 3 ↔ 13 ↔ 113 ↔ 103 ↔ 107 ↔ 127 Sin embargo, 11 y 103 no son parientes de 2. </p><p> Sea F (N) la suma de los números primos ≤ N que no son parientes de 2. Podemos verificar que F (103) = 431 y F (104) = 78728. </p><p> Encontrar F (107). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler425()</code> debe devolver 46479497324.
    testString: 'assert.strictEqual(euler425(), 46479497324, "<code>euler425()</code> should return 46479497324.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler425() {
  // Good luck!
  return true;
}

euler425();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
