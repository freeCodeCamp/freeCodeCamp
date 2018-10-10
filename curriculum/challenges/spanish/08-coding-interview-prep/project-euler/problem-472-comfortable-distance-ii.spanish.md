---
id: 5900f5451000cf542c510057
challengeType: 5
title: 'Problem 472: Comfortable Distance II'
videoUrl: ''
localeTitle: 'Problema 472: Distancia cómoda II'
---

## Description
<section id="description"> Hay N asientos en una fila. N personas vienen una tras otra para llenar los asientos de acuerdo con las siguientes reglas: Ninguna persona se sienta al lado de otra. La primera persona elige cualquier asiento. Cada persona subsiguiente elige el asiento más alejado de cualquier otra persona que ya esté sentada, siempre que no infrinja la regla 1. Si hay más de una opción que satisface esta condición, la persona elige la opción más a la izquierda. Tenga en cuenta que debido a la regla 1, algunos asientos seguramente quedarán desocupados, y el número máximo de personas que pueden sentarse es menor que N (para N&gt; 1). <p> Aquí están los arreglos de asientos posibles para N = 15: </p><p> Vemos que si la primera persona elige correctamente, los 15 asientos pueden acomodar hasta 7 personas. También podemos ver que la primera persona tiene 9 opciones para maximizar el número de personas que pueden estar sentadas. </p><p> Sea f (N) el número de opciones que tiene la primera persona para maximizar el número de ocupantes para N asientos en una fila. Por lo tanto, f (1) = 1, f (15) = 9, f (20) = 6, y f (500) = 16. </p><p> Además, ∑f (N) = 83 para 1 ≤ N ≤ 20 y ∑f (N) = 13343 para 1 ≤ N ≤ 500. </p><p> Encuentra ∑f (N) para 1 ≤ N ≤ 1012. Da los últimos 8 dígitos de tu respuesta. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler472()</code> debe devolver 73811586.
    testString: 'assert.strictEqual(euler472(), 73811586, "<code>euler472()</code> should return 73811586.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler472() {
  // Good luck!
  return true;
}

euler472();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
