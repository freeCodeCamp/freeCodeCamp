---
id: 5
localeTitle: 5900f46c1000cf542c50ff7e
challengeType: 5
title: 'Problem 256: Tatami-Free Rooms'
---

## Description
<section id='description'> 
tatami son esteras rectangulares, que se utilizan para cubrir completamente el piso de una habitación, sin superposición. 

Suponiendo que el único tipo de tatami disponible tiene dimensiones 1 × 2, obviamente hay algunas limitaciones para la forma y el tamaño de las habitaciones que se pueden cubrir. 

Para este problema, consideramos solo habitaciones rectangulares con dimensiones enteras a, by tamaño s = a · b. 
Usamos el término &#39;tamaño&#39; para denotar el área de superficie del piso de la habitación y, sin pérdida de generalidad, agregamos la condición a ≤ b. 

Hay una regla que se debe seguir al diseñar el tatami: no debe haber puntos en los rincones de cuatro tapetes diferentes. 
Por ejemplo, considere los dos arreglos a continuación para una habitación 4 × 4: 



El arreglo de la izquierda es aceptable, mientras que el de la derecha no lo es: una &quot;X&quot; roja en el centro, marca el punto donde cuatro tatami se encuentran. 

Debido a esta regla, ciertas habitaciones de tamaño uniforme no pueden cubrirse con tatami: las llamamos habitaciones libres de tatami. 
Además, definimos T (s) como el número de habitaciones libres de tatami de tamaño s. 

La habitación más pequeña sin tatami tiene un tamaño s = 70 y dimensiones 7 × 10. 
Todas las otras habitaciones de tamaño s = 70 se pueden cubrir con tatami; son: 1 × 70, 2 × 35 y 5 × 14. 
Por lo tanto, T (70) = 1. 

De manera similar, podemos verificar que T (1320) = 5 porque hay exactamente 5 habitaciones libres de tatami de tamaño s = 1320: 
20 × 66, 22 × 60, 24 × 55, 30 × 44 y 33 × 40. 
De hecho, s = 1320 es el tamaño de sala más pequeño s para el cual T (s) = 5. 

Encuentre el tamaño más pequeño de sala s para el cual T (s) = 200. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler256()</code> debe devolver 85765680.
    testString: 'assert.strictEqual(euler256(), 85765680, "<code>euler256()</code> should return 85765680.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler256() {
  // Good luck!
  return true;
}

euler256();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
